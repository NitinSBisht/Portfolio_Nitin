"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./container";
import ThemeToggle from "./theme-toggle";

function NavItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  const base = "rounded px-2 py-1 transition-colors";
  const inactive = "text-muted-foreground hover:text-foreground";
  const activeCls = "bg-accent text-foreground";
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`${base} ${active ? activeCls : inactive}`}
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <nav className="flex items-center gap-1 text-sm">
            <NavItem href="/" label="Home" />
            <NavItem href="/about" label="About" />
            <NavItem href="/projects" label="Projects" />
            <NavItem href="/contact" label="Contact" />
            <NavItem href="/resume" label="Resume" />
          </nav>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
