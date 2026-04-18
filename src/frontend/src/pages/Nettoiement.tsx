import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useSubmitNettoiement } from "../hooks/useBackend";
import type { DemandeInput } from "../types";

const mainServices = [
  {
    icon: "fa-building",
    emoji: "🏢",
    title: "Nettoyage de Locaux",
    desc: "Nous assurons la propreté complète de vos espaces de travail, en respectant les normes d'hygiène professionnelles. Nos équipes interviennent régulièrement ou ponctuellement selon vos besoins.",
    bullets: [
      "Bureaux, administrations et open spaces",
      "Copropriétés et parties communes",
      "Commerces et centres commerciaux",
      "Établissements scolaires et universitaires",
    ],
  },
  {
    icon: "fa-calendar-days",
    emoji: "🎉",
    title: "Nettoyage Évènementiel",
    desc: "Nous prenons en charge la propreté de vos événements du début à la fin. Une remise en état rapide et efficace pour que vos espaces retrouvent leur éclat.",
    bullets: [
      "Préparation avant événement",
      "Nettoyage en cours de manifestation",
      "Remise en état après événement",
      "Mariages, conférences, galas",
    ],
  },
  {
    icon: "fa-hotel",
    emoji: "🏨",
    title: "Nettoyage Hôtels",
    desc: "Nous fournissons des gouvernantes et femmes de chambre qualifiées pour maintenir les standards hôteliers les plus élevés. Personnel discret et formé aux exigences de l'hôtellerie haut de gamme.",
    bullets: [
      "Gouvernantes et femmes de chambre qualifiées",
      "Chambres, suites et espaces communs",
      "Respect des standards hôteliers internationaux",
      "Personnel discret et professionnel",
    ],
  },
  {
    icon: "fa-hospital",
    emoji: "🏥",
    title: "Nettoyage Pôle Santé",
    desc: "Nos équipes spécialisées interviennent dans les établissements de santé selon les protocoles sanitaires les plus stricts. La prévention des infections nosocomiales est notre priorité absolue.",
    bullets: [
      "Hôpitaux et cliniques",
      "Respect des normes sanitaires strictes",
      "Prévention des infections nosocomiales",
      "Désinfection et stérilisation",
    ],
  },
  {
    icon: "fa-utensils",
    emoji: "🍽️",
    title: "Nettoyage Restauration",
    desc: "Nous garantissons une hygiène irréprochable dans vos cuisines et espaces de restauration, conforme aux normes HACCP. Hottes, friteuses, équipements industriels — tout est traité avec rigueur.",
    bullets: [
      "Cuisines professionnelles et laboratoires",
      "Respect HACCP et sécurité alimentaire",
      "Hottes, friteuses et équipements",
      "Salles de restauration",
    ],
  },
  {
    icon: "fa-hammer",
    emoji: "🏗️",
    title: "Nettoyage & Maintenance Immobilière",
    desc: "Remise en état complète d'appartements, de bureaux ou de parties communes. Nous intervenons après travaux pour livrer des espaces parfaitement propres et prêts à l'occupation.",
    bullets: [
      "Remise en état appartements/bureaux",
      "Nettoyage après travaux",
      "Parties communes résidentielles",
      "Petits travaux de maintenance",
    ],
  },
  {
    icon: "fa-industry",
    emoji: "🏭",
    title: "Nettoyage Industriel & Logistique",
    desc: "Nos équipes traitent les surfaces les plus complexes : machines industrielles, racks de stockage, zones de production étendues. Dégraissage, traitement de surfaces et nettoyage haute pression.",
    bullets: [
      "Usines et entrepôts",
      "Machines industrielles et racks",
      "Zones de stockage étendues",
      "Dégraissage et traitement surfaces",
    ],
  },
  {
    icon: "fa-leaf",
    emoji: "🌿",
    title: "Gestion Espaces Verts",
    desc: "Entretien régulier de vos jardins, pelouses et espaces verts pour maintenir un cadre agréable et soigné. Nous gérons également les espaces communs de résidences et de copropriétés.",
    bullets: [
      "Tonte de pelouses et gazons",
      "Taille haies et arbustes",
      "Entretien jardins et parcs",
      "Gestion espaces communs résidences",
    ],
  },
];

const associatedServices = [
  {
    icon: "fa-door-open",
    title: "Préparation Salles de Réunion",
    desc: "Configuration et mise en place professionnelle",
  },
  {
    icon: "fa-trash-can",
    title: "Gestion des Déchets",
    desc: "Collecte, tri et évacuation responsable",
  },
  {
    icon: "fa-chalkboard-user",
    title: "Formation Agents",
    desc: "Formation continue des agents de nettoyage",
  },
  {
    icon: "fa-headset",
    title: "Accompagnement Personnalisé",
    desc: "Conseil et suivi sur mesure pour chaque client",
  },
];

const qualityCommitments = [
  {
    emoji: "🏆",
    title: "Produits Certifiés",
    desc: "Utilisation exclusive de produits homologués, écologiques et conformes aux normes sanitaires",
  },
  {
    emoji: "👷",
    title: "Personnel Formé",
    desc: "Agents certifiés, formés aux techniques professionnelles et aux protocoles d'hygiène",
  },
  {
    emoji: "⏰",
    title: "Disponibilité 7j/7",
    desc: "Interventions planifiées ou d'urgence disponibles 7 jours sur 7, y compris jours fériés",
  },
  {
    emoji: "📋",
    title: "Devis Gratuit 24h",
    desc: "Étude personnalisée de votre besoin et devis gratuit transmis sous 24 heures",
  },
];

const sectors = [
  "🏢 Bureaux & Administrations",
  "🏨 Hôtellerie & Tourisme",
  "🏥 Santé & Cliniques",
  "🏫 Établissements Scolaires",
  "🍽️ Restauration & Alimentation",
  "🏭 Industrie & Logistique",
  "🛒 Commerce & Retail",
  "🏘️ Résidences & Copropriétés",
];

const SERVICE_OPTIONS = mainServices.map((s) => s.title);

const TYPE_LOCAL_OPTIONS = [
  "Bureau/Administration",
  "Hôtel",
  "Hôpital/Clinique",
  "Restaurant",
  "Résidence/Appartement",
  "Industrie/Entrepôt",
  "Commerce/Retail",
  "Autre",
];

const SURFACE_OPTIONS = [
  "Moins de 100m²",
  "100 à 500m²",
  "500 à 1000m²",
  "Plus de 1000m²",
];

const FREQUENCE_OPTIONS = [
  "Intervention ponctuelle",
  "Hebdomadaire",
  "Bi-mensuel",
  "Mensuel",
  "Contrat annuel",
];

interface FormState extends DemandeInput {
  typeService: string;
  typeLocal: string;
  surface: string;
  frequence: string;
  dateIntervention: string;
}

const emptyForm: FormState = {
  nom: "",
  email: "",
  telephone: "",
  message: "",
  typeService: "",
  typeLocal: "",
  surface: "",
  frequence: "",
  dateIntervention: "",
};

export function NettoiementPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const { mutate: submit, isPending } = useSubmitNettoiement();

  useEffect(() => {
    document.title =
      "Nettoyage Professionnel Dakar Sénégal | Assirik Tours Nettoiement";
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
    const extras = [
      form.typeService && `Service: ${form.typeService}`,
      form.typeLocal && `Type de local: ${form.typeLocal}`,
      form.surface && `Surface: ${form.surface}`,
      form.frequence && `Fréquence: ${form.frequence}`,
      form.dateIntervention && `Date souhaitée: ${form.dateIntervention}`,
    ]
      .filter(Boolean)
      .join(" | ");

    const payload: DemandeInput = {
      nom: form.nom,
      email: form.email,
      telephone: form.telephone,
      message: extras ? `[${extras}]\n${form.message}` : form.message,
    };
    submit(payload, {
      onSuccess: () => {
        setSubmitted(true);
        setForm(emptyForm);
        toast.success("Devis demandé ! ATN vous répondra dans les 24h.");
      },
      onError: () =>
        toast.error("Une erreur est survenue. Veuillez réessayer."),
    });
  };

  return (
    <div data-ocid="nettoiement.page">
      {/* Hero */}
      <section
        className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0D2B6B 0%, #1A3A8A 50%, #1A75BC 100%)",
        }}
        data-ocid="nettoiement.hero_section"
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/4"
          style={{ background: "#F5A623" }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/2 -translate-x-1/4"
          style={{ background: "#1A75BC" }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elevated"
            style={{
              background: "rgba(245,166,35,0.15)",
              border: "2px solid rgba(245,166,35,0.35)",
            }}
          >
            <i className="fas fa-broom text-5xl" style={{ color: "#F5A623" }} />
          </div>

          <p
            className="text-sm font-semibold uppercase tracking-[0.35em] mb-3"
            style={{ color: "#F5A623", fontFamily: "Montserrat, sans-serif" }}
          >
            Assirik Tours Nettoiement (ATN)
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            data-ocid="nettoiement.hero_title"
          >
            Propreté & <span style={{ color: "#F5A623" }}>Excellence</span>
          </h1>

          <p
            className="text-xl sm:text-2xl font-semibold mb-4 tracking-wide"
            style={{
              color: "rgba(255,255,255,0.95)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            Nettoyer · Assainir · Désinfecter
          </p>

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8"
            style={{
              color: "rgba(255,255,255,0.8)",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Créée en 2019, ATN est votre partenaire hygiène professionnel à
            Dakar — spécialiste de la propreté et des services associés dans
            tous les secteurs d'activité.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto">
            {[
              { value: "2019", label: "Fondée" },
              { value: "8", label: "Domaines" },
              { value: "100%", label: "Professionnel" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl py-4 px-2"
                style={{ background: "rgba(255,255,255,0.1)" }}
              >
                <div
                  className="text-2xl font-bold"
                  style={{
                    color: "#F5A623",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About ATN */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="nettoiement.about_section"
      >
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 text-center lg:text-left">
              <div
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-6"
                style={{ backgroundColor: "#F4F6F9" }}
              >
                <i
                  className="fas fa-certificate"
                  style={{ color: "#F5A623" }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Plus de 5 ans d'expertise
                </span>
              </div>
              <h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                style={{
                  color: "#0D2B6B",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Votre Partenaire{" "}
                <span style={{ color: "#1A75BC" }}>Hygiène</span>
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
              >
                ATN (Assirik Tours Nettoiement) est un département spécialisé
                dans la propreté professionnelle et les services associés.
                Depuis 2019, nous intervenons dans tous les secteurs d'activité
                — hôpitaux, bureaux, industries, hôtels et espaces verts — avec
                des équipes formées aux normes les plus exigeantes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 flex-shrink-0">
              {[
                { icon: "fa-shield-halved", label: "Normes strictes" },
                { icon: "fa-users", label: "Équipes qualifiées" },
                { icon: "fa-clock", label: "Disponibilité 7j/7" },
                { icon: "fa-thumbs-up", label: "Satisfaction garantie" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center text-center p-4 rounded-xl"
                  style={{ backgroundColor: "#F4F6F9" }}
                >
                  <i
                    className={`fas ${item.icon} text-2xl mb-2`}
                    style={{ color: "#1A75BC" }}
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="nettoiement.services_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              8 Domaines d'Activité
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Services de Nettoyage
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mainServices.map((s, i) => (
              <div
                key={s.title}
                className="bg-white rounded-xl shadow-card card-hover flex flex-col overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={`${(i % 4) * 80}`}
                data-ocid={`nettoiement.service_card.${i + 1}`}
              >
                {/* Gold top border accent */}
                <div
                  className="h-1 w-full"
                  style={{ backgroundColor: "#F5A623" }}
                />
                <div className="p-6 flex flex-col flex-1">
                  {/* Large emoji */}
                  <div className="text-5xl text-center mb-4">{s.emoji}</div>
                  <h3
                    className="text-sm font-bold mb-3 text-center leading-snug"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{
                      color: "#666",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    {s.desc}
                  </p>
                  <ul className="mt-auto space-y-1.5">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-xs"
                        style={{
                          color: "#444",
                          fontFamily: "Open Sans, sans-serif",
                        }}
                      >
                        <i
                          className="fas fa-check-circle mt-0.5 flex-shrink-0"
                          style={{ color: "#1A75BC", fontSize: "10px" }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitments */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="nettoiement.quality_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Standards
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Engagements Qualité
            </h2>
            <p
              className="text-base max-w-xl mx-auto mb-4"
              style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
            >
              Des standards professionnels à chaque intervention
            </p>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityCommitments.map((c, i) => (
              <div
                key={c.title}
                className="bg-white shadow-md rounded-xl p-6 text-center border"
                style={{ borderColor: "#eef0f5" }}
                data-aos="zoom-in"
                data-aos-delay={`${i * 100}`}
                data-ocid={`nettoiement.quality_card.${i + 1}`}
              >
                <div className="text-4xl text-center mb-3">{c.emoji}</div>
                <h3
                  className="font-bold mb-2 text-sm"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="nettoiement.sectors_section"
      >
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <p
            className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
            style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
          >
            Couverture Sectorielle
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3"
            style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
          >
            Nous Intervenons Dans Tous les Secteurs
          </h2>
          <p
            className="text-sm mb-8 max-w-xl mx-auto"
            style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
          >
            ATN intervient dans tous les secteurs d'activité au Sénégal
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full px-4 py-2 font-medium text-sm border"
                style={{
                  backgroundColor: "#EEF4FB",
                  color: "#1e3a6e",
                  borderColor: "#bfd5ee",
                  fontFamily: "Open Sans, sans-serif",
                }}
                data-ocid={`nettoiement.sector_pill.${sectors.indexOf(sector) + 1}`}
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Services */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="nettoiement.associated_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              En plus de nos services principaux
            </p>
            <h2
              className="text-2xl sm:text-3xl font-bold mb-3"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Services Associés
            </h2>
            <div
              className="w-12 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {associatedServices.map((s, i) => (
              <div
                key={s.title}
                className="text-center p-6 rounded-xl border card-hover"
                style={{ borderColor: "#e0e8f5", backgroundColor: "#F4F6F9" }}
                data-aos="zoom-in"
                data-aos-delay={`${i * 100}`}
                data-ocid={`nettoiement.associated_card.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: "#0D2B6B" }}
                >
                  <i className={`fas ${s.icon} text-xl text-white`} />
                </div>
                <p
                  className="text-sm font-bold mb-1"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {s.title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Devis Form */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="nettoiement.form_section"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Devis gratuit & sans engagement
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              🧹 Demandez Votre Devis Nettoyage
            </h2>
            <p
              className="text-sm"
              style={{ color: "#888", fontFamily: "Open Sans, sans-serif" }}
            >
              * Devis gratuit sous 24h • Personnel qualifié garanti
            </p>
            <div
              className="w-16 h-1 mx-auto rounded-full mt-4"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          {submitted ? (
            <div
              className="text-center p-12 rounded-2xl bg-white shadow-card"
              data-ocid="nettoiement.form.success_state"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                style={{ background: "rgba(34,197,94,0.1)" }}
              >
                <i
                  className="fas fa-check text-4xl"
                  style={{ color: "#22c55e" }}
                />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{
                  color: "#0D2B6B",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Devis demandé avec succès !
              </h3>
              <p
                className="text-sm mb-6"
                style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
              >
                Notre équipe ATN analysera votre demande et vous répondra dans
                les <strong>24 heures</strong>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-primary px-8"
                data-ocid="nettoiement.form.new_request_button"
              >
                <i className="fas fa-plus mr-2" />
                Nouvelle demande
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-card space-y-5"
              data-aos="fade-up"
              data-ocid="nettoiement.devis_form"
            >
              {/* Nom + Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="n-nom"
                    className="block text-sm font-semibold mb-1.5"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Nom complet *
                  </label>
                  <input
                    id="n-nom"
                    type="text"
                    name="nom"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth focus:border-[#1A75BC]"
                    style={{
                      borderColor: "#dde3ef",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                    data-ocid="nettoiement.form.nom_input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="n-telephone"
                    className="block text-sm font-semibold mb-1.5"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Téléphone *
                  </label>
                  <input
                    id="n-telephone"
                    type="tel"
                    name="telephone"
                    required
                    value={form.telephone}
                    onChange={handleChange}
                    placeholder="+221 77 000 00 00"
                    className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth focus:border-[#1A75BC]"
                    style={{
                      borderColor: "#dde3ef",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                    data-ocid="nettoiement.form.telephone_input"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="n-email"
                  className="block text-sm font-semibold mb-1.5"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Email *
                </label>
                <input
                  id="n-email"
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth focus:border-[#1A75BC]"
                  style={{
                    borderColor: "#dde3ef",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                  data-ocid="nettoiement.form.email_input"
                />
              </div>

              {/* Type de service + Type de local */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="n-typeService"
                    className="block text-sm font-semibold mb-1.5"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Type de service *
                  </label>
                  <div className="relative">
                    <select
                      id="n-typeService"
                      name="typeService"
                      required
                      value={form.typeService}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth appearance-none focus:border-[#1A75BC] bg-white"
                      style={{
                        borderColor: "#dde3ef",
                        color: form.typeService ? "#1a1a2e" : "#9ca3af",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                      data-ocid="nettoiement.form.typeService_select"
                    >
                      <option value="" disabled>
                        Sélectionnez un service
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <i
                      className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
                      style={{ color: "#9ca3af" }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="n-typeLocal"
                    className="block text-sm font-semibold mb-1.5"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Type de local
                  </label>
                  <div className="relative">
                    <select
                      id="n-typeLocal"
                      name="typeLocal"
                      value={form.typeLocal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth appearance-none focus:border-[#1A75BC] bg-white"
                      style={{
                        borderColor: "#dde3ef",
                        color: form.typeLocal ? "#1a1a2e" : "#9ca3af",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                      data-ocid="nettoiement.form.typeLocal_select"
                    >
                      <option value="">Sélectionnez un type</option>
                      {TYPE_LOCAL_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <i
                      className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
                      style={{ color: "#9ca3af" }}
                    />
                  </div>
                </div>
              </div>

              {/* Surface + Fréquence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="n-surface"
                    className="block text-sm font-semibold mb-1.5"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Surface approximative
                  </label>
                  <div className="relative">
                    <select
                      id="n-surface"
                      name="surface"
                      value={form.surface}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth appearance-none focus:border-[#1A75BC] bg-white"
                      style={{
                        borderColor: "#dde3ef",
                        color: form.surface ? "#1a1a2e" : "#9ca3af",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                      data-ocid="nettoiement.form.surface_select"
                    >
                      <option value="">Sélectionnez une surface</option>
                      {SURFACE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <i
                      className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
                      style={{ color: "#9ca3af" }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="n-frequence"
                    className="block text-sm font-semibold mb-1.5"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    Fréquence souhaitée
                  </label>
                  <div className="relative">
                    <select
                      id="n-frequence"
                      name="frequence"
                      value={form.frequence}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth appearance-none focus:border-[#1A75BC] bg-white"
                      style={{
                        borderColor: "#dde3ef",
                        color: form.frequence ? "#1a1a2e" : "#9ca3af",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                      data-ocid="nettoiement.form.frequence_select"
                    >
                      <option value="">Sélectionnez une fréquence</option>
                      {FREQUENCE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <i
                      className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs"
                      style={{ color: "#9ca3af" }}
                    />
                  </div>
                </div>
              </div>

              {/* Date d'intervention */}
              <div>
                <label
                  htmlFor="n-dateIntervention"
                  className="block text-sm font-semibold mb-1.5"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Date d'intervention souhaitée
                </label>
                <input
                  id="n-dateIntervention"
                  type="date"
                  name="dateIntervention"
                  value={form.dateIntervention}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth focus:border-[#1A75BC]"
                  style={{
                    borderColor: "#dde3ef",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                  data-ocid="nettoiement.form.date_input"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="n-message"
                  className="block text-sm font-semibold mb-1.5"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Description du besoin *
                </label>
                <textarea
                  id="n-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Besoins spécifiques, contraintes d'accès, informations complémentaires..."
                  className="w-full px-4 py-3 rounded-lg border-2 text-sm outline-none transition-smooth resize-none focus:border-[#1A75BC]"
                  style={{
                    borderColor: "#dde3ef",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                  data-ocid="nettoiement.form.message_textarea"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isPending}
                className="btn-primary w-full py-4 rounded-lg text-base"
                data-ocid="nettoiement.form.submit_button"
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
                className="text-xs text-center"
                style={{ color: "#999", fontFamily: "Open Sans, sans-serif" }}
              >
                <i className="fas fa-lock mr-1" />
                Vos données sont confidentielles et ne seront jamais partagées.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
