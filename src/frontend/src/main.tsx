import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize AOS after DOM is ready
declare global {
  interface Window {
    AOS: {
      init: (opts?: Record<string, unknown>) => void;
    };
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
    },
  },
});

const rootEl = document.getElementById("root")!;

ReactDOM.createRoot(rootEl).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);

// Init AOS animations after first paint
requestAnimationFrame(() => {
  if (typeof window !== "undefined" && window.AOS) {
    window.AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
      delay: 0,
    });
  }
});
