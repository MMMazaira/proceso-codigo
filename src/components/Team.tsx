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
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
      <div className="grid gap-12 md:grid-cols-2">
        {team.people.map((p) => (
          <article key={p.name} className="flex gap-5">
            <Portrait person={p} />
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-ink">{p.name}</h2>
              <p className="text-sm font-medium text-accent">{p.role}</p>
              <p className="mt-3 leading-relaxed text-muted">{p.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
