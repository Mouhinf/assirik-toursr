import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Statut = string;
export type Timestamp = bigint;
export interface DemandeInput {
    nom: string;
    email: string;
    message: string;
    telephone: string;
}
export interface DemandeBase {
    id: RecordId;
    nom: string;
    statut: Statut;
    date: Timestamp;
    email: string;
    departement: string;
    message: string;
    telephone: string;
}
export type RecordId = bigint;
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getCallerUserRole(): Promise<UserRole>;
    getContacts(): Promise<Array<DemandeBase>>;
    getDemandesImmobilier(): Promise<Array<DemandeBase>>;
    getDemandesNettoiement(): Promise<Array<DemandeBase>>;
    getDemandesVoyages(): Promise<Array<DemandeBase>>;
    isAdmin(): Promise<boolean>;
    isCallerAdmin(): Promise<boolean>;
    submitContact(input: DemandeInput): Promise<RecordId>;
    submitImmobilier(input: DemandeInput): Promise<RecordId>;
    submitNettoiement(input: DemandeInput): Promise<RecordId>;
    submitVoyage(input: DemandeInput): Promise<RecordId>;
    updateStatut(collectionName: string, id: RecordId, statut: Statut): Promise<boolean>;
}
