import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Method from "@/components/Method";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { site, team } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  areaServed: "Barcelona",
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: "Barcelona", addressCountry: "ES" },
  employee: team.people.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <Method />
        <Team />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
