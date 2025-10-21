import Container from "@/components/container";

export default function Page() {
  return (
    <Container>
      <section className="py-10 space-y-4">
        <h1 className="text-3xl font-bold">About</h1>
        <p className="text-muted-foreground">MERN Stack Developer focusing on building performant, accessible web apps.</p>
      </section>
    </Container>
  );
}
