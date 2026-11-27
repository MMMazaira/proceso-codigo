import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import HomeSummary from "@/components/HomeSummary";
import HerramientaBanner from "@/components/HerramientaBanner";
import { site, team } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}${site.ogImage}`,
  areaServed: ["Piera", "Anoia", "Baix Llobregat", "Barcelona"],
  email: site.email,
  telephone: "+34656332568",
  address: { "@type": "PostalAddress", addressLocality: "Piera", addressRegion: "Barcelona", addressCountry: "ES" },
  sameAs: site.sameAs,
  founder: team.people.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
};

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <HerramientaBanner />
      <HomeSummary />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </PageShell>
  );
}
