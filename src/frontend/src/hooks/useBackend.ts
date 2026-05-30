import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createDemande,
  listDemandes,
  updateStatut,
  COLLECTIONS,
} from "../lib/firestoreService";
import type { DemandeBase, DemandeInput } from "../types";

// Helper to map Firestore document to DemandeBase
function mapDocToDemande(
  doc: { id: string; [key: string]: unknown },
  departement: string,
): DemandeBase {
  const createdAt = doc.createdAt;
  let createdAtStr: string;
  if (createdAt instanceof Date) {
    createdAtStr = createdAt.toISOString();
  } else if (typeof createdAt === "string") {
    createdAtStr = createdAt;
  } else if (createdAt && typeof createdAt === "object" && "seconds" in createdAt) {
    createdAtStr = new Date((createdAt as { seconds: number }).seconds * 1000).toISOString();
  } else {
    createdAtStr = new Date().toISOString();
  }

  return {
    $id: doc.id as string,
    nom: (doc.nom as string) ?? "",
    email: (doc.email as string) ?? "",
    telephone: (doc.telephone as string) ?? "",
    message: (doc.message as string) ?? "",
    departement,
    statut: (doc.statut as string) ?? "nouveau",
    $createdAt: createdAtStr,
  };
}

// ── Voyages ───────────────────────────────────────────────────────────────

export function useSubmitVoyage() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const result = await createDemande(COLLECTIONS.demandesVoyages, {
        ...input,
        departement: "Voyages",
      });
      return result;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["voyages"] }),
  });
}

export function useDemandesVoyages() {
  return useQuery<DemandeBase[]>({
    queryKey: ["voyages"],
    queryFn: async () => {
      const docs = await listDemandes(COLLECTIONS.demandesVoyages);
      return docs.map((d) => mapDocToDemande(d, "Voyages"));
    },
  });
}

// ── Immobilier ────────────────────────────────────────────────────────────

export function useSubmitImmobilier() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const result = await createDemande(COLLECTIONS.demandesImmobilier, {
        ...input,
        departement: "Immobilier",
      });
      return result;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["immobilier"] }),
  });
}

export function useDemandesImmobilier() {
  return useQuery<DemandeBase[]>({
    queryKey: ["immobilier"],
    queryFn: async () => {
      const docs = await listDemandes(COLLECTIONS.demandesImmobilier);
      return docs.map((d) => mapDocToDemande(d, "Immobilier"));
    },
  });
}

// ── Nettoiement ───────────────────────────────────────────────────────────

export function useSubmitNettoiement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const result = await createDemande(COLLECTIONS.demandesNettoiement, {
        ...input,
        departement: "Nettoiement",
      });
      return result;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["nettoiement"] }),
  });
}

export function useDemandesNettoiement() {
  return useQuery<DemandeBase[]>({
    queryKey: ["nettoiement"],
    queryFn: async () => {
      const docs = await listDemandes(COLLECTIONS.demandesNettoiement);
      return docs.map((d) => mapDocToDemande(d, "Nettoiement"));
    },
  });
}

// ── Contacts ──────────────────────────────────────────────────────────────

export function useSubmitContact() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: DemandeInput) => {
      const result = await createDemande(COLLECTIONS.contacts, {
        ...input,
        departement: "Contact",
      });
      return result;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contacts"] }),
  });
}

export function useContacts() {
  return useQuery<DemandeBase[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const docs = await listDemandes(COLLECTIONS.contacts);
      return docs.map((d) => mapDocToDemande(d, "Contact"));
    },
  });
}

// ── Update Statut ─────────────────────────────────────────────────────────

export function useUpdateStatut() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      collection: collectionName,
      id,
      statut,
    }: {
      collection: string;
      id: string;
      statut: string;
    }) => {
      const col = COLLECTIONS[collectionName as keyof typeof COLLECTIONS];
      if (!col) throw new Error(`Unknown collection: ${collectionName}`);
      await updateStatut(col, id, statut);
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
