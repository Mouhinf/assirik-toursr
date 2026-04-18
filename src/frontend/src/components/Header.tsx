import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Voyages", href: "/voyages" },
  { label: "Immobilier", href: "/immobilier" },
  { label: "Nettoiement", href: "/nettoiement" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-smooth"
      style={{
        backgroundColor: "#0D2B6B",
        boxShadow: scrolled
          ? "0 4px 20px rgba(13,43,107,0.4)"
          : "0 2px 8px rgba(0,0,0,0.2)",
      }}
      data-ocid="header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 flex-shrink-0"
            data-ocid="header.logo_link"
          >
            <img
              src="/assets/logo.png"
              alt="Assirik Tours"
              className="h-10 lg:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p
                className="text-white font-display text-base lg:text-lg leading-tight"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                }}
              >
                Assirik Tours
              </p>
              <p
                className="text-xs leading-tight"
                style={{
                  color: "#F5A623",
                  fontFamily: "Open Sans, sans-serif",
                }}
              >
                Voyager · Habiter · Nettoyer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1"
            data-ocid="header.nav"
          >
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-smooth"
                  style={{
                    fontFamily: "Open Sans, sans-serif",
                    color: isActive ? "#F5A623" : "rgba(255,255,255,0.9)",
                    borderBottom: isActive
                      ? "2px solid #F5A623"
                      : "2px solid transparent",
                  }}
                  data-ocid={`header.nav_link.${link.label.toLowerCase().replace(/\s+/g, "_").replace(/[àä]/g, "a")}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-gold text-sm px-5 py-2.5 rounded-lg"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
              }}
              data-ocid="header.cta_button"
            >
              <i className="fas fa-paper-plane mr-2" />
              Demander un devis
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-white transition-smooth"
            style={{ color: "white" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            data-ocid="header.hamburger_button"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          backgroundColor: "#0a2259",
        }}
        data-ocid="header.mobile_menu"
      >
        <div
          className="px-4 pt-2 pb-4 space-y-1 border-t"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className="block px-4 py-3 rounded-md text-sm font-medium transition-smooth"
                style={{
                  fontFamily: "Open Sans, sans-serif",
                  color: isActive ? "#F5A623" : "rgba(255,255,255,0.9)",
                  backgroundColor: isActive
                    ? "rgba(245,166,35,0.1)"
                    : "transparent",
                }}
                data-ocid={`header.mobile_nav_link.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-center btn-gold text-sm rounded-lg py-3"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
              data-ocid="header.mobile_cta_button"
            >
              <i className="fas fa-paper-plane mr-2" />
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
