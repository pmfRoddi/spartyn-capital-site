import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import StatStrip from "@/components/StatStrip";
import AboutSpartyn from "@/components/AboutSpartyn";
import ContactCTA from "@/components/ContactCTA";
import LeadershipSection from "@/components/LeadershipSection";

const services = [
  {
    title: "Capital Strategy",
    text: "Funding strategy, positioning, deal structure, and growth planning.",
  },
  {
    title: "Strategic Advisory",
    text: "Execution support, partnerships, expansion, and market positioning.",
  },
  {
    title: "Network Access",
    text: "Introductions to investors, operators, institutions, and strategic partners.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#0ea5e955,transparent_35%),linear-gradient(180deg,#020617,#030712)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <SiteNav brand="SPARTYN" />

        <div className="relative z-10 flex min-h-[82vh] items-center px-6 md:px-14">
          <div className="max-w-5xl">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-sky-400">
              Spartyn Capital
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight md:text-8xl">
              Capital.
              <br />
              Strategy.
              <br />
              <span className="text-sky-400">Access.</span>
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/70">
              Strategic advisory and capital access for founders, companies,
              and opportunities positioned for growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-sky-400 px-7 py-3 text-sm font-bold text-[#03111f]"
              >
                Start the Conversation
              </a>

              <Link
                href="/praxis"
                className="rounded-full border border-sky-400/60 px-7 py-3 text-sm font-bold text-sky-300"
              >
                View Praxis
              </Link>
            </div>

            <StatStrip />
          </div>
        </div>
      </section>

      <AboutSpartyn />

      <section id="services" className="px-6 py-20 md:px-14">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.35em] text-sky-400">
            What We Do
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Strategic support for serious opportunities.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-sky-500/20 bg-white/[0.03] p-8"
            >
              <h3 className="mb-4 text-2xl font-semibold">{item.title}</h3>
              <p className="leading-7 text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-14">
        <div className="rounded-3xl border border-sky-500/20 bg-[#07111f] p-10 md:p-16">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-sky-400">
            Praxis
          </p>

          <h2 className="mb-6 max-w-4xl text-4xl font-semibold md:text-6xl">
            Our venture studio for research, technology, and execution.
          </h2>

          <p className="mb-8 max-w-2xl leading-8 text-white/60">
            Research. Build. Deploy.
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

      <ContactCTA
        label="Contact"
        title="Have an opportunity worth discussing?"
        subtitle="Share the opportunity, project, or capital need. Spartyn Capital will review and respond directly."
        buttonText="Contact Spartyn Capital"
      />

      <SiteFooter />
    </main>
  );
}