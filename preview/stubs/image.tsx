import type { ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean; priority?: boolean; sizes?: string };

// Sustituto de next/image para la vista previa: un <img> normal.
export default function Image({ fill, priority, sizes: _sizes, style, ...props }: Props) {
  const fillStyle = fill ? { position: "absolute" as const, inset: 0, width: "100%", height: "100%" } : {};
  // eslint-disable-next-line @next/next/no-img-element
  return <img loading={priority ? "eager" : "lazy"} decoding="async" style={{ ...fillStyle, ...style }} {...props} />;
}
