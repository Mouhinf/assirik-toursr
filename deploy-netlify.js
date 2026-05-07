#!/usr/bin/env node
/**
 * Déploiement Netlify via l'API REST (approche tarball)
 * 
 * Utilisation :
 *   node deploy-netlify.js --token VOTRE_TOKEN
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Config ────────────────────────────────────────────────────────────────

const SITE_ID = '43c75832-3763-4013-ab3f-b8c4392e40da';
const CUSTOM_DOMAIN = 'assiriktours.com';
const PUBLISH_DIR = path.join(__dirname, 'src', 'frontend', 'dist');

// ─── Parse token ───────────────────────────────────────────────────────────

function getToken() {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--token' && args[i + 1]) return args[i + 1];
  }
  return process.env.NETLIFY_TOKEN;
}

const token = getToken();
if (!token) {
  console.log('\n❌ Token Netlify manquant !\n');
  console.log('Usage : node deploy-netlify.js --token VOTRE_TOKEN\n');
  process.exit(1);
}

// ─── API helpers ───────────────────────────────────────────────────────────

const API = 'https://api.netlify.com/api/v1';

async function api(method, urlPath, body = null, headers = {}) {
  const url = `${API}${urlPath}`;
  const reqHeaders = {
    Authorization: `Bearer ${token}`,
    ...headers,
  };

  const options = { method, headers: reqHeaders };
  if (body && method !== 'GET') {
    options.body = body;
  }

  const res = await fetch(url, options);

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${method} ${urlPath} → ${res.status}: ${text.slice(0, 500)}`);
  }

  if (res.status === 204) return null;

  const ct = res.headers.get('content-type') || '';
  if (ct.includes('application/json')) {
    return res.json();
  }
  return res.text();
}

function log(msg, type = 'info') {
  const icons = { info: 'ℹ️ ', success: '✅', error: '❌', warn: '⚠️ ', step: '📦' };
  const colors = { info: '\x1b[36m', success: '\x1b[32m', error: '\x1b[31m', warn: '\x1b[33m', step: '\x1b[34m' };
  console.log(`${colors[type] || ''}${icons[type] || ''} ${msg}\x1b[0m`);
}

// ─── Deploy ────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n========================================');
  console.log('  Déploiement Netlify - Assirik Tours');
  console.log('========================================\n');

  // Vérifier que le build existe
  if (!fs.existsSync(PUBLISH_DIR)) {
    log('Build non trouvé. Exécution de pnpm build…', 'step');
    execSync('pnpm build', { cwd: path.join(__dirname, 'src', 'frontend'), stdio: 'inherit' });
  }

  // Étape 1 : Récupérer le site
  log('Récupération du site…', 'step');
  const site = await api('GET', `/sites/${SITE_ID}`);
  log(`Site : ${site.name} (${site.ssl_url})`, 'success');

  const siteUrl = site.ssl_url || site.url;

  // Étape 2 : Créer le tarball
  log('Création du paquet de déploiement…', 'step');
  const tarballPath = path.join(__dirname, 'deploy.tar.gz');
  execSync(`tar -czf "${tarballPath}" -C "${PUBLISH_DIR}" .`, { stdio: 'inherit' });
  const tarball = fs.readFileSync(tarballPath);
  log(`Tarball créé : ${(tarball.length / 1024).toFixed(1)} KB`, 'success');

  // Étape 3 : Déployer
  log('Envoi du déploiement…', 'step');
  const deploy = await api(
    'POST',
    `/sites/${SITE_ID}/deploys`,
    tarball,
    { 'Content-Type': 'application/octet-stream' }
  );

  const deployId = deploy.id;
  const deployUrl = deploy.deploy_ssl_url || deploy.deploy_url;
  log(`Déploiement lancé : ${deployId}`, 'info');
  log(`URL de déploiement : ${deployUrl}`, 'info');

  // Étape 4 : Attendre la fin du déploiement
  log('En attente du déploiement…', 'info');
  for (let i = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 3000));
    const status = await api('GET', `/sites/${SITE_ID}/deploys/${deployId}`);

    if (status.state === 'ready') {
      log('Déploiement terminé !', 'success');
      break;
    }
    if (status.state === 'error') {
      log(`Erreur : ${status.error_message || 'inconnue'}`, 'error');
      process.exit(1);
    }
    if (status.state === 'uploaded' || status.state === 'prepared' || status.state === 'building') {
      log(`  État : ${status.state}…`, 'info');
    }
  }

  // Nettoyer le tarball
  try { fs.unlinkSync(tarballPath); } catch {}

  // Résumé
  console.log('\n========================================');
  console.log('  ✅ Déploiement terminé !');
  console.log('========================================\n');

  log('URLs :', 'info');
  console.log(`  Site Netlify : ${siteUrl}`);
  console.log(`  Domaine personnalisé : https://${CUSTOM_DOMAIN}`);
  console.log(`  Admin Netlify : https://app.netlify.com/sites/assiriktours`);
  console.log(`  URL de déploiement : ${deployUrl}`);
  console.log('');

  // Variables d'environnement
  console.log('⚠️  Variables d\'environnement à ajouter manuellement sur Netlify :');
  console.log('');

  const envPath = path.join(__dirname, 'src', 'frontend', '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    for (const line of envContent.split('\n')) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        console.log(`  ${trimmed}`);
      }
    }
  }

  console.log('');
  console.log('  → Allez sur : https://app.netlify.com/sites/assiriktours/configuration/environment');
  console.log('  → Ajoutez chaque variable VITE_* ci-dessus');
  console.log('');

  // DNS
  console.log('📋 Configuration DNS pour assiriktours.com :');
  console.log('');
  console.log('  Ajoutez ces enregistrements chez votre registraire :');
  console.log('');
  console.log('  Type  | Nom   | Valeur');
  console.log('  ------|-------|------------------------------------------');
  console.log('  CNAME | www   | assiriktours.netlify.app');
  console.log('  A     | @     | 75.2.60.5');
  console.log('');
  console.log('  Puis dans Netlify : Domain management → Verify DNS configuration');
  console.log('');
}

main().catch((e) => {
  log(`Erreur : ${e.message}`, 'error');
  console.error(e);
  process.exit(1);
});
