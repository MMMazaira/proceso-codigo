import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import HomeSummary from "@/components/HomeSummary";
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
    <PageShell>
      <Hero />
      <HomeSummary />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </PageShell>
  );
}
