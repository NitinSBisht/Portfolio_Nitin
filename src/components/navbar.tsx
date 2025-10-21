import Link from "next/link";
import Container from "./container";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <nav className="flex items-center gap-4 text-sm">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
