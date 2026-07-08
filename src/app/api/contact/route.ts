import { Resend } from "resend";
import { NextResponse } from "next/server";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
  company?: string; // honeypot
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Server email is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }

  const firstName = clean(body.firstName);
  const lastName = clean(body.lastName);
  const email = clean(body.email);
  const subject = clean(body.subject);
  const message = clean(body.message);
  const company = clean(body.company);

  // Honeypot: pretend success for bots while dropping submission.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (!firstName || !email || !subject || !message) {
    return NextResponse.json(
      {
        error:
          "Please fill in all required fields: first name, email, subject, and message.",
      },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const fullName = [firstName, lastName].filter(Boolean).join(" ");

  try {
    await resend.emails.send({
      from: "Birke Garden Care <hello@birkegardens.com>",
      to: "birkegardencare@gmail.com",
      replyTo: email,
      subject: `New Birke Garden Care inquiry: ${subject}`,
      text: [
        "New contact inquiry received",
        "",
        `Name: ${fullName || firstName}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to send message right now. Please try again." },
      { status: 502 },
    );
  }
}
