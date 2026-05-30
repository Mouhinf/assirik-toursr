import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "./firebase";
import type { DemandeInput } from "../types";

export const COLLECTIONS = {
  contacts: "contacts",
  demandesVoyages: "demandesVoyages",
  demandesImmobilier: "demandesImmobilier",
  demandesNettoiement: "demandesNettoiement",
} as const;

export type FirestoreCollection = (typeof COLLECTIONS)[keyof typeof COLLECTIONS];

export interface FirestoreDemande {
  id?: string;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  departement: string;
  statut: string;
  createdAt: string | Date;
}

export async function createDemande(
  collectionName: FirestoreCollection,
  input: DemandeInput & { departement: string },
) {
  const docRef = await addDoc(collection(db, collectionName), {
    ...input,
    statut: "nouveau",
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id };
}

export async function listDemandes(collectionName: FirestoreCollection) {
  const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as (FirestoreDemande & { id: string })[];
}

export async function updateStatut(
  collectionName: FirestoreCollection,
  id: string,
  statut: string,
) {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, { statut });
}
