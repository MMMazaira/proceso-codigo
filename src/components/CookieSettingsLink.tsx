"use client";

import { OPEN_EVENT } from "./CookieConsent";

// Enlace del pie para volver a abrir el aviso de cookies y cambiar la elección.
export default function CookieSettingsLink({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      Cookies
    </button>
  );
}
