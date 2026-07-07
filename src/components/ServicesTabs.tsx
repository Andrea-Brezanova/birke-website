"use client";

import { useState } from "react";

type ServiceTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  items: string[];
};

const serviceTabs: ServiceTab[] = [
  {
    id: "gardens",
    label: "Gardens",
    title: "Gardens",
    description:
      "Thoughtful care for island gardens — seasonal planting, deadheading, weeding, and keeping beds looking tended throughout the year.",
    items: [
      "Seasonal planting and bed care",
      "Weeding, deadheading, and cleanup",
      "Plant health and ongoing attention",
      "Reliable visits for homes and rentals",
    ],
  },
  {
    id: "window-boxes",
    label: "Window Boxes",
    title: "Window Boxes",
    description:
      "Window box planting and seasonal refreshes that welcome you home — or your guests — with color suited to Nantucket properties.",
    items: [
      "Seasonal window box planting",
      "Refreshes before arrival or opening",
      "Watering, feeding, and upkeep",
      "Coordinated care for seasonal properties",
    ],
  },
  {
    id: "containers",
    label: "Containers",
    title: "Containers",
    description:
      "Container gardens for porches, decks, and entries — cared for with the same attention as in-ground plantings.",
    items: [
      "Porch and entry containers",
      "Deck and patio plantings",
      "Ongoing maintenance and feeding",
      "Seasonal replanting when needed",
    ],
  },
  {
    id: "design",
    label: "Design",
    title: "Design",
    description:
      "Garden design refreshes with modest updates and an eye for what works on Nantucket — never overdone, always considered.",
    items: [
      "Design refreshes for existing gardens",
      "Thoughtful plant selection",
      "Updates tailored to your property",
      "Suited to homes and rentals alike",
    ],
  },
  {
    id: "maintenance",
    label: "Maintenance",
    title: "Maintenance",
    description:
      "Dependable ongoing maintenance with clear communication about what's needed and when — ideal for owners away from the island.",
    items: [
      "Regular garden maintenance visits",
      "Efficient, professional work",
      "Honest updates on garden needs",
      "Reliable scheduling you can count on",
    ],
  },
  {
    id: "makeovers",
    label: "Makeovers",
    title: "Makeovers",
    description:
      "Seasonal makeovers and replanting that give outdoor spaces a fresh, cared-for feeling when it matters most.",
    items: [
      "Seasonal garden makeovers",
      "Replanting and bed refreshes",
      "Pre-arrival and opening-week prep",
      "A welcoming look for guests and owners",
    ],
  },
  {
    id: "coordination",
    label: "Additional Coordination",
    title: "Additional Coordination",
    description:
      "When your property needs more than garden care alone, additional services can be arranged with the same reliable approach.",
    items: [
      "Lawns, hedges, and related outdoor care may be coordinated when needed",
      "Additional services arranged as appropriate",
      "One point of contact for outdoor care",
      "Coordinated scheduling for seasonal properties",
    ],
  },
];

export function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id);
  const active = serviceTabs.find((tab) => tab.id === activeTab) ?? serviceTabs[0];

  return (
    <section
      id="services"
      className="section-padding bg-white"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="services-heading" className="section-heading">
          Services
        </h2>
        <p className="section-subheading">
          Garden care, containers, design, and maintenance — with additional
          coordination available when your property needs it.
        </p>

        <div className="mt-10" role="tablist" aria-label="Service categories">
          <div className="flex flex-wrap gap-2">
            {serviceTabs.map((tab) => {
              const isActive = tab.id === activeTab;

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 ${
                    isActive
                      ? "border-forest bg-forest text-ivory"
                      : "border-border bg-ivory text-text-muted hover:border-sage hover:text-forest"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="card mt-8 p-6 sm:p-8"
        >
          <h3 className="font-serif text-2xl font-medium text-forest">{active.title}</h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">
            {active.description}
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {active.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-forest/80">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
