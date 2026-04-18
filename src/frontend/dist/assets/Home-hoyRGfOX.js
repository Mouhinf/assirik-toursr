import { j as jsxRuntimeExports, L as Link, r as reactExports } from "./index-C4d48glV.js";
const departments = [
  {
    id: "voyages",
    title: "Voyages",
    subtitle: "Explorez le monde",
    description: "Billets d'avion, assistance visa, circuits touristiques, transferts aéroport et réservations hôtels au meilleur prix.",
    icon: "fa-plane",
    href: "/voyages",
    accentColor: "#1A75BC",
    bgLight: "rgba(26,117,188,0.08)"
  },
  {
    id: "immobilier",
    title: "Immobilier",
    subtitle: "Trouvez votre chez-vous",
    description: "Vente de terrains et maisons, location, gestion locative, expertise et conseil en investissement immobilier.",
    icon: "fa-building",
    href: "/immobilier",
    accentColor: "#0D2B6B",
    bgLight: "rgba(13,43,107,0.08)"
  },
  {
    id: "nettoiement",
    title: "Nettoiement",
    subtitle: "Propreté & Excellence",
    description: "Services professionnels de nettoyage pour bureaux, hôtels, hôpitaux, industries et espaces verts depuis 2019.",
    icon: "fa-broom",
    href: "/nettoiement",
    accentColor: "#F5A623",
    bgLight: "rgba(245,166,35,0.08)"
  }
];
const stats = [
  {
    value: "500+",
    label: "Clients Voyages",
    emoji: "✈️",
    icon: "fa-plane",
    desc: "Voyageurs satisfaits depuis notre création."
  },
  {
    value: "200+",
    label: "Propriétés Gérées",
    emoji: "🏠",
    icon: "fa-building",
    desc: "Biens immobiliers vendus, loués et gérés."
  },
  {
    value: "98%",
    label: "Satisfaction Client",
    emoji: "⭐",
    icon: "fa-star",
    desc: "Taux de satisfaction mesuré auprès de nos clients."
  },
  {
    value: "Depuis 2019",
    label: "ATN Nettoyage",
    emoji: "🧹",
    icon: "fa-broom",
    desc: "Plus de 5 ans d'expertise en propreté professionnelle."
  }
];
const values = [
  {
    icon: "fa-award",
    title: "Expertise",
    desc: "Des professionnels qualifiés et expérimentés dans chaque domaine d'activité."
  },
  {
    icon: "fa-gem",
    title: "Qualité",
    desc: "Des prestations soignées qui respectent les normes les plus exigeantes."
  },
  {
    icon: "fa-handshake",
    title: "Proximité",
    desc: "Un service personnalisé et une relation de confiance durable avec chaque client."
  },
  {
    icon: "fa-tag",
    title: "Prix abordables",
    desc: "Des tarifs compétitifs sans aucun compromis sur la qualité du service."
  }
];
const testimonials = [
  {
    name: "Abdoulaye K.",
    role: "Client Voyages",
    dept: "Voyages",
    text: "Service impeccable ! Assirik Tours a géré notre voyage de noces à Dubai avec un professionnalisme remarquable. Chaque détail était parfait.",
    rating: 5,
    initials: "AK",
    color: "#1A75BC"
  },
  {
    name: "Mariama S.",
    role: "Cliente Immobilier",
    dept: "Immobilier",
    text: "Grâce à Assirik Immobilier, nous avons trouvé notre maison idéale à Mermoz. Service rapide et efficace, je recommande vivement !",
    rating: 5,
    initials: "MS",
    color: "#0D2B6B"
  },
  {
    name: "Ibrahima D.",
    role: "Client Nettoyage",
    dept: "Nettoiement",
    text: "Les équipes ATN interviennent chaque semaine dans nos locaux. Un travail irréprochable et discret. Toujours ponctuels et professionnels.",
    rating: 5,
    initials: "ID",
    color: "#F5A623"
  },
  {
    name: "Fatima B.",
    role: "Cliente Voyages",
    dept: "Voyages",
    text: "J'ai obtenu mon visa Schengen grâce à leur assistance visa. Très professionnel et réactif. Ils ont géré tous les documents en un temps record.",
    rating: 5,
    initials: "FB",
    color: "#1A75BC"
  },
  {
    name: "Seydou N.",
    role: "Propriétaire Immobilier",
    dept: "Immobilier",
    text: "Excellent service de gestion locative. Ils s'occupent de tout, je reçois mes loyers sans souci. Une confiance totale en leur expertise.",
    rating: 5,
    initials: "SN",
    color: "#0D2B6B"
  }
];
const destinations = [
  {
    name: "Paris",
    country: "France",
    emoji: "🗼",
    image: "/assets/generated/dest-paris.dim_600x400.jpg",
    overlay: "linear-gradient(to top, rgba(13,43,107,0.85) 0%, rgba(13,43,107,0.3) 60%, transparent 100%)"
  },
  {
    name: "Dubai",
    country: "Émirats Arabes Unis",
    emoji: "🏙️",
    image: "/assets/generated/dest-dubai.dim_600x400.jpg",
    overlay: "linear-gradient(to top, rgba(180,100,0,0.85) 0%, rgba(180,100,0,0.3) 60%, transparent 100%)"
  },
  {
    name: "Istanbul",
    country: "Turquie",
    emoji: "🕌",
    image: "/assets/generated/dest-istanbul.dim_600x400.jpg",
    overlay: "linear-gradient(to top, rgba(150,30,20,0.85) 0%, rgba(150,30,20,0.3) 60%, transparent 100%)"
  },
  {
    name: "New York",
    country: "États-Unis",
    emoji: "🗽",
    image: "/assets/generated/dest-newyork.dim_600x400.jpg",
    overlay: "linear-gradient(to top, rgba(30,40,60,0.90) 0%, rgba(30,40,60,0.3) 60%, transparent 100%)"
  },
  {
    name: "Abidjan",
    country: "Côte d'Ivoire",
    emoji: "🌴",
    image: "/assets/generated/dest-abidjan.dim_600x400.jpg",
    overlay: "linear-gradient(to top, rgba(20,100,50,0.85) 0%, rgba(20,100,50,0.3) 60%, transparent 100%)"
  },
  {
    name: "Casablanca",
    country: "Maroc",
    emoji: "⭐",
    image: "/assets/generated/dest-casablanca.dim_600x400.jpg",
    overlay: "linear-gradient(to top, rgba(0,100,90,0.85) 0%, rgba(0,100,90,0.3) 60%, transparent 100%)"
  }
];
const howItWorks = [
  {
    step: "01",
    icon: "fa-magnifying-glass",
    emoji: "🔍",
    title: "Choisissez votre service",
    desc: "Sélectionnez parmi nos 3 départements : Voyages, Immobilier ou Nettoiement."
  },
  {
    step: "02",
    icon: "fa-file-lines",
    emoji: "📋",
    title: "Remplissez le formulaire",
    desc: "Décrivez votre besoin en quelques clics depuis notre formulaire en ligne."
  },
  {
    step: "03",
    icon: "fa-phone-volume",
    emoji: "📞",
    title: "Nous vous contactons",
    desc: "Notre équipe vous rappelle sous 24h pour affiner votre demande."
  },
  {
    step: "04",
    icon: "fa-circle-check",
    emoji: "✅",
    title: "Profitez du service",
    desc: "Bénéficiez de notre expertise pour un résultat à la hauteur de vos attentes."
  }
];
const featuredProperties = [
  {
    name: "Villa Almadies",
    location: "Almadies, Dakar",
    details: "4 chambres · Piscine · Standing",
    badge: "À VENDRE",
    badgeColor: "#F5A623",
    icon: "fa-house",
    price: "À partir de 85 000 000 FCFA",
    features: ["Jardin privé", "Sécurité 24h/24", "Vue mer"],
    image: "/assets/generated/property-villa-almadies.dim_600x400.jpg"
  },
  {
    name: "Appartement Mermoz",
    location: "Mermoz, Dakar",
    details: "3 pièces · Vue mer · Moderne",
    badge: "À LOUER",
    badgeColor: "#1A75BC",
    icon: "fa-building",
    price: "À partir de 350 000 FCFA/mois",
    features: ["Parking inclus", "Gardien", "Balcon"],
    image: "/assets/generated/property-appart-mermoz.dim_600x400.jpg"
  },
  {
    name: "Terrain Mbao",
    location: "Mbao, Dakar",
    details: "500m² · Viabilisé · Titre foncier",
    badge: "À VENDRE",
    badgeColor: "#F5A623",
    icon: "fa-map",
    price: "À partir de 12 000 000 FCFA",
    features: ["Eau & électricité", "Route bitumée", "Clôturé"],
    image: "/assets/generated/property-terrain-mbao.dim_600x400.jpg"
  }
];
const certifications = [
  {
    icon: "fa-id-badge",
    emoji: "🏛️",
    label: "Ninéa 007633250",
    sub: "République du Sénégal"
  },
  {
    icon: "fa-certificate",
    emoji: "✈️",
    label: "Licence n°07022012*0044126",
    sub: "Agence de Voyage agréée"
  },
  {
    icon: "fa-users",
    emoji: "⭐",
    label: "Membre ASAV",
    sub: "Association Sénégalaise des Agences de Voyage"
  }
];
function CounterStat({
  value,
  label,
  emoji,
  icon,
  desc,
  delay
}) {
  const [displayed, setDisplayed] = reactExports.useState("0");
  const ref = reactExports.useRef(null);
  const animated = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const numericMatch = value.match(/^(\d+)/);
    const suffix = value.replace(/^\d+/, "");
    if (!numericMatch) {
      setDisplayed(value);
      return;
    }
    const target = Number.parseInt(numericMatch[1], 10);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1500;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setDisplayed(Math.floor(eased * target) + suffix);
            if (progress < 1) requestAnimationFrame(step);
          };
          setTimeout(() => requestAnimationFrame(step), delay);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref,
      className: "bg-white rounded-2xl p-7 flex flex-col items-center text-center shadow-card",
      style: { borderTop: "4px solid #F5A623" },
      "data-aos": "zoom-in",
      "data-aos-delay": delay,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-3", "aria-hidden": "true", children: emoji }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "w-12 h-12 rounded-full flex items-center justify-center mb-4",
            style: { backgroundColor: "rgba(245,166,35,0.12)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${icon} text-lg`, style: { color: "#F5A623" } })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-3xl lg:text-4xl font-bold mb-1",
            style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
            children: displayed
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "text-sm font-bold mb-2",
            style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
            children: label
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-xs leading-relaxed",
            style: { color: "#777", fontFamily: "Open Sans, sans-serif" },
            children: desc
          }
        )
      ]
    }
  );
}
function HomePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "relative min-h-screen flex items-center justify-center overflow-hidden",
        style: { paddingTop: "80px" },
        "data-ocid": "home.hero_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                backgroundImage: "url(/assets/generated/hero-dakar-enhanced.dim_1920x1080.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(135deg, rgba(13,43,107,0.93) 0%, rgba(13,43,107,0.78) 50%, rgba(26,117,188,0.88) 100%)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/4 left-10 text-4xl opacity-20 pointer-events-none",
              style: { animation: "float 4s ease-in-out infinite" },
              "aria-hidden": "true",
              children: "✈️"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute top-1/3 right-12 text-3xl opacity-15 pointer-events-none",
              style: { animation: "float 5s ease-in-out infinite 1s" },
              "aria-hidden": "true",
              children: "🏢"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-1/3 left-1/4 text-2xl opacity-20 pointer-events-none",
              style: { animation: "float 3.5s ease-in-out infinite 0.5s" },
              "aria-hidden": "true",
              children: "✨"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute bottom-0 left-0 right-0 pointer-events-none",
              "aria-hidden": "true",
              style: { lineHeight: 0 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  "aria-hidden": "true",
                  viewBox: "0 0 1440 80",
                  xmlns: "http://www.w3.org/2000/svg",
                  preserveAspectRatio: "none",
                  style: { display: "block", width: "100%", height: "80px" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      d: "M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z",
                      fill: "#F4F6F9"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-aos": "fade-down", "data-aos-delay": "100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "/assets/logo.png",
                alt: "Assirik Tours — Agence de voyage, immobilier et nettoiement à Dakar",
                className: "h-20 lg:h-28 w-auto mx-auto mb-8 object-contain drop-shadow-lg"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-aos": "fade-up", "data-aos-delay": "250", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm lg:text-base font-semibold uppercase tracking-[0.35em] mb-5",
                  style: { color: "#F5A623", fontFamily: "Montserrat, sans-serif" },
                  children: "Bienvenue chez Assirik Tours — Dakar, Sénégal"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  className: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6",
                  style: { fontFamily: "Montserrat, sans-serif" },
                  children: [
                    "Voyager, ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#F5A623" }, children: "Habiter," }),
                    " ",
                    "Nettoyer",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3",
                        style: { color: "rgba(255,255,255,0.85)" },
                        children: "Assirik Tours à vos côtés"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-base lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed",
                  style: {
                    color: "rgba(255,255,255,0.85)",
                    fontFamily: "Open Sans, sans-serif"
                  },
                  children: "Votre partenaire de confiance pour vos voyages, investissements immobiliers et services de nettoyage au Sénégal."
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                "data-aos": "fade-up",
                "data-aos-delay": "450",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "#departments",
                      className: "btn-gold inline-flex items-center justify-center gap-2 px-9 py-4 rounded-lg text-base",
                      "data-ocid": "home.hero_cta_primary",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-compass" }),
                        "Découvrir nos services"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "btn-outline-white inline-flex items-center justify-center gap-2 px-9 py-4 rounded-lg text-base",
                      "data-ocid": "home.hero_cta_secondary",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-paper-plane" }),
                        "Nous contacter"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mt-14 flex flex-wrap items-center justify-center gap-6",
                "data-aos": "fade-up",
                "data-aos-delay": "600",
                children: [
                  { icon: "fa-certificate", label: "Agence agréée" },
                  { icon: "fa-map-marker-alt", label: "Dakar, Sénégal" },
                  { icon: "fa-clock", label: "Disponible 6j/7" }
                ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 text-sm",
                    style: { color: "rgba(255,255,255,0.7)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: `fas ${t.icon} text-xs`,
                          style: { color: "#F5A623" }
                        }
                      ),
                      t.label
                    ]
                  },
                  t.label
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#departments",
              className: "absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce z-10",
              style: { color: "#F5A623" },
              "aria-label": "Défiler vers le bas",
              "data-ocid": "home.scroll_arrow",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-chevron-down text-2xl drop-shadow" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        id: "departments",
        className: "py-24 px-4 sm:px-6 lg:px-8",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "home.departments_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Nos Services"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl lg:text-4xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Trois Départements, Une Vision"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-1 mx-auto rounded-full",
                style: { backgroundColor: "#F5A623" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-5 text-base max-w-xl mx-auto",
                style: { color: "#555", fontFamily: "Open Sans, sans-serif" },
                children: "Assirik Tours regroupe trois pôles d'excellence pour répondre à tous vos besoins, en un seul partenaire de confiance."
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: departments.map((dept, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: dept.href,
              className: "group bg-white rounded-2xl p-8 shadow-card card-hover text-center block",
              "data-aos": "fade-up",
              "data-aos-delay": `${i * 150}`,
              "data-ocid": `home.dept_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110",
                    style: { backgroundColor: dept.bgLight },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "i",
                      {
                        className: `fas ${dept.icon} text-3xl`,
                        style: { color: dept.accentColor }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-xl font-bold mb-1",
                    style: {
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif"
                    },
                    children: dept.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-semibold mb-4",
                    style: {
                      color: "#F5A623",
                      fontFamily: "Montserrat, sans-serif"
                    },
                    children: dept.subtitle
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm leading-relaxed",
                    style: { color: "#555", fontFamily: "Open Sans, sans-serif" },
                    children: dept.description
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-smooth group-hover:gap-3",
                    style: {
                      color: "#1A75BC",
                      fontFamily: "Montserrat, sans-serif"
                    },
                    children: [
                      "Découvrir",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-arrow-right text-xs transition-smooth group-hover:translate-x-1" })
                    ]
                  }
                )
              ]
            },
            dept.id
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
        "data-ocid": "home.stats_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Assirik Tours en chiffres"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl lg:text-4xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Des résultats qui parlent d'eux-mêmes"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: stats.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CounterStat,
            {
              value: stat.value,
              label: stat.label,
              emoji: stat.emoji,
              icon: stat.icon,
              desc: stat.desc,
              delay: i * 120
            },
            stat.label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 px-4 sm:px-6 lg:px-8",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "home.destinations_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Voyages"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl lg:text-4xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Destinations Populaires"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-1 mx-auto rounded-full",
                style: { backgroundColor: "#F5A623" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-5 text-base max-w-xl mx-auto",
                style: { color: "#555", fontFamily: "Open Sans, sans-serif" },
                children: "Explorez nos destinations phares au départ de Dakar"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6", children: destinations.map((dest, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "rounded-2xl overflow-hidden shadow-card card-hover relative group",
              style: { minHeight: "220px" },
              "data-aos": "fade-up",
              "data-aos-delay": `${i * 80}`,
              "data-ocid": `home.destination_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: dest.image,
                    alt: `${dest.name} - ${dest.country}`,
                    className: "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute inset-0",
                    style: { background: dest.overlay },
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative z-10 p-6 flex flex-col items-center text-center h-full justify-end",
                    style: { minHeight: "220px" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "text-4xl mb-2 drop-shadow-lg",
                          "aria-hidden": "true",
                          children: dest.emoji
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "h3",
                        {
                          className: "text-lg font-bold text-white drop-shadow-md",
                          style: { fontFamily: "Montserrat, sans-serif" },
                          children: dest.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "text-xs mb-4 drop-shadow",
                          style: { color: "rgba(255,255,255,0.82)" },
                          children: dest.country
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        Link,
                        {
                          to: "/voyages",
                          className: "inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-90 backdrop-blur-sm",
                          style: {
                            backgroundColor: "rgba(255,255,255,0.22)",
                            border: "1px solid rgba(255,255,255,0.45)",
                            color: "#fff",
                            fontFamily: "Montserrat, sans-serif"
                          },
                          "data-ocid": `home.destination_cta.${i + 1}`,
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-paper-plane text-xs" }),
                            "Demander un devis"
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            },
            dest.name
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", "data-aos": "fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/voyages",
              className: "inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3",
              style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
              "data-ocid": "home.destinations_all_link",
              children: [
                "Voir tous nos voyages ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-arrow-right text-xs" })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 px-4 sm:px-6 lg:px-8 bg-white",
        "data-ocid": "home.howitworks_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Simple & Rapide"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl lg:text-4xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Comment ça marche ?"
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0",
                style: {
                  borderTop: "2px dashed rgba(245,166,35,0.4)"
                },
                "aria-hidden": "true"
              }
            ),
            howItWorks.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative z-10 flex flex-col items-center text-center p-6 rounded-2xl",
                style: { backgroundColor: "#F4F6F9" },
                "data-aos": "fade-up",
                "data-aos-delay": `${i * 120}`,
                "data-ocid": `home.howto_step.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm shadow-lg",
                      style: {
                        backgroundColor: "#F5A623",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: step.step
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-3", "aria-hidden": "true", children: step.emoji }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                      style: { backgroundColor: "rgba(13,43,107,0.07)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: `fas ${step.icon} text-lg`,
                          style: { color: "#0D2B6B" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-sm font-bold mb-2",
                      style: {
                        color: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: step.title
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs leading-relaxed",
                      style: { color: "#666", fontFamily: "Open Sans, sans-serif" },
                      children: step.desc
                    }
                  )
                ]
              },
              step.step
            ))
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-12", "data-aos": "fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "btn-gold inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm",
              "data-ocid": "home.howitworks_cta",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-paper-plane" }),
                "Démarrer ma demande"
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 px-4 sm:px-6 lg:px-8",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "home.properties_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Immobilier"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl lg:text-4xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Biens en Vedette"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-1 mx-auto rounded-full",
                style: { backgroundColor: "#F5A623" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-5 text-base max-w-xl mx-auto",
                style: { color: "#555", fontFamily: "Open Sans, sans-serif" },
                children: "Découvrez notre sélection de propriétés à Dakar et environs"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: featuredProperties.map((prop, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white rounded-2xl overflow-hidden shadow-card card-hover group",
              "data-aos": "fade-up",
              "data-aos-delay": `${i * 120}`,
              "data-ocid": `home.property_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-48 overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: prop.image,
                      alt: `${prop.name} — ${prop.details}`,
                      className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        background: "linear-gradient(to top, rgba(13,43,107,0.6) 0%, transparent 60%)"
                      },
                      "aria-hidden": "true"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg",
                      style: {
                        backgroundColor: prop.badgeColor,
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: prop.badge
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-9 h-9 rounded-lg flex items-center justify-center",
                      style: {
                        backgroundColor: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(4px)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${prop.icon} text-white text-base` })
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "h3",
                    {
                      className: "text-lg font-bold mb-1",
                      style: {
                        color: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: prop.name
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "p",
                    {
                      className: "text-xs mb-1 flex items-center gap-1",
                      style: {
                        color: "#1A75BC",
                        fontFamily: "Open Sans, sans-serif"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-map-marker-alt text-xs" }),
                        prop.location
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm mb-3",
                      style: {
                        color: "#666",
                        fontFamily: "Open Sans, sans-serif"
                      },
                      children: prop.details
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: prop.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "span",
                    {
                      className: "text-xs px-2 py-1 rounded-md",
                      style: {
                        backgroundColor: "#F4F6F9",
                        color: "#555",
                        fontFamily: "Open Sans, sans-serif"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "i",
                          {
                            className: "fas fa-check text-xs mr-1",
                            style: { color: "#F5A623" }
                          }
                        ),
                        f
                      ]
                    },
                    f
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-bold mb-4",
                      style: {
                        color: "#F5A623",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: prop.price
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/immobilier",
                      className: "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90",
                      style: {
                        backgroundColor: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      "data-ocid": `home.property_cta.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-info-circle text-xs" }),
                        "Plus d'infos"
                      ]
                    }
                  )
                ] })
              ]
            },
            `${prop.name}`
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10", "data-aos": "fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/immobilier",
              className: "inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3",
              style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
              "data-ocid": "home.properties_all_link",
              children: [
                "Voir tous nos biens ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-arrow-right text-xs" })
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 px-4 sm:px-6 lg:px-8 bg-white",
        "data-ocid": "home.why_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Pourquoi nous choisir"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl lg:text-4xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Notre Engagement Qualité"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center p-8 rounded-2xl border-2 border-transparent transition-smooth hover:shadow-card",
              style: { backgroundColor: "#F4F6F9" },
              "data-aos": "fade-up",
              "data-aos-delay": `${i * 100}`,
              "data-ocid": `home.value_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5",
                    style: { backgroundColor: "rgba(245,166,35,0.12)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "i",
                      {
                        className: `fas ${v.icon} text-2xl`,
                        style: { color: "#F5A623" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "text-lg font-bold mb-3",
                    style: {
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif"
                    },
                    children: v.title
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm leading-relaxed",
                    style: { color: "#666", fontFamily: "Open Sans, sans-serif" },
                    children: v.desc
                  }
                )
              ]
            },
            v.title
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 px-4 sm:px-6 lg:px-8",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "home.testimonials_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Témoignages"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl lg:text-4xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Nos Clients Témoignent"
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "bg-white rounded-2xl p-8 shadow-card relative",
              "data-aos": "fade-up",
              "data-aos-delay": `${i * 100}`,
              "data-ocid": `home.testimonial_card.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "absolute top-4 right-6 text-7xl font-bold leading-none pointer-events-none select-none",
                    style: { color: "rgba(245,166,35,0.13)" },
                    "aria-hidden": "true",
                    children: '"'
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4", children: Array.from({ length: t.rating }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "i",
                  {
                    className: "fas fa-star text-sm",
                    style: { color: "#F5A623" }
                  },
                  `star-${t.name}-${j}`
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3",
                    style: {
                      backgroundColor: `${t.color}15`,
                      color: t.color,
                      fontFamily: "Montserrat, sans-serif"
                    },
                    children: t.dept
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "p",
                  {
                    className: "text-sm leading-relaxed mb-7 italic",
                    style: { color: "#555", fontFamily: "Open Sans, sans-serif" },
                    children: [
                      '"',
                      t.text,
                      '"'
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 pt-4 border-t",
                    style: { borderColor: "#F4F6F9" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold shadow-md",
                          style: {
                            backgroundColor: t.color,
                            fontFamily: "Montserrat, sans-serif"
                          },
                          children: t.initials
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm font-bold",
                            style: {
                              color: "#0D2B6B",
                              fontFamily: "Montserrat, sans-serif"
                            },
                            children: t.name
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-xs",
                            style: {
                              color: "#888",
                              fontFamily: "Open Sans, sans-serif"
                            },
                            children: t.role
                          }
                        )
                      ] })
                    ]
                  }
                )
              ]
            },
            `${t.name}-${i}`
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-white",
        "data-ocid": "home.certifications_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", "data-aos": "fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "text-sm font-semibold uppercase tracking-[0.25em] mb-2",
                style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                children: "Confiance & Légitimité"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h2",
              {
                className: "text-3xl font-bold mb-4",
                style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                children: "Certifications & Agréments"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-1 mx-auto rounded-full",
                style: { backgroundColor: "#F5A623" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "mt-4 text-sm max-w-lg mx-auto",
                style: { color: "#666", fontFamily: "Open Sans, sans-serif" },
                children: "Agence officielle agréée par les autorités sénégalaises compétentes"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-5", children: certifications.map((cert, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center gap-4 px-6 py-5 rounded-xl border-2 shadow-sm transition-all duration-200 hover:shadow-md",
              style: {
                borderColor: "#0D2B6B",
                backgroundColor: "#ffffff"
              },
              "data-aos": "zoom-in",
              "data-aos-delay": `${i * 80}`,
              "data-ocid": `home.cert_badge.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl",
                    style: { backgroundColor: "rgba(13,43,107,0.06)" },
                    children: cert.emoji
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-lg flex items-center justify-center mb-1",
                      style: { backgroundColor: "rgba(245,166,35,0.12)" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: `fas ${cert.icon} text-base`,
                          style: { color: "#F5A623" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-bold",
                      style: {
                        color: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: cert.label
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-xs",
                      style: {
                        color: "#888",
                        fontFamily: "Open Sans, sans-serif"
                      },
                      children: cert.sub
                    }
                  )
                ] })
              ]
            },
            cert.label
          )) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden",
        style: { backgroundColor: "#0D2B6B" },
        "data-ocid": "home.cta_section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute inset-0 opacity-5 pointer-events-none",
              style: {
                backgroundImage: "repeating-linear-gradient(45deg, #F5A623 0px, #F5A623 1px, transparent 1px, transparent 20px)"
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "max-w-3xl mx-auto text-center relative z-10",
              "data-aos": "fade-up",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",
                    style: { backgroundColor: "rgba(245,166,35,0.15)" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "i",
                      {
                        className: "fas fa-envelope-open-text text-4xl",
                        style: { color: "#F5A623" }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-3xl lg:text-4xl font-bold mb-4 text-white",
                    style: { fontFamily: "Montserrat, sans-serif" },
                    children: "Prêts à travailler ensemble ?"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-lg mb-10 leading-relaxed",
                    style: {
                      color: "rgba(255,255,255,0.78)",
                      fontFamily: "Open Sans, sans-serif"
                    },
                    children: "Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et personnalisé. Notre équipe est à votre écoute 6j/7."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Link,
                    {
                      to: "/contact",
                      className: "btn-gold inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg text-base",
                      "data-ocid": "home.bottom_cta_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-paper-plane" }),
                        "Contactez-nous maintenant"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: "tel:+22133821018",
                      className: "btn-outline-white inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg text-base",
                      "data-ocid": "home.phone_cta_button",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fas fa-phone-alt" }),
                        "Appelez-nous"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "mt-12 pt-10 border-t flex flex-wrap justify-center gap-8",
                    style: { borderColor: "rgba(255,255,255,0.12)" },
                    "data-aos": "fade-up",
                    "data-aos-delay": "200",
                    children: [
                      { icon: "fa-certificate", label: "Ninéa 007633250" },
                      { icon: "fa-id-badge", label: "Licence n°07022012*0044126" },
                      { icon: "fa-map-marker-alt", label: "Dakar, Sénégal" }
                    ].map((badge) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "flex items-center gap-2 text-sm",
                        style: {
                          color: "rgba(255,255,255,0.65)",
                          fontFamily: "Open Sans, sans-serif"
                        },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "i",
                            {
                              className: `fas ${badge.icon}`,
                              style: { color: "#F5A623" }
                            }
                          ),
                          badge.label
                        ]
                      },
                      badge.label
                    ))
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
export {
  HomePage
};
