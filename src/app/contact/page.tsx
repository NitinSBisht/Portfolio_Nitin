"use client";
import Container from "@/components/container";
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<string | null>(null);
  async function onSubmit(formData: FormData) {
    setStatus(null);
    const res = await fetch("/api/contact", { method: "POST", body: formData });
    const json = await res.json();
    setStatus(json.message || (res.ok ? "Sent" : "Failed"));
  }
  return (
    <Container>
      <section className="py-10">
        <h1 className="mb-6 text-3xl font-bold">Contact</h1>
        <form action={onSubmit} className="grid max-w-xl gap-4">
          <input name="name" required placeholder="Name" className="rounded border p-2" />
          <input type="email" name="email" required placeholder="Email" className="rounded border p-2" />
          <textarea name="message" required placeholder="Message" className="min-h-32 rounded border p-2" />
          <button className="rounded bg-primary px-4 py-2 text-white">Send</button>
        </form>
        {status && <p className="mt-4 text-sm">{status}</p>}
      </section>
    </Container>
  );
}
