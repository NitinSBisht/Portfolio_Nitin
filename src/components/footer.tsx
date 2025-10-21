import Container from "./container";
import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="border-t py-6 text-sm text-muted-foreground">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a>
            <a href={`tel:${profile.phone}`} className="hover:underline">{profile.phone}</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
