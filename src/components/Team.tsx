import Image from "next/image";
import { team, type Person } from "@/content/site";
import { publicAsset } from "@/lib/assets";

// Retrato 4:5. Si la foto aún no está en /public se muestran las iniciales.
function Portrait({ person }: { person: Person }) {
  const src = publicAsset(person.photo);
  if (src) {
    return (
      <Image
        src={src}
        alt={`Retrato de ${person.name}`}
        width={224}
        height={280}
        className="h-[8.75rem] w-28 shrink-0 rounded-md object-cover object-top"
      />
    );
  }
  return (
    <div
      aria-hidden="true"
      className="flex h-[8.75rem] w-28 shrink-0 items-center justify-center rounded-md bg-blueprint text-2xl font-bold text-bg"
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
