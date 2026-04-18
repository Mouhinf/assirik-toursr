import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useState } from "react";
import { toast } from "sonner";
import {
  useContacts,
  useDemandesImmobilier,
  useDemandesNettoiement,
  useDemandesVoyages,
  useUpdateStatut,
} from "../hooks/useBackend";
import { useIsAdmin } from "../hooks/useIsAdmin";
import type { DemandeBase } from "../types";

type FilterTab = "tous" | "voyages" | "immobilier" | "nettoiement" | "contacts";

type EnrichedDemande = DemandeBase & {
  _collection: string;
  _dept: string;
};

const DEPT_COLORS: Record<string, { bg: string; text: string }> = {
  Voyages: { bg: "#E8F2FB", text: "#1A75BC" },
  Immobilier: { bg: "#E6EBF5", text: "#0D2B6B" },
  Nettoiement: { bg: "#FEF3DC", text: "#B5780B" },
  Contact: { bg: "#E6F7EE", text: "#16A34A" },
};

function StatutBadge({ statut }: { statut: string }) {
  const isTraite = statut === "traité";
  return (
    <span
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{
        backgroundColor: isTraite ? "#E6F7EE" : "#E8F2FB",
        color: isTraite ? "#16A34A" : "#1A75BC",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full inline-block"
        style={{ backgroundColor: isTraite ? "#16A34A" : "#1A75BC" }}
      />
      {isTraite ? "Traité" : "Nouveau"}
    </span>
  );
}

function DeptBadge({ dept }: { dept: string }) {
  const colors = DEPT_COLORS[dept] ?? { bg: "#F4F6F9", text: "#555" };
  return (
    <span
      className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {dept}
    </span>
  );
}

export function AdminPage() {
  const { login, clear, isAuthenticated } = useInternetIdentity();
  const { isAdmin, isLoading } = useIsAdmin();
  const [activeFilter, setActiveFilter] = useState<FilterTab>("tous");

  const { data: voyages = [], isLoading: loadingV } = useDemandesVoyages();
  const { data: immobilier = [], isLoading: loadingI } =
    useDemandesImmobilier();
  const { data: nettoiement = [], isLoading: loadingN } =
    useDemandesNettoiement();
  const { data: contacts = [], isLoading: loadingC } = useContacts();
  const { mutate: updateStatut, isPending: updatingStatut } = useUpdateStatut();

  const isLoadingAll = loadingV || loadingI || loadingN || loadingC;

  const enrich = (
    items: DemandeBase[],
    collection: string,
    dept: string,
  ): EnrichedDemande[] =>
    items.map((d) => ({ ...d, _collection: collection, _dept: dept }));

  const allDemandes: EnrichedDemande[] = [
    ...enrich(voyages, "demandes_voyages", "Voyages"),
    ...enrich(immobilier, "demandes_immobilier", "Immobilier"),
    ...enrich(nettoiement, "demandes_nettoiement", "Nettoiement"),
    ...enrich(contacts, "contacts", "Contact"),
  ].sort((a, b) => Number(b.date) - Number(a.date));

  const filterMap: Record<FilterTab, EnrichedDemande[]> = {
    tous: allDemandes,
    voyages: enrich(voyages, "demandes_voyages", "Voyages"),
    immobilier: enrich(immobilier, "demandes_immobilier", "Immobilier"),
    nettoiement: enrich(nettoiement, "demandes_nettoiement", "Nettoiement"),
    contacts: enrich(contacts, "contacts", "Contact"),
  };

  const filtered = filterMap[activeFilter];

  const handleMarkTraite = (item: EnrichedDemande) => {
    updateStatut(
      { collection: item._collection, id: item.id, statut: "traité" },
      {
        onSuccess: () => toast.success("Demande marquée comme traitée."),
        onError: () => toast.error("Erreur lors de la mise à jour."),
      },
    );
  };

  const formatDate = (ts: bigint) =>
    new Date(Number(ts) / 1_000_000).toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  // ── Not logged in ──────────────────────────────────────────────────────────
  if (!isAuthenticated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="admin.login_page"
      >
        <div className="bg-white rounded-2xl p-10 shadow-elevated text-center max-w-sm w-full">
          <img
            src="/assets/logo.png"
            alt="Assirik Tours"
            className="h-16 w-auto mx-auto mb-6 object-contain"
          />
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "#E6EBF5" }}
          >
            <i
              className="fas fa-shield-alt text-2xl"
              style={{ color: "#0D2B6B" }}
            />
          </div>
          <h1
            className="text-2xl font-bold mb-2"
            style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
          >
            Espace Administrateur
          </h1>
          <p
            className="text-sm mb-8 leading-relaxed"
            style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
          >
            Connectez-vous avec votre identité numérique pour accéder au tableau
            de bord.
          </p>
          <button
            type="button"
            onClick={() => login()}
            className="btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2"
            data-ocid="admin.login_button"
          >
            <i className="fas fa-sign-in-alt" />
            Se connecter avec Internet Identity
          </button>
        </div>
      </div>
    );
  }

  // ── Loading admin check ────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="admin.loading_state"
      >
        <div className="text-center">
          <div
            className="w-12 h-12 rounded-full border-4 animate-spin mx-auto mb-4"
            style={{ borderColor: "#1A75BC", borderTopColor: "#F5A623" }}
          />
          <p style={{ color: "#0D2B6B", fontFamily: "Open Sans, sans-serif" }}>
            Vérification des accès...
          </p>
        </div>
      </div>
    );
  }

  // ── Not admin ──────────────────────────────────────────────────────────────
  if (!isAdmin) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-4"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="admin.unauthorized_state"
      >
        <div className="bg-white rounded-2xl p-10 shadow-elevated text-center max-w-sm w-full">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: "#FDE8E8" }}
          >
            <i className="fas fa-lock text-2xl" style={{ color: "#DC2626" }} />
          </div>
          <h2
            className="text-xl font-bold mb-2"
            style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
          >
            Accès non autorisé
          </h2>
          <p
            className="text-sm mb-6 leading-relaxed"
            style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
          >
            Votre compte ne dispose pas des droits nécessaires pour accéder à
            cette page.
          </p>
          <button
            type="button"
            onClick={() => clear()}
            className="btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2"
            data-ocid="admin.logout_button"
          >
            <i className="fas fa-sign-out-alt" />
            Se déconnecter
          </button>
        </div>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────
  const tabs: { key: FilterTab; label: string; count: number; icon: string }[] =
    [
      {
        key: "tous",
        label: "Tous",
        count: allDemandes.length,
        icon: "fa-th-list",
      },
      {
        key: "voyages",
        label: "Voyages",
        count: voyages.length,
        icon: "fa-plane",
      },
      {
        key: "immobilier",
        label: "Immobilier",
        count: immobilier.length,
        icon: "fa-building",
      },
      {
        key: "nettoiement",
        label: "Nettoiement",
        count: nettoiement.length,
        icon: "fa-broom",
      },
      {
        key: "contacts",
        label: "Contacts",
        count: contacts.length,
        icon: "fa-envelope",
      },
    ];

  const statCards = [
    {
      label: "Voyages",
      count: voyages.length,
      icon: "fa-plane",
      color: "#1A75BC",
      bg: "#E8F2FB",
    },
    {
      label: "Immobilier",
      count: immobilier.length,
      icon: "fa-building",
      color: "#0D2B6B",
      bg: "#E6EBF5",
    },
    {
      label: "Nettoiement",
      count: nettoiement.length,
      icon: "fa-broom",
      color: "#B5780B",
      bg: "#FEF3DC",
    },
    {
      label: "Contacts",
      count: contacts.length,
      icon: "fa-envelope",
      color: "#16A34A",
      bg: "#E6F7EE",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#F4F6F9" }}
      data-ocid="admin.dashboard_page"
    >
      {/* ── Dashboard Header ─────────────────────────────────────────────── */}
      <div
        className="sticky top-0 z-30 border-b shadow-card"
        style={{ backgroundColor: "#0D2B6B" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo.png"
              alt="Assirik Tours"
              className="h-9 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <div>
              <h1
                className="text-lg font-bold text-white leading-tight"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Tableau de Bord Administrateur
              </h1>
              <p
                className="text-xs"
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Assirik Tours — Gestion des demandes
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => clear()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-smooth"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "white",
              backgroundColor: "transparent",
              fontFamily: "Montserrat, sans-serif",
            }}
            data-ocid="admin.logout_button"
          >
            <i className="fas fa-sign-out-alt" />
            <span className="hidden sm:inline">Déconnexion</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Stat Cards ───────────────────────────────────────────────────── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          data-ocid="admin.stats_section"
        >
          {statCards.map((s, i) => (
            <div
              key={s.label}
              className="bg-white rounded-xl p-5 shadow-card flex items-center gap-4"
              data-ocid={`admin.stat_card.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: s.bg }}
              >
                <i
                  className={`fas ${s.icon} text-lg`}
                  style={{ color: s.color }}
                />
              </div>
              <div className="min-w-0">
                <p
                  className="text-2xl font-bold leading-none"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {s.count}
                </p>
                <p
                  className="text-xs mt-0.5 truncate"
                  style={{ color: "#888", fontFamily: "Open Sans, sans-serif" }}
                >
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Filter Tabs ──────────────────────────────────────────────────── */}
        <div
          className="flex flex-wrap gap-2 mb-5"
          data-ocid="admin.filter_tabs"
        >
          {tabs.map((tab) => {
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-smooth border"
                style={{
                  backgroundColor: isActive ? "#0D2B6B" : "white",
                  color: isActive ? "white" : "#555",
                  borderColor: isActive ? "#0D2B6B" : "#dde3ee",
                  fontFamily: "Montserrat, sans-serif",
                }}
                data-ocid={`admin.filter.${tab.key}_tab`}
              >
                <i
                  className={`fas ${tab.icon} text-xs`}
                  style={{
                    color: isActive ? "rgba(255,255,255,0.8)" : "#1A75BC",
                  }}
                />
                {tab.label}
                <span
                  className="text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center"
                  style={{
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.2)"
                      : "#E8F2FB",
                    color: isActive ? "white" : "#1A75BC",
                  }}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Data Table ───────────────────────────────────────────────────── */}
        <div
          className="bg-white rounded-xl shadow-card overflow-hidden"
          data-ocid="admin.demandes_table"
        >
          {isLoadingAll ? (
            <div
              className="p-16 text-center"
              data-ocid="admin.table.loading_state"
            >
              <div
                className="w-10 h-10 rounded-full border-4 animate-spin mx-auto mb-4"
                style={{ borderColor: "#1A75BC", borderTopColor: "#F5A623" }}
              />
              <p
                className="font-semibold"
                style={{
                  color: "#0D2B6B",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Chargement des données...
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "#888", fontFamily: "Open Sans, sans-serif" }}
              >
                Récupération des demandes en cours.
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div
              className="p-16 text-center"
              data-ocid="admin.table.empty_state"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#F4F6F9" }}
              >
                <i
                  className="fas fa-inbox text-2xl"
                  style={{ color: "#ccd3e0" }}
                />
              </div>
              <p
                className="font-bold text-lg"
                style={{
                  color: "#0D2B6B",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Aucune demande
              </p>
              <p
                className="text-sm mt-1"
                style={{ color: "#888", fontFamily: "Open Sans, sans-serif" }}
              >
                Aucune demande reçue pour ce département pour le moment.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr
                    style={{
                      backgroundColor: "#F4F6F9",
                      borderBottom: "2px solid #e8ecf3",
                    }}
                  >
                    {[
                      { label: "Nom", cls: "" },
                      { label: "Email", cls: "hidden sm:table-cell" },
                      { label: "Téléphone", cls: "hidden md:table-cell" },
                      { label: "Message", cls: "hidden lg:table-cell" },
                      { label: "Département", cls: "" },
                      { label: "Date", cls: "hidden xl:table-cell" },
                      { label: "Statut", cls: "" },
                      { label: "Action", cls: "" },
                    ].map(({ label, cls }) => (
                      <th
                        key={label}
                        className={`text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide ${cls}`}
                        style={{
                          color: "#0D2B6B",
                          fontFamily: "Montserrat, sans-serif",
                        }}
                      >
                        {label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item, i) => {
                    const isTraite = item.statut === "traité";
                    return (
                      <tr
                        key={`${item._collection}-${String(item.id)}`}
                        className="transition-smooth hover:bg-[#fafbfd]"
                        style={{
                          borderBottom: "1px solid #f0f3f8",
                        }}
                        data-ocid={`admin.demande_row.${i + 1}`}
                      >
                        {/* Nom */}
                        <td className="px-4 py-4">
                          <p
                            className="font-semibold truncate max-w-[130px]"
                            style={{
                              color: "#0D2B6B",
                              fontFamily: "Open Sans, sans-serif",
                            }}
                          >
                            {item.nom}
                          </p>
                        </td>
                        {/* Email */}
                        <td
                          className="px-4 py-4 hidden sm:table-cell"
                          style={{
                            color: "#555",
                            fontFamily: "Open Sans, sans-serif",
                          }}
                        >
                          <span className="truncate block max-w-[180px]">
                            {item.email}
                          </span>
                        </td>
                        {/* Téléphone */}
                        <td
                          className="px-4 py-4 hidden md:table-cell"
                          style={{
                            color: "#555",
                            fontFamily: "Open Sans, sans-serif",
                          }}
                        >
                          {item.telephone}
                        </td>
                        {/* Message */}
                        <td
                          className="px-4 py-4 hidden lg:table-cell max-w-[220px]"
                          style={{
                            color: "#777",
                            fontFamily: "Open Sans, sans-serif",
                          }}
                          title={item.message}
                        >
                          <span className="block truncate">{item.message}</span>
                        </td>
                        {/* Département */}
                        <td className="px-4 py-4">
                          <DeptBadge dept={item._dept} />
                        </td>
                        {/* Date */}
                        <td
                          className="px-4 py-4 hidden xl:table-cell text-xs whitespace-nowrap"
                          style={{
                            color: "#999",
                            fontFamily: "Open Sans, sans-serif",
                          }}
                        >
                          {formatDate(item.date)}
                        </td>
                        {/* Statut */}
                        <td className="px-4 py-4">
                          <StatutBadge statut={item.statut ?? "nouveau"} />
                        </td>
                        {/* Action */}
                        <td className="px-4 py-4">
                          <button
                            type="button"
                            disabled={isTraite || updatingStatut}
                            onClick={() => handleMarkTraite(item)}
                            className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-smooth whitespace-nowrap"
                            style={{
                              backgroundColor: isTraite ? "#F0F3F8" : "#0D2B6B",
                              color: isTraite ? "#999" : "white",
                              fontFamily: "Montserrat, sans-serif",
                              cursor: isTraite ? "not-allowed" : "pointer",
                              opacity: isTraite ? 0.7 : 1,
                            }}
                            data-ocid={`admin.mark_traite_button.${i + 1}`}
                          >
                            {isTraite ? (
                              <>
                                <i className="fas fa-check mr-1" />
                                Traité
                              </>
                            ) : (
                              "Marquer Traité"
                            )}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              {/* Table footer with count */}
              <div
                className="px-4 py-3 border-t text-xs"
                style={{
                  borderColor: "#f0f3f8",
                  color: "#999",
                  fontFamily: "Open Sans, sans-serif",
                  backgroundColor: "#FAFBFD",
                }}
              >
                {filtered.length} demande{filtered.length > 1 ? "s" : ""}{" "}
                affichée{filtered.length > 1 ? "s" : ""}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
