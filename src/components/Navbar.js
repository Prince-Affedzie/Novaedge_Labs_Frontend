"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, SITE } from "@/lib/data";
import { whatsappLink } from "@/lib/whatsapp";
import NovaEdgeLabs_logo from "@/assets/NovaEdgeLabs_Logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href) =>
    `text-sm font-medium transition ${
      pathname === href ? "text-indigo-600" : "text-slate-600 hover:text-slate-900"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        {/* Logo and Brand Name */}
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <Image 
            src={NovaEdgeLabs_logo} 
            alt="NovaEdgeLabs Logo" 
            width={36} 
            height={36} 
            className="h-9 w-auto object-contain" 
            priority
          />
          <span>Nova<span className="text-indigo-600">Edge</span> Labs</span>
        </Link>

        {/* Desktop Nav using custom CSS class to prevent cross-browser display issues */}
        <nav className="desktop-nav">
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp !py-2">
            WhatsApp us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <nav className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-x flex flex-col gap-1 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-md px-2 py-2 ${linkClass(l.href)}`}
              >
                {l.label}
              </Link>
            ))}
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp mt-2">
              WhatsApp us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}