import { a as useInternetIdentity, r as reactExports, j as jsxRuntimeExports, u as ue } from "./index-C4d48glV.js";
import { d as useActor, e as useQuery, f as createActor, g as useDemandesVoyages, h as useDemandesImmobilier, i as useDemandesNettoiement, j as useContacts, k as useUpdateStatut } from "./useBackend-C3I4X0wm.js";
function useIsAdmin() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();
  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isAdmin", isAuthenticated],
    queryFn: async () => {
      if (!actor || !isAuthenticated) return false;
      return actor.isAdmin();
    },
    enabled: !!actor && !isFetching && isAuthenticated
  });
  return { isAdmin, isLoading, isAuthenticated };
}
const DEPT_COLORS = {
  Voyages: { bg: "#E8F2FB", text: "#1A75BC" },
  Immobilier: { bg: "#E6EBF5", text: "#0D2B6B" },
  Nettoiement: { bg: "#FEF3DC", text: "#B5780B" },
  Contact: { bg: "#E6F7EE", text: "#16A34A" }
};
function StatutBadge({ statut }) {
  const isTraite = statut === "traité";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold",
      style: {
        backgroundColor: isTraite ? "#E6F7EE" : "#E8F2FB",
        color: isTraite ? "#16A34A" : "#1A75BC",
        fontFamily: "Montserrat, sans-serif"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "w-1.5 h-1.5 rounded-full inline-block",
            style: { backgroundColor: isTraite ? "#16A34A" : "#1A75BC" }
          }
        ),
        isTraite ? "Traité" : "Nouveau"
      ]
    }
  );
}
function DeptBadge({ dept }) {
  const colors = DEPT_COLORS[dept] ?? { bg: "#F4F6F9", text: "#555" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-block px-2.5 py-1 rounded-full text-xs font-semibold",
      style: {
        backgroundColor: colors.bg,
        color: colors.text,
        fontFamily: "Montserrat, sans-serif"
      },
      children: dept
    }
  );
}
function AdminPage() {
  const { login, clear, isAuthenticated } = useInternetIdentity();
  const { isAdmin, isLoading } = useIsAdmin();
  const [activeFilter, setActiveFilter] = reactExports.useState("tous");
  const { data: voyages = [], isLoading: loadingV } = useDemandesVoyages();
  const { data: immobilier = [], isLoading: loadingI } = useDemandesImmobilier();
  const { data: nettoiement = [], isLoading: loadingN } = useDemandesNettoiement();
  const { data: contacts = [], isLoading: loadingC } = useContacts();
  const { mutate: updateStatut, isPending: updatingStatut } = useUpdateStatut();
  const isLoadingAll = loadingV || loadingI || loadingN || loadingC;
  const enrich = (items, collection, dept) => items.map((d) => ({ ...d, _collection: collection, _dept: dept }));
  const allDemandes = [
    ...enrich(voyages, "demandes_voyages", "Voyages"),
    ...enrich(immobilier, "demandes_immobilier", "Immobilier"),
    ...enrich(nettoiement, "demandes_nettoiement", "Nettoiement"),
    ...enrich(contacts, "contacts", "Contact")
  ].sort((a, b) => Number(b.date) - Number(a.date));
  const filterMap = {
    tous: allDemandes,
    voyages: enrich(voyages, "demandes_voyages", "Voyages"),
    immobilier: enrich(immobilier, "demandes_immobilier", "Immobilier"),
    nettoiement: enrich(nettoiement, "demandes_nettoiement", "Nettoiement"),
    contacts: enrich(contacts, "contacts", "Contact")
  };
  const filtered = filterMap[activeFilter];
  const handleMarkTraite = (item) => {
    updateStatut(
      { collection: item._collection, id: item.id, statut: "traité" },
      {
        onSuccess: () => ue.success("Demande marquée comme traitée."),
        onError: () => ue.error("Erreur lors de la mise à jour.")
      }
    );
  };
  const formatDate = (ts) => new Date(Number(ts) / 1e6).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
  if (!isAuthenticated) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center px-4",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "admin.login_page",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-10 shadow-elevated text-center max-w-sm w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "/assets/logo.png",
              alt: "Assirik Tours",
              className: "h-16 w-auto mx-auto mb-6 object-contain"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5",
              style: { backgroundColor: "#E6EBF5" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "i",
                {
                  className: "fas fa-shield-alt text-2xl",
                  style: { color: "#0D2B6B" }
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "text-2xl font-bold mb-2",
              style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
              children: "Espace Administrateur"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm mb-8 leading-relaxed",
              style: { color: "#666", fontFamily: "Open Sans, sans-serif" },
              children: "Connectez-vous avec votre identité numérique pour accéder au tableau de bord."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => login(),
              className: "btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2",
              "data-ocid": "admin.login_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-sign-in-alt" }),
                "Se connecter avec Internet Identity"
              ]
            }
          )
        ] })
      }
    );
  }
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "admin.loading_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-12 h-12 rounded-full border-4 animate-spin mx-auto mb-4",
              style: { borderColor: "#1A75BC", borderTopColor: "#F5A623" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "#0D2B6B", fontFamily: "Open Sans, sans-serif" }, children: "Vérification des accès..." })
        ] })
      }
    );
  }
  if (!isAdmin) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "min-h-screen flex items-center justify-center px-4",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "admin.unauthorized_state",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl p-10 shadow-elevated text-center max-w-sm w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5",
              style: { backgroundColor: "#FDE8E8" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-lock text-2xl", style: { color: "#DC2626" } })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-xl font-bold mb-2",
              style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
              children: "Accès non autorisé"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "text-sm mb-6 leading-relaxed",
              style: { color: "#666", fontFamily: "Open Sans, sans-serif" },
              children: "Votre compte ne dispose pas des droits nécessaires pour accéder à cette page."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: () => clear(),
              className: "btn-primary w-full py-3 rounded-lg flex items-center justify-center gap-2",
              "data-ocid": "admin.logout_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-sign-out-alt" }),
                "Se déconnecter"
              ]
            }
          )
        ] })
      }
    );
  }
  const tabs = [
    {
      key: "tous",
      label: "Tous",
      count: allDemandes.length,
      icon: "fa-th-list"
    },
    {
      key: "voyages",
      label: "Voyages",
      count: voyages.length,
      icon: "fa-plane"
    },
    {
      key: "immobilier",
      label: "Immobilier",
      count: immobilier.length,
      icon: "fa-building"
    },
    {
      key: "nettoiement",
      label: "Nettoiement",
      count: nettoiement.length,
      icon: "fa-broom"
    },
    {
      key: "contacts",
      label: "Contacts",
      count: contacts.length,
      icon: "fa-envelope"
    }
  ];
  const statCards = [
    {
      label: "Voyages",
      count: voyages.length,
      icon: "fa-plane",
      color: "#1A75BC",
      bg: "#E8F2FB"
    },
    {
      label: "Immobilier",
      count: immobilier.length,
      icon: "fa-building",
      color: "#0D2B6B",
      bg: "#E6EBF5"
    },
    {
      label: "Nettoiement",
      count: nettoiement.length,
      icon: "fa-broom",
      color: "#B5780B",
      bg: "#FEF3DC"
    },
    {
      label: "Contacts",
      count: contacts.length,
      icon: "fa-envelope",
      color: "#16A34A",
      bg: "#E6F7EE"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: { backgroundColor: "#F4F6F9" },
      "data-ocid": "admin.dashboard_page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "sticky top-0 z-30 border-b shadow-card",
            style: { backgroundColor: "#0D2B6B" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/logo.png",
                    alt: "Assirik Tours",
                    className: "h-9 w-auto object-contain",
                    style: { filter: "brightness(0) invert(1)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h1",
                    {
                      className: "text-lg font-bold text-white leading-tight",
                      style: { fontFamily: "Montserrat, sans-serif" },
                      children: "Tableau de Bord Administrateur"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: {
                        color: "rgba(255,255,255,0.6)",
                        fontFamily: "Open Sans, sans-serif"
                      },
                      children: "Assirik Tours — Gestion des demandes"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => clear(),
                  className: "flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold transition-smooth",
                  style: {
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "white",
                    backgroundColor: "transparent",
                    fontFamily: "Montserrat, sans-serif"
                  },
                  "data-ocid": "admin.logout_button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-sign-out-alt" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Déconnexion" })
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
              "data-ocid": "admin.stats_section",
              children: statCards.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "bg-white rounded-xl p-5 shadow-card flex items-center gap-4",
                  "data-ocid": `admin.stat_card.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                        style: { backgroundColor: s.bg },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "i",
                          {
                            className: `fas ${s.icon} text-lg`,
                            style: { color: s.color }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-2xl font-bold leading-none",
                          style: {
                            color: "#0D2B6B",
                            fontFamily: "Montserrat, sans-serif"
                          },
                          children: s.count
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs mt-0.5 truncate",
                          style: { color: "#888", fontFamily: "Open Sans, sans-serif" },
                          children: s.label
                        }
                      )
                    ] })
                  ]
                },
                s.label
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-2 mb-5",
              "data-ocid": "admin.filter_tabs",
              children: tabs.map((tab) => {
                const isActive = activeFilter === tab.key;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setActiveFilter(tab.key),
                    className: "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-smooth border",
                    style: {
                      backgroundColor: isActive ? "#0D2B6B" : "white",
                      color: isActive ? "white" : "#555",
                      borderColor: isActive ? "#0D2B6B" : "#dde3ee",
                      fontFamily: "Montserrat, sans-serif"
                    },
                    "data-ocid": `admin.filter.${tab.key}_tab`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: `fas ${tab.icon} text-xs`,
                          style: {
                            color: isActive ? "rgba(255,255,255,0.8)" : "#1A75BC"
                          }
                        }
                      ),
                      tab.label,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center",
                          style: {
                            backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "#E8F2FB",
                            color: isActive ? "white" : "#1A75BC"
                          },
                          children: tab.count
                        }
                      )
                    ]
                  },
                  tab.key
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "bg-white rounded-xl shadow-card overflow-hidden",
              "data-ocid": "admin.demandes_table",
              children: isLoadingAll ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-16 text-center",
                  "data-ocid": "admin.table.loading_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-10 h-10 rounded-full border-4 animate-spin mx-auto mb-4",
                        style: { borderColor: "#1A75BC", borderTopColor: "#F5A623" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-semibold",
                        style: {
                          color: "#0D2B6B",
                          fontFamily: "Montserrat, sans-serif"
                        },
                        children: "Chargement des données..."
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm mt-1",
                        style: { color: "#888", fontFamily: "Open Sans, sans-serif" },
                        children: "Récupération des demandes en cours."
                      }
                    )
                  ]
                }
              ) : filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "p-16 text-center",
                  "data-ocid": "admin.table.empty_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                        style: { backgroundColor: "#F4F6F9" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "i",
                          {
                            className: "fas fa-inbox text-2xl",
                            style: { color: "#ccd3e0" }
                          }
                        )
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "font-bold text-lg",
                        style: {
                          color: "#0D2B6B",
                          fontFamily: "Montserrat, sans-serif"
                        },
                        children: "Aucune demande"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "p",
                      {
                        className: "text-sm mt-1",
                        style: { color: "#888", fontFamily: "Open Sans, sans-serif" },
                        children: "Aucune demande reçue pour ce département pour le moment."
                      }
                    )
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-auto", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "tr",
                    {
                      style: {
                        backgroundColor: "#F4F6F9",
                        borderBottom: "2px solid #e8ecf3"
                      },
                      children: [
                        { label: "Nom", cls: "" },
                        { label: "Email", cls: "hidden sm:table-cell" },
                        { label: "Téléphone", cls: "hidden md:table-cell" },
                        { label: "Message", cls: "hidden lg:table-cell" },
                        { label: "Département", cls: "" },
                        { label: "Date", cls: "hidden xl:table-cell" },
                        { label: "Statut", cls: "" },
                        { label: "Action", cls: "" }
                      ].map(({ label, cls }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "th",
                        {
                          className: `text-left px-4 py-3 font-semibold text-xs uppercase tracking-wide ${cls}`,
                          style: {
                            color: "#0D2B6B",
                            fontFamily: "Montserrat, sans-serif"
                          },
                          children: label
                        },
                        label
                      ))
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((item, i) => {
                    const isTraite = item.statut === "traité";
                    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "tr",
                      {
                        className: "transition-smooth hover:bg-[#fafbfd]",
                        style: {
                          borderBottom: "1px solid #f0f3f8"
                        },
                        "data-ocid": `admin.demande_row.${i + 1}`,
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-semibold truncate max-w-[130px]",
                              style: {
                                color: "#0D2B6B",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: item.nom
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              className: "px-4 py-4 hidden sm:table-cell",
                              style: {
                                color: "#555",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate block max-w-[180px]", children: item.email })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              className: "px-4 py-4 hidden md:table-cell",
                              style: {
                                color: "#555",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: item.telephone
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              className: "px-4 py-4 hidden lg:table-cell max-w-[220px]",
                              style: {
                                color: "#777",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              title: item.message,
                              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block truncate", children: item.message })
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(DeptBadge, { dept: item._dept }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "td",
                            {
                              className: "px-4 py-4 hidden xl:table-cell text-xs whitespace-nowrap",
                              style: {
                                color: "#999",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: formatDate(item.date)
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatutBadge, { statut: item.statut ?? "nouveau" }) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              disabled: isTraite || updatingStatut,
                              onClick: () => handleMarkTraite(item),
                              className: "text-xs font-semibold px-3 py-1.5 rounded-lg transition-smooth whitespace-nowrap",
                              style: {
                                backgroundColor: isTraite ? "#F0F3F8" : "#0D2B6B",
                                color: isTraite ? "#999" : "white",
                                fontFamily: "Montserrat, sans-serif",
                                cursor: isTraite ? "not-allowed" : "pointer",
                                opacity: isTraite ? 0.7 : 1
                              },
                              "data-ocid": `admin.mark_traite_button.${i + 1}`,
                              children: isTraite ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-check mr-1" }),
                                "Traité"
                              ] }) : "Marquer Traité"
                            }
                          ) })
                        ]
                      },
                      `${item._collection}-${String(item.id)}`
                    );
                  }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "px-4 py-3 border-t text-xs",
                    style: {
                      borderColor: "#f0f3f8",
                      color: "#999",
                      fontFamily: "Open Sans, sans-serif",
                      backgroundColor: "#FAFBFD"
                    },
                    children: [
                      filtered.length,
                      " demande",
                      filtered.length > 1 ? "s" : "",
                      " ",
                      "affichée",
                      filtered.length > 1 ? "s" : ""
                    ]
                  }
                )
              ] })
            }
          )
        ] })
      ]
    }
  );
}
export {
  AdminPage
};
