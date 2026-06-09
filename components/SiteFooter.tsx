import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] px-6 py-10 text-sm text-white/50 md:px-14">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black tracking-[0.3em] text-white">
            SPARTYN
          </p>
          <p className="mt-2">Capital. Strategy. Access.</p>
        </div>

        <div className="flex flex-wrap gap-5">
          <Link href="/">Spartyn Capital</Link>
          <Link href="/praxis">Praxis</Link>
          <a href="mailto:paul@spartyncapital.com">Contact</a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Spartyn Capital. All rights reserved.</p>
        <p>Built for strategic capital, venture development, and execution.</p>
      </div>
    </footer>
  );
}