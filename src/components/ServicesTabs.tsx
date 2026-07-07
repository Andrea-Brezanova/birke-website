"use client";

import { useState } from "react";

type Service = {
  id: string;
  label: string;
  title: string;
  blurb: string;
};

const services: Service[] = [
  {
    id: "garden-care",
    label: "Garden Care",
    title: "Garden Care",
    blurb:
      "Hands-on, seasonal attention for established beds and borders — planting, weeding, deadheading, dividing, and the steady care that keeps a garden looking its best from spring through fall.",
  },
  {
    id: "window-boxes",
    label: "Window Boxes & Containers",
    title: "Window Boxes & Containers",
    blurb:
      "Fresh seasonal plantings for window boxes, pots, and containers, swapped as the seasons turn so entries, porches, and terraces always feel welcoming.",
  },
  {
    id: "design",
    label: "Design & Makeovers",
    title: "Design & Makeovers",
    blurb:
      "Thoughtful refreshes and full makeovers — reworking tired beds, choosing plants suited to Nantucket conditions, and bringing quiet new life to an outdoor space.",
  },
  {
    id: "maintenance",
    label: "Maintenance",
    title: "Maintenance",
    blurb:
      "Reliable, ongoing upkeep on a schedule that suits your property, so the garden stays tidy, healthy, and cared for throughout the season.",
  },
  {
    id: "coordination",
    label: "Additional Coordination",
    title: "Additional Coordination",
    blurb:
      "Lawns, hedges, and related outdoor care may be coordinated when needed — connecting you with trusted help so everything outside your home is looked after.",
  },
];

export function ServicesTabs() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="services" className="bg-ivory px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1080px]">
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
                className="shrink-0 whitespace-nowrap pb-3 text-sm transition-colors focus-visible:outline-none"
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
          className="mt-12 grid items-center gap-12 md:grid-cols-2"
        >
          <div>
            <h3
              className="font-serif text-[34px] font-medium leading-tight"
              style={{ color: "#1E4A2C" }}
            >
              {active.title}
            </h3>
            <p className="mt-5 text-[16px] leading-relaxed" style={{ color: "#4C5A47" }}>
              {active.blurb}
            </p>
          </div>

          {/* Image placeholder */}
          <div
            className="img-placeholder w-full"
            style={{ height: "404px", borderRadius: "14px" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
