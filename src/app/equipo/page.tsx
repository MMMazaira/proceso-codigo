import type { Metadata } from "next";
import PageShell, { PageIntro } from "@/components/PageShell";
import Team from "@/components/Team";
import { team } from "@/content/site";

export const metadata: Metadata = { title: "Equipo", description: team.intro };

export default function EquipoPage() {
  return (
    <PageShell>
      <PageIntro title={team.heading} intro={team.intro} />
      <Team />
    </PageShell>
  );
}
