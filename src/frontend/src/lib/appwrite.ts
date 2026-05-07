import { Client, Databases, Account, ID, Query } from "appwrite";

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1")
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || "");

export const databases = new Databases(client);
export const account = new Account(client);
export { ID, Query };

// Appwrite configuration constants
export const APPWRITE_DATABASE_ID =
  import.meta.env.VITE_APPWRITE_DATABASE_ID || "";

export const APPWRITE_COLLECTIONS = {
  demandesVoyages: import.meta.env.VITE_APPWRITE_COLLECTION_VOYAGES || "",
  demandesImmobilier: import.meta.env.VITE_APPWRITE_COLLECTION_IMMOBILIER || "",
  demandesNettoiement: import.meta.env.VITE_APPWRITE_COLLECTION_NETTOIEMENT || "",
  contacts: import.meta.env.VITE_APPWRITE_COLLECTION_CONTACTS || "",
};

export default client;
