"use client";

import { useState } from "react";

export function About() {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <section
      id="about"
      className="scroll-mt-[88px] bg-ivory px-5 pb-12 pt-10 sm:px-8 sm:pb-14 sm:pt-12"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto min-h-[calc(100svh-88px)] max-w-[1080px]">
        <p
          className="text-center text-[13px] uppercase tracking-[0.3em]"
          style={{ color: "#7A8770" }}
        >
          About
        </p>

        <div className="mt-7 grid items-center gap-8 md:mt-8 md:grid-cols-[1fr_1fr] md:gap-12">
          <div className="order-1 md:order-none">
          {imageMissing ? (
            <div
              className="flex h-[340px] w-full items-center justify-center text-center text-[17px] sm:h-[420px] md:h-[520px]"
              style={{ backgroundColor: "#F1EBDD", color: "#7A8770" }}
            >
              Photo coming soon
            </div>
          ) : (
            <img
              src="/andrea.jpg"
              alt="Andrea in a Nantucket garden"
              className="h-[340px] w-full object-cover sm:h-[420px] md:h-[520px]"
              onError={() => setImageMissing(true)}
            />
          )}
        </div>

          <div className="order-2 md:order-none md:self-center">
            <h2 id="about-heading" className="sr-only">
              About Andrea
            </h2>

            <p className="text-[16px] leading-relaxed md:text-[18px]" style={{ color: "#4C5A47" }}>
              Birke Garden Care is led by Andrea, a European transplant who has
              called Nantucket home for many years. Her gardening experience began
              at Bartlett&apos;s Farm and grew through years of hands-on work in local
              Nantucket gardens, including nearly two decades learning from and
              working alongside Bridget of Champoux Landscapes.
            </p>

            <p className="mt-4 text-[16px] leading-relaxed md:text-[18px]" style={{ color: "#4C5A47" }}>
              With more than 20 years of on-island experience, Andrea brings a
              practical eye, steady attention to detail, and a personal
              understanding of what Nantucket homes, rentals, and seasonal
              properties need throughout the year.
            </p>

            <p className="mt-4 text-[16px] leading-relaxed md:text-[18px]" style={{ color: "#4C5A47" }}>
              She takes pride in what she does and approaches work with
              professionalism, efficiency, and trust.
            </p>

            <blockquote
              className="mt-6 border-l-2 pl-4 text-[15px] italic leading-relaxed md:text-[16px]"
              style={{ borderColor: "rgba(30,74,44,.22)", color: "#4C5A47" }}
            >
              &ldquo;...! I have great memories from our times together-all while
              working-which is probably not how many people experience work:) You
              are one of the best workers I know and have such a pleasant
              disposition- ... should be so happy to have you!!&rdquo;
            </blockquote>
            <p className="mt-2 text-[14px]" style={{ color: "#7A8770" }}>
              — Bridget Montgomery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
