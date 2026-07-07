"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Mission", href: "#seasonal" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background:
          "linear-gradient(180deg, rgba(20,53,32,.55) 0%, rgba(20,53,32,.28) 100%)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      <div className="flex w-full items-center justify-between py-5 pl-3 pr-4 sm:py-7 sm:pl-5 sm:pr-8">
        <a href="#home" onClick={closeMenu} className="flex items-center">
          {/* Ivory wordmark (matches hero text color) generated from birke-wordmark-light.png */}
          <img
            src="/birke-wordmark-ivory.png"
            alt="Birke Garden Care"
            className="h-[52px] w-auto sm:h-[70px]"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] uppercase tracking-[0.16em] transition-opacity hover:opacity-70"
              style={{ color: "#FBF8F1" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="flex min-h-11 min-w-11 items-center justify-center text-ivory md:hidden"
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
          style={{ borderColor: "rgba(251,248,241,.14)", backgroundColor: "#1E4A2C" }}
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="flex min-h-11 items-center text-[14px] uppercase tracking-[0.16em]"
                  style={{ color: "#FBF8F1" }}
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
