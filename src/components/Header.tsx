"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "Services", href: "/services", sectionId: null },
  { label: "Our Mission", href: "/#our-mission", sectionId: "our-mission" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/#home");

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    if (pathname === "/services") {
      setActiveHref("/services");
      return;
    }

    const homeSectionLinks = navLinks.filter((link) => link.sectionId);
    const sections = homeSectionLinks
      .map((link) => document.getElementById(link.sectionId ?? ""))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length === 0) return;

        const activeId = `/#${visible[0].target.id}`;
        setActiveHref(activeId);
      },
      {
        // Track the section occupying the center of the viewport.
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      className="sticky inset-x-0 top-0 z-50"
      style={{
        backgroundColor: "rgba(251,248,241,.94)",
        borderBottom: "1px solid rgba(30,74,44,.14)",
      }}
    >
      <div className="relative flex w-full items-center justify-between px-6 py-3 sm:px-8 sm:py-4">
        <a href="/#home" onClick={closeMenu} className="flex items-center">
          <img
            src="/birke-wordmark-forest.png"
            alt="Birke Garden Care"
            className="h-[42px] w-auto sm:h-[56px]"
          />
        </a>

        <nav
          className="ml-auto hidden items-center gap-5 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              style={{
                color: "#1E4A2C",
                fontWeight: activeHref === link.href ? 600 : 400,
                textDecoration: activeHref === link.href ? "underline" : "none",
                textUnderlineOffset: activeHref === link.href ? "6px" : undefined,
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto flex min-h-11 min-w-11 items-center justify-center md:hidden"
          style={{ color: "#1E4A2C" }}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-6 w-6"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          className="border-t px-5 py-4 md:hidden"
          style={{
            borderColor: "rgba(30,74,44,.14)",
            backgroundColor: "rgba(251,248,241,.94)",
          }}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center text-[14px] uppercase tracking-[0.16em]"
                  style={{
                    color: "#1E4A2C",
                    fontWeight: activeHref === link.href ? 600 : 400,
                    textDecoration: activeHref === link.href ? "underline" : "none",
                    textUnderlineOffset: activeHref === link.href ? "6px" : undefined,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
