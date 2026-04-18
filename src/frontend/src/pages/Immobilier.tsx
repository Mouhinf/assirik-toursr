import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitImmobilier } from "../hooks/useBackend";
import type { DemandeInput } from "../types";

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
      "Titres fonciers vérifiés",
    ],
    delay: 0,
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
      "Gestion des états des lieux",
    ],
    delay: 80,
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
      "Reporting mensuel propriétaires",
    ],
    delay: 160,
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
      "Suivi de chantier",
    ],
    delay: 240,
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
      "Certificats pour banques et notaires",
    ],
    delay: 320,
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
      "Stratégie patrimoine à long terme",
    ],
    delay: 400,
  },
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
  { name: "Grand-Yoff", emoji: "🏘️", type: "Zone populaire" },
];

const typeOptions = [
  "Achat d'un terrain",
  "Achat d'une maison / villa",
  "Location résidentielle",
  "Location commerciale",
  "Gestion locative",
  "Expertise / Estimation",
  "Conseil en investissement",
  "Autre",
];

const bienOptions = [
  "Terrain",
  "Villa / Maison",
  "Appartement",
  "Bureau",
  "Local commercial",
  "Autre",
];
const budgetOptions = [
  "< 10 millions FCFA",
  "10-30 millions FCFA",
  "30-100 millions FCFA",
  "> 100 millions FCFA",
  "À discuter",
];
const transactionOptions = [
  "Acheter un bien",
  "Louer un bien",
  "Vendre mon bien",
  "Estimer mon bien",
  "Gestion locative",
];

interface FormState extends DemandeInput {
  typeService: string;
  typeBien: string;
  localisation: string;
  budget: string;
  transaction: string;
}

const emptyForm: FormState = {
  nom: "",
  email: "",
  telephone: "",
  message: "",
  typeService: "",
  typeBien: "",
  localisation: "",
  budget: "",
  transaction: "",
};

export function ImmobilierPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submit, isPending } = useSubmitImmobilier();

  useEffect(() => {
    document.title = "Agence Immobilier Dakar | Vente Location | Assirik Tours";
    return () => {
      document.title =
        "Assirik Tours | Agence de Voyage, Immobilier & Nettoiement à Dakar";
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      budget && `Budget : ${budget}`,
    ]
      .filter(Boolean)
      .join("\n");
    submit(
      {
        ...demande,
        message: extras ? `${extras}\n\n${demande.message}` : demande.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm(emptyForm);
          toast.success(
            "Demande envoyée ! Notre équipe immobilier vous contactera rapidement.",
          );
        },
        onError: () =>
          toast.error("Une erreur est survenue. Veuillez réessayer."),
      },
    );
  };

  const inputCls =
    "w-full px-4 py-3 rounded-lg border text-sm outline-none transition-smooth bg-white";
  const inputStyle = {
    borderColor: "#D1D9E0",
    fontFamily: "Open Sans, sans-serif",
  };

  return (
    <div data-ocid="immobilier.page">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-28 px-4 sm:px-6 lg:px-8"
        data-ocid="immobilier.hero_section"
        style={{ minHeight: "520px" }}
      >
        {/* Hero image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/assets/generated/immobilier-hero.dim_1200x500.jpg')",
          }}
          aria-hidden="true"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,43,107,0.9) 0%, rgba(15,50,120,0.75) 50%, rgba(26,117,188,0.7) 100%)",
          }}
          aria-hidden="true"
        />

        <div
          className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#F5A623" }}
        />
        <div
          className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ backgroundColor: "#1A75BC" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elevated"
            style={{
              backgroundColor: "rgba(245,166,35,0.2)",
              border: "1px solid rgba(245,166,35,0.4)",
            }}
            data-aos="zoom-in"
          >
            <i
              className="fas fa-building text-4xl"
              style={{ color: "#F5A623" }}
            />
          </div>
          <h1
            className="text-4xl sm:text-5xl font-display mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Assirik Tours <span style={{ color: "#F5A623" }}>Immobilier</span>
          </h1>
          <p
            className="text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Votre partenaire de confiance pour l'achat, la vente, la location et
            la gestion immobilière au Sénégal.
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-6 mt-10"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {[
              { icon: "fa-house-circle-check", label: "Vente & Achat" },
              { icon: "fa-key", label: "Location" },
              { icon: "fa-chart-line", label: "Investissement" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <i
                  className={`fas ${badge.icon}`}
                  style={{ color: "#F5A623" }}
                />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="#formulaire"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth"
              style={{ backgroundColor: "#F5A623", color: "#0D2B6B" }}
              data-ocid="immobilier.hero.primary_button"
            >
              <i className="fas fa-paper-plane" />
              Décrire mon projet
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
              }}
              data-ocid="immobilier.hero.secondary_button"
            >
              <i className="fas fa-list" />
              Nos services
            </a>
          </div>
        </div>
      </section>

      {/* Stats banner */}
      <div className="bg-card border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: "fa-home", value: "500+", label: "Propriétés gérées" },
            { icon: "fa-users", value: "300+", label: "Clients satisfaits" },
            {
              icon: "fa-map-location-dot",
              value: "15+",
              label: "Zones couvertes",
            },
            { icon: "fa-award", value: "5+", label: "Années d'expertise" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              data-ocid={`immobilier.stat.${i + 1}`}
              className="flex flex-col items-center gap-1"
            >
              <i
                className={`fas ${stat.icon} text-xl`}
                style={{ color: "#F5A623" }}
              />
              <span
                className="font-display text-2xl"
                style={{ color: "#0D2B6B" }}
              >
                {stat.value}
              </span>
              <span className="font-body text-xs text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
        data-ocid="immobilier.services_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2 font-display"
              style={{ color: "#1A75BC" }}
            >
              Nos Services
            </p>
            <h2
              className="text-3xl sm:text-4xl font-display mb-4"
              style={{ color: "#0D2B6B" }}
            >
              Solutions Immobilières{" "}
              <span style={{ color: "#F5A623" }}>Complètes</span>
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full mb-4"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-sm">
              De la recherche de bien à la gestion locative, nous vous
              accompagnons à chaque étape de votre projet.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group p-7 rounded-2xl border-2 transition-smooth card-hover bg-card flex flex-col gap-3"
                style={{
                  borderColor: "#F4F6F9",
                  borderTop: "4px solid #F5A623",
                }}
                onMouseEnter={(el) => {
                  (el.currentTarget as HTMLDivElement).style.borderColor =
                    "#1A75BC";
                  (el.currentTarget as HTMLDivElement).style.borderTop =
                    "4px solid #F5A623";
                }}
                onMouseLeave={(el) => {
                  (el.currentTarget as HTMLDivElement).style.borderColor =
                    "#F4F6F9";
                  (el.currentTarget as HTMLDivElement).style.borderTop =
                    "4px solid #F5A623";
                }}
                data-aos="fade-up"
                data-aos-delay={`${s.delay}`}
                data-ocid={`immobilier.service_card.${i + 1}`}
              >
                {/* Large emoji top */}
                <div className="text-5xl text-center mb-1">{s.emoji}</div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto transition-smooth group-hover:scale-110"
                  style={{ backgroundColor: "rgba(13,43,107,0.1)" }}
                >
                  <i
                    className={`fas ${s.icon} text-xl`}
                    style={{ color: "#0D2B6B" }}
                  />
                </div>
                <h3
                  className="text-base font-display text-center mb-1"
                  style={{ color: "#0D2B6B" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm font-body leading-relaxed text-center"
                  style={{ color: "#5a6170" }}
                >
                  {s.desc}
                </p>

                <ul className="space-y-1.5 pt-3 border-t border-border mt-auto">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs font-body"
                      style={{ color: "#666" }}
                    >
                      <i
                        className="fas fa-check-circle mt-0.5 flex-shrink-0"
                        style={{ color: "#F5A623" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats banner (navy) */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#0D2B6B" }}
        data-ocid="immobilier.whyus_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl text-white mb-2">
              Pourquoi nous faire confiance ?
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-shield-halved",
                title: "Transparence totale",
                desc: "Tous nos biens disposent de titres fonciers vérifiés. Zéro mauvaise surprise.",
              },
              {
                icon: "fa-handshake",
                title: "Accompagnement personnalisé",
                desc: "Un conseiller dédié vous suit du premier contact jusqu'à la signature.",
              },
              {
                icon: "fa-star",
                title: "Expertise locale",
                desc: "Plus de 5 ans de présence à Dakar, une connaissance unique du marché sénégalais.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="text-center text-white"
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "rgba(245,166,35,0.15)",
                    border: "1px solid rgba(245,166,35,0.3)",
                  }}
                >
                  <i
                    className={`fas ${item.icon} text-2xl`}
                    style={{ color: "#F5A623" }}
                  />
                </div>
                <h3 className="font-display text-base mb-2">{item.title}</h3>
                <p
                  className="font-body text-sm"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zones d'intervention — pill badges */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="immobilier.zones_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <span
              className="inline-block text-xs font-body font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#1A75BC" }}
            >
              Couverture géographique
            </span>
            <h2
              className="text-2xl sm:text-3xl font-display mb-2"
              style={{ color: "#0D2B6B" }}
            >
              Nos Zones d'Intervention à{" "}
              <span style={{ color: "#F5A623" }}>Dakar</span>
            </h2>
            <div
              className="w-12 h-1 mx-auto rounded-full mb-3"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p className="text-sm font-body" style={{ color: "#666" }}>
              Nous couvrons les principales zones de Dakar et sa banlieue
            </p>
          </div>

          {/* Pill badges */}
          <div
            className="flex flex-wrap gap-3 justify-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {zonesData.map((z, i) => (
              <div
                key={z.name}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-body font-medium text-sm transition-smooth cursor-default"
                style={{
                  backgroundColor: "rgba(26,117,188,0.08)",
                  color: "#0D2B6B",
                  border: "1px solid rgba(26,117,188,0.25)",
                }}
                data-ocid={`immobilier.zone_badge.${i + 1}`}
              >
                <span>{z.emoji}</span>
                <span>{z.name}</span>
              </div>
            ))}
          </div>

          {/* Zone cards - detailed grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {zonesData.slice(0, 8).map((z, i) => (
              <div
                key={`${z.name}-card`}
                className="bg-card rounded-xl p-5 text-center shadow-card card-hover"
                data-aos="zoom-in"
                data-aos-delay={`${i * 70}`}
                data-ocid={`immobilier.zone_card.${i + 1}`}
              >
                <div className="text-3xl mb-2">{z.emoji}</div>
                <p
                  className="font-display text-sm font-bold"
                  style={{ color: "#0D2B6B" }}
                >
                  {z.name}
                </p>
                <p className="font-body text-xs mt-1" style={{ color: "#888" }}>
                  {z.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus en 3 étapes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2
              className="text-2xl sm:text-3xl font-display mb-2"
              style={{ color: "#0D2B6B" }}
            >
              Comment ça <span style={{ color: "#F5A623" }}>fonctionne ?</span>
            </h2>
            <div
              className="w-12 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: "fa-phone",
                title: "Contactez-nous",
                desc: "Remplissez le formulaire ou appelez-nous. Un conseiller vous répond sous 24h.",
              },
              {
                step: "02",
                icon: "fa-search",
                title: "Analyse du projet",
                desc: "Nous étudions votre besoin et sélectionnons les meilleures offres adaptées à votre profil.",
              },
              {
                step: "03",
                icon: "fa-file-signature",
                title: "Concrétisation",
                desc: "Visite, négociation et accompagnement complet jusqu'à la signature définitive.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="relative text-center"
                data-aos="fade-up"
                data-aos-delay={`${i * 120}`}
              >
                <div
                  className="text-5xl font-display font-black mb-4"
                  style={{ color: "rgba(13,43,107,0.08)" }}
                >
                  {item.step}
                </div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto -mt-10 mb-4 shadow-card"
                  style={{ backgroundColor: "#1A75BC" }}
                >
                  <i className={`fas ${item.icon} text-white text-xl`} />
                </div>
                <h3
                  className="font-display text-base mb-2"
                  style={{ color: "#0D2B6B" }}
                >
                  {item.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
                {i < 2 && (
                  <div
                    className="hidden md:block absolute top-16 left-full w-8 -translate-x-4"
                    style={{ color: "#D1D9E0" }}
                  >
                    <i className="fas fa-arrow-right text-lg" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="formulaire"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
        data-ocid="immobilier.form_section"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ backgroundColor: "rgba(13,43,107,0.1)" }}
            >
              <span className="text-2xl">🏠</span>
            </div>
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2 font-display"
              style={{ color: "#1A75BC" }}
            >
              Nous Contacter
            </p>
            <h2
              className="text-3xl sm:text-4xl font-display mb-4"
              style={{ color: "#0D2B6B" }}
            >
              Décrivez votre projet{" "}
              <span style={{ color: "#F5A623" }}>immobilier</span>
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          {submitted ? (
            <div
              className="text-center p-10 rounded-2xl border-2"
              style={{ backgroundColor: "#F4F6F9", borderColor: "#22c55e33" }}
              data-ocid="immobilier.form.success_state"
              data-aos="zoom-in"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#22c55e15" }}
              >
                <i
                  className="fas fa-check-circle text-4xl"
                  style={{ color: "#22c55e" }}
                />
              </div>
              <h3
                className="text-xl font-display mb-2"
                style={{ color: "#0D2B6B" }}
              >
                Message envoyé avec succès !
              </h3>
              <p className="text-sm font-body" style={{ color: "#666" }}>
                Notre équipe immobilier vous contactera dans les plus brefs
                délais.
              </p>
              <button
                type="button"
                className="mt-6 btn-primary px-8"
                onClick={() => setSubmitted(false)}
                data-ocid="immobilier.form.new_request_button"
              >
                <i className="fas fa-plus mr-2" />
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 bg-card p-8 rounded-2xl shadow-card border border-border"
              data-aos="fade-up"
              data-aos-delay="100"
              data-ocid="immobilier.contact_form"
            >
              {/* Nom + Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="immo-nom"
                    className="block text-sm font-semibold mb-1.5 font-display"
                    style={{ color: "#0D2B6B" }}
                  >
                    Nom complet <span style={{ color: "#C0392B" }}>*</span>
                  </label>
                  <input
                    id="immo-nom"
                    type="text"
                    name="nom"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    className={inputCls}
                    style={inputStyle}
                    data-ocid="immobilier.form.nom_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="immo-telephone"
                    className="block text-sm font-semibold mb-1.5 font-display"
                    style={{ color: "#0D2B6B" }}
                  >
                    Téléphone <span style={{ color: "#C0392B" }}>*</span>
                  </label>
                  <input
                    id="immo-telephone"
                    type="tel"
                    name="telephone"
                    required
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="+221 77 000 00 00"
                    className={inputCls}
                    style={inputStyle}
                    data-ocid="immobilier.form.telephone_input"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="immo-email"
                  className="block text-sm font-semibold mb-1.5 font-display"
                  style={{ color: "#0D2B6B" }}
                >
                  Adresse email <span style={{ color: "#C0392B" }}>*</span>
                </label>
                <input
                  id="immo-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className={inputCls}
                  style={inputStyle}
                  data-ocid="immobilier.form.email_input"
                />
              </div>

              {/* Type de bien + Transaction */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="immo-typeBien"
                    className="block text-sm font-semibold mb-1.5 font-display"
                    style={{ color: "#0D2B6B" }}
                  >
                    Type de bien
                  </label>
                  <select
                    id="immo-typeBien"
                    name="typeBien"
                    value={form.typeBien}
                    onChange={handleChange}
                    className={`${inputCls} appearance-none cursor-pointer`}
                    style={{
                      ...inputStyle,
                      color: form.typeBien ? "#1a202c" : "#9ca3af",
                    }}
                    data-ocid="immobilier.form.typeBien_select"
                  >
                    <option value="">— Sélectionnez —</option>
                    {bienOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="immo-transaction"
                    className="block text-sm font-semibold mb-1.5 font-display"
                    style={{ color: "#0D2B6B" }}
                  >
                    Type de transaction
                  </label>
                  <select
                    id="immo-transaction"
                    name="transaction"
                    value={form.transaction}
                    onChange={handleChange}
                    className={`${inputCls} appearance-none cursor-pointer`}
                    style={{
                      ...inputStyle,
                      color: form.transaction ? "#1a202c" : "#9ca3af",
                    }}
                    data-ocid="immobilier.form.transaction_select"
                  >
                    <option value="">— Sélectionnez —</option>
                    {transactionOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Localisation + Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="immo-localisation"
                    className="block text-sm font-semibold mb-1.5 font-display"
                    style={{ color: "#0D2B6B" }}
                  >
                    Localisation souhaitée
                  </label>
                  <input
                    id="immo-localisation"
                    type="text"
                    name="localisation"
                    value={form.localisation}
                    onChange={handleChange}
                    placeholder="Ex: Almadies, Mermoz, Liberté 6..."
                    className={inputCls}
                    style={inputStyle}
                    data-ocid="immobilier.form.localisation_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="immo-budget"
                    className="block text-sm font-semibold mb-1.5 font-display"
                    style={{ color: "#0D2B6B" }}
                  >
                    Budget
                  </label>
                  <select
                    id="immo-budget"
                    name="budget"
                    value={form.budget}
                    onChange={handleChange}
                    className={`${inputCls} appearance-none cursor-pointer`}
                    style={{
                      ...inputStyle,
                      color: form.budget ? "#1a202c" : "#9ca3af",
                    }}
                    data-ocid="immobilier.form.budget_select"
                  >
                    <option value="">— Sélectionnez —</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Type de service */}
              <div>
                <label
                  htmlFor="immo-typeService"
                  className="block text-sm font-semibold mb-1.5 font-display"
                  style={{ color: "#0D2B6B" }}
                >
                  Type de service <span style={{ color: "#C0392B" }}>*</span>
                </label>
                <select
                  id="immo-typeService"
                  name="typeService"
                  required
                  value={form.typeService}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none cursor-pointer`}
                  style={{
                    ...inputStyle,
                    color: form.typeService ? "#1a202c" : "#9ca3af",
                  }}
                  data-ocid="immobilier.form.typeService_select"
                >
                  <option value="" disabled>
                    Sélectionnez un service
                  </option>
                  {typeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="immo-message"
                  className="block text-sm font-semibold mb-1.5 font-display"
                  style={{ color: "#0D2B6B" }}
                >
                  Votre projet <span style={{ color: "#C0392B" }}>*</span>
                </label>
                <textarea
                  id="immo-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Décrivez votre projet immobilier : localisation, budget, délais, besoins spécifiques…"
                  className={`${inputCls} resize-none`}
                  style={inputStyle}
                  data-ocid="immobilier.form.message_textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="btn-primary w-full py-4 rounded-xl text-base"
                data-ocid="immobilier.form.submit_button"
              >
                {isPending ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2" />
                    Envoyer la demande
                  </>
                )}
              </button>

              <p
                className="text-xs text-center font-body"
                style={{ color: "#999" }}
              >
                <i className="fas fa-clock mr-1" style={{ color: "#F5A623" }} />
                * Notre conseiller immobilier vous recontacte sous 24h
              </p>
              <p
                className="text-xs text-center font-body"
                style={{ color: "#999" }}
              >
                <i className="fas fa-lock mr-1" />
                Vos informations sont confidentielles et protégées.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CTA final */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, #0D2B6B 0%, #1A3A7A 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <i
            className="fas fa-building text-4xl mb-5 block"
            style={{ color: "#F5A623" }}
          />
          <h2 className="font-display text-white text-3xl md:text-4xl mb-4">
            Concrétisons votre projet immobilier
          </h2>
          <p
            className="font-body text-lg leading-relaxed mb-8"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            Notre équipe d'experts est disponible pour vous guider dans votre
            investissement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+221338210181"
              data-ocid="immobilier.cta.phone_button"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth"
              style={{ backgroundColor: "#F5A623", color: "#0D2B6B" }}
            >
              <i className="fa-solid fa-phone" />
              33 821 01 81
            </a>
            <Link
              to="/contact"
              data-ocid="immobilier.cta.contact_link"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold font-body text-sm transition-smooth"
              style={{
                backgroundColor: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.35)",
                color: "#fff",
              }}
            >
              <i className="fa-solid fa-envelope" />
              Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
