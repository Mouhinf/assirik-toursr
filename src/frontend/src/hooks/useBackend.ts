import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { DemandeBase, DemandeInput, RecordId } from "../backend.d";

export function useSubmitVoyage() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<RecordId, Error, DemandeInput>({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitVoyage(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["voyages"] }),
  });
}

export function useSubmitImmobilier() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<RecordId, Error, DemandeInput>({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitImmobilier(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["immobilier"] }),
  });
}

export function useSubmitNettoiement() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<RecordId, Error, DemandeInput>({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitNettoiement(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["nettoiement"] }),
  });
}

export function useSubmitContact() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<RecordId, Error, DemandeInput>({
    mutationFn: async (input) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.submitContact(input);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["contacts"] }),
  });
}

export function useDemandesVoyages() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<DemandeBase[]>({
    queryKey: ["voyages"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDemandesVoyages();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useDemandesImmobilier() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<DemandeBase[]>({
    queryKey: ["immobilier"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDemandesImmobilier();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useDemandesNettoiement() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<DemandeBase[]>({
    queryKey: ["nettoiement"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getDemandesNettoiement();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useContacts() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<DemandeBase[]>({
    queryKey: ["contacts"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContacts();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useUpdateStatut() {
  const { actor } = useActor(createActor);
  const qc = useQueryClient();
  return useMutation<
    boolean,
    Error,
    { collection: string; id: RecordId; statut: string }
  >({
    mutationFn: async ({ collection, id, statut }) => {
      if (!actor) throw new Error("Actor not ready");
      return actor.updateStatut(collection, id, statut);
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["voyages"] });
      qc.invalidateQueries({ queryKey: ["immobilier"] });
      qc.invalidateQueries({ queryKey: ["nettoiement"] });
      qc.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
}
