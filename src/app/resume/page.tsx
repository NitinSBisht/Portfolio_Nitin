import Container from "@/components/container";

export default function Page() {
  return (
    <Container>
      <section className="py-10 space-y-4">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div className="aspect-[8.5/11] w-full rounded border bg-white">
          <iframe src="/resume.pdf" className="h-full w-full" title="Resume" />
        </div>
        <a href="/resume.pdf" download className="inline-block rounded border px-4 py-2">Download PDF</a>
      </section>
    </Container>
  );
}
