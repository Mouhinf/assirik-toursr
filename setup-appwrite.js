#!/usr/bin/env node
/**
 * Script d'initialisation automatique Appwrite pour Assirik Tours
 * 
 * Utilisation :
 *   node setup-appwrite.js --endpoint URL --project PROJECT_ID --key API_KEY [--database DB_ID]
 * 
 * Ou avec variables d'environnement :
 *   APPWRITE_ENDPOINT=... APPWRITE_PROJECT_ID=... APPWRITE_API_KEY=... node setup-appwrite.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Parse CLI args ────────────────────────────────────────────────────────

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '',
    apiKey: '',
    databaseId: 'assirik-tours-db',
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--endpoint': config.endpoint = args[++i]; break;
      case '--project': config.projectId = args[++i]; break;
      case '--key': config.apiKey = args[++i]; break;
      case '--database': config.databaseId = args[++i]; break;
      case '--help':
        console.log('Usage: node setup-appwrite.js --endpoint URL --project ID --key KEY [--database DB_ID]');
        process.exit(0);
    }
  }

  // Override with env vars if present
  config.endpoint = process.env.APPWRITE_ENDPOINT || config.endpoint;
  config.projectId = process.env.APPWRITE_PROJECT_ID || config.projectId;
  config.apiKey = process.env.APPWRITE_API_KEY || config.apiKey;
  config.databaseId = process.env.APPWRITE_DATABASE_ID || config.databaseId;

  return config;
}

// ─── Configuration ─────────────────────────────────────────────────────────

const COLLECTIONS_CONFIG = [
  { name: 'demandesVoyages',      envVar: 'VITE_APPWRITE_COLLECTION_VOYAGES',       label: 'Voyages' },
  { name: 'demandesImmobilier',   envVar: 'VITE_APPWRITE_COLLECTION_IMMOBILIER',    label: 'Immobilier' },
  { name: 'demandesNettoiement',  envVar: 'VITE_APPWRITE_COLLECTION_NETTOIEMENT',   label: 'Nettoiement' },
  { name: 'contacts',             envVar: 'VITE_APPWRITE_COLLECTION_CONTACTS',       label: 'Contacts' },
];

const ATTRIBUTES = [
  { key: 'nom',         size: 255,  required: true,  default: null },
  { key: 'email',       size: 255,  required: true,  default: null },
  { key: 'telephone',   size: 50,   required: true,  default: null },
  { key: 'message',     size: 10000,required: false, default: null },
  { key: 'statut',      size: 50,   required: false, default: 'nouveau' },
  { key: 'departement', size: 50,   required: false, default: null },
];

// ─── Appwrite REST API Client ──────────────────────────────────────────────

class AppwriteAPI {
  constructor(endpoint, apiKey, projectId) {
    this.endpoint = endpoint.replace(/\/+$/, '');
    this.apiKey = apiKey;
    this.projectId = projectId;
  }

  async request(method, urlPath, body = null) {
    const url = `${this.endpoint}${urlPath}`;
    const headers = {
      'Content-Type': 'application/json',
      'X-Appwrite-Key': this.apiKey,
      'X-Appwrite-Project': this.projectId,
      'X-Appwrite-Response-Format': '1.6.0',
    };

    const options = { method, headers };
    if (body) {
      options.body = JSON.stringify(body);
    }

    const res = await fetch(url, options);

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        `API ${method} ${urlPath} → ${res.status}: ${errorData.message || res.statusText}`
      );
    }

    if (res.status === 204) return null;
    return res.json();
  }

  createDatabase(id, name) {
    return this.request('POST', '/databases', { databaseId: id, name });
  }

  getDatabase(id) {
    return this.request('GET', `/databases/${id}`);
  }

  createCollection(databaseId, id, name, permissions) {
    return this.request('POST', `/databases/${databaseId}/collections`, {
      collectionId: id,
      name,
      permissions,
    });
  }

  listCollections(databaseId) {
    return this.request('GET', `/databases/${databaseId}/collections`);
  }

  getCollection(databaseId, collectionId) {
    return this.request('GET', `/databases/${databaseId}/collections/${collectionId}`);
  }

  createStringAttribute(databaseId, collectionId, key, size, required, defaultVal) {
    const body = { key, size, required };
    if (defaultVal !== null && defaultVal !== undefined) {
      body.default = defaultVal;
    }
    return this.request(
      'POST',
      `/databases/${databaseId}/collections/${collectionId}/attributes/string`,
      body
    );
  }

  listAttributes(databaseId, collectionId) {
    return this.request('GET', `/databases/${databaseId}/collections/${collectionId}/attributes`);
  }

  createIndex(databaseId, collectionId, key, type, attributes, order) {
    return this.request(
      'POST',
      `/databases/${databaseId}/collections/${collectionId}/indexes`,
      { key, type, attributes, order }
    );
  }
}

// ─── Helpers ───────────────────────────────────────────────────────────────

function log(msg, type = 'info') {
  const icons = { info: 'ℹ️ ', success: '✅', error: '❌', warn: '⚠️ ' };
  const colors = { info: '\x1b[36m', success: '\x1b[32m', error: '\x1b[31m', warn: '\x1b[33m' };
  console.log(`${colors[type] || ''}${icons[type] || ''} ${msg}\x1b[0m`);
}

function generateId(prefix) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

async function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function waitForAttribute(api, databaseId, collectionId, key, maxRetries = 30) {
  for (let i = 0; i < maxRetries; i++) {
    const attrs = await api.listAttributes(databaseId, collectionId);
    const attr = attrs.attributes?.find((a) => a.key === key);
    if (attr && attr.status === 'available') return true;
    if (attr && attr.status === 'failed') {
      throw new Error(`L'attribut "${key}" a échoué à créer`);
    }
    await wait(2000);
  }
  throw new Error(`Timeout en attente de l'attribut "${key}"`);
}

// ─── Main ──────────────────────────────────────────────────────────────────

async function main() {
  const config = parseArgs();

  if (!config.projectId || !config.apiKey) {
    console.log('\n❌ Paramètres manquants !\n');
    console.log('Usage :');
    console.log('  node setup-appwrite.js --endpoint URL --project PROJECT_ID --key API_KEY [--database DB_ID]');
    console.log('\nOu avec variables d\'environnement :');
    console.log('  APPWRITE_ENDPOINT=... APPWRITE_PROJECT_ID=... APPWRITE_API_KEY=... node setup-appwrite.js');
    process.exit(1);
  }

  console.log('\n========================================');
  console.log('  Initialisation Appwrite - Assirik Tours');
  console.log('========================================\n');
  console.log(`  Endpoint     : ${config.endpoint}`);
  console.log(`  Project ID   : ${config.projectId}`);
  console.log(`  Database ID  : ${config.databaseId}`);
  console.log('');

  const api = new AppwriteAPI(config.endpoint, config.apiKey, config.projectId);
  const collectionIds = {};

  try {
    // ── 1. Database ──────────────────────────────────────────────────────
    log('Création de la base de données…', 'info');
    try {
      await api.createDatabase(config.databaseId, 'Assirik Tours DB');
      log(`Base de données créée : ${config.databaseId}`, 'success');
    } catch (e) {
      if (e.message.includes('409')) {
        log(`Base de données existe déjà : ${config.databaseId}`, 'warn');
      } else {
        throw e;
      }
    }

    // ── 2. Collections + Attributes ──────────────────────────────────────
    for (const cfg of COLLECTIONS_CONFIG) {
      log(`Collection : ${cfg.name}…`, 'info');

      let collectionId;
      try {
        const col = await api.createCollection(
          config.databaseId,
          generateId(cfg.name),
          cfg.name,
          ['create("any")', 'read("any")', 'update("any")', 'delete("any")']
        );
        collectionId = col.$id;
        log(`  Créée : ${collectionId}`, 'success');
      } catch (e) {
        if (e.message.includes('409')) {
          const list = await api.listCollections(config.databaseId);
          const existing = list.collections?.find((c) => c.name === cfg.name);
          if (existing) {
            collectionId = existing.$id;
            log(`  Existe déjà : ${collectionId}`, 'warn');
          } else {
            throw e;
          }
        } else {
          throw e;
        }
      }

      collectionIds[cfg.envVar] = collectionId;

      // Attributs
      for (const attr of ATTRIBUTES) {
        try {
          await api.createStringAttribute(
            config.databaseId, collectionId,
            attr.key, attr.size, attr.required, attr.default
          );
          log(`    Attribut créé : ${attr.key}`, 'success');
        } catch (e) {
          if (e.message.includes('409')) {
            log(`    Existe déjà : ${attr.key}`, 'warn');
          } else {
            log(`    Erreur ${attr.key} : ${e.message}`, 'error');
          }
        }
      }

      // Attendre disponibilité
      log(`  Attente disponibilité des attributs…`, 'info');
      for (const attr of ATTRIBUTES) {
        await waitForAttribute(api, config.databaseId, collectionId, attr.key);
      }
      log(`  Attributs prêts pour ${cfg.name}`, 'success');

      // Index pour tri par date de création
      try {
        await api.createIndex(
          config.databaseId, collectionId,
          'idx_createdAt', 'key', ['$createdAt'], ['DESC']
        );
        log(`  Index créé : idx_createdAt`, 'success');
      } catch (e) {
        if (!e.message.includes('409')) {
          log(`  Index (ignoré) : ${e.message}`, 'warn');
        }
      }
    }

    // ── 3. Générer .env ──────────────────────────────────────────────────
    log('Génération du fichier .env…', 'info');

    const envContent = `# Appwrite Configuration
# Généré automatiquement le ${new Date().toISOString()}

VITE_APPWRITE_ENDPOINT=${config.endpoint}
VITE_APPWRITE_PROJECT_ID=${config.projectId}
VITE_APPWRITE_DATABASE_ID=${config.databaseId}

VITE_APPWRITE_COLLECTION_VOYAGES=${collectionIds.VITE_APPWRITE_COLLECTION_VOYAGES}
VITE_APPWRITE_COLLECTION_IMMOBILIER=${collectionIds.VITE_APPWRITE_COLLECTION_IMMOBILIER}
VITE_APPWRITE_COLLECTION_NETTOIEMENT=${collectionIds.VITE_APPWRITE_COLLECTION_NETTOIEMENT}
VITE_APPWRITE_COLLECTION_CONTACTS=${collectionIds.VITE_APPWRITE_COLLECTION_CONTACTS}
`;

    const envPath = path.join(__dirname, 'src', 'frontend', '.env');
    fs.writeFileSync(envPath, envContent);
    log(`.env généré : ${envPath}`, 'success');

    // ── Résumé ───────────────────────────────────────────────────────────
    console.log('\n========================================');
    console.log('  ✅ Initialisation terminée !');
    console.log('========================================\n');

    log('Résumé :', 'info');
    console.log(`  Endpoint     : ${config.endpoint}`);
    console.log(`  Project ID   : ${config.projectId}`);
    console.log(`  Database ID  : ${config.databaseId}`);
    for (const [k, v] of Object.entries(collectionIds)) {
      console.log(`  ${k}: ${v}`);
    }

    console.log('\n📋 Prochaines étapes :');
    console.log('  1. Vérifier src/frontend/.env');
    console.log('  2. cd src/frontend && pnpm dev');
    console.log('  3. Tester les formulaires + admin');
    console.log('  4. Déployer sur Netlify (mêmes variables d\'env)');
    console.log('');

  } catch (error) {
    log(`Erreur : ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
  }
}

main();
