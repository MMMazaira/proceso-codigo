// Iconos de línea sencillos, uno por pilar
const paths: Record<string, React.ReactNode> = {
  automatizaciones: (
    <>
      <path d="M13 2.8 5.5 13.2h5.6L10 21.2l8.5-11h-5.8L13 2.8Z" />
    </>
  ),
  documento: (
    <>
      <path d="M6 2.8h8.5L19 7.3V21.2H6V2.8Z" />
      <path d="M14.5 2.8v4.5H19M9 12h7M9 15.5h7M9 8.5h3" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H9.5L5 20v-4H4V5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  euro: (
    <>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M15.5 8.4a4.2 4.2 0 1 0 0 7.2M7.5 10.8h6M7.5 13.2h6" />
    </>
  ),
  consultoria: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7" />
    </>
  ),
  web: (
    <>
      <rect x="2.8" y="4" width="18.4" height="12.5" rx="1.5" />
      <path d="M8.5 20h7M12 16.5V20M6 8h6M6 11h9" />
    </>
  ),
  formacion: (
    <>
      <path d="M2.5 9 12 4.5 21.5 9 12 13.5 2.5 9Z" />
      <path d="M6.5 11v4.5c1.5 1.5 3.4 2.2 5.5 2.2s4-.7 5.5-2.2V11M21.5 9v5" />
    </>
  ),
  // Silver Home
  silver: (
    <>
      <path d="M3 11.2 12 4l9 7.2" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M12 17.2s-3-1.8-3-3.9a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 2.1-3 3.9-3 3.9Z" />
    </>
  ),
  reloj: (
    <>
      <rect x="6.5" y="6.5" width="11" height="11" rx="2.5" />
      <path d="M9 6.5 9.6 2.8h4.8L15 6.5M9 17.5l.6 3.7h4.8l.6-3.7M12 9.5v3l1.8 1.2" />
    </>
  ),
  tablet: (
    <>
      <rect x="4" y="2.8" width="16" height="18.4" rx="2" />
      <path d="M10.5 18h3" />
      <circle cx="12" cy="9.5" r="2.2" />
      <path d="M8.2 14.5c.8-1.4 2.2-2.1 3.8-2.1s3 .7 3.8 2.1" />
    </>
  ),
  sensor: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" />
    </>
  ),
  aviso: (
    <>
      <rect x="7" y="2.8" width="10" height="18.4" rx="2" />
      <path d="M11 18h2M12 7.5v4.5M12 14.4v.1" />
    </>
  ),
};

export default function PillarIcon({ id, size = 26 }: { id: string; size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[id]}
    </svg>
  );
}
