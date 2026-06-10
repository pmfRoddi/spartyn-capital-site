import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import LeadershipSection from "@/components/LeadershipSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e955,transparent_35%),linear-gradient(180deg,#020617,#030712)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <SiteNav brand="SPARTYN" />

        <div className="relative z-10 px-6 py-24 md:px-14 md:py-32">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
              About Spartyn Capital
            </p>

            <h1 className="mb-8 text-5xl font-black leading-tight md:text-8xl">
              Finding what comes next.
              <br />
              <span className="text-sky-400">Building what comes next.</span>
            </h1>

            <p className="max-w-3xl text-lg leading-8 text-white/70">
              Spartyn Capital identifies, builds, and supports the next
              generation of impactful companies, technologies, and ideas.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-sky-500/20 bg-[#07111f] p-8 md:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
              Mission
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              We identify, build, and support ambitious ideas with the potential
              to become meaningful companies.
            </h2>
          </div>

          <div className="rounded-3xl border border-sky-500/20 bg-white/[0.03] p-8 md:p-12">
            <p className="text-lg leading-9 text-white/70">
              Spartyn Capital works with founders, operators, investors, and
              emerging ventures to help turn ambitious ideas into scalable
              businesses. Through strategic advisory, capital access, venture
              development, and Praxis, our focus is simple: find the next best
              thing or build it.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/70">
              We operate at the intersection of capital, strategy, technology,
              and relationships — supporting select opportunities where our
              network and execution can create meaningful leverage.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-14">
        <div className="rounded-3xl border border-sky-500/20 bg-gradient-to-r from-[#07111f] to-[#041022] p-10 md:p-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
            Praxis
          </p>

          <h2 className="mb-6 max-w-4xl text-4xl font-black md:text-6xl">
            Praxis is where ideas become products, platforms, and ventures.
          </h2>

          <p className="mb-8 max-w-3xl leading-8 text-white/60">
            Praxis is the technology incubator and venture studio connected to
            Spartyn Capital. It exists to research, build, and deploy new
            technology-driven ventures.
          </p>

          <Link
            href="/praxis"
            className="inline-flex rounded-full border border-sky-400/60 px-8 py-4 font-bold text-sky-300"
          >
            Explore Praxis
          </Link>
        </div>
      </section>

      <LeadershipSection />

      <SiteFooter />
    </main>
  );
}