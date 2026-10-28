
"use client";

import Link from "next/link";
import Image from "next/image";
import { navLinks, SITE } from "@/lib/data";
import { useEffect, useState } from "react";
import NovaEdgeLabs_logo from "@/assets/NovaEdgeLabs_Logo.png";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300 overflow-hidden">
      <div className="container-x grid gap-10 py-12 text-center md:grid-cols-3 md:gap-8 md:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5"
            aria-label="NovaEdge Labs home"
          >
            <Image
              src={NovaEdgeLabs_logo}
              alt="NovaEdge Labs logo"
              width={32}
              height={32}
              className="h-8 w-auto object-contain"
            />

            <span className="text-lg font-bold text-white">
              Nova<span className="text-indigo-400">Edge</span> Labs
            </span>
          </Link>

          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
            {SITE.tagline}
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-sm font-semibold text-white">Explore</p>

          <ul className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm md:flex-col md:items-start md:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-indigo-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
{/* Contact */}
<div>
  <p className="text-sm font-semibold text-white">Get in touch</p>

  <ul className="mt-4 space-y-3 text-sm text-slate-400">
    <li className="break-words">
      <a
        href={`mailto:${SITE.email}`}
        className="transition-colors duration-200 hover:text-white"
      >
        {SITE.email}
      </a>
    </li>

    <li>
      <a
        href={`tel:+${SITE.phone}`}
        className="transition-colors duration-200 hover:text-white"
      >
        +{SITE.phone}
      </a>
    </li>

    <li>Haatso, Accra, Ghana</li>
  </ul>
</div>

      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500">
        © {year || "2026"} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
