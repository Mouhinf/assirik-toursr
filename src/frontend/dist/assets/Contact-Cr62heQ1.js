import { r as reactExports, j as jsxRuntimeExports } from "./index-C4d48glV.js";
import { c as useSubmitContact } from "./useBackend-C3I4X0wm.js";
const emptyForm = {
  nom: "",
  email: "",
  telephone: "",
  message: ""
};
const departments = [
  { label: "Voyages", href: "/voyages", icon: "fa-plane" },
  { label: "Immobilier", href: "/immobilier", icon: "fa-building" },
  { label: "Nettoiement (ATN)", href: "/nettoiement", icon: "fa-broom" }
];
const quickActions = [
  {
    emoji: "📞",
    label: "Appeler Maintenant",
    value: "33 821 01 81",
    href: "tel:+221338210181",
    bg: "#0D2B6B",
    type: "link"
  },
  {
    emoji: "💬",
    label: "Écrire sur WhatsApp",
    value: "77 549 53 14",
    href: "https://wa.me/221775495314",
    bg: "#16a34a",
    type: "external"
  },
  {
    emoji: "✉️",
    label: "Envoyer un Email",
    value: "assiriktours@gmail.com",
    href: "mailto:assiriktours@gmail.com",
    bg: "#1A75BC",
    type: "link"
  }
];
const officeHours = [
  { day: "Lundi — Vendredi", hours: "08h00 — 18h00", closed: false },
  { day: "Samedi", hours: "09h00 — 13h00", closed: false },
  { day: "Dimanche", hours: "Fermé (urgences WhatsApp)", closed: true }
];
function setStyle(el, prop, val) {
  el.style[prop] = val;
}
function ContactPage() {
  const [form, setForm] = reactExports.useState(emptyForm);
  const [submitStatus, setSubmitStatus] = reactExports.useState("idle");
  const { mutate: submit, isPending } = useSubmitContact();
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("idle");
    submit(form, {
      onSuccess: () => {
        setSubmitStatus("success");
        setForm(emptyForm);
      },
      onError: () => setSubmitStatus("error")
    });
  };
  const focusInput = (e) => {
    setStyle(e.currentTarget, "borderColor", "#1A75BC");
  };
  const blurInput = (e) => {
    setStyle(e.currentTarget, "borderColor", "#d0d9e8");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-24 px-4 sm:px-6 lg:px-8",
        style: { background: "#0D2B6B" },
        "data-ocid": "contact.hero_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "max-w-5xl mx-auto text-center",
            "data-aos": "fade-up",
            "data-aos-duration": "700",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-sm font-semibold uppercase tracking-widest mb-4",
                  style: { color: "#F5A623", fontFamily: "Montserrat, sans-serif" },
                  children: "Assirik Tours"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h1",
                {
                  className: "text-4xl lg:text-5xl font-bold text-white mb-5",
                  style: { fontFamily: "Montserrat, sans-serif" },
                  children: "Contactez-Nous"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-lg max-w-2xl mx-auto",
                  style: {
                    color: "rgba(255,255,255,0.82)",
                    fontFamily: "Open Sans, sans-serif"
                  },
                  children: "Notre équipe est disponible pour répondre à toutes vos questions. N'hésitez pas à nous écrire ou appeler."
                }
              )
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-10 px-4 sm:px-6 lg:px-8",
        style: { backgroundColor: "#F4F6F9" },
        "data-ocid": "contact.quick_actions_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: quickActions.map((action, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: action.href,
            target: action.type === "external" ? "_blank" : void 0,
            rel: action.type === "external" ? "noopener noreferrer" : void 0,
            className: "p-6 rounded-xl text-center text-white transition-all duration-200 hover:scale-105 hover:shadow-lg block",
            style: { backgroundColor: action.bg },
            "data-ocid": `contact.quick_action.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl mb-2", children: action.emoji }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-bold text-sm mb-1",
                  style: { fontFamily: "Montserrat, sans-serif" },
                  children: action.label
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "text-xs",
                  style: {
                    opacity: 0.88,
                    fontFamily: "Open Sans, sans-serif"
                  },
                  children: action.value
                }
              )
            ]
          },
          action.label
        )) }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b py-3 px-4 md:px-8 bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-6xl mx-auto text-sm",
        style: { fontFamily: "Open Sans, sans-serif" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/",
              className: "transition-smooth hover:text-gold",
              style: { color: "#1A75BC" },
              children: "Accueil"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-muted-foreground", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#0D2B6B" }, children: "Contact" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "section",
      {
        className: "py-20 px-4 sm:px-6 lg:px-8 bg-card",
        "data-ocid": "contact.main_section",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-aos": "fade-right",
              "data-aos-duration": "700",
              "data-aos-delay": "100",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-semibold uppercase tracking-[0.2em] mb-3",
                    style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                    children: "Informations"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-3xl font-bold mb-2",
                    style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                    children: "Nos Coordonnées"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-1 rounded-full mb-8",
                    style: { background: "#F5A623" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6 mb-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-4",
                      "data-ocid": "contact.info_item.1",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            style: { background: "#EEF4FB" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-solid fa-location-dot text-lg",
                                style: { color: "#1A75BC" }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs font-bold uppercase tracking-wider mb-1",
                              style: {
                                color: "#888",
                                fontFamily: "Montserrat, sans-serif"
                              },
                              children: "Adresse"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "p",
                            {
                              className: "text-sm leading-relaxed",
                              style: {
                                color: "#333",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: [
                                "Rue 22 prolongée Fass Delorme",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                                "Dakar, Sénégal"
                              ]
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-4",
                      "data-ocid": "contact.info_item.2",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            style: { background: "#EEF4FB" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-solid fa-phone text-lg",
                                style: { color: "#1A75BC" }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs font-bold uppercase tracking-wider mb-1",
                              style: {
                                color: "#888",
                                fontFamily: "Montserrat, sans-serif"
                              },
                              children: "Téléphone"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "tel:+221338210181",
                              className: "block text-sm font-medium hover:text-skyblue transition-smooth",
                              style: {
                                color: "#0D2B6B",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: "00 221 33 821 01 81"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "tel:+221775495314",
                              className: "block text-sm font-medium hover:text-skyblue transition-smooth",
                              style: {
                                color: "#0D2B6B",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: "77 549 53 14"
                            }
                          )
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-4",
                      "data-ocid": "contact.info_item.3",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                            style: { background: "#EEF4FB" },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-solid fa-envelope text-lg",
                                style: { color: "#1A75BC" }
                              }
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "text-xs font-bold uppercase tracking-wider mb-1",
                              style: {
                                color: "#888",
                                fontFamily: "Montserrat, sans-serif"
                              },
                              children: "Email"
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "a",
                            {
                              href: "mailto:assiriktours@gmail.com",
                              className: "text-sm font-medium hover:text-skyblue transition-smooth",
                              style: {
                                color: "#0D2B6B",
                                fontFamily: "Open Sans, sans-serif"
                              },
                              children: "assiriktours@gmail.com"
                            }
                          )
                        ] })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl p-5 mb-8",
                    style: { backgroundColor: "#F4F6F9" },
                    "data-ocid": "contact.office_hours",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "h3",
                        {
                          className: "font-semibold mb-4 flex items-center gap-2 text-sm",
                          style: {
                            color: "#0D2B6B",
                            fontFamily: "Montserrat, sans-serif"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-solid fa-clock text-base",
                                style: { color: "#F5A623" }
                              }
                            ),
                            "Horaires d'Ouverture"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: officeHours.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-2 h-2 rounded-full flex-shrink-0",
                                  style: {
                                    backgroundColor: h.closed ? "#aaa" : "#22c55e"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "text-sm",
                                  style: {
                                    color: "#555",
                                    fontFamily: "Open Sans, sans-serif"
                                  },
                                  children: h.day
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "text-sm font-semibold",
                                style: {
                                  color: h.closed ? "#aaa" : "#0D2B6B",
                                  fontFamily: "Montserrat, sans-serif"
                                },
                                children: h.hours
                              }
                            )
                          ]
                        },
                        h.day
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "mt-4 pt-4 flex items-center gap-2 text-xs",
                          style: {
                            borderTop: "1px solid #e0e8f5",
                            color: "#666",
                            fontFamily: "Open Sans, sans-serif"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-brands fa-whatsapp text-base",
                                style: { color: "#25D366" }
                              }
                            ),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Pour les urgences hors horaires : WhatsApp disponible 7j/7" })
                          ]
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "text-sm font-bold mb-3",
                      style: {
                        color: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: "Demande spécifique par département ?"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: departments.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: d.href,
                      className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-smooth border-2 hover:bg-skyblue hover:text-white",
                      style: {
                        color: "#1A75BC",
                        borderColor: "#1A75BC",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      "data-ocid": `contact.dept_shortcut.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: `fas ${d.icon} text-xs` }),
                        d.label
                      ]
                    },
                    d.href
                  )) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "contact.map_section", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "h3",
                    {
                      className: "font-bold mb-4 flex items-center gap-2",
                      style: {
                        color: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "i",
                          {
                            className: "fas fa-map-location-dot",
                            style: { color: "#1A75BC" }
                          }
                        ),
                        "Nous Trouver"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "overflow-hidden shadow-card mb-4",
                      style: { borderRadius: "1rem" },
                      "data-ocid": "contact.map",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "iframe",
                        {
                          src: "https://www.openstreetmap.org/export/embed.html?bbox=-17.4533%2C14.6737%2C-17.4133%2C14.7137&layer=mapnik",
                          style: {
                            width: "100%",
                            height: "350px",
                            border: 0,
                            borderRadius: "12px",
                            display: "block"
                          },
                          title: "Localisation Assirik Tours Dakar",
                          loading: "lazy"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3 p-4 rounded-xl",
                      style: {
                        backgroundColor: "#F4F6F9",
                        border: "1px solid #e0e8f5"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "📍" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm font-medium",
                            style: {
                              color: "#333",
                              fontFamily: "Open Sans, sans-serif"
                            },
                            children: "Rue 22 prolongée Fass Delorme, Dakar, Sénégal"
                          }
                        )
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              "data-aos": "fade-left",
              "data-aos-duration": "700",
              "data-aos-delay": "150",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm font-semibold uppercase tracking-[0.2em] mb-3",
                    style: { color: "#1A75BC", fontFamily: "Montserrat, sans-serif" },
                    children: "Message"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h2",
                  {
                    className: "text-3xl font-bold mb-2",
                    style: { color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" },
                    children: "Envoyez un Message"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-12 h-1 rounded-full mb-8",
                    style: { background: "#F5A623" }
                  }
                ),
                submitStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl px-5 py-4 mb-6 flex items-start gap-3",
                    style: { background: "#e8f5e9", border: "1px solid #a5d6a7" },
                    "data-ocid": "contact.success_state",
                    role: "alert",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: "fa-solid fa-circle-check mt-0.5 text-lg",
                          style: { color: "#388e3c" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-semibold text-sm",
                            style: {
                              color: "#1b5e20",
                              fontFamily: "Montserrat, sans-serif"
                            },
                            children: "Message envoyé avec succès !"
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm mt-0.5",
                            style: {
                              color: "#2e7d32",
                              fontFamily: "Open Sans, sans-serif"
                            },
                            children: "Nous vous répondrons dans les meilleurs délais."
                          }
                        )
                      ] })
                    ]
                  }
                ),
                submitStatus === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl px-5 py-4 mb-6 flex items-start gap-3",
                    style: { background: "#fdecea", border: "1px solid #ef9a9a" },
                    "data-ocid": "contact.error_state",
                    role: "alert",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "i",
                        {
                          className: "fa-solid fa-triangle-exclamation mt-0.5 text-lg",
                          style: { color: "#c62828" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "font-semibold text-sm",
                            style: {
                              color: "#7f0000",
                              fontFamily: "Montserrat, sans-serif"
                            },
                            children: "Une erreur est survenue."
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: "text-sm mt-0.5",
                            style: {
                              color: "#b71c1c",
                              fontFamily: "Open Sans, sans-serif"
                            },
                            children: "Veuillez réessayer ou nous contacter par téléphone."
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "form",
                  {
                    onSubmit: handleSubmit,
                    className: "space-y-5",
                    noValidate: true,
                    "data-ocid": "contact.contact_form",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            htmlFor: "c-nom",
                            className: "block text-sm font-semibold mb-1.5",
                            style: {
                              color: "#0D2B6B",
                              fontFamily: "Montserrat, sans-serif"
                            },
                            children: [
                              "Nom complet ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#e53935" }, children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "i",
                            {
                              className: "fa-solid fa-user text-sm",
                              style: { color: "#1A75BC" }
                            }
                          ) }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "input",
                            {
                              id: "c-nom",
                              type: "text",
                              name: "nom",
                              required: true,
                              autoComplete: "name",
                              value: form.nom,
                              onChange: handleChange,
                              placeholder: "Votre nom complet",
                              className: "w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-smooth",
                              style: {
                                border: "1.5px solid #d0d9e8",
                                fontFamily: "Open Sans, sans-serif",
                                color: "#222",
                                background: "#fff"
                              },
                              onFocus: focusInput,
                              onBlur: blurInput,
                              "data-ocid": "contact.input"
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "label",
                            {
                              htmlFor: "c-telephone",
                              className: "block text-sm font-semibold mb-1.5",
                              style: {
                                color: "#0D2B6B",
                                fontFamily: "Montserrat, sans-serif"
                              },
                              children: [
                                "Téléphone ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#e53935" }, children: "*" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-solid fa-phone text-sm",
                                style: { color: "#1A75BC" }
                              }
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "c-telephone",
                                type: "tel",
                                name: "telephone",
                                required: true,
                                autoComplete: "tel",
                                value: form.telephone,
                                onChange: handleChange,
                                placeholder: "+221 77 000 00 00",
                                className: "w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-smooth",
                                style: {
                                  border: "1.5px solid #d0d9e8",
                                  fontFamily: "Open Sans, sans-serif",
                                  color: "#222",
                                  background: "#fff"
                                },
                                onFocus: focusInput,
                                onBlur: blurInput,
                                "data-ocid": "contact.form.telephone_input"
                              }
                            )
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "label",
                            {
                              htmlFor: "c-email",
                              className: "block text-sm font-semibold mb-1.5",
                              style: {
                                color: "#0D2B6B",
                                fontFamily: "Montserrat, sans-serif"
                              },
                              children: [
                                "Email ",
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#e53935" }, children: "*" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-solid fa-envelope text-sm",
                                style: { color: "#1A75BC" }
                              }
                            ) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "input",
                              {
                                id: "c-email",
                                type: "email",
                                name: "email",
                                required: true,
                                autoComplete: "email",
                                value: form.email,
                                onChange: handleChange,
                                placeholder: "votre@email.com",
                                className: "w-full pl-10 pr-4 py-3 rounded-lg text-sm outline-none transition-smooth",
                                style: {
                                  border: "1.5px solid #d0d9e8",
                                  fontFamily: "Open Sans, sans-serif",
                                  color: "#222",
                                  background: "#fff"
                                },
                                onFocus: focusInput,
                                onBlur: blurInput,
                                "data-ocid": "contact.form.email_input"
                              }
                            )
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "label",
                          {
                            htmlFor: "c-message",
                            className: "block text-sm font-semibold mb-1.5",
                            style: {
                              color: "#0D2B6B",
                              fontFamily: "Montserrat, sans-serif"
                            },
                            children: [
                              "Votre message ",
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#e53935" }, children: "*" })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "textarea",
                          {
                            id: "c-message",
                            name: "message",
                            required: true,
                            rows: 6,
                            value: form.message,
                            onChange: handleChange,
                            placeholder: "Décrivez votre demande ou posez votre question...",
                            className: "w-full px-4 py-3 rounded-lg text-sm outline-none transition-smooth resize-none",
                            style: {
                              border: "1.5px solid #d0d9e8",
                              fontFamily: "Open Sans, sans-serif",
                              color: "#222",
                              background: "#fff"
                            },
                            onFocus: focusInput,
                            onBlur: blurInput,
                            "data-ocid": "contact.textarea"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "submit",
                          disabled: isPending,
                          className: "btn-primary w-full py-4 rounded-lg text-base flex items-center justify-center gap-2",
                          "data-ocid": "contact.submit_button",
                          children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
                            "Envoi en cours..."
                          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa-solid fa-paper-plane" }),
                            "Envoyer le message"
                          ] })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "p",
                        {
                          className: "text-xs text-center",
                          style: { color: "#999", fontFamily: "Open Sans, sans-serif" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "i",
                              {
                                className: "fa-solid fa-shield-halved mr-1",
                                style: { color: "#F5A623" }
                              }
                            ),
                            "Vos données sont protégées et ne seront jamais partagées."
                          ]
                        }
                      )
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
        className: "py-16 px-4",
        style: {
          background: "linear-gradient(135deg, #0D2B6B 0%, #1A3A7A 100%)"
        },
        "data-aos": "fade-up",
        "data-aos-duration": "600",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "text-2xl md:text-3xl font-bold text-white mb-4",
              style: { fontFamily: "Montserrat, sans-serif" },
              children: "Besoin d'une réponse immédiate ?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "mb-8 text-lg",
              style: {
                color: "rgba(255,255,255,0.82)",
                fontFamily: "Open Sans, sans-serif"
              },
              children: "Appelez-nous directement ou écrivez sur WhatsApp — notre équipe est disponible pour vous."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+221338210181",
                className: "btn-gold inline-flex items-center justify-center gap-2",
                "data-ocid": "contact.primary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa-solid fa-phone" }),
                  "33 821 01 81"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => window.open("https://wa.me/221775495314", "_blank"),
                className: "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-105",
                style: {
                  backgroundColor: "#25D366",
                  fontFamily: "Montserrat, sans-serif"
                },
                "data-ocid": "contact.whatsapp_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa-brands fa-whatsapp text-lg" }),
                  "WhatsApp"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "tel:+221775495314",
                className: "btn-outline-white inline-flex items-center justify-center gap-2",
                "data-ocid": "contact.secondary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa-solid fa-mobile-screen" }),
                  "77 549 53 14"
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
  ContactPage
};
