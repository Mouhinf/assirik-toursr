/**
 * Prerender script for Assirik Tours SPA
 * Generates static HTML files for each route with unique meta tags
 * Run after vite build: node prerender.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, "dist");
const BASE_URL = "https://www.assiriktours.com";

// Route definitions with unique SEO data
const routes = [
  {
    path: "/",
    title: "Assirik Tours | Voyage, Immobilier & Nettoiement Dakar",
    description:
      "Assirik Tours, agence à Dakar : voyages, immobilier et nettoiement. Billets d'avion, visa, gestion locative et nettoyage professionnel.",
    keywords:
      "Assirik Tours, agence voyage Dakar, immobilier Sénégal, nettoyage professionnel Dakar, billet avion Sénégal",
    ogType: "website",
    structuredData: "home",
  },
  {
    path: "/voyages",
    title: "Voyages | Billets d'Avion, Visa & Circuits Touristiques - Assirik Tours",
    description:
      "Réservez vos billets d'avion, obtenez votre visa, découvrez nos circuits touristiques au Sénégal et à l'international. Transferts aéroport et hôtels au meilleur prix.",
    keywords:
      "billet avion Dakar, visa Schengen Sénégal, circuit touristique Dakar, transfert aéroport, réservation hôtel Dakar",
    ogType: "website",
    structuredData: "voyages",
  },
  {
    path: "/immobilier",
    title: "Immobilier | Vente, Location & Gestion Locative à Dakar - Assirik Tours",
    description:
      "Vente de terrains et maisons à Dakar, location immobilière, gestion locative et conseil en investissement immobilier au Sénégal.",
    keywords:
      "immobilier Dakar, vente terrain Dakar, location appartement Dakar, gestion locative Sénégal, investissement immobilier",
    ogType: "website",
    structuredData: "immobilier",
  },
  {
    path: "/nettoiement",
    title: "Nettoiement | Nettoyage Professionnel & Entretien à Dakar - ATN",
    description:
      "Assirik Tours Nettoiement (ATN) — Services professionnels de nettoyage pour bureaux, hôtels, hôpitaux, industries et espaces verts à Dakar depuis 2019.",
    keywords:
      "nettoyage professionnel Dakar, entretien bureaux Sénégal, nettoyage hôtel, nettoyage industriel Dakar, espaces verts",
    ogType: "website",
    structuredData: "nettoiement",
  },
  {
    path: "/a-propos",
    title: "À Propos | Qui Sommes-Nous - Assirik Tours Dakar",
    description:
      "Découvrez Assirik Tours, agence sénégalaise de référence en voyages, immobilier et nettoiement. Notre mission, notre équipe et nos valeurs à Dakar.",
    keywords:
      "à propos Assirik Tours, agence voyage Sénégal, entreprise Dakar, notre équipe",
    ogType: "website",
    structuredData: "apropos",
  },
  {
    path: "/contact",
    title: "Contact | Devis & Informations - Assirik Tours Dakar",
    description:
      "Contactez Assirik Tours pour un devis gratuit. Téléphone, email, WhatsApp ou visite en agence à Dakar. Rue 22 prolongée Fass Delorme.",
    keywords:
      "contact Assirik Tours, devis voyage Dakar, téléphone agence Sénégal, email assirik tours",
    ogType: "website",
    structuredData: "contact",
  },
];

// Structured data templates
const structuredDataTemplates = {
  home: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${BASE_URL}/#travel-agency`,
        name: "Assirik Tours Voyages",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/assets/logo.png`,
        },
        image: `${BASE_URL}/assets/logo.png`,
        description:
          "Agence sénégalaise spécialisée en voyages, immobilier et nettoiement à Dakar.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rue 22 prolongée Fass Delorme",
          addressLocality: "Dakar",
          addressCountry: "SN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 14.6928,
          longitude: -17.4467,
        },
        telephone: "+221338210181",
        email: "assiriktours@gmail.com",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        sameAs: ["https://wa.me/221775495314"],
        priceRange: "$$",
        areaServed: {
          "@type": "Country",
          name: "Senegal",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Assirik Tours",
        publisher: {
          "@id": `${BASE_URL}/#travel-agency`,
        },
        inLanguage: "fr",
      },
      {
        "@type": "WebPage",
        "@id": `${BASE_URL}/#webpage`,
        url: BASE_URL,
        name: "Assirik Tours | Agence de Voyage, Immobilier & Nettoiement à Dakar",
        description:
          "Votre partenaire de confiance pour vos voyages, investissements immobiliers et services de nettoyage au Sénégal.",
        inLanguage: "fr",
        isPartOf: { "@id": `${BASE_URL}/#website` },
        about: { "@id": `${BASE_URL}/#travel-agency` },
      },
    ],
  },
  voyages: {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Assirik Tours Voyages",
    url: `${BASE_URL}/voyages`,
    description:
      "Billets d'avion, assistance visa, circuits touristiques, transferts aéroport et réservations hôtels au meilleur prix depuis Dakar.",
    telephone: "+221338210181",
    email: "assiriktours@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue 22 prolongée Fass Delorme",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    areaServed: { "@type": "Country", name: "Senegal" },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Billets d'Avion",
        description: "Vols nationaux et internationaux aux meilleurs tarifs",
      },
      {
        "@type": "Offer",
        name: "Assistance Visa",
        description: "Accompagnement complet pour l'obtention de visas",
      },
      {
        "@type": "Offer",
        name: "Circuits Touristiques",
        description: "Circuits organisés au Sénégal et à l'international",
      },
      {
        "@type": "Offer",
        name: "Transferts Aéroport",
        description: "Service de transfert aéroport fiable et ponctuel",
      },
      {
        "@type": "Offer",
        name: "Réservation Hôtels",
        description: "Réservation d'hébergements au meilleur prix",
      },
    ],
  },
  immobilier: {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Assirik Tours Immobilier",
    url: `${BASE_URL}/immobilier`,
    description:
      "Vente de terrains et maisons, location, gestion locative, expertise et conseil en investissement immobilier à Dakar.",
    telephone: "+221338210181",
    email: "assiriktours@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue 22 prolongée Fass Delorme",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    areaServed: { "@type": "City", name: "Dakar" },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Vente de Terrains",
        description: "Terrains viabilisés avec titre foncier à Dakar",
      },
      {
        "@type": "Offer",
        name: "Vente de Maisons",
        description: "Maisons et villas de standing à Dakar",
      },
      {
        "@type": "Offer",
        name: "Location Immobilière",
        description: "Appartements et maisons à louer",
      },
      {
        "@type": "Offer",
        name: "Gestion Locative",
        description: "Gestion complète de biens immobiliers",
      },
    ],
  },
  nettoiement: {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Assirik Tours Nettoiement (ATN)",
    url: `${BASE_URL}/nettoiement`,
    description:
      "Services professionnels de nettoyage pour bureaux, hôtels, hôpitaux, industries et espaces verts depuis 2019.",
    foundingDate: "2019",
    telephone: "+221338210181",
    email: "assiriktours@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rue 22 prolongée Fass Delorme",
      addressLocality: "Dakar",
      addressCountry: "SN",
    },
    areaServed: { "@type": "City", name: "Dakar" },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Nettoyage de Bureaux",
        description: "Entretien quotidien de bureaux et espaces de travail",
      },
      {
        "@type": "Offer",
        name: "Nettoyage Hôtelier",
        description: "Services de nettoyage pour hôtels et restaurants",
      },
      {
        "@type": "Offer",
        name: "Nettoyage Industriel",
        description: "Nettoyage de sites industriels et entrepôts",
      },
      {
        "@type": "Offer",
        name: "Entretien Espaces Verts",
        description: "Maintenance de jardins et espaces verts",
      },
    ],
  },
  apropos: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À Propos d'Assirik Tours",
    url: `${BASE_URL}/a-propos`,
    description:
      "Découvrez Assirik Tours, agence sénégalaise de référence en voyages, immobilier et nettoiement.",
    mainEntity: {
      "@type": "Organization",
      name: "Assirik Tours",
      url: BASE_URL,
      logo: `${BASE_URL}/assets/logo.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue 22 prolongée Fass Delorme",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
      telephone: "+221338210181",
      email: "assiriktours@gmail.com",
    },
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contactez Assirik Tours",
    url: `${BASE_URL}/contact`,
    description:
      "Contactez Assirik Tours pour un devis gratuit. Téléphone, email, WhatsApp ou visite en agence.",
    mainEntity: {
      "@type": "ContactPoint",
      telephone: "+221338210181",
      contactType: "customer service",
      email: "assiriktours@gmail.com",
      areaServed: "SN",
      availableLanguage: ["French", "Wolof", "English"],
      parentOrganization: {
        "@type": "Organization",
        name: "Assirik Tours",
        url: BASE_URL,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rue 22 prolongée Fass Delorme",
          addressLocality: "Dakar",
          addressCountry: "SN",
        },
      },
    },
  },
};

function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function generateHtml(template, route) {
  const canonicalUrl =
    route.path === "/" ? BASE_URL : `${BASE_URL}${route.path}`;

  // Extract asset file names from template
  const jsMatch = template.match(
    /<script type="module" crossorigin src="([^"]+)"><\/script>/,
  );
  const cssMatch = template.match(
    /<link rel="stylesheet" crossorigin href="([^"]+)">/,
  );

  const jsFile = jsMatch ? jsMatch[1] : "/assets/index.js";
  const cssFile = cssMatch ? cssMatch[1] : "/assets/index.css";

  const structuredData = structuredDataTemplates[route.structuredData];

  return `<!DOCTYPE html>
<html lang="fr" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- Primary SEO -->
    <title>${escapeHtml(route.title)}</title>
    <meta name="description" content="${escapeHtml(route.description)}" />
    <meta name="keywords" content="${escapeHtml(route.keywords)}" />
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    <meta name="googlebot" content="index, follow" />
    <meta name="revisit-after" content="7 days" />
    <meta name="language" content="French" />
    <meta name="author" content="Assirik Tours" />
    <meta name="publisher" content="Assirik Tours" />
    <meta name="copyright" content="Assirik Tours" />
    <meta name="rating" content="general" />
    <meta name="distribution" content="global" />

    <!-- Geo Meta Tags -->
    <meta name="geo.region" content="SN-DK" />
    <meta name="geo.placename" content="Dakar" />
    <meta name="geo.position" content="14.6928;-17.4467" />
    <meta name="ICBM" content="14.6928, -17.4467" />

    <!-- Canonical URL -->
    <link rel="canonical" href="${canonicalUrl}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${escapeHtml(route.ogType)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${escapeHtml(route.title)}" />
    <meta property="og:description" content="${escapeHtml(route.description)}" />
    <meta property="og:image" content="${BASE_URL}/assets/logo.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Assirik Tours - Agence de Voyage, Immobilier et Nettoiement" />
    <meta property="og:locale" content="fr_SN" />
    <meta property="og:site_name" content="Assirik Tours" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${escapeHtml(route.title)}" />
    <meta name="twitter:description" content="${escapeHtml(route.description)}" />
    <meta name="twitter:image" content="${BASE_URL}/assets/logo.png" />
    <meta name="twitter:image:alt" content="Assirik Tours Logo" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/assets/logo.png" />
    <link rel="apple-touch-icon" href="/assets/logo.png" />
    <meta name="theme-color" content="#0D2B6B" />
    <meta name="msapplication-TileColor" content="#0D2B6B" />

    <!-- Preload Hero Image for LCP -->
    <link rel="preload" as="image" href="/assets/generated/hero-dakar-enhanced.dim_1920x1080.jpg" />

    <!-- Google Fonts (non-blocking) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" media="print" onload="this.media='all'" />
    <noscript><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap" rel="stylesheet" /></noscript>

    <!-- Font Awesome (non-blocking) -->
    <link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" media="print" onload="this.media='all'" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" /></noscript>

    <!-- AOS CSS (non-blocking) -->
    <link rel="preload" as="style" href="https://unpkg.com/aos@2.3.4/dist/aos.css" />
    <link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" media="print" onload="this.media='all'" />
    <noscript><link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css" /></noscript>

    <!-- Schema.org JSON-LD Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify(structuredData)}
    </script>

    <!-- Inline critical CSS for SEO content - hidden after React hydration -->
    <style>
      #seo-content{margin:0;padding:0}
      body.loaded #seo-content{display:none!important}
    </style>
  </head>
  <body>
    <!-- SEO content visible to crawlers in initial HTML, hidden after React loads -->
    <div id="seo-content">
      <h1>Assirik Tours — Agence de Voyage, Immobilier & Nettoiement à Dakar</h1>
      <p>Assirik Tours est votre agence sénégalaise spécialisée en voyages, immobilier et nettoiement à Dakar. Billets d'avion, assistance visa, vente immobilière, gestion locative et nettoyage professionnel. Depuis Dakar, nous offrons des services de qualité pour voyager, habiter et entretenir vos espaces.</p>
      <h2>Nos Services</h2>
      <h3>Voyages</h3>
      <p>Billets d'avion, assistance visa, circuits touristiques, transferts aéroport et réservations hôtels au meilleur prix depuis Dakar.</p>
      <h3>Immobilier</h3>
      <p>Vente de terrains et maisons, location, gestion locative, expertise et conseil en investissement immobilier à Dakar.</p>
      <h3>Nettoiement</h3>
      <p>Services professionnels de nettoyage pour bureaux, hôtels, hôpitaux, industries et espaces verts depuis 2019.</p>
      <h2>Pourquoi Choisir Assirik Tours ?</h2>
      <p>Notre équipe de professionnels qualifiés vous accompagne dans tous vos projets. Avec une expertise reconnue, des tarifs compétitifs et un service personnalisé, nous sommes votre partenaire de confiance à Dakar.</p>
      <h3>Nos Atouts</h3>
      <ul>
        <li>Expertise dans les voyages, l'immobilier et le nettoiement</li>
        <li>Service personnalisé et accompagnement complet</li>
        <li>Tarifs compétitifs et transparence</li>
        <li>Disponibilité 6 jours sur 7</li>
        <li>Agence agréée par les autorités sénégalaises</li>
      </ul>
      <h2>Contactez-nous</h2>
      <p>Adresse : Rue 22 prolongée Fass Delorme, Dakar, Sénégal</p>
      <p>Téléphone : +221 33 821 0181</p>
      <p>Email : assiriktours@gmail.com</p>
      <p>WhatsApp : +221 77 549 5314</p>
    </div>
    <div id="root"></div>
    <script>document.body.classList.add('loaded')</script>
    <noscript>
      <h1>Assirik Tours — Agence de Voyage, Immobilier & Nettoiement à Dakar</h1>
      <p>Assirik Tours est votre agence sénégalaise spécialisée en voyages, immobilier et nettoiement à Dakar. Billets d'avion, assistance visa, vente immobilière, gestion locative et nettoyage professionnel. Depuis Dakar, nous offrons des services de qualité pour voyager, habiter et entretenir vos espaces.</p>
      <h2>Nos Services</h2>
      <h3>Voyages</h3>
      <p>Billets d'avion, assistance visa, circuits touristiques, transferts aéroport et réservations hôtels au meilleur prix depuis Dakar.</p>
      <h3>Immobilier</h3>
      <p>Vente de terrains et maisons, location, gestion locative, expertise et conseil en investissement immobilier à Dakar.</p>
      <h3>Nettoiement</h3>
      <p>Services professionnels de nettoyage pour bureaux, hôtels, hôpitaux, industries et espaces verts depuis 2019.</p>
      <h2>Pourquoi Choisir Assirik Tours ?</h2>
      <p>Notre équipe de professionnels qualifiés vous accompagne dans tous vos projets. Avec une expertise reconnue, des tarifs compétitifs et un service personnalisé, nous sommes votre partenaire de confiance à Dakar.</p>
      <h3>Nos Atouts</h3>
      <ul>
        <li>Expertise dans les voyages, l'immobilier et le nettoiement</li>
        <li>Service personnalisé et accompagnement complet</li>
        <li>Tarifs compétitifs et transparence</li>
        <li>Disponibilité 6 jours sur 7</li>
        <li>Agence agréée par les autorités sénégalaises</li>
      </ul>
      <h2>Contactez-nous</h2>
      <p>Adresse : Rue 22 prolongée Fass Delorme, Dakar, Sénégal</p>
      <p>Téléphone : +221 33 821 0181</p>
      <p>Email : assiriktours@gmail.com</p>
      <p>WhatsApp : +221 77 549 5314</p>
    </noscript>
    <script defer src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
    <script type="module" crossorigin src="${jsFile}"></script>
    <link rel="stylesheet" crossorigin href="${cssFile}">
  </body>
</html>
`;
}

// Main execution
function main() {
  console.log("🔧 Prerendering routes for SEO...");

  const templatePath = path.join(DIST_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("❌ dist/index.html not found. Run vite build first.");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  for (const route of routes) {
    let outputPath;
    if (route.path === "/") {
      outputPath = path.join(DIST_DIR, "index.html");
    } else {
      // Create directory for the route (e.g., dist/voyages/index.html)
      const routeDir = path.join(DIST_DIR, route.path.slice(1));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      outputPath = path.join(routeDir, "index.html");
    }

    const html = generateHtml(template, route);
    fs.writeFileSync(outputPath, html, "utf-8");
    console.log(`✅ Generated: ${outputPath.replace(DIST_DIR, "")}`);
  }

  // Copy _redirects for SPA fallback
  const redirectsContent = `# SPA fallback - only if file doesn't exist
/* /index.html 200
`;
  const redirectsPath = path.join(DIST_DIR, "_redirects");
  fs.writeFileSync(redirectsPath, redirectsContent, "utf-8");
  console.log("✅ Generated: /_redirects");

  console.log("\n🎉 Prerendering complete!");
}

main();
