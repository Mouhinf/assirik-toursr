import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

const departments = [
  {
    id: "voyages",
    title: "Voyages",
    subtitle: "Explorez le monde",
    description:
      "Billets d'avion, assistance visa, circuits touristiques, transferts aéroport et réservations hôtels au meilleur prix.",
    icon: "fa-plane",
    href: "/voyages",
    accentColor: "#1A75BC",
    bgLight: "rgba(26,117,188,0.08)",
  },
  {
    id: "immobilier",
    title: "Immobilier",
    subtitle: "Trouvez votre chez-vous",
    description:
      "Vente de terrains et maisons, location, gestion locative, expertise et conseil en investissement immobilier.",
    icon: "fa-building",
    href: "/immobilier",
    accentColor: "#0D2B6B",
    bgLight: "rgba(13,43,107,0.08)",
  },
  {
    id: "nettoiement",
    title: "Nettoiement",
    subtitle: "Propreté & Excellence",
    description:
      "Services professionnels de nettoyage pour bureaux, hôtels, hôpitaux, industries et espaces verts depuis 2019.",
    icon: "fa-broom",
    href: "/nettoiement",
    accentColor: "#F5A623",
    bgLight: "rgba(245,166,35,0.08)",
  },
];

const stats = [
  {
    value: "500+",
    label: "Clients Voyages",
    emoji: "✈️",
    icon: "fa-plane",
    desc: "Voyageurs satisfaits depuis notre création.",
  },
  {
    value: "200+",
    label: "Propriétés Gérées",
    emoji: "🏠",
    icon: "fa-building",
    desc: "Biens immobiliers vendus, loués et gérés.",
  },
  {
    value: "98%",
    label: "Satisfaction Client",
    emoji: "⭐",
    icon: "fa-star",
    desc: "Taux de satisfaction mesuré auprès de nos clients.",
  },
  {
    value: "Depuis 2019",
    label: "ATN Nettoyage",
    emoji: "🧹",
    icon: "fa-broom",
    desc: "Plus de 5 ans d'expertise en propreté professionnelle.",
  },
];

const values = [
  {
    icon: "fa-award",
    title: "Expertise",
    desc: "Des professionnels qualifiés et expérimentés dans chaque domaine d'activité.",
  },
  {
    icon: "fa-gem",
    title: "Qualité",
    desc: "Des prestations soignées qui respectent les normes les plus exigeantes.",
  },
  {
    icon: "fa-handshake",
    title: "Proximité",
    desc: "Un service personnalisé et une relation de confiance durable avec chaque client.",
  },
  {
    icon: "fa-tag",
    title: "Prix abordables",
    desc: "Des tarifs compétitifs sans aucun compromis sur la qualité du service.",
  },
];

const testimonials = [
  {
    name: "Abdoulaye K.",
    role: "Client Voyages",
    dept: "Voyages",
    text: "Service impeccable ! Assirik Tours a géré notre voyage de noces à Dubai avec un professionnalisme remarquable. Chaque détail était parfait.",
    rating: 5,
    initials: "AK",
    color: "#1A75BC",
  },
  {
    name: "Mariama S.",
    role: "Cliente Immobilier",
    dept: "Immobilier",
    text: "Grâce à Assirik Immobilier, nous avons trouvé notre maison idéale à Mermoz. Service rapide et efficace, je recommande vivement !",
    rating: 5,
    initials: "MS",
    color: "#0D2B6B",
  },
  {
    name: "Ibrahima D.",
    role: "Client Nettoyage",
    dept: "Nettoiement",
    text: "Les équipes ATN interviennent chaque semaine dans nos locaux. Un travail irréprochable et discret. Toujours ponctuels et professionnels.",
    rating: 5,
    initials: "ID",
    color: "#F5A623",
  },
  {
    name: "Fatima B.",
    role: "Cliente Voyages",
    dept: "Voyages",
    text: "J'ai obtenu mon visa Schengen grâce à leur assistance visa. Très professionnel et réactif. Ils ont géré tous les documents en un temps record.",
    rating: 5,
    initials: "FB",
    color: "#1A75BC",
  },
  {
    name: "Seydou N.",
    role: "Propriétaire Immobilier",
    dept: "Immobilier",
    text: "Excellent service de gestion locative. Ils s'occupent de tout, je reçois mes loyers sans souci. Une confiance totale en leur expertise.",
    rating: 5,
    initials: "SN",
    color: "#0D2B6B",
  },
];

const destinations = [
  {
    name: "Paris",
    country: "France",
    emoji: "🗼",
    image: "/assets/generated/dest-paris.dim_600x400.jpg",
    overlay:
      "linear-gradient(to top, rgba(13,43,107,0.85) 0%, rgba(13,43,107,0.3) 60%, transparent 100%)",
  },
  {
    name: "Dubai",
    country: "Émirats Arabes Unis",
    emoji: "🏙️",
    image: "/assets/generated/dest-dubai.dim_600x400.jpg",
    overlay:
      "linear-gradient(to top, rgba(180,100,0,0.85) 0%, rgba(180,100,0,0.3) 60%, transparent 100%)",
  },
  {
    name: "Istanbul",
    country: "Turquie",
    emoji: "🕌",
    image: "/assets/generated/dest-istanbul.dim_600x400.jpg",
    overlay:
      "linear-gradient(to top, rgba(150,30,20,0.85) 0%, rgba(150,30,20,0.3) 60%, transparent 100%)",
  },
  {
    name: "New York",
    country: "États-Unis",
    emoji: "🗽",
    image: "/assets/generated/dest-newyork.dim_600x400.jpg",
    overlay:
      "linear-gradient(to top, rgba(30,40,60,0.90) 0%, rgba(30,40,60,0.3) 60%, transparent 100%)",
  },
  {
    name: "Abidjan",
    country: "Côte d'Ivoire",
    emoji: "🌴",
    image: "/assets/generated/dest-abidjan.dim_600x400.jpg",
    overlay:
      "linear-gradient(to top, rgba(20,100,50,0.85) 0%, rgba(20,100,50,0.3) 60%, transparent 100%)",
  },
  {
    name: "Casablanca",
    country: "Maroc",
    emoji: "⭐",
    image: "/assets/generated/dest-casablanca.dim_600x400.jpg",
    overlay:
      "linear-gradient(to top, rgba(0,100,90,0.85) 0%, rgba(0,100,90,0.3) 60%, transparent 100%)",
  },
];

const howItWorks = [
  {
    step: "01",
    icon: "fa-magnifying-glass",
    emoji: "🔍",
    title: "Choisissez votre service",
    desc: "Sélectionnez parmi nos 3 départements : Voyages, Immobilier ou Nettoiement.",
  },
  {
    step: "02",
    icon: "fa-file-lines",
    emoji: "📋",
    title: "Remplissez le formulaire",
    desc: "Décrivez votre besoin en quelques clics depuis notre formulaire en ligne.",
  },
  {
    step: "03",
    icon: "fa-phone-volume",
    emoji: "📞",
    title: "Nous vous contactons",
    desc: "Notre équipe vous rappelle sous 24h pour affiner votre demande.",
  },
  {
    step: "04",
    icon: "fa-circle-check",
    emoji: "✅",
    title: "Profitez du service",
    desc: "Bénéficiez de notre expertise pour un résultat à la hauteur de vos attentes.",
  },
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
    image: "/assets/generated/property-villa-almadies.dim_600x400.jpg",
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
    image: "/assets/generated/property-appart-mermoz.dim_600x400.jpg",
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
    image: "/assets/generated/property-terrain-mbao.dim_600x400.jpg",
  },
];

const certifications = [
  {
    icon: "fa-id-badge",
    emoji: "🏛️",
    label: "Ninéa 007633250",
    sub: "République du Sénégal",
  },
  {
    icon: "fa-certificate",
    emoji: "✈️",
    label: "Licence n°07022012*0044126",
    sub: "Agence de Voyage agréée",
  },
  {
    icon: "fa-users",
    emoji: "⭐",
    label: "Membre ASAV",
    sub: "Association Sénégalaise des Agences de Voyage",
  },
];

function CounterStat({
  value,
  label,
  emoji,
  icon,
  desc,
  delay,
}: {
  value: string;
  label: string;
  emoji: string;
  icon: string;
  desc: string;
  delay: number;
}) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
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
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setDisplayed(Math.floor(eased * target) + suffix);
            if (progress < 1) requestAnimationFrame(step);
          };
          setTimeout(() => requestAnimationFrame(step), delay);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, delay]);

  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl p-7 flex flex-col items-center text-center shadow-card"
      style={{ borderTop: "4px solid #F5A623" }}
      data-aos="zoom-in"
      data-aos-delay={delay}
    >
      {/* Large emoji */}
      <div className="text-4xl mb-3" aria-hidden="true">
        {emoji}
      </div>
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
      >
        <i className={`fas ${icon} text-lg`} style={{ color: "#F5A623" }} />
      </div>
      <div
        className="text-3xl lg:text-4xl font-bold mb-1"
        style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
      >
        {displayed}
      </div>
      <div
        className="text-sm font-bold mb-2"
        style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
      >
        {label}
      </div>
      <p
        className="text-xs leading-relaxed"
        style={{ color: "#777", fontFamily: "Open Sans, sans-serif" }}
      >
        {desc}
      </p>
    </div>
  );
}

export function HomePage() {
  return (
    <div data-ocid="home.page">
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
        data-ocid="home.hero_section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(/assets/generated/hero-dakar-enhanced.dim_1920x1080.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
        />
        {/* Navy gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,43,107,0.93) 0%, rgba(13,43,107,0.78) 50%, rgba(26,117,188,0.88) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Animated floating elements */}
        <div
          className="absolute top-1/4 left-10 text-4xl opacity-20 pointer-events-none"
          style={{ animation: "float 4s ease-in-out infinite" }}
          aria-hidden="true"
        >
          ✈️
        </div>
        <div
          className="absolute top-1/3 right-12 text-3xl opacity-15 pointer-events-none"
          style={{ animation: "float 5s ease-in-out infinite 1s" }}
          aria-hidden="true"
        >
          🏢
        </div>
        <div
          className="absolute bottom-1/3 left-1/4 text-2xl opacity-20 pointer-events-none"
          style={{ animation: "float 3.5s ease-in-out infinite 0.5s" }}
          aria-hidden="true"
        >
          ✨
        </div>

        {/* Wave divider */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          aria-hidden="true"
          style={{ lineHeight: 0 }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "80px" }}
          >
            <path
              d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
              fill="#F4F6F9"
            />
          </svg>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-24">
          <div data-aos="fade-down" data-aos-delay="100">
            <img
              src="/assets/logo.png"
              alt="Assirik Tours — Agence de voyage, immobilier et nettoiement à Dakar"
              className="h-20 lg:h-28 w-auto mx-auto mb-8 object-contain drop-shadow-lg"
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="250">
            <p
              className="text-sm lg:text-base font-semibold uppercase tracking-[0.35em] mb-5"
              style={{ color: "#F5A623", fontFamily: "Montserrat, sans-serif" }}
            >
              Bienvenue chez Assirik Tours — Dakar, Sénégal
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Voyager, <span style={{ color: "#F5A623" }}>Habiter,</span>{" "}
              Nettoyer
              <br />
              <span
                className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-3"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                Assirik Tours à vos côtés
              </span>
            </h1>
            <p
              className="text-base lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.85)",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Votre partenaire de confiance pour vos voyages, investissements
              immobiliers et services de nettoyage au Sénégal.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <a
              href="#departments"
              className="btn-gold inline-flex items-center justify-center gap-2 px-9 py-4 rounded-lg text-base"
              data-ocid="home.hero_cta_primary"
            >
              <i className="fas fa-compass" />
              Découvrir nos services
            </a>
            <Link
              to="/contact"
              className="btn-outline-white inline-flex items-center justify-center gap-2 px-9 py-4 rounded-lg text-base"
              data-ocid="home.hero_cta_secondary"
            >
              <i className="fas fa-paper-plane" />
              Nous contacter
            </Link>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-14 flex flex-wrap items-center justify-center gap-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {[
              { icon: "fa-certificate", label: "Agence agréée" },
              { icon: "fa-map-marker-alt", label: "Dakar, Sénégal" },
              { icon: "fa-clock", label: "Disponible 6j/7" },
            ].map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <i
                  className={`fas ${t.icon} text-xs`}
                  style={{ color: "#F5A623" }}
                />
                {t.label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll arrow */}
        <a
          href="#departments"
          className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce z-10"
          style={{ color: "#F5A623" }}
          aria-label="Défiler vers le bas"
          data-ocid="home.scroll_arrow"
        >
          <i className="fas fa-chevron-down text-2xl drop-shadow" />
        </a>
      </section>

      {/* ===== DEPARTMENTS SECTION ===== */}
      <section
        id="departments"
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="home.departments_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Services
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Trois Départements, Une Vision
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p
              className="mt-5 text-base max-w-xl mx-auto"
              style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
            >
              Assirik Tours regroupe trois pôles d'excellence pour répondre à
              tous vos besoins, en un seul partenaire de confiance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, i) => (
              <Link
                key={dept.id}
                to={dept.href}
                className="group bg-white rounded-2xl p-8 shadow-card card-hover text-center block"
                data-aos="fade-up"
                data-aos-delay={`${i * 150}`}
                data-ocid={`home.dept_card.${i + 1}`}
              >
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-smooth group-hover:scale-110"
                  style={{ backgroundColor: dept.bgLight }}
                >
                  <i
                    className={`fas ${dept.icon} text-3xl`}
                    style={{ color: dept.accentColor }}
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {dept.title}
                </h3>
                <p
                  className="text-sm font-semibold mb-4"
                  style={{
                    color: "#F5A623",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {dept.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
                >
                  {dept.description}
                </p>
                <div
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-smooth group-hover:gap-3"
                  style={{
                    color: "#1A75BC",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  Découvrir{" "}
                  <i className="fas fa-arrow-right text-xs transition-smooth group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS / KEY NUMBERS ===== */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="home.stats_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Assirik Tours en chiffres
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Des résultats qui parlent d'eux-mêmes
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <CounterStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                emoji={stat.emoji}
                icon={stat.icon}
                desc={stat.desc}
                delay={i * 120}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== POPULAR DESTINATIONS ===== */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="home.destinations_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Voyages
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Destinations Populaires
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p
              className="mt-5 text-base max-w-xl mx-auto"
              style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
            >
              Explorez nos destinations phares au départ de Dakar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {destinations.map((dest, i) => (
              <div
                key={dest.name}
                className="rounded-2xl overflow-hidden shadow-card card-hover relative group"
                style={{ minHeight: "220px" }}
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
                data-ocid={`home.destination_card.${i + 1}`}
              >
                {/* Photo background */}
                <img
                  src={dest.image}
                  alt={`${dest.name} - ${dest.country}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: dest.overlay }}
                  aria-hidden="true"
                />
                {/* Content */}
                <div
                  className="relative z-10 p-6 flex flex-col items-center text-center h-full justify-end"
                  style={{ minHeight: "220px" }}
                >
                  <span
                    className="text-4xl mb-2 drop-shadow-lg"
                    aria-hidden="true"
                  >
                    {dest.emoji}
                  </span>
                  <h3
                    className="text-lg font-bold text-white drop-shadow-md"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    {dest.name}
                  </h3>
                  <p
                    className="text-xs mb-4 drop-shadow"
                    style={{ color: "rgba(255,255,255,0.82)" }}
                  >
                    {dest.country}
                  </p>
                  <Link
                    to="/voyages"
                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold transition-all duration-200 hover:opacity-90 backdrop-blur-sm"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.22)",
                      border: "1px solid rgba(255,255,255,0.45)",
                      color: "#fff",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    data-ocid={`home.destination_cta.${i + 1}`}
                  >
                    <i className="fas fa-paper-plane text-xs" />
                    Demander un devis
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up">
            <Link
              to="/voyages"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
              data-ocid="home.destinations_all_link"
            >
              Voir tous nos voyages <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="home.howitworks_section"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Simple & Rapide
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Comment ça marche ?
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Dashed connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 z-0"
              style={{
                borderTop: "2px dashed rgba(245,166,35,0.4)",
              }}
              aria-hidden="true"
            />

            {howItWorks.map((step, i) => (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center p-6 rounded-2xl"
                style={{ backgroundColor: "#F4F6F9" }}
                data-aos="fade-up"
                data-aos-delay={`${i * 120}`}
                data-ocid={`home.howto_step.${i + 1}`}
              >
                {/* Gold number circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white font-bold text-sm shadow-lg"
                  style={{
                    backgroundColor: "#F5A623",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {step.step}
                </div>
                {/* Emoji icon */}
                <div className="text-3xl mb-3" aria-hidden="true">
                  {step.emoji}
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(13,43,107,0.07)" }}
                >
                  <i
                    className={`fas ${step.icon} text-lg`}
                    style={{ color: "#0D2B6B" }}
                  />
                </div>
                <h3
                  className="text-sm font-bold mb-2"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA below steps */}
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm"
              data-ocid="home.howitworks_cta"
            >
              <i className="fas fa-paper-plane" />
              Démarrer ma demande
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROPERTIES ===== */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="home.properties_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Immobilier
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Biens en Vedette
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p
              className="mt-5 text-base max-w-xl mx-auto"
              style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
            >
              Découvrez notre sélection de propriétés à Dakar et environs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProperties.map((prop, i) => (
              <div
                key={`${prop.name}`}
                className="bg-white rounded-2xl overflow-hidden shadow-card card-hover group"
                data-aos="fade-up"
                data-aos-delay={`${i * 120}`}
                data-ocid={`home.property_card.${i + 1}`}
              >
                {/* Photo Illustration */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={`${prop.name} — ${prop.details}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay at bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(13,43,107,0.6) 0%, transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Badge */}
                  <span
                    className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                    style={{
                      backgroundColor: prop.badgeColor,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {prop.badge}
                  </span>
                  {/* Icon overlay */}
                  <div className="absolute bottom-3 left-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.2)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <i className={`fas ${prop.icon} text-white text-base`} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-1"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {prop.name}
                  </h3>
                  <p
                    className="text-xs mb-1 flex items-center gap-1"
                    style={{
                      color: "#1A75BC",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    <i className="fas fa-map-marker-alt text-xs" />
                    {prop.location}
                  </p>
                  <p
                    className="text-sm mb-3"
                    style={{
                      color: "#666",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    {prop.details}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {prop.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2 py-1 rounded-md"
                        style={{
                          backgroundColor: "#F4F6F9",
                          color: "#555",
                          fontFamily: "Open Sans, sans-serif",
                        }}
                      >
                        <i
                          className="fas fa-check text-xs mr-1"
                          style={{ color: "#F5A623" }}
                        />
                        {f}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-sm font-bold mb-4"
                    style={{
                      color: "#F5A623",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {prop.price}
                  </p>
                  <Link
                    to="/immobilier"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                    style={{
                      backgroundColor: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                    data-ocid={`home.property_cta.${i + 1}`}
                  >
                    <i className="fas fa-info-circle text-xs" />
                    Plus d'infos
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10" data-aos="fade-up">
            <Link
              to="/immobilier"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
              data-ocid="home.properties_all_link"
            >
              Voir tous nos biens <i className="fas fa-arrow-right text-xs" />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="home.why_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Pourquoi nous choisir
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Notre Engagement Qualité
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="text-center p-8 rounded-2xl border-2 border-transparent transition-smooth hover:shadow-card"
                style={{ backgroundColor: "#F4F6F9" }}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                data-ocid={`home.value_card.${i + 1}`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
                >
                  <i
                    className={`fas ${v.icon} text-2xl`}
                    style={{ color: "#F5A623" }}
                  />
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{
                    color: "#0D2B6B",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {v.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F4F6F9" }}
        data-ocid="home.testimonials_section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Témoignages
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Nos Clients Témoignent
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="bg-white rounded-2xl p-8 shadow-card relative"
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                data-ocid={`home.testimonial_card.${i + 1}`}
              >
                {/* Large gold quote mark */}
                <div
                  className="absolute top-4 right-6 text-7xl font-bold leading-none pointer-events-none select-none"
                  style={{ color: "rgba(245,166,35,0.13)" }}
                  aria-hidden="true"
                >
                  "
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i
                      key={`star-${t.name}-${j}`}
                      className="fas fa-star text-sm"
                      style={{ color: "#F5A623" }}
                    />
                  ))}
                </div>

                {/* Department badge */}
                <span
                  className="inline-block text-xs font-semibold px-2 py-0.5 rounded mb-3"
                  style={{
                    backgroundColor: `${t.color}15`,
                    color: t.color,
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {t.dept}
                </span>

                <p
                  className="text-sm leading-relaxed mb-7 italic"
                  style={{ color: "#555", fontFamily: "Open Sans, sans-serif" }}
                >
                  "{t.text}"
                </p>
                <div
                  className="flex items-center gap-3 pt-4 border-t"
                  style={{ borderColor: "#F4F6F9" }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold shadow-md"
                    style={{
                      backgroundColor: t.color,
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold"
                      style={{
                        color: "#0D2B6B",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: "#888",
                        fontFamily: "Open Sans, sans-serif",
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATIONS & PARTNERS ===== */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
        data-ocid="home.certifications_section"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up">
            <p
              className="text-sm font-semibold uppercase tracking-[0.25em] mb-2"
              style={{ color: "#1A75BC", fontFamily: "Montserrat, sans-serif" }}
            >
              Confiance & Légitimité
            </p>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#0D2B6B", fontFamily: "Montserrat, sans-serif" }}
            >
              Certifications & Agréments
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "#F5A623" }}
            />
            <p
              className="mt-4 text-sm max-w-lg mx-auto"
              style={{ color: "#666", fontFamily: "Open Sans, sans-serif" }}
            >
              Agence officielle agréée par les autorités sénégalaises
              compétentes
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.label}
                className="flex items-center gap-4 px-6 py-5 rounded-xl border-2 shadow-sm transition-all duration-200 hover:shadow-md"
                style={{
                  borderColor: "#0D2B6B",
                  backgroundColor: "#ffffff",
                }}
                data-aos="zoom-in"
                data-aos-delay={`${i * 80}`}
                data-ocid={`home.cert_badge.${i + 1}`}
              >
                {/* Emoji icon large */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl"
                  style={{ backgroundColor: "rgba(13,43,107,0.06)" }}
                >
                  {cert.emoji}
                </div>
                <div className="flex flex-col">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-1"
                    style={{ backgroundColor: "rgba(245,166,35,0.12)" }}
                  >
                    <i
                      className={`fas ${cert.icon} text-base`}
                      style={{ color: "#F5A623" }}
                    />
                  </div>
                  <p
                    className="text-sm font-bold"
                    style={{
                      color: "#0D2B6B",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {cert.label}
                  </p>
                  <p
                    className="text-xs"
                    style={{
                      color: "#888",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                  >
                    {cert.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ backgroundColor: "#0D2B6B" }}
        data-ocid="home.cta_section"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #F5A623 0px, #F5A623 1px, transparent 1px, transparent 20px)",
          }}
          aria-hidden="true"
        />

        <div
          className="max-w-3xl mx-auto text-center relative z-10"
          data-aos="fade-up"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "rgba(245,166,35,0.15)" }}
          >
            <i
              className="fas fa-envelope-open-text text-4xl"
              style={{ color: "#F5A623" }}
            />
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Prêts à travailler ensemble ?
          </h2>
          <p
            className="text-lg mb-10 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.78)",
              fontFamily: "Open Sans, sans-serif",
            }}
          >
            Contactez-nous dès aujourd'hui pour obtenir un devis gratuit et
            personnalisé. Notre équipe est à votre écoute 6j/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-gold inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg text-base"
              data-ocid="home.bottom_cta_button"
            >
              <i className="fas fa-paper-plane" />
              Contactez-nous maintenant
            </Link>
            <a
              href="tel:+22133821018"
              className="btn-outline-white inline-flex items-center justify-center gap-2 px-10 py-4 rounded-lg text-base"
              data-ocid="home.phone_cta_button"
            >
              <i className="fas fa-phone-alt" />
              Appelez-nous
            </a>
          </div>

          <div
            className="mt-12 pt-10 border-t flex flex-wrap justify-center gap-8"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {[
              { icon: "fa-certificate", label: "Ninéa 007633250" },
              { icon: "fa-id-badge", label: "Licence n°07022012*0044126" },
              { icon: "fa-map-marker-alt", label: "Dakar, Sénégal" },
            ].map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                <i
                  className={`fas ${badge.icon}`}
                  style={{ color: "#F5A623" }}
                />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
