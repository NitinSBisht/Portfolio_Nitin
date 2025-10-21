import Container from "@/components/container";
import projects from "@/data/projects.json";

export default function Page() {
  return (
    <Container>
      <section className="py-10">
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a key={i} href={p.demo || p.github} className="block rounded-lg border p-4 hover:shadow-sm">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                {p.tags.map((t: string) => (
                  <span key={t} className="rounded border px-2 py-0.5">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </Container>
  );
}
