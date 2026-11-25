"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

// Aviso de cookies. Microsoft Clarity solo se carga si el visitante pulsa "Aceptar".
// La elección se guarda en este navegador y se puede cambiar desde el enlace "Cookies" del pie.

const STORAGE_KEY = "armartech-cookies";
export const OPEN_EVENT = "armartech:abrir-cookies";

type Choice = "aceptadas" | "rechazadas";

function readChoice(): Choice | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "aceptadas" || value === "rechazadas" ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // Sin almacenamiento disponible: la elección vale solo para esta visita
  }
}

function loadClarity() {
  if (document.getElementById("clarity-script")) return;
  type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] };
  const w = window as Window & { clarity?: ClarityFn };
  if (!w.clarity) {
    const stub: ClarityFn = (...args: unknown[]) => {
      (stub.q = stub.q || []).push(args);
    };
    w.clarity = stub;
  }
  const script = document.createElement("script");
  script.id = "clarity-script";
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${site.clarityId}`;
  document.head.appendChild(script);
  // Señal de consentimiento para Clarity (solo medición, sin publicidad)
  w.clarity?.("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === "aceptadas") loadClarity();
    if (choice === null) setOpen(true);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const decide = (choice: Choice) => {
    saveChoice(choice);
    setOpen(false);
    if (choice === "aceptadas") loadClarity();
    // Si alguien retira el permiso después de aceptarlo, recargamos para que Clarity deje de funcionar
    else if (document.getElementById("clarity-script")) window.location.reload();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed bottom-4 left-4 right-24 z-50 max-w-md rounded-lg border border-line bg-bg p-5 text-sm shadow-xl sm:right-auto"
    >
      <p className="leading-relaxed text-ink">
        Uso cookies de medición (Microsoft Clarity) para ver de forma anónima cómo se usa la web y mejorarla. Solo
        se activan si las aceptas.{" "}
        <Link href="/privacidad#cookies" className="font-semibold text-accent underline underline-offset-4">
          Más información
        </Link>
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => decide("aceptadas")}
          className="rounded-sm bg-accent px-4 py-2 font-semibold text-bg hover:bg-accent-dark"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => decide("rechazadas")}
          className="rounded-sm border border-line px-4 py-2 font-semibold text-ink hover:border-accent"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
