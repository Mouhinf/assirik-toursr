import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { databases, APPWRITE_DATABASE_ID, APPWRITE_COLLECTIONS, ID, Query } from "../lib/appwrite";
import type { DemandeBase, DemandeInput } from "../types";

// Helper to map Appwrite document to DemandeBase
function mapDocumentToDemande(doc: Record<string, unknown>, departement: string): DemandeBase {
  return {
    $id: doc.$id as string,
    nom: (doc.nom as string) ?? "",
    email: (doc.email as string) ?? "",
    telephone: (doc.telephone as string) ?? "",
    message: (doc.message as string) ?? "",
    departement,
    statut: (doc.statut as string) ?? "nouveau",
    $createdAt: (doc.$createdAt as string) ?? new Date().toISOString(),
  };
}

// ── Voyages ───────────────────────────────────────────────────────────────

export function useSubmitVoyage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesVoyages,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Voyages",
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["voyages"] }),
  });
}

export function useDemandesVoyages() {
  return useQuery<DemandeBase[]>({
    queryKey: ["voyages"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesVoyages,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map((doc) =>
        mapDocumentToDemande(doc as unknown as Record<string, unknown>, "Voyages")
      );
    },
  });
}

// ── Immobilier ────────────────────────────────────────────────────────────

export function useSubmitImmobilier() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesImmobilier,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Immobilier",
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["immobilier"] }),
  });
}

export function useDemandesImmobilier() {
  return useQuery<DemandeBase[]>({
    queryKey: ["immobilier"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesImmobilier,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map((doc) =>
        mapDocumentToDemande(doc as unknown as Record<string, unknown>, "Immobilier")
      );
    },
  });
}

// ── Nettoiement ───────────────────────────────────────────────────────────

export function useSubmitNettoiement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesNettoiement,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Nettoiement",
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["nettoiement"] }),
  });
}

export function useDemandesNettoiement() {
  return useQuery<DemandeBase[]>({
    queryKey: ["nettoiement"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.demandesNettoiement,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map((doc) =>
        mapDocumentToDemande(doc as unknown as Record<string, unknown>, "Nettoiement")
      );
    },
  });
}

// ── Contacts ──────────────────────────────────────────────────────────────

export function useSubmitContact() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const doc = await databases.createDocument(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.contacts,
        ID.unique(),
        {
          nom: input.nom,
          email: input.email,
          telephone: input.telephone,
          message: input.message,
          statut: "nouveau",
          departement: "Contact",
        }
      );
      return doc;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contacts"] }),
  });
}

export function useContacts() {
  return useQuery<DemandeBase[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const response = await databases.listDocuments(
        APPWRITE_DATABASE_ID,
        APPWRITE_COLLECTIONS.contacts,
        [Query.orderDesc("$createdAt")]
      );
      return response.documents.map((doc) =>
        mapDocumentToDemande(doc as unknown as Record<string, unknown>, "Contact")
      );
    },
  });
}

// ── Update Statut ─────────────────────────────────────────────────────────

export function useUpdateStatut() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      collection,
      id,
      statut,
    }: {
      collection: string;
      id: string;
      statut: string;
    }) => {
      const collectionId = APPWRITE_COLLECTIONS[collection as keyof typeof APPWRITE_COLLECTIONS];
      if (!collectionId) throw new Error(`Unknown collection: ${collection}`);

      await databases.updateDocument(
        APPWRITE_DATABASE_ID,
        collectionId,
        id,
        { statut }
      );
      return true;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["voyages"] });
      qc.invalidateQueries({ queryKey: ["immobilier"] });
      qc.invalidateQueries({ queryKey: ["nettoiement"] });
      qc.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}
