"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, SITE } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";
import NovaEdgeLabs_logo from "@/assets/NovaEdgeLabs_Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `text-sm font-medium transition-colors ${
      pathname === href
        ? "text-indigo-600"
        : "text-slate-600 hover:text-indigo-600"
    }`;

  // Close the menu whenever the current route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          {/* Logo and brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight"
            aria-label="NovaEdge Labs home"
          >
            <Image
              src={NovaEdgeLabs_logo}
              alt="NovaEdge Labs logo"
              width={36}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
            <span>
              Nova<span className="text-indigo-600">Edge</span> Labs
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass(link.href)}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp !py-2"
            >
              WhatsApp us
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 md:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile overlay (outside the header so "fixed" means the screen) */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-50 bg-slate-950/40 transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile slide-in panel */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-[min(85vw,360px)] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ visibility: open ? "visible" : "hidden" }}
      >
        {/* Panel heading */}
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-slate-100 px-5">
          <span className="text-base font-semibold text-slate-900">Menu</span>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Close navigation menu"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Explore NovaEdge
          </p>

          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                    active
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  }`}
                >
                  {link.label}

                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    className={active ? "text-indigo-600" : "text-slate-400"}
                    aria-hidden="true"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Ready to grow your business?
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Let&apos;s discuss a digital solution that fits your goals.
            </p>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="btn btn-whatsapp mt-4 flex w-full justify-center"
            >
              WhatsApp us
            </a>
          </div>
        </div>

        {/* Panel footer */}
        <div className="shrink-0 border-t border-slate-100 px-5 py-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </nav>
    </>
  );
}