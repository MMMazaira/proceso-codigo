// Validación compartida entre el formulario (cliente) y la API (servidor).

export type ContactInput = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
  consent: boolean;
  website: string; // campo trampa anti-spam: debe llegar vacío
};

export type ContactErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function parseContact(raw: unknown): ContactInput {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  return {
    name: str(r.name, 120),
    email: str(r.email, 200),
    company: str(r.company, 160),
    topic: str(r.topic, 80),
    message: str(r.message, 4000),
    consent: r.consent === true || r.consent === "on" || r.consent === "true",
    website: str(r.website, 200),
  };
}

export function validateContact(input: ContactInput, topics: string[]): ContactErrors {
  const errors: ContactErrors = {};
  if (input.name.length < 2) errors.name = "Escribe tu nombre.";
  if (!EMAIL_RE.test(input.email)) errors.email = "Escribe un correo válido, por ejemplo nombre@empresa.es.";
  if (!topics.includes(input.topic)) errors.topic = "Elige el tipo de consulta.";
  if (input.message.length < 10) errors.message = "Cuéntanos un poco más: al menos 10 caracteres.";
  if (!input.consent) errors.consent = "Necesitamos tu aceptación para responderte.";
  return errors;
}
