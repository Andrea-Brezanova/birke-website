"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type HomeService = {
  title: string;
  summary: string;
  vectorSrc: string;
  iconClassName?: string;
};

const services: HomeService[] = [
  {
    title: "Window Boxes & Containers",
    summary: "Fresh seasonal plantings for window boxes, pots, and containers.",
    vectorSrc: "/vectors/windowbox-icon.svg",
    iconClassName: "h-[180px] w-[180px]",
  },
  {
    title: "Full Garden Care",
    summary: "Hands-on, season-long attention for established beds and borders.",
    vectorSrc: "/vectors/garden-care.svg",
    iconClassName: "h-[180px] w-[180px]",
  },
  {
    title: "Greenscapes Maintenance",
    summary: "Reliable, scheduled upkeep that keeps every outdoor space tidy and healthy.",
    vectorSrc: "/vectors/maintenance.svg",
    iconClassName: "h-[180px] w-[180px]",
  },
  {
    title: "Installations",
    summary: "Garden installation with creative guidance from concept to finish.",
    vectorSrc: "/vectors/installations.svg",
    iconClassName: "h-[180px] w-[180px]",
  },
  {
    title: "Makeovers",
    summary: "Thoughtful refreshes for tired beds and overgrown spaces.",
    vectorSrc: "/vectors/makeovers.svg",
    iconClassName: "h-[180px] w-[180px]",
  },
  {
    title: "Lawn & Privet Care",
    summary: "Coordination for lawn, privet trimming, and related outdoor services.",
    vectorSrc: "/vectors/lawns-privets.svg",
    iconClassName: "h-[180px] w-[180px]",
  },
];

export function ServicesTeaser() {
  const CARD_WIDTH = 280;
  const GAP = 40;
  const STEP = CARD_WIDTH + GAP;
  const VISIBLE_CARDS = 3;
  const VIEWPORT_WIDTH = CARD_WIDTH * VISIBLE_CARDS + GAP * (VISIBLE_CARDS - 1);
  const SECONDS_PER_CARD = 4;
  const CARDS_PER_SECOND = 1 / SECONDS_PER_CARD;
  const TRANSITION = "transform 0.9s cubic-bezier(0.4, 0, 0.2, 1)";
  const TOTAL = services.length;
  const REPEATS = 12;
  const START_REPEAT = 4;

  const trackCards = useMemo(
    () =>
      Array.from({ length: REPEATS }).flatMap((_, repeatIndex) =>
        services.map((service, serviceIndex) => ({
          ...service,
          key: `${repeatIndex}-${service.title}-${serviceIndex}`,
        })),
      ),
    [],
  );

  const [pageValue, setPageValue] = useState(TOTAL * START_REPEAT);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [useTransition, setUseTransition] = useState(false);
  const rafRef = useRef<number | null>(null);
  const prevTimeRef = useRef<number | null>(null);

  const activeIndex = ((Math.round(pageValue) % TOTAL) + TOTAL) % TOTAL;
  const viewportWidth = isMobile ? CARD_WIDTH : VIEWPORT_WIDTH;

  function clearRaf() {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    prevTimeRef.current = null;
  }

  function pauseAuto() {
    setIsPlaying(false);
    clearRaf();
    setUseTransition(false);
    setPageValue((current) => Math.round(current));
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const apply = (matches: boolean) => setIsMobile(matches);

    apply(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => apply(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, []);

  useEffect(() => {
    clearRaf();
    if (!isPlaying || !isMobile) return;

    function step(timestamp: number) {
      if (prevTimeRef.current === null) {
        prevTimeRef.current = timestamp;
      }
      const dt = (timestamp - prevTimeRef.current) / 1000;
      prevTimeRef.current = timestamp;

      setPageValue((current) => {
        let next = current + dt * CARDS_PER_SECOND;
        const lowerBound = TOTAL * 2;
        const upperBound = TOTAL * (REPEATS - 2);
        const wrapSpan = TOTAL * (REPEATS - 4);

        if (next > upperBound) next -= wrapSpan;
        if (next < lowerBound) next += wrapSpan;
        return next;
      });

      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return clearRaf;
  }, [isPlaying, isMobile]);

  function handlePrev() {
    pauseAuto();
    setUseTransition(true);
    setPageValue((current) => Math.round(current) - 1);
  }

  function handleNext() {
    pauseAuto();
    setUseTransition(true);
    setPageValue((current) => Math.round(current) + 1);
  }

  function handleDotClick(index: number) {
    pauseAuto();
    setUseTransition(true);
    setPageValue((current) => {
      const cycle = Math.floor(current / TOTAL);
      return cycle * TOTAL + index;
    });
  }

  function togglePlay() {
    if (isPlaying) {
      pauseAuto();
      return;
    }
    setUseTransition(false);
    prevTimeRef.current = null;
    setIsPlaying(true);
  }

  const trackOffsetPx = pageValue * STEP;

  return (
    <section
      id="services"
      className="bg-ivory px-6 py-14 text-center sm:px-10 sm:py-16"
      style={{ backgroundColor: "#FBF8F1" }}
      aria-labelledby="services-teaser-heading"
    >
      <div className="mx-auto max-w-[1080px]">
        <p
          className="text-[13px] uppercase tracking-[0.32em]"
          style={{ color: "#7A8770" }}
        >
          Services
        </p>
        <h2 id="services-teaser-heading" className="sr-only">
          Services
        </h2>
        <p
          className="mx-auto mt-5 max-w-[820px] text-[18px] leading-[1.45] md:text-[19px]"
          style={{ color: "#4C5A47" }}
        >
          From window boxes and seasonal planting to established gardens, Birke
          Garden Care offers thoughtful, hands-on service tailored to each
          property.
        </p>

        <div className="relative mt-9">
          <div className="mx-auto max-w-full overflow-hidden" style={{ width: `${viewportWidth}px` }}>
            <div
              className="flex"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(-${trackOffsetPx}px)`,
                transition: useTransition ? TRANSITION : "none",
              }}
              onTransitionEnd={() => {
                if (useTransition) setUseTransition(false);
              }}
            >
              {trackCards.map((service, index) => (
                <article key={service.key ?? `${service.title}-${index}`} className="shrink-0" style={{ width: `${CARD_WIDTH}px` }}>
                  <div className="mx-auto flex max-w-[280px] flex-col items-center text-center">
                    <div className="relative">
                      <div
                        className="flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full"
                        style={{ backgroundColor: "#F1EBDD" }}
                      >
                        <img
                          src={service.vectorSrc}
                          alt=""
                          aria-hidden="true"
                          className={service.iconClassName ?? "h-[150px] w-[150px]"}
                          style={{ backgroundColor: "#F1EBDD", display: "block" }}
                        />
                      </div>
                      <span
                        className="absolute left-1/2 top-[-9px] flex h-[38px] w-[38px] -translate-x-1/2 items-center justify-center rounded-full border font-serif text-[23px] leading-none"
                        style={{
                          backgroundColor: "#FBF8F1",
                          borderColor: "rgba(20,53,32,.15)",
                          color: "#1E4A2C",
                          boxShadow: "0 4px 10px rgba(20,53,32,.12)",
                        }}
                      >
                        {String((index % TOTAL) + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p
                      className="mt-4 text-[22px] font-serif font-semibold leading-[1.15] tracking-[-0.01em] md:text-[24px]"
                      style={{ color: "#1E4A2C" }}
                    >
                      {service.title}
                    </p>
                    <p
                      className="mt-2 max-w-[250px] text-[15px] leading-[1.55] md:text-[16px]"
                      style={{ color: "#4C5A47" }}
                    >
                      {service.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full md:left-[-18px]"
            style={{
              backgroundColor: "#FBF8F1",
              color: "#1E4A2C",
              border: "1px solid rgba(20,53,32,.2)",
              boxShadow: "0 4px 12px rgba(20,53,32,.10)",
            }}
            aria-label="Previous services"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full md:right-[-18px]"
            style={{
              backgroundColor: "#FBF8F1",
              color: "#1E4A2C",
              border: "1px solid rgba(20,53,32,.2)",
              boxShadow: "0 4px 12px rgba(20,53,32,.10)",
            }}
            aria-label="Next services"
          >
            ›
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-[14px]">
          <button
            type="button"
            onClick={togglePlay}
            className="flex h-[34px] w-[34px] items-center justify-center rounded-full text-[12px] md:hidden"
            style={{
              backgroundColor: "#FBF8F1",
              color: "#1E4A2C",
              border: "1px solid rgba(20,53,32,.2)",
            }}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>

          <div className="flex items-center gap-[14px]" aria-label="Select service">
            {services.map((service, index) => (
            <button
              key={`dot-${service.title}`}
              type="button"
              onClick={() => handleDotClick(index)}
              className="h-[9px] w-[9px] rounded-full"
              style={{
                backgroundColor: activeIndex === index ? "#1E4A2C" : "#D6CFBB",
              }}
              aria-label={`Go to ${service.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
            />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a
            href="/services#services"
            className="inline-flex min-h-11 items-center justify-center rounded-md border px-10 text-[12px] font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
            style={{
              borderColor: "#1E4A2C",
              color: "#1E4A2C",
              backgroundColor: "transparent",
            }}
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
