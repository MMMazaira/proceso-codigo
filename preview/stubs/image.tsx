import type { ImgHTMLAttributes } from "react";
export default function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img loading="lazy" decoding="async" {...props} />;
}
