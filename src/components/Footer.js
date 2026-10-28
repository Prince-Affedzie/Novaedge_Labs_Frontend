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
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="container-x grid gap-8 py-12 md:grid-cols-3">
        <div>
          {/* Logo and Brand Name */}
          <div className="flex items-center gap-2.5">
            <Image 
              src={NovaEdgeLabs_logo} 
              alt="NovaEdgeLabs Logo" 
              width={32} 
              height={32} 
              className="h-8 w-auto object-contain" 
            />
            <p className="text-lg font-bold text-white">
              Nova<span className="text-indigo-400">Edge</span> Labs
            </p>
          </div>
          <p className="mt-2 max-w-xs text-sm text-slate-400">{SITE.tagline}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Pages</p>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a></li>
            <li>Haatso Accra, Ghana</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {year || "2026"} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}