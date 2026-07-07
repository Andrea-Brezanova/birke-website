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
    id: "garden-care",
    label: "Garden Care",
    title: "Garden Care",
    description:
      "Hands-on, seasonal attention for established beds and borders — planting, weeding, deadheading, dividing, and the steady care that keeps a garden looking its best from spring through fall.",
    imageSrc: "/garden-care.jpg",
    bullets: [
      "Seasonal planting and bed refreshes",
      "Weeding, deadheading, and dividing",
      "Steady care from spring through fall",
    ],
  },
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
    id: "design",
    label: "Design & Makeovers",
    title: "Design & Makeovers",
    description:
      "Thoughtful refreshes and full makeovers — reworking tired beds, choosing plants suited to Nantucket conditions, and bringing quiet new life to an outdoor space.",
    imageSrc: "/design-makeovers.jpg",
    bullets: [
      "Refreshes for tired garden spaces",
      "Plant choices suited to island conditions",
      "Elegant, practical transformations",
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    title: "Maintenance",
    description:
      "Reliable, ongoing upkeep on a schedule that suits your property, so the garden stays tidy, healthy, and cared for throughout the season.",
    imageSrc: "/maintenance.jpg",
    bullets: [
      "Recurring weekly or bi-weekly care",
      "Tidy, healthy, guest-ready gardens",
      "Dependable communication and timing",
    ],
  },
  {
    id: "installations",
    label: "Installations",
    title: "Installations",
    description:
      "Whether you have a design in mind or would like creative guidance, we help create and install outdoor spaces that feel beautiful, welcoming, and made to be enjoyed.",
    imageSrc: "/install.jpg",
  },
  {
    id: "coordination",
    label: "Additional Coordination",
    title: "Additional Coordination",
    description:
      "Lawns, hedges, and related outdoor care may be coordinated when needed — connecting you with trusted help so everything outside your home is looked after.",
    imageSrc: "/additional-coordination.jpg",
    bullets: [
      "Coordination only when needed",
      "Lawns and hedges are not core services",
      "Trusted support for complete outdoor care",
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
    <section id="services" className="scroll-mt-32 bg-ivory px-5 py-12 sm:px-8 sm:py-14">
      <div className="mx-auto flex min-h-[100svh] max-w-[1080px] flex-col justify-center">
        <p
          className="text-[13px] uppercase tracking-[0.3em]"
          style={{ color: "#7A8770" }}
        >
          What we do
        </p>

        {/* Tab bar — underline style */}
        <div
          className="mt-6 flex gap-6 overflow-x-auto border-b [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                className="shrink-0 whitespace-nowrap pb-3 text-[15px] sm:text-[16px] transition-colors focus-visible:outline-none"
                style={{
                  color: isActive ? "#1E4A2C" : "#7A8770",
                  fontWeight: isActive ? 600 : 400,
                  borderBottom: isActive
                    ? "2px solid #1E4A2C"
                    : "2px solid transparent",
                  marginBottom: "-1px",
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
          className="mt-8 grid items-start gap-8 md:mt-10 md:grid-cols-[1fr_1fr] md:gap-12"
        >
          <div>
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

          <div className="relative h-[300px] overflow-hidden rounded-[16px] sm:h-[360px] md:h-[404px]">
            {primaryFailed ? (
              <div
                className="flex h-full w-full items-center justify-center text-center text-[17px]"
                style={{
                  backgroundColor: "#F1EBDD",
                  color: "#7A8770",
                }}
              >
                Photo coming soon
              </div>
            ) : (
              <img
                src={active.imageSrc}
                alt={`${active.title} service`}
                className="h-full w-full object-cover"
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
