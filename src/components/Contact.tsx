"use client";

import { useState } from "react";

const labelStyle = { color: "#FBF8F1" as const };
const requiredStyle = { color: "#9DB08F" as const };

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-1.5 block text-[13px]" style={labelStyle}>
      {children}{" "}
      <span style={requiredStyle}>(required)</span>
    </span>
  );
}

const inputClass =
  "w-full rounded-md px-3.5 py-3 text-[15px] outline-none focus:ring-2 focus:ring-[#9DB08F]";
const inputStyle = { backgroundColor: "#FBF8F1", color: "#26301F" as const };

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-32 bg-forest px-5 py-20 sm:px-8 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[1080px] items-start gap-16 md:grid-cols-[0.8fr_1.2fr]">
        {/* Left column */}
        <div>
          <p
            className="text-[13px] uppercase tracking-[0.3em]"
            style={{ color: "#9DB08F" }}
          >
            Get in touch
          </p>
          <h3
            id="contact-heading"
            className="mt-4 font-serif text-[40px] font-medium leading-tight text-ivory"
          >
            Let&apos;s talk about your garden.
          </h3>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-[13px] uppercase tracking-[0.16em]" style={{ color: "#9DB08F" }}>
                Call / Text Andrea
              </p>
              <a
                href="tel:5083743018"
                className="mt-1 block text-[20px] text-ivory transition-opacity hover:opacity-80"
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
                className="mt-1 block text-[20px] text-ivory transition-opacity hover:opacity-80"
              >
                birkegardencare@gmail.com
              </a>
            </div>

            {/* QR card */}
            <div className="flex flex-col items-center pt-2">
              <div
                className="flex items-center justify-center"
                style={{ backgroundColor: "#FBF8F1", padding: "12px", borderRadius: "12px" }}
              >
                {/* Place qr.png in /public */}
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
          {submitted ? (
            <div
              className="rounded-lg p-8 text-[18px]"
              style={{ backgroundColor: "rgba(251,248,241,.08)", color: "#FBF8F1" }}
              role="status"
            >
              Thank you — Andrea will be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <FieldLabel>First Name</FieldLabel>
                  <input type="text" name="firstName" required className={inputClass} style={inputStyle} />
                </label>
                <label className="block">
                  <FieldLabel>Last Name</FieldLabel>
                  <input type="text" name="lastName" required className={inputClass} style={inputStyle} />
                </label>
              </div>

              <label className="block">
                <FieldLabel>Email Address</FieldLabel>
                <input type="email" name="email" required className={inputClass} style={inputStyle} />
              </label>

              <label className="block">
                <FieldLabel>Subject</FieldLabel>
                <input type="text" name="subject" required className={inputClass} style={inputStyle} />
              </label>

              <label className="block">
                <FieldLabel>Message</FieldLabel>
                <textarea name="message" required rows={5} className={inputClass} style={inputStyle} />
              </label>

              <button
                type="submit"
                className="inline-flex min-h-11 items-center justify-center rounded-full px-8 py-3 text-[13px] uppercase tracking-[0.1em] transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FBF8F1", color: "#1E4A2C", fontWeight: 600 }}
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
