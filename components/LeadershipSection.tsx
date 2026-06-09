type LeaderProps = {
  name: string;
  title: string;
  bio: string;
};

function LeaderCard({ name, title, bio }: LeaderProps) {
  return (
    <div className="rounded-3xl border border-sky-500/20 bg-white/[0.03] p-8">
      <div className="mb-6 h-24 w-24 rounded-full bg-gradient-to-br from-sky-400/50 to-sky-900/50" />

      <h3 className="text-2xl font-bold">{name}</h3>

      <p className="mt-2 text-sky-400">{title}</p>

      <p className="mt-4 leading-7 text-white/60">{bio}</p>
    </div>
  );
}

export default function LeadershipSection() {
  return (
    <section className="px-6 py-24 md:px-14">
      <div className="mb-12">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
          Leadership
        </p>

        <h2 className="text-4xl font-black md:text-6xl">
          Built by operators.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <LeaderCard
          name="Paul Rodriguez"
          title="Founder"
          bio="Founder of Spartyn Capital and Praxis. Focused on venture creation, strategic partnerships, capital access, and emerging technologies."
        />

        <LeaderCard
          name="Future Partner"
          title="Strategic Advisor"
          bio="Reserved for future operating partners, advisors, or venture leadership."
        />
      </div>
    </section>
  );
}