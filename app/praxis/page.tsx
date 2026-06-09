import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import ImageCard from "@/components/ImageCard";
import SectionHeader from "@/components/SectionHeader";
import StatStrip from "@/components/StatStrip";
import AboutPraxis from "@/components/AboutPraxis";
import ContactCTA from "@/components/ContactCTA";
import LeadershipSection from "@/components/LeadershipSection";

const whatWeDo = [
  {
    title: "Research",
    text: "We identify emerging technologies, market opportunities, and complex problems worth solving.",
    image: "/images/research.jpg",
  },
  {
    title: "Build",
    text: "We design, develop, and launch software, AI systems, digital products, and technology ventures.",
    image: "/images/build.jpg",
  },
  {
    title: "Deploy",
    text: "We bring ideas into the real world through strategic partnerships, commercialization, and execution.",
    image: "/images/deploy.jpg",
  },
];

const focusAreas = [
  {
    title: "Artificial Intelligence",
    text: "Intelligent systems, automation, agents, and decision support.",
    image: "/images/ai.jpg",
  },
  {
    title: "Advanced Software",
    text: "Platforms, applications, infrastructure, and enterprise solutions.",
    image: "/images/software.jpg",
  },
  {
    title: "Autonomous Systems",
    text: "Robotics, sensors, machine vision, and intelligent machines.",
    image: "/images/autonomy.jpg",
  },
  {
    title: "Emerging Technologies",
    text: "Research initiatives exploring what comes next.",
    image: "/images/emerging.jpg",
  },
];

const partners = [
  {
    title: "Founders",
    text: "Entrepreneurs building ambitious technology ventures.",
    image: "/images/founders.jpg",
  },
  {
    title: "Companies",
    text: "Organizations seeking new products, systems, and capabilities.",
    image: "/images/companies.jpg",
  },
  {
    title: "Institutions",
    text: "Research groups, universities, and public-sector initiatives.",
    image: "/images/institutions.jpg",
  },
  {
    title: "Strategic Partners",
    text: "Industry leaders helping bring innovation to market.",
    image: "/images/partners.jpg",
  },
];

export default function PraxisPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <img
          src="/images/hero-earth.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/45 via-[#030712]/35 to-[#030712]" />

        <SiteNav brand="PRAXIS" />

        <div className="relative z-10 flex min-h-[78vh] items-center justify-center px-6 text-center">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
              Venture Studio
            </p>

            <h1 className="mb-8 text-5xl font-black uppercase leading-tight md:text-8xl">
              Research.
              <br />
              <span className="text-sky-400">Build.</span>
              <br />
              <span className="text-sky-400">Deploy.</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg font-semibold leading-8 text-white/80">
              Praxis is the venture studio and technology incubator of Spartyn
              Capital. We build companies, technologies, and strategic
              relationships.
            </p>

            <a
              href="#contact"
              className="inline-flex rounded-full bg-sky-400 px-8 py-4 font-bold text-[#03111f]"
            >
              Build With Praxis
            </a>

            <StatStrip />
          </div>
        </div>
      </section>

      <AboutPraxis />

      <section id="what" className="px-6 py-20 md:px-14">
        <SectionHeader
          eyebrow="What We Do"
          title="Ideas Into Impact"
          text="Praxis moves ambitious concepts from research into real-world execution."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {whatWeDo.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="areas" className="px-6 py-20 md:px-14">
        <SectionHeader
          eyebrow="Areas of Practice"
          title="Where We Focus"
          text="We work across technology domains where research, engineering, capital, and execution intersect."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((item) => (
            <ImageCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section id="work" className="px-6 py-20 md:px-14">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.65fr]">
          <div className="rounded-3xl border border-sky-500/20 bg-[#07111f] p-8 shadow-[0_0_50px_rgba(14,165,233,0.08)] md:p-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
              Who We Work With
            </p>

            <h2 className="mb-8 text-4xl font-bold leading-tight md:text-5xl">
              Solving big problems requires the right collaboration.
            </h2>

            <div className="space-y-6">
              {partners.map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/60">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((item) => (
              <ImageCard key={item.title} {...item} tall />
            ))}
          </div>
        </div>
      </section>

      <LeadershipSection />

      <ContactCTA
        label="Praxis"
        title="Have a difficult problem worth solving?"
        subtitle="Send us the opportunity, problem, or concept. Praxis evaluates where research, technology, and execution can create impact."
        buttonText="Start the Conversation"
      />

      <SiteFooter />
    </main>
  );
}