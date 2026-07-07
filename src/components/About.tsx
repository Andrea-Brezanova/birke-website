"use client";

import { useState } from "react";

const highlights = [
  "20+ years on-island",
  "Local Nantucket garden experience",
  "Homes, rentals & seasonal properties",
];

export function About() {
  const [imageMissing, setImageMissing] = useState(false);

  return (
    <section
      id="about"
      className="-mt-[88px] scroll-mt-0 bg-ivory px-5 pb-14 pt-[108px] sm:px-8 sm:pb-16"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid min-h-[calc(100svh-88px)] max-w-[1080px] items-center gap-8 md:grid-cols-[1fr_1.05fr] md:gap-12">
        <div className="order-1 md:order-none">
          {imageMissing ? (
            <div
              className="flex h-[460px] w-full items-center justify-center rounded-[16px] text-center text-[17px] sm:h-[560px] md:h-[640px]"
              style={{ backgroundColor: "#F1EBDD", color: "#7A8770" }}
            >
              Photo coming soon
            </div>
          ) : (
            <img
              src="/andrea.jpg"
              alt="Andrea in a Nantucket garden"
              className="h-[460px] w-full rounded-[16px] object-cover sm:h-[560px] md:h-[640px]"
              onError={() => setImageMissing(true)}
            />
          )}
        </div>

        <div className="order-2 md:order-none">
          <h2
            id="about-heading"
            className="font-serif text-[34px] font-medium leading-tight md:text-[42px]"
            style={{ color: "#1E4A2C" }}
          >
            About Andrea
          </h2>

          <p className="mt-5 text-[17px] leading-relaxed md:text-[19px]" style={{ color: "#4C5A47" }}>
            Birke Garden Care is led by Andrea, a European transplant who has
            called Nantucket home for many years. Her gardening experience began
            at Bartlett&apos;s Farm and grew through years of hands-on work in local
            Nantucket gardens, including time spent working alongside Bridget
            Champoux.
          </p>

          <p className="mt-5 text-[17px] leading-relaxed md:text-[19px]" style={{ color: "#4C5A47" }}>
            With more than 20 years of on-island experience, Andrea brings a
            practical eye, steady attention to detail, and a personal
            understanding of what Nantucket homes, rentals, and seasonal
            properties need throughout the year.
          </p>

          <p className="mt-5 text-[17px] leading-relaxed md:text-[19px]" style={{ color: "#4C5A47" }}>
            The work is professional, efficient, and trustworthy — with
            thoughtful care for gardens, containers, window boxes, and outdoor
            spaces that should feel welcoming and well maintained.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full px-3.5 py-2 text-[13px] sm:text-[14px]"
                style={{
                  backgroundColor: "#F1EBDD",
                  color: "#1E4A2C",
                  border: "1px solid rgba(30,74,44,.12)",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
