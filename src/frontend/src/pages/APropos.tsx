import { Link } from "@tanstack/react-router";

const missionVision = [
  {
    emoji: "🎯",
    label: "Notre Mission",
    text: "Offrir des services d'excellence dans les domaines du voyage, de l'immobilier et du nettoyage professionnel, en plaçant la satisfaction client au cœur de chaque action et en garantissant qualité, transparence et proximité.",
    bg: "#0D2B6B",
  },
  {
    emoji: "🔭",
    label: "Notre Vision",
    text: "Devenir l'acteur de référence multi-services au Sénégal, reconnu pour la qualité de ses prestations, la fiabilité de ses équipes et son engagement envers le développement économique local.",
    bg: "#1A75BC",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Fondation d'Assirik Tours",
    desc: "Création de l'agence de voyage à Dakar, spécialisée billets d'avion et assistance visa.",
  },
  {
    year: "2017",
    title: "Lancement Immobilier",
    desc: "Ouverture du département immobilier — vente, location et gestion locative à Dakar.",
  },
  {
    year: "2019",
    title: "Création d'ATN",
    desc: "Naissance d'Assirik Tours Nettoiement, spécialiste de la propreté professionnelle au Sénégal.",
  },
  {
    year: "2024",
    title: "Expansion & Croissance",
    desc: "Développement des 3 départements avec des équipes qualifiées et des certifications officielles.",
  },
];

const values = [
  {
    icon: "fa-heart",
    title: "Passion",
    desc: "Notre amour du service client guide chacune de nos actions.",
  },
  {
    icon: "fa-shield-halved",
    title: "Intégrité",
    desc: "Transparence et honnêteté dans toutes nos relations d'affaires.",
  },
  {
    icon: "fa-bolt",
    title: "Excellence",
    desc: "Nous visons le meilleur résultat dans chaque prestation.",
  },
  {
    icon: "fa-users",
    title: "Proximité",
    desc: "Une relation humaine et personnalisée avec chaque client.",
  },
];

const teamMembers = [
  {
    initials: "DG",
    role: "Direction Générale",
    dept: "Assirik Tours",
    avatarBg: "#1e3a8a",
  },
  {
    initials: "RV",
    role: "Responsable Voyages",
    dept: "Département Voyages",
    avatarBg: "#1d4ed8",
  },
  {
    initials: "RI",
    role: "Responsable Immobilier",
    dept: "Département Immobilier",
    avatarBg: "#4338ca",
  },
  {
    initials: "DA",
    role: "Directrice ATN",
    dept: "Département Nettoiement",
    avatarBg: "#0f766e",
  },
  {
    initials: "CM",
    role: "Chargé Commercial",
    dept: "Commercial & Marketing",
    avatarBg: "#b45309",
  },
  {
    initials: "AS",
    role: "Assistante Direction",
    dept: "Secrétariat & Accueil",
    avatarBg: "#7c3aed",
  },
];

const keyStats = [
  { emoji: "✈️", value: "10+", label: "Années d'expérience Voyages" },
  { emoji: "👥", value: "500+", label: "Clients satisfaits" },
  { emoji: "🏠", value: "200+", label: "Propriétés gérées" },
  { emoji: "🧹", value: "5 ans", label: "ATN en activité (depuis 2019)" },
];

const certifications = [
  { label: "Ninéa", value: "007633250", icon: "fa-id-badge" },
  { label: "Licence", value: "n°07022012*0044126", icon: "fa-certificate" },
];

export function AProposPage() {
  return (
    <div data-ocid="a_propos.page">
      {/* Hero */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg, #0D2B6B 0%, #163c82 100%)",
        }}
        data-ocid="a_propos.hero_section"
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(245,166,35,0.2)" }}
          >
            <i
              className="fas fa-building text-4xl"
              style={{ color: "#F5A623" }}
            />
          </div>
          <h1
            className="text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            À Propos d'<span style={{ color: "#F5A623" }}>Assirik Tours</span>
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Une entreprise sénégalaise engagée pour vous offrir les meilleures
            prestations en voyage, immobilier et propreté.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="a_propos.mission_vision_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Qui Sommes-Nous
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Notre Mission & Notre Vision
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {missionVision.map((item, i) => (
              <div
                key={item.label}
                className="rounded-xl p-8 text-white"
                style={{ backgroundColor: item.bg }}
                data-aos="fade-up"
                data-aos-delay={`${i * 150}`}
                data-ocid={`a_propos.mission_card.${i + 1}`}
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "rgba(255,255,255,0.88)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Old Mission section — departments */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="a_propos.depts_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <p
                className="text-sm font-semibold uppercase tracking-[0.2em] mb-3"
                style={{
                  color: "#1A75BC",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Notre Groupe
              </p>
              <h2
                className="text-3xl font-bold mb-6"
                style={{
                  color: "#0D2B6B",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                Une Vision, Trois Expertises
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
              >
                Assirik Tours est une entreprise sénégalaise basée à Dakar,
                offrant des services professionnels à travers trois départements
                complémentaires : Voyages, Immobilier et Nettoiement.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
              >
                Notre mission est de vous accompagner avec expertise, proximité
                et qualité dans tous vos projets, qu'il s'agisse de voyager,
                d'acquérir un bien ou d'entretenir vos espaces.
              </p>
            </div>
            <div data-aos="fade-left">
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: "fa-plane",
                    title: "Assirik Tours Voyages",
                    color: "#1A75BC",
                  },
                  {
                    icon: "fa-building",
                    title: "Assirik Tours Immobilier",
                    color: "#0D2B6B",
                  },
                  {
                    icon: "fa-broom",
                    title: "Assirik Tours Nettoiement (ATN)",
                    color: "#F5A623",
                  },
                ].map((dep, i) => (
                  <div
                    key={dep.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white"
                    style={{ border: `2px solid ${dep.color}30` }}
                    data-ocid={`a_propos.dept_item.${i + 1}`}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${dep.color}18` }}
                    >
                      <i
                        className={`fas ${dep.icon} text-xl`}
                        style={{ color: dep.color }}
                      />
                    </div>
                    <p
                      className="font-bold"
                      style={{
                        color: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {dep.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="a_propos.stats_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Chiffres Clés
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Assirik Tours en Chiffres
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyStats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 text-center shadow-card overflow-hidden"
                style={{ borderTop: "4px solid #F5A623" }}
                data-aos="zoom-in"
                data-aos-delay={`${i * 100}`}
                data-ocid={`a_propos.stat_card.${i + 1}`}
              >
                <div className="text-3xl mb-3">{stat.emoji}</div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {stat.value}
                </div>
                <p
                  className="text-xs leading-snug"
                  style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="a_propos.timeline_section"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Notre Histoire
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Chronologie
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="space-y-6">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className="flex gap-6 items-start"
                data-aos="fade-right"
                data-aos-delay={`${i * 100}`}
                data-ocid={`a_propos.timeline_item.${i + 1}`}
              >
                <div className="flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      backgroundColor: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.year}
                  </div>
                </div>
                <div className="pt-3">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{
                      color: "#666",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="a_propos.values_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Valeurs
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Ce Qui Nous Guide
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: "#F4F6F9" }}
                data-aos="zoom-in"
                data-aos-delay={`${i * 100}`}
                data-ocid={`a_propos.value_card.${i + 1}`}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "rgba(245,166,35,0.15)" }}
                >
                  <i
                    className={`fas ${v.icon} text-xl`}
                    style={{ color: "#F5A623" }}
                  />
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="a_propos.team_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Notre Équipe
            </p>
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Équipes Dédiées
            </h2>
            <div
              className="w-12 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={member.initials + member.role}
                className="bg-white rounded-xl p-6 text-center shadow-card"
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                data-ocid={`a_propos.team_card.${i + 1}`}
              >
                <div
                  className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                  style={{ backgroundColor: member.avatarBg }}
                >
                  {member.initials}
                </div>
                <p
                  className="font-semibold text-sm mb-1"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {member.role}
                </p>
                <span
                  className="inline-block text-xs px-3 py-1 rounded-full font-medium mt-1"
                  style={{
                    backgroundColor: "#EEF4FB",
                    color: "#1A75BC",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                >
                  {member.dept}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="a_propos.certifications_section"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10" data-aos="fade-up">
            <h2
              className="text-2xl font-bold mb-2"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Certifications & Agréments
            </h2>
            <div
              className="w-12 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((c, i) => (
              <div
                key={c.label}
                className="flex items-center gap-5 p-6 rounded-xl border-2"
                style={{ borderColor: "#F5A623", backgroundColor: "#fffdf5" }}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                data-ocid={`a_propos.cert_card.${i + 1}`}
              >
                <i
                  className={`fas ${c.icon} text-3xl flex-shrink-0`}
                  style={{ color: "#F5A623" }}
                />
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{
                      color: "#1A75BC",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    className="text-lg font-bold"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {c.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(135deg, #0D2B6B, #1A3A7A)" }}
        data-ocid="a_propos.cta_section"
      >
        <div
          className="max-w-2xl mx-auto text-center text-white"
          data-aos="fade-up"
        >
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Prêt à Travailler Avec Nous ?
          </h2>
          <p
            className="mb-6"
            style={{
              color: "rgba(255,255,255,0.8)",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Contactez-nous pour discuter de votre projet et obtenir un devis
            personnalisé.
          </p>
          <Link
            to="/contact"
            className="btn-gold px-8 py-4 rounded-lg"
            data-ocid="a_propos.cta_button"
          >
            <i className="fas fa-paper-plane mr-2" />
            Nous Contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
