import Container from "@/components/container";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import profile from "@/data/profile.json";
import headshot from "../nitinImage.jpeg";

export default function Page() {
  return (
    <Container>
      <section className="py-10">
        <Card className="border bg-gradient-to-br from-background to-muted/40">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <div className="h-28 w-28 overflow-hidden rounded-full border bg-muted shadow">
                <Image src={headshot} alt={profile.name} width={112} height={112} className="h-28 w-28 object-contain bg-background" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary">Open to Opportunities</Badge>
                  <Badge>Remote / Onsite</Badge>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
                <p className="text-muted-foreground">{profile.title}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
                  <a className="hover:underline" href={`tel:${profile.phone}`}>{profile.phone}</a>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button asChild>
                    <a href="/projects">View Projects</a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">About Me</h2>
                <p className="leading-7 text-muted-foreground">
                  I’m a {profile.title} specializing in building end‑to‑end, production‑ready applications with the MERN stack.
                  I focus on clean architecture, performance, DX, accessibility, and deploying globally on edge networks.
                </p>
              </div>
              <div className="space-y-3">
                <h2 className="text-xl font-semibold">Core Skills</h2>
                <ul className="grid gap-2 sm:grid-cols-2 text-sm">
                  <li className="rounded border px-3 py-2">React, Next.js (App Router), TypeScript</li>
                  <li className="rounded border px-3 py-2">Node.js, Express.js, REST APIs</li>
                  <li className="rounded border px-3 py-2">MongoDB, Mongoose/Prisma</li>
                  <li className="rounded border px-3 py-2">TailwindCSS, shadcn/ui</li>
                  <li className="rounded border px-3 py-2">Auth: JWT, Sessions, RBAC</li>
                  <li className="rounded border px-3 py-2">React Query, Zustand/Redux</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </Container>
  );
}
