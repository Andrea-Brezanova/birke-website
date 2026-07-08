"use client";

import { useState } from "react";

type Service = {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  bullets?: string[];
};

const services: Service[] = [
  {
    id: "window-boxes",
    label: "Window Boxes & Containers",
    title: "Window Boxes & Containers",
    description:
      "Fresh seasonal plantings for window boxes, pots, and containers, swapped as the seasons turn so entries, porches, and terraces always feel welcoming.",
    imageSrc: "/containers.JPG",
    bullets: [
      "Design, sourcing, planting and maintenance",
      "Seasonal swaps (Fall and Holiday decorations)",
    ],
  },
  {
    id: "garden-care",
    label: "Full Garden Care",
    title: "Full Garden Care",
    description:
      "Hands-on, seasonal attention for established beds and borders — from cleanups and planting to the steady upkeep that keeps a garden looking its best from spring through fall.",
    imageSrc: "/daisies.JPG",
    bullets: [
      "Spring and fall cleanups and mulching",
      "Perennial and annual planting",
      "Weeding, deadheading, deadwooding, and rose care",
    ],
  },
  {
    id: "maintenance",
    label: "Greenscapes Maintenance",
    title: "Greenscapes Maintenance",
    description:
      "Reliable, ongoing upkeep on a schedule that suits your property, so the garden stays tidy, healthy, and cared for throughout the season.",
    imageSrc: "/greenscapes-hydrangea.png",
    bullets: [
      "Recurring weekly, bi-weekly or monthly care",
      "Monitoring plant health and seasonal needs",
      "Efficient and environmentally friendly treatments",
    ],
  },
  {
    id: "installations",
    label: "Installations",
    title: "Installations",
    description:
      "Whether you have a design in mind or would like creative guidance, we help create and install outdoor spaces that feel beautiful, welcoming, and made to be enjoyed.",
    imageSrc: "/install.jpg",
    bullets: [
      "Plant selection and placement",
      "Installation from concept to finish",
    ],
  },
  {
    id: "makeovers",
    label: "Makeovers",
    title: "Makeovers",
    description:
      "Thoughtful refreshes and full makeovers — reworking tired beds, choosing plants suited to Nantucket conditions, and bringing quiet new life to an outdoor space.",
    imageSrc: "/makeovers.JPG",
    bullets: [
      "Refreshes for tired or overgrown garden spaces",
      "Plant choices suited to Nantucket conditions",
      "Seasonal color, texture, and structure",
      "Practical updates that make the garden feel cared for",
    ],
  },
  {
    id: "coordination",
    label: "Lawn & Privet Care",
    title: "Lawn & Privet Care",
    description:
      "We can help coordinate lawn care, privet trimming, and related outdoor services upon request. Some services may be outsourced to trusted professionals for your convenience.",
    imageSrc: "/lawn.jpeg",
    bullets: [
      "Professional design support available",
      "Lawn and hedge care coordination",
      "Trusted help for larger outdoor projects",
    ],
  },
];

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(services[0].id);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const active = services.find((s) => s.id === activeId) ?? services[0];
  const activePrimaryKey = `${active.id}:primary`;
  const primaryFailed = failedImages[activePrimaryKey];

  return (
    <section
      id="services"
      className="scroll-mt-[88px] bg-ivory px-5 pb-10 pt-10 sm:px-8 sm:pb-12 sm:pt-12"
    >
      <div className="mx-auto flex min-h-[calc(100svh-88px)] max-w-[1080px] flex-col">
        {/* Tab bar — underline style */}
        <div
          className="flex gap-6 overflow-x-auto border-b [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-between md:gap-3"
          style={{ borderColor: "rgba(30,74,44,.16)" }}
          role="tablist"
          aria-label="Service categories"
        >
          {services.map((service) => {
            const isActive = service.id === activeId;
            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                id={`tab-${service.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${service.id}`}
                onClick={() => setActiveId(service.id)}
                className="shrink-0 whitespace-nowrap pb-3 text-[15px] sm:text-[16px] transition-colors focus-visible:outline-none md:flex-1 md:text-center"
                style={{
                  color: isActive ? "#1E4A2C" : "#7A8770",
                  fontWeight: isActive ? 600 : 400,
                  borderBottom: isActive
                    ? "2px solid #1E4A2C"
                    : "2px solid transparent",
                  marginBottom: "-1px",
                  transform: service.id === "installations" ? "translateX(8px)" : undefined,
                }}
              >
                {service.label}
              </button>
            );
          })}
        </div>

        {/* Content grid */}
        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-7 grid items-center gap-8 md:mt-8 md:grid-cols-[1fr_1fr] md:gap-12"
        >
          <div className="md:self-center">
            <h3
              className="font-serif text-[34px] font-medium leading-tight md:text-[42px]"
              style={{ color: "#1E4A2C" }}
            >
              {active.title}
            </h3>
            <p
              className="mt-4 text-[17px] leading-relaxed md:text-[19px]"
              style={{ color: "#4C5A47" }}
            >
              {active.description}
            </p>
            {active.bullets?.length ? (
              <ul className="mt-5 space-y-2.5">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[16px]" style={{ color: "#4C5A47" }}>
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ backgroundColor: "#7A8770" }}
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="relative h-[340px] overflow-hidden rounded-[16px] sm:h-[420px] md:h-[520px]">
            {primaryFailed ? (
              <div
                className="flex h-full w-full items-center justify-center text-center text-[17px]"
                style={{
                  backgroundColor: "transparent",
                  color: "#7A8770",
                }}
              >
                Photo coming soon
              </div>
            ) : (
              <img
                src={active.imageSrc}
                alt={`${active.title} service`}
                className="h-full w-full object-contain"
                onError={() =>
                  setFailedImages((prev) => ({
                    ...prev,
                    [activePrimaryKey]: true,
                  }))
                }
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
