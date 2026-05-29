import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
}

const DEFAULTS = {
  title: "Assirik Tours | Voyage, Immobilier & Nettoiement Dakar",
  description:
    "Assirik Tours, agence à Dakar : voyages, immobilier et nettoiement. Billets d'avion, visa, gestion locative et nettoyage professionnel.",
  keywords:
    "Assirik Tours, agence voyage Dakar, immobilier Sénégal, nettoyage professionnel Dakar, billet avion Sénégal, visa Schengen Dakar, gestion locative Dakar",
  canonicalUrl: "https://www.assiriktours.com",
  ogType: "website",
  ogImage: "https://www.assiriktours.com/assets/logo.png",
};

export function SEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  keywords = DEFAULTS.keywords,
  canonicalUrl = DEFAULTS.canonicalUrl,
  ogType = DEFAULTS.ogType,
  ogImage = DEFAULTS.ogImage,
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // ── Document title ──
    document.title = title;

    // ── Helper: set or update a meta tag ──
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // ── Core SEO ──
    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");
    setMeta("googlebot", "index, follow");
    setMeta("revisit-after", "7 days");
    setMeta("language", "fr");
    setMeta("geo.region", "SN-DK");
    setMeta("geo.placename", "Dakar");
    setMeta("geo.position", "14.6928;-17.4467");
    setMeta("ICBM", "14.6928, -17.4467");
    setMeta("author", "Assirik Tours");
    setMeta("publisher", "Assirik Tours");
    setMeta("copyright", "Assirik Tours");
    setMeta("category", "Travel Agency, Real Estate, Cleaning Services");
    setMeta("rating", "general");
    setMeta("distribution", "global");

    // ── Canonical ──
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // ── Open Graph ──
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", ogType, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("og:image", ogImage, "property");
    setMeta("og:locale", "fr_SN", "property");
    setMeta("og:site_name", "Assirik Tours", "property");

    // ── Twitter Card ──
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);

    // ── Structured Data (JSON-LD) ──
    let jsonLdScript = document.querySelector(
      'script[data-slot="structured-data"]',
    ) as HTMLScriptElement;
    if (structuredData) {
      if (!jsonLdScript) {
        jsonLdScript = document.createElement("script");
        jsonLdScript.setAttribute("type", "application/ld+json");
        jsonLdScript.setAttribute("data-slot", "structured-data");
        document.head.appendChild(jsonLdScript);
      }
      jsonLdScript.textContent = JSON.stringify(structuredData);
    }

    // ── Cleanup on unmount ──
    return () => {
      document.title = DEFAULTS.title;
      const metas = document.querySelectorAll(
        'meta[name="description"], meta[name="keywords"], meta[name="robots"], meta[name="googlebot"], meta[name="revisit-after"], meta[name="language"], meta[name="geo.region"], meta[name="geo.placename"], meta[name="geo.position"], meta[name="ICBM"], meta[name="author"], meta[name="publisher"], meta[name="copyright"], meta[name="category"], meta[name="rating"], meta[name="distribution"], meta[property="og:title"], meta[property="og:description"], meta[property="og:type"], meta[property="og:url"], meta[property="og:image"], meta[property="og:locale"], meta[property="og:site_name"], meta[name="twitter:card"], meta[name="twitter:title"], meta[name="twitter:description"], meta[name="twitter:image"]',
      );
      metas.forEach((meta) => meta.remove());
      if (canonical) canonical.remove();
      if (jsonLdScript) jsonLdScript.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, structuredData]);

  return null;
}

// ── Pre-configured structured data for each page ──

export function getHomeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Assirik Tours",
    url: "https://www.assiriktours.com",
    logo: "https://www.assiriktours.com/assets/logo.png",
    image: "https://www.assiriktours.com/assets/logo.png",
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
  };
}

export function getVoyagesStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Assirik Tours Voyages",
    url: "https://www.assiriktours.com/voyages",
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
    areaServed: {
      "@type": "Country",
      name: "Senegal",
    },
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
  };
}

export function getImmobilierStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Assirik Tours Immobilier",
    url: "https://www.assiriktours.com/immobilier",
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
    areaServed: {
      "@type": "City",
      name: "Dakar",
    },
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
  };
}

export function getNettoiementStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Assirik Tours Nettoiement (ATN)",
    url: "https://www.assiriktours.com/nettoiement",
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
    areaServed: {
      "@type": "City",
      name: "Dakar",
    },
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
  };
}

export function getContactStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    telephone: "+221338210181",
    contactType: "customer service",
    email: "assiriktours@gmail.com",
    areaServed: "SN",
    availableLanguage: ["French", "Wolof", "English"],
    parentOrganization: {
      "@type": "Organization",
      name: "Assirik Tours",
      url: "https://www.assiriktours.com/contact",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rue 22 prolongée Fass Delorme",
        addressLocality: "Dakar",
        addressCountry: "SN",
      },
    },
  };
}
