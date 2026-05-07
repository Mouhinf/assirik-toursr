/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APPWRITE_ENDPOINT: string;
  readonly VITE_APPWRITE_PROJECT_ID: string;
  readonly VITE_APPWRITE_DATABASE_ID: string;
  readonly VITE_APPWRITE_COLLECTION_VOYAGES: string;
  readonly VITE_APPWRITE_COLLECTION_IMMOBILIER: string;
  readonly VITE_APPWRITE_COLLECTION_NETTOIEMENT: string;
  readonly VITE_APPWRITE_COLLECTION_CONTACTS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
