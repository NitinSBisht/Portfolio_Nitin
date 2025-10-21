import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const message = String(formData.get("message") || "");
  if (!name || !email || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.MAIL_TO;
    const from = process.env.MAIL_FROM || "onboarding@resend.dev";
    if (!apiKey || !to || !from) {
      return NextResponse.json({ message: "Email not configured" }, { status: 200 });
    }
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    await resend.emails.send({ to, from, subject: `Portfolio Contact: ${name}`, reply_to: email, text: message });
    return NextResponse.json({ message: "Sent" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Failed" }, { status: 500 });
  }
}
