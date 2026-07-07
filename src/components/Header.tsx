"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Mission", href: "#our-mission" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeroTop, setIsHeroTop] = useState(true);

  function closeMenu() {
    setMenuOpen(false);
  }

  useEffect(() => {
    function onScroll() {
      setIsHeroTop(window.scrollY < 40);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: isHeroTop ? "rgba(20,53,32,0.46)" : "#FBF8F1",
        borderBottom: isHeroTop
          ? "1px solid rgba(251,248,241,.14)"
          : "1px solid rgba(30,74,44,.14)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      <div className="relative flex w-full items-center py-3 pl-6 pr-4 sm:py-4 sm:pl-8 sm:pr-6">
        <a href="#home" onClick={closeMenu} className="flex items-center">
          {/* Logo swaps based on navbar background for consistent contrast */}
          <img
            src={isHeroTop ? "/birke-wordmark-ivory.png" : "/birke-wordmark-forest.png"}
            alt="Birke Garden Care"
            className="h-[42px] w-auto sm:h-[56px]"
          />
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
              style={{ color: isHeroTop ? "#FBF8F1" : "#1E4A2C" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="ml-auto flex min-h-11 min-w-11 items-center justify-center md:hidden"
          style={{ color: isHeroTop ? "#FBF8F1" : "#1E4A2C" }}
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
            backgroundColor: "rgba(251,248,241,.98)",
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
                  style={{ color: "#1E4A2C" }}
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
