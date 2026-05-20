import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

const TEMPLATE_MAP: Record<string, string> = {
  voyages: import.meta.env.VITE_EMAILJS_TEMPLATE_VOYAGES || "",
  immobilier: import.meta.env.VITE_EMAILJS_TEMPLATE_IMMOBILIER || "",
  nettoiement: import.meta.env.VITE_EMAILJS_TEMPLATE_NETTOIEMENT || "",
  contact: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT || "",
};

export interface EmailFormData {
  to_name: string;
  from_name: string;
  from_email: string;
  from_phone: string;
  message: string;
  department: string;
  submitted_at: string;
  [key: string]: string;
}

export async function sendFormEmail(
  department: "voyages" | "immobilier" | "nettoiement" | "contact",
  data: EmailFormData,
): Promise<boolean> {
  const templateId = TEMPLATE_MAP[department];

  if (!SERVICE_ID || !PUBLIC_KEY || !templateId) {
    console.warn("EmailJS not configured — skipping email notification");
    return false;
  }

  try {
    await emailjs.send(SERVICE_ID, templateId, data, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error("EmailJS send failed:", error);
    return false;
  }
}
