import Container from "@/components/container";

export default function NotFound() {
  return (
    <Container>
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-muted-foreground">Page not found</p>
      </div>
    </Container>
  );
}
