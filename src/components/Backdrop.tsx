import Image from "next/image";
import { publicAsset } from "@/lib/assets";

// Fondo de una sección: foto si existe en /public, si no la trama azul de respaldo.
// "overlay" oscurece la foto para que el texto blanco se lea bien.
export default function Backdrop({
  image,
  overlay = "bg-gradient-to-r from-primary-dark/95 via-primary/80 to-primary/30",
  priority = false,
  position = "object-center",
}: {
  image?: string;
  overlay?: string;
  priority?: boolean;
  // Encuadre de la foto cuando se recorta (clase object-position de Tailwind)
  position?: string;
}) {
  const src = publicAsset(image);
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      {src ? (
        <>
          <Image src={src} alt="" fill priority={priority} sizes="100vw" className={`object-cover ${position}`} />
          <div className={`absolute inset-0 ${overlay}`} />
        </>
      ) : (
        <div className="absolute inset-0 bg-blueprint" />
      )}
    </div>
  );
}
