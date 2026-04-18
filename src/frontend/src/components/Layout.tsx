import { Toaster } from "@/components/ui/sonner";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  });

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ fontFamily: "Open Sans, sans-serif" }}
    >
      <Header />
      <main
        className="flex-1 pt-16 lg:pt-20"
        style={{ backgroundColor: "#F4F6F9" }}
      >
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />

      {/* ── Floating WhatsApp Button ── */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: "rgba(37,211,102,0.40)" }}
          aria-hidden="true"
        />
        {/* Second slower pulse ring */}
        <span
          className="absolute -inset-2 rounded-full"
          style={{
            backgroundColor: "rgba(37,211,102,0.12)",
            animation: "ping 2.5s cubic-bezier(0,0,0.2,1) infinite 0.7s",
          }}
          aria-hidden="true"
        />
        <a
          href="https://wa.me/221775495314"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contacter sur WhatsApp"
          data-ocid="layout.whatsapp_button"
          title="Contacter Assirik Tours sur WhatsApp"
          className="relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-200 hover:scale-110 hover:shadow-green-400/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
          style={{ backgroundColor: "#25D366" }}
        >
          <i className="fa-brands fa-whatsapp text-white text-3xl" />
        </a>
        {/* Tooltip */}
        <span
          className="absolute bottom-[72px] right-0 whitespace-nowrap rounded-lg px-3 py-2 text-xs font-semibold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-y-1 group-hover:translate-y-0"
          style={{ backgroundColor: "#075e54" }}
        >
          💬 Chat WhatsApp
          <span
            className="absolute -bottom-1 right-5 w-2 h-2 rotate-45"
            style={{ backgroundColor: "#075e54" }}
          />
        </span>
      </div>
    </div>
  );
}
