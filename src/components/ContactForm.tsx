"use client";

import { useState, type FormEvent } from "react";
import { parseContact, validateContact, type ContactErrors } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "mt-1.5 block w-full border border-line bg-bg px-3 py-2.5 text-ink placeholder:text-muted/70 focus:border-primary aria-[invalid=true]:border-red-700";

export default function ContactForm({ topics }: { topics: string[] }) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMessage, setServerMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = parseContact(Object.fromEntries(new FormData(form)));
    const found = validateContact(data, topics);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => ({}))) as { errors?: ContactErrors; message?: string };
      if (!res.ok) {
        if (body.errors) setErrors(body.errors);
        setServerMessage(body.message ?? "No se ha podido enviar. Escríbenos directamente por correo.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("sent");
    } catch {
      setServerMessage("Sin conexión con el servidor. Comprueba tu conexión o escríbenos por correo.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border-l-4 border-accent bg-bg p-6">
        <p className="text-xl font-bold">Mensaje enviado.</p>
        <p className="mt-2 text-muted">Te respondemos en un plazo de dos días laborables.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 font-semibold underline underline-offset-4"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const err = (k: keyof ContactErrors) =>
    errors[k] ? (
      <p id={`${k}-error`} className="mt-1.5 text-sm font-medium text-red-800">
        {errors[k]}
      </p>
    ) : null;

  const a11y = (k: keyof ContactErrors) => ({
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
  });

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-semibold">Nombre</label>
          <input id="name" name="name" autoComplete="name" required className={fieldClass} {...a11y("name")} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">Correo</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
            {...a11y("email")}
          />
          {err("email")}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="font-semibold">
            Empresa <span className="font-normal text-muted">(opcional)</span>
          </label>
          <input id="company" name="company" autoComplete="organization" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="topic" className="font-semibold">Tipo de consulta</label>
          <select id="topic" name="topic" required defaultValue="" className={fieldClass} {...a11y("topic")}>
            <option value="" disabled>
              Elige una opción
            </option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {err("topic")}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-semibold">Qué necesitas</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Por ejemplo: queremos dejar de registrar las incidencias de línea en papel."
          className={fieldClass}
          {...a11y("message")}
        />
        {err("message")}
      </div>

      {/* Campo trampa: oculto para personas, los bots lo rellenan */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="website">No rellenar</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            className="mt-1 h-4 w-4 shrink-0 accent-primary"
            {...a11y("consent")}
          />
          <span className="text-sm leading-relaxed text-muted">
            He leído la <a href="/privacidad" className="font-semibold text-ink underline underline-offset-4">política de privacidad</a> y
            acepto que uséis mis datos para responder a esta consulta.
          </span>
        </label>
        {err("consent")}
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-4 border-red-700 bg-bg px-4 py-3 text-sm text-red-900">
          {serverMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="rounded-sm bg-accent px-6 py-3 font-semibold text-bg hover:bg-accent-dark disabled:opacity-60"
        >
          {status === "sending" ? "Enviando…" : "Enviar mensaje"}
        </button>
      </div>
    </form>
  );
}
