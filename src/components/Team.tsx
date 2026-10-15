import Image from "next/image";
import { team, type Person } from "@/content/site";

function Portrait({ person }: { person: Person }) {
  if (person.photo) {
    return (
      <Image
        src={person.photo}
        alt={`Retrato de ${person.name}`}
        width={160}
        height={160}
        className="h-20 w-20 shrink-0 rounded-full object-cover object-top"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-semibold text-bg"
    >
      {person.initials}
    </div>
  );
}

export default function Team() {
  return (
    <section id="equipo" aria-labelledby="equipo-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
      <div className="max-w-2xl">
        <h2 id="equipo-title" className="text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          {team.heading}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{team.intro}</p>
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        {team.people.map((p) => (
          <article key={p.name} className="flex gap-5">
            <Portrait person={p} />
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-ink">{p.name}</h3>
              <p className="text-sm font-medium text-accent">{p.role}</p>
              <p className="mt-3 leading-relaxed text-muted">{p.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
