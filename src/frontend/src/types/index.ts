export type {
  DemandeInput,
  DemandeBase,
  RecordId,
  Statut,
  Timestamp,
} from "../backend.d";

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
