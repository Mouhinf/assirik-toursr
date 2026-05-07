export interface DemandeInput {
  nom: string;
  email: string;
  telephone: string;
  message: string;
}

export interface DemandeBase {
  $id: string;
  nom: string;
  email: string;
  telephone: string;
  message: string;
  departement: string;
  statut: string;
  $createdAt: string;
}

export type RecordId = string;
export type Statut = string;
export type Timestamp = string;

export interface NavLink {
  label: string;
  href: string;
}

export interface DepartmentCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  color: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export type DepartementName =
  | "voyages"
  | "immobilier"
  | "nettoiement"
  | "contacts";
