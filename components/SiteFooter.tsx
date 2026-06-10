import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#030712] px-6 py-10 text-sm text-white/50 md:px-14">
      <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="text-lg font-black tracking-[0.3em] text-white">
            SPARTYN
          </p>
          <p className="mt-2 max-w-md">
            Capital. Strategy. Access. Building and supporting what comes next.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/">Spartyn</Link>
              <Link href="/about">About</Link>
              <Link href="/praxis">Praxis</Link>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/contact">Contact</Link>
              <Link href="/support">Support</Link>
              <a href="mailto:advisory@spartyncapital.com">
                advisory@spartyncapital.com
              </a>
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white">
              Legal
            </p>
            <div className="flex flex-col gap-2">
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/data-deletion">Data Deletion</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Spartyn Capital. All rights reserved.</p>
        <p>Built for strategic capital, venture development, and execution.</p>
      </div>
    </footer>
  );
}