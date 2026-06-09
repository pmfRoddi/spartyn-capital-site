"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function SiteNav({
  brand = "SPARTYN",
}: {
  brand?: "SPARTYN" | "PRAXIS";
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-30 px-6 py-8 md:px-14">
      <div className="flex items-center justify-between">
        <Logo variant={brand === "PRAXIS" ? "praxis" : "spartyn"} />

        <div className="hidden gap-8 text-xs font-bold uppercase tracking-[0.22em] text-white/70 md:flex">
          <Link href="/">Spartyn</Link>
          <Link href="/praxis">Praxis</Link>
          <a href="#contact">Contact</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-sky-500/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white md:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <div className="mt-5 rounded-3xl border border-sky-500/20 bg-[#07111f]/95 p-5">
          <div className="flex flex-col gap-4 text-sm font-bold uppercase tracking-[0.22em]">
            <Link href="/">Spartyn</Link>
            <Link href="/praxis">Praxis</Link>
            <a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}