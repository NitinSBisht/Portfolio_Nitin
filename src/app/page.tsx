import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import profile from "@/data/profile.json";
import headshot from "./nitinImage.jpeg";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-56px-56px)] bg-gradient-to-b from-background to-muted/40">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Full‑stack MERN</Badge>
              <Badge variant="secondary">Open to Opportunities</Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="text-lg text-muted-foreground">{profile.title}</p>
            <p className="text-muted-foreground">
              I build production‑ready web apps end‑to‑end using React, Node, Express and MongoDB.
              Check out my projects and feel free to reach out for opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <a href="/projects">View Projects</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/contact">Contact</a>
              </Button>
            </div>
          </div>
          <Card className="justify-self-center border bg-background/70 backdrop-blur">
            <CardContent className="p-4 sm:p-6">
              <div className="h-64 w-64 overflow-hidden rounded-xl border bg-muted shadow sm:h-80 sm:w-80">
                <Image src={headshot} alt={profile.name} className="h-full w-full object-contain bg-background" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
