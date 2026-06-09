import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";

export default function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <SiteNav brand="SPARTYN" />

      <section className="px-6 py-20 md:px-14">
        <div className="mx-auto max-w-4xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
            {eyebrow}
          </p>

          <h1 className="mb-10 text-4xl font-black md:text-6xl">{title}</h1>

          <div className="space-y-8 rounded-3xl border border-sky-500/20 bg-[#07111f] p-8 leading-8 text-white/70 md:p-12">
            {children}
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex rounded-full border border-sky-400/60 px-7 py-3 text-sm font-bold text-sky-300"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}