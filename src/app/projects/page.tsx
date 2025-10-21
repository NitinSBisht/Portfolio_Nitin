import Container from "@/components/container";
import projects from "@/data/projects.json";

type Project = {
  title: string;
  description: string;
  role?: string;
  period?: string;
  responsibilities?: string[];
  tech?: string[];
  github?: string;
  demo?: string;
};

export default function Page() {
  return (
    <Container>
      <section className="py-10">
        <h1 className="mb-6 text-3xl font-bold">Projects</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(projects as Project[]).map((p, i) => (
            <div key={i} className="flex h-full flex-col rounded-lg border p-5 hover:shadow-sm">
              <div className="mb-3">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                {p.period && <p className="text-xs text-muted-foreground">{p.period}</p>}
                {p.role && <p className="text-sm text-muted-foreground">Role: {p.role}</p>}
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              {p.responsibilities?.length ? (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                  {p.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              ) : null}
              {p.tech?.length ? (
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded border px-2 py-0.5">{t}</span>
                  ))}
                </div>
              ) : null}
              <div className="mt-4 flex gap-3 pt-2 text-sm">
                {p.github && (
                  <a className="underline" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {p.demo && (
                  <a className="underline" href={p.demo} target="_blank" rel="noreferrer">Live Demo</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
