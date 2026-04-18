import { Link } from "@tanstack/react-router";

const currentYear = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

const departments = [
  { label: "Voyages", href: "/voyages", icon: "fa-plane" },
  { label: "Immobilier", href: "/immobilier", icon: "fa-building" },
  { label: "Nettoiement", href: "/nettoiement", icon: "fa-broom" },
];

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      className="bg-navy text-white"
      style={{ backgroundColor: "#0D2B6B" }}
      data-ocid="footer"
    >
      {/* Top decorative bar */}
      <div
        className="h-1"
        style={{
          background:
            "linear-gradient(90deg, #1A75BC 0%, #F5A623 50%, #1A75BC 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logo.png"
                alt="Assirik Tours"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p
                  className="font-display text-lg"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  Assirik Tours
                </p>
                <p className="text-xs" style={{ color: "#F5A623" }}>
                  Dakar, Sénégal
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Votre partenaire de confiance pour voyager, habiter et nettoyer au
              Sénégal depuis Dakar.
            </p>
            <p
              className="text-sm font-medium italic"
              style={{ color: "#F5A623", fontFamily: "Montserrat, sans-serif" }}
            >
              « Voyager, Habiter, Nettoyer »
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="Facebook Assirik Tours"
                data-ocid="footer.facebook_link"
              >
                <i
                  className="fab fa-facebook-f text-sm"
                  style={{ color: "#F5A623" }}
                />
              </a>
              <a
                href="https://wa.me/221775495314"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-smooth"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                aria-label="WhatsApp Assirik Tours"
                data-ocid="footer.whatsapp_link"
              >
                <i
                  className="fab fa-whatsapp text-sm"
                  style={{ color: "#F5A623" }}
                />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3
              className="font-display text-sm uppercase tracking-wider mb-4"
              style={{
                color: "#F5A623",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
              }}
            >
              Nos Départements
            </h3>
            <ul className="space-y-2">
              {departments.map((dep) => (
                <li key={dep.href}>
                  <Link
                    to={dep.href}
                    className="flex items-center gap-2 text-sm transition-smooth hover:text-gold"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                    data-ocid={`footer.dept_link.${dep.label.toLowerCase()}`}
                  >
                    <i
                      className={`fas ${dep.icon} text-xs`}
                      style={{ color: "#F5A623" }}
                    />
                    {dep.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display text-sm uppercase tracking-wider mb-4"
              style={{
                color: "#F5A623",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
              }}
            >
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-sm transition-smooth hover:text-gold"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontFamily: "Open Sans, sans-serif",
                    }}
                    data-ocid={`footer.quick_link.${link.label.toLowerCase()}`}
                  >
                    <i
                      className="fas fa-chevron-right text-xs"
                      style={{ color: "#F5A623" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-display text-sm uppercase tracking-wider mb-4"
              style={{
                color: "#F5A623",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
              }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li
                className="flex items-start gap-2 text-sm"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                <i
                  className="fas fa-map-marker-alt mt-0.5 flex-shrink-0"
                  style={{ color: "#F5A623" }}
                />
                <span>Rue 22 prolongée Fass Delorme, Dakar, Sénégal</span>
              </li>
              <li>
                <a
                  href="tel:+221338210181"
                  className="flex items-center gap-2 text-sm transition-smooth hover:text-gold"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                  data-ocid="footer.phone_link"
                >
                  <i
                    className="fas fa-phone flex-shrink-0"
                    style={{ color: "#F5A623" }}
                  />
                  +221 33 821 01 81
                </a>
              </li>
              <li>
                <a
                  href="tel:+221775495314"
                  className="flex items-center gap-2 text-sm transition-smooth hover:text-gold"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                  data-ocid="footer.mobile_link"
                >
                  <i
                    className="fas fa-mobile-alt flex-shrink-0"
                    style={{ color: "#F5A623" }}
                  />
                  +221 77 549 53 14
                </a>
              </li>
              <li>
                <a
                  href="mailto:assiriktours@gmail.com"
                  className="flex items-center gap-2 text-sm transition-smooth hover:text-gold"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Open Sans, sans-serif",
                  }}
                  data-ocid="footer.email_link"
                >
                  <i
                    className="fas fa-envelope flex-shrink-0"
                    style={{ color: "#F5A623" }}
                  />
                  assiriktours@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              <span>© {currentYear} Assirik Tours. Tous droits réservés.</span>
              <span>Ninéa : 007633250</span>
              <span>Licence n°07022012*0044126</span>
            </div>
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-smooth hover:opacity-80"
              style={{
                color: "rgba(255,255,255,0.4)",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Built with ❤ using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
