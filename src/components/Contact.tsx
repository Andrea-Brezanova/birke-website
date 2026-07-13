"use client";

import { useState, type ReactNode } from "react";

const labelStyle = { color: "#FBF8F1" as const };
const requiredStyle = { color: "#9DB08F" as const };

function FieldLabel({
  children,
  required = false,
}: {
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <span className="mb-1.5 block text-[13px]" style={labelStyle}>
      {children}
      {required ? (
        <>
          {" "}
          <span style={requiredStyle}>(required)</span>
        </>
      ) : null}
    </span>
  );
}

const inputClass =
  "w-full rounded-md px-3.5 py-3 text-[15px] text-[#26301F] placeholder:text-[#6E7A66] placeholder:opacity-100 outline-none focus:ring-2 focus:ring-[#9DB08F]";
const inputStyle = { backgroundColor: "#FBF8F1", color: "#26301F" as const };

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
      company: String(formData.get("company") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(
          typeof data?.error === "string"
            ? data.error
            : "Something went wrong. Please try again.",
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Could not send your message right now. Please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[88px] bg-forest px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-12"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto min-h-[calc(100svh-88px)] max-w-[1080px]">
        <p
          className="text-center text-[13px] uppercase tracking-[0.32em]"
          style={{ color: "#9DB08F" }}
        >
          Get a quote
        </p>
        <div className="grid content-center items-start gap-12 md:mt-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Left column */}
          <div>
            <h3
              id="contact-heading"
              className="-mt-2 font-serif text-[40px] font-medium leading-tight text-ivory md:-mt-3"
            >
              Let&apos;s talk about your garden.
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-[13px] uppercase tracking-[0.16em]" style={{ color: "#9DB08F" }}>
                  Call / Text
                </p>
                <a
                  href="tel:5083743018"
                  className="mt-1 block text-[18px] font-semibold tracking-[0.005em] transition-opacity hover:opacity-90 sm:text-[20px]"
                  style={{ color: "#FFFFFF", textShadow: "0 0 1px rgba(255,255,255,.5)" }}
                >
                  508-374-3018
                </a>
              </div>

              <div>
                <p className="text-[13px] uppercase tracking-[0.16em]" style={{ color: "#9DB08F" }}>
                  Email
                </p>
                <a
                  href="mailto:birkegardencare@gmail.com"
                  className="mt-1 block text-[18px] font-semibold tracking-[0.005em] transition-opacity hover:opacity-90 sm:text-[20px]"
                  style={{ color: "#FFFFFF", textShadow: "0 0 1px rgba(255,255,255,.5)" }}
                >
                  birkegardencare@gmail.com
                </a>
              </div>

              {/* QR card */}
              <div className="flex flex-col items-start pt-2">
                <div
                  className="flex items-center justify-center"
                  style={{ backgroundColor: "#FBF8F1", padding: "12px", borderRadius: "12px" }}
                >
                  <img src="/qr.png" alt="Scan to save contact" style={{ width: "130px", height: "130px" }} />
                </div>
                <p className="mt-3 text-[13px]" style={{ color: "#C6D3BC" }}>
                  Scan to save contact
                </p>
              </div>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            {status === "success" ? (
              <div
                className="mb-5 rounded-lg p-4 text-[16px]"
                style={{ backgroundColor: "rgba(251,248,241,.12)", color: "#FBF8F1" }}
                role="status"
              >
                Thank you — Andrea will be in touch soon.
              </div>
            ) : null}

            {status === "error" ? (
              <div
                className="mb-5 rounded-lg p-4 text-[15px]"
                style={{ backgroundColor: "rgba(120,20,20,.25)", color: "#FBF8F1" }}
                role="alert"
              >
                {errorMessage}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot field for basic bot protection */}
              <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
                <label>
                  Company
                  <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <FieldLabel>First Name</FieldLabel>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="First name"
                    className={inputClass}
                    style={inputStyle}
                  />
                </label>
                <label className="block">
                  <FieldLabel>Last Name</FieldLabel>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Last name"
                    className={inputClass}
                    style={inputStyle}
                  />
                </label>
              </div>

              <label className="block">
                <FieldLabel required>Email Address</FieldLabel>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block">
                <FieldLabel>Subject</FieldLabel>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can we help?"
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <label className="block">
                <FieldLabel required>Message</FieldLabel>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us a little about your garden needs..."
                  className={inputClass}
                  style={inputStyle}
                />
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-11 items-center justify-center rounded-full px-8 py-3 text-[13px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                style={{ backgroundColor: "#FBF8F1", color: "#1E4A2C", fontWeight: 600 }}
              >
                {status === "loading" ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
