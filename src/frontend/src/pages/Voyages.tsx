import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useSubmitVoyage } from "../hooks/useBackend";
import type { DemandeInput } from "../types";

function useReveal(delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    } as React.CSSProperties,
  };
}

const SERVICES = [
  {
    emoji: "✈️",
    icon: "fa-solid fa-plane",
    title: "Billets d'Avion",
    desc: "Vols nationaux et internationaux aux meilleurs tarifs. Nous gérons vos réservations pour toutes les compagnies aériennes.",
    accent: "#1A75BC",
    bullets: [
      "Vols nationaux (Dakar-Ziguinchor, Dakar-Saint-Louis)",
      "Vols internationaux vers l'Europe, Moyen-Orient, Afrique",
      "Tarifs Economy, Business et Première Classe",
      "Billets aller-simple et aller-retour",
    ],
  },
  {
    emoji: "🛂",
    icon: "fa-solid fa-passport",
    title: "Assistance Visa",
    desc: "Constitution complète de vos dossiers visa. Notre équipe vous guide pas à pas pour maximiser vos chances d'obtention.",
    accent: "#0D2B6B",
    bullets: [
      "Visa Schengen (France, Espagne, Italie...)",
      "Visa USA, Canada, UK",
      "Visa touristique et d'affaires",
      "Accompagnement dossier complet",
    ],
  },
  {
    emoji: "🗺️",
    icon: "fa-solid fa-map-location-dot",
    title: "Circuits Touristiques",
    desc: "Découvrez le Sénégal et le monde avec nos circuits organisés sur mesure. Des expériences culturelles inoubliables.",
    accent: "#F5A623",
    bullets: [
      "Circuits culturels au Maroc, Turquie, Égypte",
      "Safaris en Afrique de l'Est",
      "Séjours balnéaires (Thaïlande, Maldives, Île Maurice)",
      "Packages tout-inclus personnalisés",
    ],
  },
  {
    emoji: "🚗",
    icon: "fa-solid fa-taxi",
    title: "Transferts Aéroport",
    desc: "Service de transfert VIP entre l'aéroport AIBD et votre destination. Chauffeurs professionnels, disponibilité 24h/24.",
    accent: "#1A75BC",
    bullets: [
      "Navette AIBD ↔ Dakar centre",
      "Transferts hôtels & résidences",
      "Véhicules confortables et climatisés",
      "Chauffeurs expérimentés",
    ],
  },
  {
    emoji: "🏨",
    icon: "fa-solid fa-hotel",
    title: "Réservations Hôtels",
    desc: "Accès à des milliers d'hôtels au Sénégal et à l'international. Du budget au luxe, nous trouvons l'hébergement idéal.",
    accent: "#0D2B6B",
    bullets: [
      "Hôtels 2 à 5 étoiles",
      "Prix négociés et meilleurs tarifs",
      "Prise en charge petit-déjeuner",
      "Annulation flexible disponible",
    ],
  },
];

const CIRCUITS = [
  {
    title: "Maroc Impérial",
    duration: "8 jours",
    highlights: "Casablanca • Fès • Marrakech",
    price: "À partir de 450 000 FCFA",
    gradient: "linear-gradient(135deg, #e67e22 0%, #c0392b 100%)",
    emoji: "🕌",
  },
  {
    title: "Dubaï & Merveilles",
    duration: "7 jours",
    highlights: "Burj Khalifa • Desert Safari • Mall of Emirates",
    price: "À partir de 650 000 FCFA",
    gradient: "linear-gradient(135deg, #f39c12 0%, #e67e22 100%)",
    emoji: "🏙️",
  },
  {
    title: "Istanbul Mystique",
    duration: "6 jours",
    highlights: "Sainte-Sophie • Bosphore • Grand Bazar",
    price: "À partir de 550 000 FCFA",
    gradient: "linear-gradient(135deg, #c0392b 0%, #922b21 100%)",
    emoji: "🕌",
  },
  {
    title: "Paris Capitale",
    duration: "5 jours",
    highlights: "Tour Eiffel • Versailles • Montmartre",
    price: "À partir de 750 000 FCFA",
    gradient: "linear-gradient(135deg, #2980b9 0%, #1a3a8f 100%)",
    emoji: "🗼",
  },
];

const AVANTAGES = [
  {
    icon: "fa-solid fa-shield-halved",
    title: "Fiabilité & Sécurité",
    desc: "Licenciée et agréée par les autorités sénégalaises. Vos réservations sont garanties.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Support Personnalisé",
    desc: "Notre équipe vous accompagne à chaque étape, de la réservation au retour de voyage.",
  },
  {
    icon: "fa-solid fa-tag",
    title: "Meilleurs Tarifs",
    desc: "Grâce à nos partenariats, nous négocions les meilleures offres pour chaque voyage.",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Disponibilité 24h/24",
    desc: "Service disponible tous les jours pour répondre à vos urgences et imprévus.",
  },
];

const SERVICE_OPTIONS = [
  { value: "billets_avion", label: "Billets d'Avion" },
  { value: "assistance_visa", label: "Assistance Visa" },
  { value: "circuits_touristiques", label: "Circuits Touristiques" },
  { value: "transferts_aeroport", label: "Transferts Aéroport" },
  { value: "reservations_hotels", label: "Réservations Hôtels" },
];

const PARTENAIRES = [
  { name: "Air Sénégal", icon: "fa-solid fa-plane" },
  { name: "Air France", icon: "fa-solid fa-plane-circle-check" },
  { name: "Turkish Airlines", icon: "fa-solid fa-plane-departure" },
  { name: "Royal Air Maroc", icon: "fa-solid fa-plane-arrival" },
  { name: "Ethiopian Airlines", icon: "fa-solid fa-jet-fighter" },
  { name: "Emirates", icon: "fa-solid fa-plane-up" },
];

function ServiceCard({ s, idx }: { s: (typeof SERVICES)[0]; idx: number }) {
  const { ref, style } = useReveal(idx * 0.1);
  return (
    <div
      ref={ref}
      style={{ ...style, borderTop: "4px solid #F5A623" }}
      data-ocid={`voyages.service.item.${idx + 1}`}
      className="bg-card rounded-2xl p-7 shadow-card card-hover border border-border flex flex-col gap-3"
    >
      {/* Large emoji at top */}
      <div className="text-center text-5xl mb-1">{s.emoji}</div>

      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
        style={{ backgroundColor: `${s.accent}1A` }}
      >
        <i className={`${s.icon} text-xl`} style={{ color: s.accent }} />
      </div>

      <h3
        className="text-lg font-display text-center leading-snug"
        style={{ color: "#0D2B6B" }}
      >
        {s.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed text-center">
        {s.desc}
      </p>

      <ul className="space-y-2 mt-auto pt-2 border-t border-border">
        {s.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-xs font-body"
            style={{ color: "#555" }}
          >
            <i
              className="fas fa-check-circle flex-shrink-0 mt-0.5"
              style={{ color: s.accent }}
            />
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <span
      data-ocid={id}
      className="text-xs font-body flex items-center gap-1 mt-1"
      style={{ color: "#C0392B" }}
      role="alert"
    >
      <i className="fa-solid fa-triangle-exclamation" />
      {msg}
    </span>
  );
}

export function VoyagesPage() {
  const { mutateAsync: submitVoyage, isPending } = useSubmitVoyage();

  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
    destination: "",
    dateDepart: "",
    voyageurs: "",
    budget: "",
  });
  const [errors, setErrors] = useState<
    Partial<
      Omit<typeof form, "destination" | "dateDepart" | "voyageurs" | "budget">
    >
  >({});
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  const heroReveal = useReveal();
  const formReveal = useReveal();

  useEffect(() => {
    document.title =
      "Billets d'Avion & Visa Sénégal | Assirik Tours Voyages Dakar";
    return () => {
      document.title = "Assirik Tours";
    };
  }, []);

  useEffect(() => {
    if (!notification) return;
    const t = setTimeout(() => setNotification(null), 5500);
    return () => clearTimeout(t);
  }, [notification]);

  function validate() {
    const e: Partial<typeof errors> = {};
    if (!form.nom.trim()) e.nom = "Le nom complet est requis.";
    if (!form.email.trim()) {
      e.email = "L'adresse email est requise.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Format d'email invalide.";
    }
    if (!form.telephone.trim())
      e.telephone = "Le numéro de téléphone est requis.";
    if (!form.service) e.service = "Veuillez sélectionner un service.";
    if (!form.message.trim()) e.message = "Veuillez décrire votre demande.";
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const extras = [
      form.destination ? `Destination : ${form.destination}` : "",
      form.dateDepart ? `Date de départ : ${form.dateDepart}` : "",
      form.voyageurs ? `Voyageurs : ${form.voyageurs}` : "",
      form.budget ? `Budget : ${form.budget}` : "",
    ]
      .filter(Boolean)
      .join(" | ");

    const input: DemandeInput = {
      nom: form.nom,
      email: form.email,
      telephone: form.telephone,
      message: `Service : ${
        SERVICE_OPTIONS.find((o) => o.value === form.service)?.label ??
        form.service
      }${extras ? ` | ${extras}` : ""}\n\n${form.message}`,
    };

    try {
      await submitVoyage(input);
      setNotification({
        type: "success",
        msg: "Votre demande a bien été envoyée ! Nous vous contacterons très prochainement.",
      });
      setForm({
        nom: "",
        email: "",
        telephone: "",
        service: "",
        message: "",
        destination: "",
        dateDepart: "",
        voyageurs: "",
        budget: "",
      });
    } catch {
      setNotification({
        type: "error",
        msg: "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
      });
    }
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (name in errors) {
      setErrors((p) => ({ ...p, [name]: undefined }));
    }
  }

  const inputBase =
    "w-full rounded-lg border px-4 py-3 text-sm font-body bg-background text-foreground placeholder:text-muted-foreground outline-none transition-smooth";

  return (
    <div data-ocid="voyages.page">
      {/* ── Toast notification ── */}
      {notification && (
        <div
          data-ocid={
            notification.type === "success"
              ? "voyages.form.success_state"
              : "voyages.form.error_state"
          }
          role="alert"
          className="fixed top-24 right-4 z-50 max-w-sm rounded-xl px-5 py-4 shadow-elevated flex items-start gap-3 font-body text-sm"
          style={{
            backgroundColor:
              notification.type === "success" ? "#0D2B6B" : "#C0392B",
            color: "#fff",
          }}
        >
          <i
            className={`fa-solid ${
              notification.type === "success"
                ? "fa-circle-check"
                : "fa-circle-exclamation"
            } mt-0.5 flex-shrink-0`}
            style={{ color: "#F5A623" }}
          />
          <span className="flex-1">{notification.msg}</span>
          <button
            type="button"
            onClick={() => setNotification(null)}
            data-ocid="voyages.toast.close_button"
            className="flex-shrink-0 opacity-70 hover:opacity-100 transition-smooth"
            aria-label="Fermer la notification"
          >
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
      )}

      {/* ── Hero ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ minHeight: "520px" }}
        data-ocid="voyages.hero_section"
      >
        {/* Hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/voyages-hero.dim_1200x500.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,43,107,0.88) 0%, rgba(26,117,188,0.75) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Gold glow */}
        <div
          className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(245,166,35,0.12), transparent 70%)",
            transform: "translate(25%, -25%)",
          }}
        />

        <div
          ref={heroReveal.ref}
          style={heroReveal.style}
          className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6 text-sm font-body"
            style={{
              backgroundColor: "rgba(245,166,35,0.18)",
              color: "#F5A623",
              border: "1px solid rgba(245,166,35,0.4)",
            }}
          >
            <i className="fa-solid fa-plane text-xs" />
            <span>Agence de Voyages · Dakar, Sénégal</span>
          </div>

          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl mb-5 leading-tight">
            Assirik Tours <span style={{ color: "#F5A623" }}>Voyages</span>
          </h1>
          <p
            className="font-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Billets d'avion, assistance visa, circuits touristiques et bien plus
            — votre partenaire de confiance pour voyager depuis Dakar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#devis"
              data-ocid="voyages.hero.primary_button"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-paper-plane" />
              Demander un devis gratuit
            </a>
            <a
              href="#services"
              data-ocid="voyages.hero.secondary_button"
              className="btn-outline-white inline-flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-list" />
              Voir nos services
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <div className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: "fa-solid fa-globe", val: "100+", label: "Destinations" },
            {
              icon: "fa-solid fa-users",
              val: "500+",
              label: "Clients satisfaits",
            },
            {
              icon: "fa-solid fa-plane-departure",
              val: "50+",
              label: "Compagnies partenaires",
            },
            {
              icon: "fa-solid fa-star",
              val: "5+",
              label: "Années d'expérience",
            },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <i className={`${s.icon} text-xl`} style={{ color: "#F5A623" }} />
              <span
                className="font-display text-2xl"
                style={{ color: "#0D2B6B" }}
              >
                {s.val}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Services ── */}
      <section id="services" className="py-20 bg-background px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-body font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#1A75BC" }}
            >
              Ce que nous proposons
            </span>
            <h2
              className="font-display text-3xl md:text-4xl mb-4"
              style={{ color: "#0D2B6B" }}
            >
              Nos Services <span style={{ color: "#F5A623" }}>Voyages</span>
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p className="font-body text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm">
              De la réservation de vols à l'organisation complète de votre
              voyage, nous prenons en charge chaque étape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} s={s} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Nos Circuits Populaires ── */}
      <section className="py-20 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-body font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#1A75BC" }}
            >
              Explorez le monde
            </span>
            <h2
              className="font-display text-3xl md:text-4xl mb-3"
              style={{ color: "#0D2B6B" }}
            >
              Nos Circuits <span style={{ color: "#F5A623" }}>Populaires</span>
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm">
              Partez à la découverte du monde depuis Dakar avec nos packages
              soigneusement élaborés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CIRCUITS.map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl overflow-hidden shadow-card card-hover"
                style={{ background: c.gradient }}
                data-ocid={`voyages.circuit_card.${i + 1}`}
              >
                <div className="p-6 flex flex-col items-center text-center gap-3">
                  <span className="text-4xl mb-1">{c.emoji}</span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {c.title}
                  </h3>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-semibold"
                    style={{
                      backgroundColor: "rgba(245,166,35,0.3)",
                      color: "#F5A623",
                    }}
                  >
                    {c.duration}
                  </span>
                  <p
                    className="text-sm font-body"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    {c.highlights}
                  </p>
                  <p
                    className="font-semibold mt-1"
                    style={{ color: "#F5A623" }}
                  >
                    {c.price}
                  </p>
                  <Link
                    to="/contact"
                    className="mt-1 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.18)",
                      border: "1px solid rgba(255,255,255,0.35)",
                      color: "#fff",
                    }}
                    data-ocid={`voyages.circuit_cta.${i + 1}`}
                  >
                    <i className="fas fa-paper-plane text-xs" />
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avantages ── */}
      <section className="py-16 bg-card px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="font-display text-3xl mb-3"
              style={{ color: "#0D2B6B" }}
            >
              Pourquoi choisir{" "}
              <span style={{ color: "#F5A623" }}>Assirik Tours</span> ?
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto text-sm">
              Une agence locale avec une expertise internationale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AVANTAGES.map((a, i) => (
              <div
                key={a.title}
                className="bg-background rounded-xl p-6 shadow-card border border-border flex gap-4 items-start card-hover"
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
              >
                <div
                  className="w-11 h-11 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: "#1A75BC1A" }}
                >
                  <i
                    className={`${a.icon} text-base`}
                    style={{ color: "#1A75BC" }}
                  />
                </div>
                <div>
                  <h3
                    className="font-display text-sm mb-1"
                    style={{ color: "#0D2B6B" }}
                  >
                    {a.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partenaires ── */}
      <section className="py-14 px-4" style={{ backgroundColor: "#F4F6F9" }}>
        <div className="max-w-5xl mx-auto text-center">
          <p
            className="font-body text-xs uppercase tracking-widest font-semibold mb-6"
            style={{ color: "#1A75BC" }}
          >
            Nos Compagnies Partenaires
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {PARTENAIRES.map((p) => (
              <div
                key={p.name}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border shadow-sm font-body text-sm font-medium"
                style={{ color: "#0D2B6B" }}
              >
                <i
                  className={`${p.icon} text-xs`}
                  style={{ color: "#F5A623" }}
                />
                {p.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Devis Form ── */}
      <section id="devis" className="py-20 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <div ref={formReveal.ref} style={formReveal.style}>
            <div className="text-center mb-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#1A75BC1A" }}
              >
                <i
                  className="fa-solid fa-paper-plane text-2xl"
                  style={{ color: "#1A75BC" }}
                />
              </div>
              <span
                className="inline-block text-xs font-body font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#1A75BC" }}
              >
                Devis gratuit &amp; sans engagement
              </span>
              <h2
                className="font-display text-3xl md:text-4xl mb-2"
                style={{ color: "#0D2B6B" }}
              >
                Demandez votre devis{" "}
                <span style={{ color: "#F5A623" }}>personnalisé</span>
              </h2>
              <div
                className="w-16 h-1 mx-auto rounded-full mb-3"
                style={{ backgroundColor: "#F5A623" }}
              />
              <p className="font-body text-muted-foreground text-sm">
                Remplissez ce formulaire et notre équipe vous contacte
                rapidement.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              data-ocid="voyages.devis.form"
              className="bg-card rounded-2xl shadow-elevated border border-border p-8 flex flex-col gap-5"
              noValidate
            >
              {/* Nom + Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="v-nom"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Nom complet{" "}
                    <span style={{ color: "#C0392B" }} aria-hidden>
                      *
                    </span>
                  </label>
                  <input
                    id="v-nom"
                    name="nom"
                    type="text"
                    autoComplete="name"
                    placeholder="Ex : Moussa Diallo"
                    value={form.nom}
                    onChange={handleChange}
                    data-ocid="voyages.nom.input"
                    className={inputBase}
                    style={{ borderColor: errors.nom ? "#C0392B" : "#D1D9E0" }}
                    aria-invalid={!!errors.nom}
                  />
                  <FieldError id="err-nom" msg={errors.nom} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="v-telephone"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Téléphone{" "}
                    <span style={{ color: "#C0392B" }} aria-hidden>
                      *
                    </span>
                  </label>
                  <input
                    id="v-telephone"
                    name="telephone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+221 77 000 00 00"
                    value={form.telephone}
                    onChange={handleChange}
                    data-ocid="voyages.telephone.input"
                    className={inputBase}
                    style={{
                      borderColor: errors.telephone ? "#C0392B" : "#D1D9E0",
                    }}
                    aria-invalid={!!errors.telephone}
                  />
                  <FieldError id="err-telephone" msg={errors.telephone} />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="v-email"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Adresse email{" "}
                  <span style={{ color: "#C0392B" }} aria-hidden>
                    *
                  </span>
                </label>
                <input
                  id="v-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="exemple@email.com"
                  value={form.email}
                  onChange={handleChange}
                  data-ocid="voyages.email.input"
                  className={inputBase}
                  style={{ borderColor: errors.email ? "#C0392B" : "#D1D9E0" }}
                  aria-invalid={!!errors.email}
                />
                <FieldError id="err-email" msg={errors.email} />
              </div>

              {/* Service + Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="v-service"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Type de service{" "}
                    <span style={{ color: "#C0392B" }} aria-hidden>
                      *
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      id="v-service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      data-ocid="voyages.service.select"
                      className={`${inputBase} appearance-none pr-10`}
                      style={{
                        borderColor: errors.service ? "#C0392B" : "#D1D9E0",
                        color: form.service ? undefined : "#9CA3AF",
                      }}
                      aria-invalid={!!errors.service}
                    >
                      <option value="" disabled>
                        — Sélectionnez un service —
                      </option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o.value} value={o.value}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <i
                      className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none"
                      style={{ color: "#9CA3AF" }}
                    />
                  </div>
                  <FieldError id="err-service" msg={errors.service} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="v-destination"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Destination souhaitée
                  </label>
                  <input
                    id="v-destination"
                    name="destination"
                    type="text"
                    placeholder="Ex : Paris, Dubai, Istanbul..."
                    value={form.destination}
                    onChange={handleChange}
                    data-ocid="voyages.destination.input"
                    className={inputBase}
                    style={{ borderColor: "#D1D9E0" }}
                  />
                </div>
              </div>

              {/* Date de départ + Voyageurs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="v-date-depart"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Date de départ souhaitée
                  </label>
                  <input
                    id="v-date-depart"
                    name="dateDepart"
                    type="date"
                    value={form.dateDepart}
                    onChange={handleChange}
                    data-ocid="voyages.date_depart.input"
                    className={inputBase}
                    style={{ borderColor: "#D1D9E0" }}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <label
                    htmlFor="v-voyageurs"
                    className="font-body text-sm font-semibold text-foreground"
                  >
                    Nombre de voyageurs
                  </label>
                  <input
                    id="v-voyageurs"
                    name="voyageurs"
                    type="number"
                    min={1}
                    max={20}
                    placeholder="Ex : 2"
                    value={form.voyageurs}
                    onChange={handleChange}
                    data-ocid="voyages.voyageurs.input"
                    className={inputBase}
                    style={{ borderColor: "#D1D9E0" }}
                  />
                </div>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="v-budget"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Budget approximatif
                </label>
                <div className="relative">
                  <select
                    id="v-budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    data-ocid="voyages.budget.select"
                    className={`${inputBase} appearance-none pr-10`}
                    style={{
                      borderColor: "#D1D9E0",
                      color: form.budget ? undefined : "#9CA3AF",
                    }}
                  >
                    <option value="">— Budget —</option>
                    <option value="Économique (< 300 000 FCFA)">
                      Économique (&lt; 300 000 FCFA)
                    </option>
                    <option value="Confort (300 000 - 700 000 FCFA)">
                      Confort (300 000 - 700 000 FCFA)
                    </option>
                    <option value="Premium (> 700 000 FCFA)">
                      Premium (&gt; 700 000 FCFA)
                    </option>
                  </select>
                  <i
                    className="fa-solid fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none"
                    style={{ color: "#9CA3AF" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-0.5">
                <label
                  htmlFor="v-message"
                  className="font-body text-sm font-semibold text-foreground"
                >
                  Description de votre demande{" "}
                  <span style={{ color: "#C0392B" }} aria-hidden>
                    *
                  </span>
                </label>
                <textarea
                  id="v-message"
                  name="message"
                  rows={4}
                  placeholder="Décrivez votre voyage : destinations, dates souhaitées, besoins spécifiques…"
                  value={form.message}
                  onChange={handleChange}
                  data-ocid="voyages.message.textarea"
                  className={`${inputBase} resize-none`}
                  style={{
                    borderColor: errors.message ? "#C0392B" : "#D1D9E0",
                  }}
                  aria-invalid={!!errors.message}
                />
                <FieldError id="err-message" msg={errors.message} />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                data-ocid="voyages.devis.submit_button"
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  paddingTop: "0.875rem",
                  paddingBottom: "0.875rem",
                  fontSize: "1rem",
                }}
              >
                {isPending ? (
                  <>
                    <i className="fa-solid fa-circle-notch fa-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane" />
                    Envoyer la demande
                  </>
                )}
              </button>

              <p className="text-xs text-muted-foreground text-center font-body">
                <i
                  className="fa-solid fa-clock mr-1"
                  style={{ color: "#F5A623" }}
                />
                * Réponse garantie sous 24 heures ouvrées
              </p>
              <p className="text-xs text-muted-foreground text-center font-body">
                <i
                  className="fa-solid fa-lock mr-1"
                  style={{ color: "#1A75BC" }}
                />
                Vos informations sont confidentielles et ne seront jamais
                partagées.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0D2B6B 0%, #1A3A7A 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <i
            className="fa-solid fa-plane-departure text-4xl mb-5 block"
            style={{ color: "#F5A623" }}
          />
          <h2 className="font-display text-white text-3xl md:text-4xl mb-4">
            Votre prochain voyage commence ici
          </h2>
          <p
            className="font-body text-lg leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Contactez nos experts voyages pour un conseil personnalisé et sans
            engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+221338210181"
              data-ocid="voyages.cta.phone_button"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-phone" />
              33 821 01 81
            </a>
            <a
              href="mailto:assiriktours@gmail.com"
              data-ocid="voyages.cta.email_button"
              className="btn-outline-white inline-flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-envelope" />
              assiriktours@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
