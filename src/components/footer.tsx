import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t py-6 text-sm text-muted-foreground">
      <Container>
        <div className="flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name</p>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
