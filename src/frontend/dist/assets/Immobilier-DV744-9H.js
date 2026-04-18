import { r as reactExports, j as jsxRuntimeExports, L as Link, u as ue } from "./index-C4d48glV.js";
import { a as useSubmitImmobilier } from "./useBackend-C3I4X0wm.js";
const services = [
  {
    emoji: "🏡",
    icon: "fa-house",
    title: "Vente Terrains & Maisons",
    desc: "Terrains viabilisés et maisons modernes à vendre dans les meilleures zones de Dakar.",
    bullets: [
      "Terrains de 200m² à 5000m²",
      "Maisons F3 à F6 et villas",
      "Prix du marché garantis",
      "Titres fonciers vérifiés"
    ],
    delay: 0
  },
  {
    emoji: "🏢",
    icon: "fa-building",
    title: "Location Résidentielle & Commerciale",
    desc: "Appartements, villas et locaux commerciaux disponibles selon vos critères et budget.",
    bullets: [
      "Appartements et villas meublés/non-meublés",
      "Locaux commerciaux sur le Plateau et zones industrielles",
      "Baux résidentiels et professionnels",
      "Gestion des états des lieux"
    ],
    delay: 80
  },
  {
    emoji: "🔑",
    icon: "fa-key",
    title: "Gestion Locative",
    desc: "Gestion complète de vos biens immobiliers : loyers, entretien, suivi administratif.",
    bullets: [
      "Collecte des loyers et quittances",
      "Suivi entretien et réparations",
      "Sélection et vérification des locataires",
      "Reporting mensuel propriétaires"
    ],
    delay: 160
  },
  {
    emoji: "📐",
    icon: "fa-chart-line",
    title: "Promotion Immobilière",
    desc: "Développement et commercialisation de programmes immobiliers neufs à fort potentiel.",
    bullets: [
      "Projets neufs clés en main",
      "VEFA (Vente en l'État Futur d'Achèvement)",
      "Plans 3D et visualisation",
      "Suivi de chantier"
    ],
    delay: 240
  },
  {
    emoji: "📊",
    icon: "fa-magnifying-glass-dollar",
    title: "Expertise & Estimation",
    desc: "Évaluation précise et professionnelle de la valeur marchande de vos biens.",
    bullets: [
      "Rapport d'expertise officiel",
      "Évaluation valeur vénale et locative",
      "Contre-expertise indépendante",
      "Certificats pour banques et notaires"
    ],
    delay: 320
  },
  {
    emoji: "💼",
    icon: "fa-handshake",
    title: "Conseil en Investissement",
    desc: "Accompagnement stratégique pour optimiser et sécuriser vos investissements.",
    bullets: [
      "Analyse de rentabilité locative",
      "Optimisation fiscale immobilière",
      "Financement et crédit immobilier",
      "Stratégie patrimoine à long terme"
    ],
    delay: 400
  }
];
const zonesData = [
  { name: "Almadies", emoji: "🌊", type: "Résidentiel haut standing" },
  { name: "Mermoz", emoji: "🏘️", type: "Appartements & villas" },
  { name: "Liberté 6", emoji: "🏢", type: "Commercial & résidentiel" },
  { name: "Point E", emoji: "⭐", type: "Quartier prisé" },
  { name: "Mbao", emoji: "🌿", type: "Terrains & maisons" },
  { name: "Rufisque", emoji: "🌅", type: "Expansion urbaine" },
  { name: "Saly-Portudal", emoji: "🏖️", type: "Balnéaire & tourisme" },
  { name: "Thiès", emoji: "🌆", type: "Ville secondaire" },
  { name: "Plateau (Dakar)", emoji: "🏙️", type: "Centre d'affaires" },
  { name: "Ngor", emoji: "🏡", type: "Résidentiel calme" },
  { name: "Keur Massar", emoji: "🌿", type: "Périphérie urbaine" },
  { name: "Grand-Yoff", emoji: "🏘️", type: "Zone populaire" }
];
const typeOptions = [
  "Achat d'un terrain",
  "Achat d'une maison / villa",
  "Location résidentielle",
  "Location commerciale",
  "Gestion locative",
  "Expertise / Estimation",
  "Conseil en investissement",
  "Autre"
];
const bienOptions = [
  "Terrain",
  "Villa / Maison",
  "Appartement",
  "Bureau",
  "Local commercial",
  "Autre"
];
const budgetOptions = [
  "< 10 millions FCFA",
  "10-30 millions FCFA",
  "30-100 millions FCFA",
  "> 100 millions FCFA",
  "À discuter"
];
const transactionOptions = [
  "Acheter un bien",
  "Louer un bien",
  "Vendre mon bien",
  "Estimer mon bien",
  "Gestion locative"
];
const emptyForm = {
  nom: "",
  email: "",
  telephone: "",
  message: "",
  typeService: "",
  typeBien: "",
  localisation: "",
  budget: "",
  transaction: ""
};
function ImmobilierPage() {
  const [form, setForm] = reactExports.useState(emptyForm);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const { mutate: submit, isPending } = useSubmitImmobilier();
  reactExports.useEffect(() => {
    document.title = "Agence Immobilier Dakar | Vente Location | Assirik Tours";
    return () => {
      document.title = "Assirik Tours | Agence de Voyage, Immobilier & Nettoiement à Dakar";
    };
  }, []);
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      typeService,
      typeBien,
      localisation,
      budget,
      transaction,
      ...demande
    } = form;
    const extras = [
      typeService && `Service : ${typeService}`,
      transaction && `Transaction : ${transaction}`,
      typeBien && `Type de bien : ${typeBien}`,
      localisation && `Localisation souhaitée : ${localisation}`,
      budget && `Budget : ${budget}`
    ].filter(Boolean).join("\n");
    submit(
      {
        ...demande,
        message: extras ? `${extras}

${demande.message}` : demande.message
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(emptyForm);
          ue.success(
            "Demande envoyée ! Notre équipe immobilier vous contactera rapidement."
          );
        },
        onError: () => ue.error("Une erreur est survenue. Veuillez réessayer.")
      }
    );
  };
  const inputCls = "w-full px-4 py-3 rounded-lg border text-sm outline-none transition-smooth bg-white";
  const inputStyle = {
    borderColor: "#D1D9E0",
    fontFamily: "Open Sans, sans-serif"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "immobilier.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8",
        "data-ocid": "immobilier.hero_section",
        style: { minHeight: "520px" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 bg-cover bg-center",
              style: {
                backgroundImage: "url('/assets/generated/immobilier-hero.dim_1200x500.jpg')"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, rgba(13,43,107,0.9) 0%, rgba(15,50,120,0.75) 50%, rgba(26,117,188,0.7) 100%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 pointer-events-none",
              style: { backgroundColor: "#F5A623" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -bottom-24 -left-12 w-80 h-80 rounded-full opacity-10 pointer-events-none",
              style: { backgroundColor: "#1A75BC" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto text-center text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elevated",
                style: {
                  backgroundColor: "rgba(245,166,35,0.2)",
                  border: "1px solid rgba(245,166,35,0.4)"
                },
                "data-aos": "zoom-in",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "i",
                  {
                    className: "fas fa-building text-4xl",
                    style: { color: "#F5A623" }
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h1",
              {
                className: "text-4xl sm:text-5xl font-display mb-4",
                "data-aos": "fade-up",
                "data-aos-delay": "100",
                children: [
                  "Assirik Tours ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F5A623" }, children: "Immobilier" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed",
                style: { color: "rgba(255,255,255,0.85)" },
                "data-aos": "fade-up",
                "data-aos-delay": "200",
                children: "Votre partenaire de confiance pour l'achat, la vente, la location et la gestion immobilière au Sénégal."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex flex-wrap items-center justify-center gap-6 mt-10",
                "data-aos": "fade-up",
                "data-aos-delay": "300",
                children: [
                  { icon: "fa-house-circle-check", label: "Vente & Achat" },
                  { icon: "fa-key", label: "Location" },
                  { icon: "fa-chart-line", label: "Investissement" }
                ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold",
                    style: {
                      backgroundColor: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.2)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: `fas ${badge.icon}`,
                          style: { color: "#F5A623" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: badge.label })
                    ]
                  },
                  badge.label
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-10 flex flex-col sm:flex-row gap-4 justify-center",
                "data-aos": "fade-up",
                "data-aos-delay": "400",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#formulaire",
                      className: "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth",
                      style: { backgroundColor: "#F5A623", color: "#0D2B6B" },
                      "data-ocid": "immobilier.hero.primary_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-paper-plane" }),
                        "Décrire mon projet"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#services",
                      className: "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth",
                      style: {
                        backgroundColor: "rgba(255,255,255,0.12)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        color: "#fff"
                      },
                      "data-ocid": "immobilier.hero.secondary_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-list" }),
                        "Nos services"
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center", children: [
      { icon: "fa-home", value: "500+", label: "Propriétés gérées" },
      { icon: "fa-users", value: "300+", label: "Clients satisfaits" },
      {
        icon: "fa-map-location-dot",
        value: "15+",
        label: "Zones couvertes"
      },
      { icon: "fa-award", value: "5+", label: "Années d'expertise" }
    ].map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        "data-ocid": `immobilier.stat.${i + 1}`,
        className: "flex flex-col items-center gap-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "i",
            {
              className: `fas ${stat.icon} text-xl`,
              style: { color: "#F5A623" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "font-display text-2xl",
              style: { color: "#0D2B6B" },
              children: stat.value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-body text-xs text-muted-foreground", children: stat.label })
        ]
      },
      stat.label
    )) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "services",
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-background",
        "data-ocid": "immobilier.services_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.2em] mb-2 font-display",
                style: { color: "#1A75BC" },
                children: "Nos Services"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "text-3xl sm:text-4xl font-display mb-4",
                style: { color: "#0D2B6B" },
                children: [
                  "Solutions Immobilières",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F5A623" }, children: "Complètes" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-1 mx-auto rounded-full mb-4",
                style: { backgroundColor: "#F5A623" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-muted-foreground max-w-xl mx-auto text-sm", children: "De la recherche de bien à la gestion locative, nous vous accompagnons à chaque étape de votre projet." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "group p-7 rounded-2xl border-2 transition-smooth card-hover bg-card flex flex-col gap-3",
              style: {
                borderColor: "#F4F6F9",
                borderTop: "4px solid #F5A623"
              },
              onMouseEnter: (el) => {
                el.currentTarget.style.borderColor = "#1A75BC";
                el.currentTarget.style.borderTop = "4px solid #F5A623";
              },
              onMouseLeave: (el) => {
                el.currentTarget.style.borderColor = "#F4F6F9";
                el.currentTarget.style.borderTop = "4px solid #F5A623";
              },
              "data-aos": "fade-up",
              "data-aos-delay": `${s.delay}`,
              "data-ocid": `immobilier.service_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl text-center mb-1", children: s.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-12 rounded-xl flex items-center justify-center mx-auto transition-smooth group-hover:scale-110",
                    style: { backgroundColor: "rgba(13,43,107,0.1)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "i",
                      {
                        className: `fas ${s.icon} text-xl`,
                        style: { color: "#0D2B6B" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-base font-display text-center mb-1",
                    style: { color: "#0D2B6B" },
                    children: s.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-body leading-relaxed text-center",
                    style: { color: "#5a6170" },
                    children: s.desc
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5 pt-3 border-t border-border mt-auto", children: s.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-xs font-body",
                    style: { color: "#666" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: "fas fa-check-circle mt-0.5 flex-shrink-0",
                          style: { color: "#F5A623" }
                        }
                      ),
                      b
                    ]
                  },
                  b
                )) })
              ]
            },
            s.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 sm:px-6 lg:px-8",
        style: { backgroundColor: "#0D2B6B" },
        "data-ocid": "immobilier.whyus_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl text-white mb-2", children: "Pourquoi nous faire confiance ?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-1 mx-auto rounded-full",
                style: { backgroundColor: "#F5A623" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            {
              icon: "fa-shield-halved",
              title: "Transparence totale",
              desc: "Tous nos biens disposent de titres fonciers vérifiés. Zéro mauvaise surprise."
            },
            {
              icon: "fa-handshake",
              title: "Accompagnement personnalisé",
              desc: "Un conseiller dédié vous suit du premier contact jusqu'à la signature."
            },
            {
              icon: "fa-star",
              title: "Expertise locale",
              desc: "Plus de 5 ans de présence à Dakar, une connaissance unique du marché sénégalais."
            }
          ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center text-white",
              "data-aos": "fade-up",
              "data-aos-delay": `${i * 100}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4",
                    style: {
                      backgroundColor: "rgba(245,166,35,0.15)",
                      border: "1px solid rgba(245,166,35,0.3)"
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "i",
                      {
                        className: `fas ${item.icon} text-2xl`,
                        style: { color: "#F5A623" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base mb-2", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm",
                    style: { color: "rgba(255,255,255,0.75)" },
                    children: item.desc
                  }
                )
              ]
            },
            item.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 sm:px-6 lg:px-8",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "immobilier.zones_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block text-xs font-body font-semibold uppercase tracking-widest mb-3",
                style: { color: "#1A75BC" },
                children: "Couverture géographique"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "text-2xl sm:text-3xl font-display mb-2",
                style: { color: "#0D2B6B" },
                children: [
                  "Nos Zones d'Intervention à",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F5A623" }, children: "Dakar" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-12 h-1 mx-auto rounded-full mb-3",
                style: { backgroundColor: "#F5A623" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body", style: { color: "#666" }, children: "Nous couvrons les principales zones de Dakar et sa banlieue" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex flex-wrap gap-3 justify-center",
              "data-aos": "fade-up",
              "data-aos-delay": "100",
              children: zonesData.map((z, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "inline-flex items-center gap-2 px-4 py-2 rounded-full font-body font-medium text-sm transition-smooth cursor-default",
                  style: {
                    backgroundColor: "rgba(26,117,188,0.08)",
                    color: "#0D2B6B",
                    border: "1px solid rgba(26,117,188,0.25)"
                  },
                  "data-ocid": `immobilier.zone_badge.${i + 1}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: z.emoji }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: z.name })
                  ]
                },
                z.name
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10", children: zonesData.slice(0, 8).map((z, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-5 text-center shadow-card card-hover",
              "data-aos": "zoom-in",
              "data-aos-delay": `${i * 70}`,
              "data-ocid": `immobilier.zone_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: z.emoji }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display text-sm font-bold",
                    style: { color: "#0D2B6B" },
                    children: z.name
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs mt-1", style: { color: "#888" }, children: z.type })
              ]
            },
            `${z.name}-card`
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", "data-aos": "fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h2",
          {
            className: "text-2xl sm:text-3xl font-display mb-2",
            style: { color: "#0D2B6B" },
            children: [
              "Comment ça ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F5A623" }, children: "fonctionne ?" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-12 h-1 mx-auto rounded-full",
            style: { backgroundColor: "#F5A623" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        {
          step: "01",
          icon: "fa-phone",
          title: "Contactez-nous",
          desc: "Remplissez le formulaire ou appelez-nous. Un conseiller vous répond sous 24h."
        },
        {
          step: "02",
          icon: "fa-search",
          title: "Analyse du projet",
          desc: "Nous étudions votre besoin et sélectionnons les meilleures offres adaptées à votre profil."
        },
        {
          step: "03",
          icon: "fa-file-signature",
          title: "Concrétisation",
          desc: "Visite, négociation et accompagnement complet jusqu'à la signature définitive."
        }
      ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative text-center",
          "data-aos": "fade-up",
          "data-aos-delay": `${i * 120}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "text-5xl font-display font-black mb-4",
                style: { color: "rgba(13,43,107,0.08)" },
                children: item.step
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-2xl flex items-center justify-center mx-auto -mt-10 mb-4 shadow-card",
                style: { backgroundColor: "#1A75BC" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${item.icon} text-white text-xl` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h3",
              {
                className: "font-display text-base mb-2",
                style: { color: "#0D2B6B" },
                children: item.title
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed", children: item.desc }),
            i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden md:block absolute top-16 left-full w-8 -translate-x-4",
                style: { color: "#D1D9E0" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-arrow-right text-lg" })
              }
            )
          ]
        },
        item.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "formulaire",
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-background",
        "data-ocid": "immobilier.form_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4",
                style: { backgroundColor: "rgba(13,43,107,0.1)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏠" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.2em] mb-2 font-display",
                style: { color: "#1A75BC" },
                children: "Nous Contacter"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "text-3xl sm:text-4xl font-display mb-4",
                style: { color: "#0D2B6B" },
                children: [
                  "Décrivez votre projet",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F5A623" }, children: "immobilier" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-1 mx-auto rounded-full",
                style: { backgroundColor: "#F5A623" }
              }
            )
          ] }),
          submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center p-10 rounded-2xl border-2",
              style: { backgroundColor: "#F4F6F9", borderColor: "#22c55e33" },
              "data-ocid": "immobilier.form.success_state",
              "data-aos": "zoom-in",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4",
                    style: { backgroundColor: "#22c55e15" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "i",
                      {
                        className: "fas fa-check-circle text-4xl",
                        style: { color: "#22c55e" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl font-display mb-2",
                    style: { color: "#0D2B6B" },
                    children: "Message envoyé avec succès !"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-body", style: { color: "#666" }, children: "Notre équipe immobilier vous contactera dans les plus brefs délais." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "mt-6 btn-primary px-8",
                    onClick: () => setSubmitted(false),
                    "data-ocid": "immobilier.form.new_request_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-plus mr-2" }),
                      "Nouvelle demande"
                    ]
                  }
                )
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: handleSubmit,
              className: "space-y-5 bg-card p-8 rounded-2xl shadow-card border border-border",
              "data-aos": "fade-up",
              "data-aos-delay": "100",
              "data-ocid": "immobilier.contact_form",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "immo-nom",
                        className: "block text-sm font-semibold mb-1.5 font-display",
                        style: { color: "#0D2B6B" },
                        children: [
                          "Nom complet ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C0392B" }, children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "immo-nom",
                        type: "text",
                        name: "nom",
                        required: true,
                        value: form.nom,
                        onChange: handleChange,
                        placeholder: "Votre nom complet",
                        className: inputCls,
                        style: inputStyle,
                        "data-ocid": "immobilier.form.nom_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "label",
                      {
                        htmlFor: "immo-telephone",
                        className: "block text-sm font-semibold mb-1.5 font-display",
                        style: { color: "#0D2B6B" },
                        children: [
                          "Téléphone ",
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C0392B" }, children: "*" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "immo-telephone",
                        type: "tel",
                        name: "telephone",
                        required: true,
                        value: form.telephone,
                        onChange: handleChange,
                        placeholder: "+221 77 000 00 00",
                        className: inputCls,
                        style: inputStyle,
                        "data-ocid": "immobilier.form.telephone_input"
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "immo-email",
                      className: "block text-sm font-semibold mb-1.5 font-display",
                      style: { color: "#0D2B6B" },
                      children: [
                        "Adresse email ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C0392B" }, children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      id: "immo-email",
                      type: "email",
                      name: "email",
                      required: true,
                      value: form.email,
                      onChange: handleChange,
                      placeholder: "votre@email.com",
                      className: inputCls,
                      style: inputStyle,
                      "data-ocid": "immobilier.form.email_input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "immo-typeBien",
                        className: "block text-sm font-semibold mb-1.5 font-display",
                        style: { color: "#0D2B6B" },
                        children: "Type de bien"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "immo-typeBien",
                        name: "typeBien",
                        value: form.typeBien,
                        onChange: handleChange,
                        className: `${inputCls} appearance-none cursor-pointer`,
                        style: {
                          ...inputStyle,
                          color: form.typeBien ? "#1a202c" : "#9ca3af"
                        },
                        "data-ocid": "immobilier.form.typeBien_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Sélectionnez —" }),
                          bienOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "immo-transaction",
                        className: "block text-sm font-semibold mb-1.5 font-display",
                        style: { color: "#0D2B6B" },
                        children: "Type de transaction"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "immo-transaction",
                        name: "transaction",
                        value: form.transaction,
                        onChange: handleChange,
                        className: `${inputCls} appearance-none cursor-pointer`,
                        style: {
                          ...inputStyle,
                          color: form.transaction ? "#1a202c" : "#9ca3af"
                        },
                        "data-ocid": "immobilier.form.transaction_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Sélectionnez —" }),
                          transactionOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "immo-localisation",
                        className: "block text-sm font-semibold mb-1.5 font-display",
                        style: { color: "#0D2B6B" },
                        children: "Localisation souhaitée"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "input",
                      {
                        id: "immo-localisation",
                        type: "text",
                        name: "localisation",
                        value: form.localisation,
                        onChange: handleChange,
                        placeholder: "Ex: Almadies, Mermoz, Liberté 6...",
                        className: inputCls,
                        style: inputStyle,
                        "data-ocid": "immobilier.form.localisation_input"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "label",
                      {
                        htmlFor: "immo-budget",
                        className: "block text-sm font-semibold mb-1.5 font-display",
                        style: { color: "#0D2B6B" },
                        children: "Budget"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "select",
                      {
                        id: "immo-budget",
                        name: "budget",
                        value: form.budget,
                        onChange: handleChange,
                        className: `${inputCls} appearance-none cursor-pointer`,
                        style: {
                          ...inputStyle,
                          color: form.budget ? "#1a202c" : "#9ca3af"
                        },
                        "data-ocid": "immobilier.form.budget_select",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "— Sélectionnez —" }),
                          budgetOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                        ]
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "immo-typeService",
                      className: "block text-sm font-semibold mb-1.5 font-display",
                      style: { color: "#0D2B6B" },
                      children: [
                        "Type de service ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C0392B" }, children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "select",
                    {
                      id: "immo-typeService",
                      name: "typeService",
                      required: true,
                      value: form.typeService,
                      onChange: handleChange,
                      className: `${inputCls} appearance-none cursor-pointer`,
                      style: {
                        ...inputStyle,
                        color: form.typeService ? "#1a202c" : "#9ca3af"
                      },
                      "data-ocid": "immobilier.form.typeService_select",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, children: "Sélectionnez un service" }),
                        typeOptions.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "label",
                    {
                      htmlFor: "immo-message",
                      className: "block text-sm font-semibold mb-1.5 font-display",
                      style: { color: "#0D2B6B" },
                      children: [
                        "Votre projet ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#C0392B" }, children: "*" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "textarea",
                    {
                      id: "immo-message",
                      name: "message",
                      required: true,
                      rows: 4,
                      value: form.message,
                      onChange: handleChange,
                      placeholder: "Décrivez votre projet immobilier : localisation, budget, délais, besoins spécifiques…",
                      className: `${inputCls} resize-none`,
                      style: inputStyle,
                      "data-ocid": "immobilier.form.message_textarea"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: isPending,
                    className: "btn-primary w-full py-4 rounded-xl text-base",
                    "data-ocid": "immobilier.form.submit_button",
                    children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-spinner fa-spin mr-2" }),
                      "Envoi en cours..."
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-paper-plane mr-2" }),
                      "Envoyer la demande"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs text-center font-body",
                    style: { color: "#999" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-clock mr-1", style: { color: "#F5A623" } }),
                      "* Notre conseiller immobilier vous recontacte sous 24h"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-xs text-center font-body",
                    style: { color: "#999" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-lock mr-1" }),
                      "Vos informations sont confidentielles et protégées."
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-16 px-4 text-center",
        style: {
          background: "linear-gradient(135deg, #0D2B6B 0%, #1A3A7A 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "i",
            {
              className: "fas fa-building text-4xl mb-5 block",
              style: { color: "#F5A623" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-white text-3xl md:text-4xl mb-4", children: "Concrétisons votre projet immobilier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-body text-lg leading-relaxed mb-8",
              style: { color: "rgba(255,255,255,0.82)" },
              children: "Notre équipe d'experts est disponible pour vous guider dans votre investissement."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+221338210181",
                "data-ocid": "immobilier.cta.phone_button",
                className: "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth",
                style: { backgroundColor: "#F5A623", color: "#0D2B6B" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa-solid fa-phone" }),
                  "33 821 01 81"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/contact",
                "data-ocid": "immobilier.cta.contact_link",
                className: "inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth",
                style: {
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  color: "#fff"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa-solid fa-envelope" }),
                  "Nous écrire"
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}
export {
  ImmobilierPage
};
