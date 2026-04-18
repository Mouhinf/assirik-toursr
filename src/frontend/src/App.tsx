import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

// Lazy-load pages for code splitting
const HomePage = lazy(() =>
  import("./pages/Home").then((m) => ({ default: m.HomePage })),
);
const VoyagesPage = lazy(() =>
  import("./pages/Voyages").then((m) => ({ default: m.VoyagesPage })),
);
const ImmobilierPage = lazy(() =>
  import("./pages/Immobilier").then((m) => ({ default: m.ImmobilierPage })),
);
const NettoiementPage = lazy(() =>
  import("./pages/Nettoiement").then((m) => ({ default: m.NettoiementPage })),
);
const AProposPage = lazy(() =>
  import("./pages/APropos").then((m) => ({ default: m.AProposPage })),
);
const ContactPage = lazy(() =>
  import("./pages/Contact").then((m) => ({ default: m.ContactPage })),
);
const AdminPage = lazy(() =>
  import("./pages/Admin").then((m) => ({ default: m.AdminPage })),
);

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-10 h-10 rounded-full border-4 animate-spin"
        style={{ borderColor: "#1A75BC", borderTopColor: "#F5A623" }}
      />
      <p
        className="text-sm"
        style={{ color: "#0D2B6B", fontFamily: "Open Sans, sans-serif" }}
      >
        Chargement...
      </p>
    </div>
  </div>
);

// Root route with Layout wrapper
const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  ),
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  ),
});

const voyagesRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/voyages",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <VoyagesPage />
    </Suspense>
  ),
});

const immobilierRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/immobilier",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ImmobilierPage />
    </Suspense>
  ),
});

const nettoiementRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/nettoiement",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <NettoiementPage />
    </Suspense>
  ),
});

const aProposRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/a-propos",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AProposPage />
    </Suspense>
  ),
});

const contactRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/contact",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <ContactPage />
    </Suspense>
  ),
});

const adminRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/admin",
  component: () => (
    <Suspense fallback={<PageLoader />}>
      <AdminPage />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([
    homeRoute,
    voyagesRoute,
    immobilierRoute,
    nettoiementRoute,
    aProposRoute,
    contactRoute,
    adminRoute,
  ]),
]);

const router = createRouter({
  routeTree,
  scrollRestoration: false,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
