#!/usr/bin/env node
/**
 * Configure Appwrite project: add web platform and update collection permissions
 * 
 * Usage:
 *   node configure-appwrite.js --token VOTRE_TOKEN
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ID = '69fbe0750018f849704f';
const DATABASE_ID = 'assirik-tours-db';
const DOMAINS = ['https://www.assiriktours.com', 'https://assiriktours.com', 'http://localhost:5173', 'http://localhost:3000'];

function getToken() {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--token' && args[i + 1]) return args[i + 1];
  }
  return process.env.APPWRITE_API_KEY;
}

const token = getToken();
if (!token) {
  console.log('❌ Token manquant. Usage: node configure-appwrite.js --token VOTRE_TOKEN');
  process.exit(1);
}

const API = 'https://cloud.appwrite.io/v1';

async function api(method, urlPath, body = null) {
  const url = `${API}${urlPath}`;
  const headers = {
    'Content-Type': 'application/json',
    'X-Appwrite-Key': token,
    'X-Appwrite-Project': PROJECT_ID,
    'X-Appwrite-Response-Format': '1.6.0',
  };

  const options = { method, headers };
  if (body) options.body = JSON.stringify(body);

  const res = await fetch(url, options);
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`API ${method} ${urlPath} → ${res.status}: ${text.slice(0, 500)}`);
  }
  if (res.status === 204) return null;
  return res.json();
}

function log(msg, type = 'info') {
  const icons = { info: 'ℹ️ ', success: '✅', error: '❌', warn: '⚠️ ', step: '📦' };
  const colors = { info: '\x1b[36m', success: '\x1b[32m', error: '\x1b[31m', warn: '\x1b[33m', step: '\x1b[34m' };
  console.log(`${colors[type] || ''}${icons[type] || ''} ${msg}\x1b[0m`);
}

async function main() {
  console.log('\n========================================');
  console.log('  Configuration Appwrite - Assirik Tours');
  console.log('========================================\n');

  // 1. Add web platforms
  log('Ajout des plateformes web…', 'step');
  for (const domain of DOMAINS) {
    try {
      await api('POST', '/projects/current/platforms', {
        platformId: 'unique()',
        type: 'web',
        name: domain,
        hostname: domain,
      });
      log(`  Plateforme ajoutée : ${domain}`, 'success');
    } catch (e) {
      if (e.message.includes('409')) {
        log(`  Plateforme existe déjà : ${domain}`, 'warn');
      } else {
        log(`  Erreur ${domain} : ${e.message}`, 'error');
      }
    }
  }

  // 2. Update collection permissions
  log('Mise à jour des permissions des collections…', 'step');
  const collections = [
    'demandesVoyages_mourxnpt_0uwusj',
    'demandesImmobilier_mourxpcy_f7olc7',
    'demandesNettoiement_mourxrmc_0uvem0',
    'contacts_mourxtzp_nttan5',
  ];

  for (const colId of collections) {
    try {
      await api('PUT', `/databases/${DATABASE_ID}/collections/${colId}`, {
        permissions: ['create("any")', 'read("any")', 'update("any")', 'delete("any")'],
      });
      log(`  Permissions mises à jour : ${colId}`, 'success');
    } catch (e) {
      log(`  Erreur permissions ${colId} : ${e.message}`, 'error');
    }
  }

  console.log('\n========================================');
  console.log('  ✅ Configuration terminée !');
  console.log('========================================\n');

  log('Prochaines étapes :', 'info');
  console.log('  1. Vérifier dans la console Appwrite que les plateformes web sont ajoutées');
  console.log('  2. Tester le formulaire sur https://www.assiriktours.com');
  console.log('');
}

main().catch((e) => {
  log(`Erreur : ${e.message}`, 'error');
  console.error(e);
  process.exit(1);
});
