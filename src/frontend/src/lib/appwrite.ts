import { Client, Databases, Account, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || "69fbe0750018f849704f");

export const databases = new Databases(client);
export const account = new Account(client);
export { ID, Query };

// Appwrite configuration constants
export const APPWRITE_DATABASE_ID =
  import.meta.env.VITE_APPWRITE_DATABASE_ID || "assirik-tours-db";

export const APPWRITE_COLLECTIONS = {
  demandesVoyages: import.meta.env.VITE_APPWRITE_COLLECTION_VOYAGES || "demandesVoyages_mourxnpt_0uwusj",
  demandesImmobilier: import.meta.env.VITE_APPWRITE_COLLECTION_IMMOBILIER || "demandesImmobilier_mourxpcy_f7olc7",
  demandesNettoiement: import.meta.env.VITE_APPWRITE_COLLECTION_NETTOIEMENT || "demandesNettoiement_mourxrmc_0uvem0",
  contacts: import.meta.env.VITE_APPWRITE_COLLECTION_CONTACTS || "contacts_mourxtzp_nttan5",
};

export default client;
