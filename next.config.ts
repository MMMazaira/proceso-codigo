import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // La dirección técnica de Vercel redirige siempre al dominio oficial,
  // para que Google y Bing no la indexen como una web duplicada.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "proceso-codigo.vercel.app" }],
        destination: "https://www.armartechweb.com/:path*",
        permanent: true,
      },
      // Silver Home se ha retirado: quien llegue a su antigua dirección va a la portada.
      { source: "/silver-home", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
