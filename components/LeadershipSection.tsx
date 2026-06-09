type LeaderProps = {
  name: string;
  title: string;
  bio: string;
  image: string;
};

function LeaderCard({ name, title, bio, image }: LeaderProps) {
  return (
    <div className="grid gap-8 rounded-3xl border border-sky-500/20 bg-white/[0.03] p-6 md:grid-cols-[320px_1fr] md:p-8">
      <img
        src={image}
        alt={name}
        className="h-full min-h-[360px] w-full rounded-3xl object-cover"
      />

      <div className="flex flex-col justify-center">
        <h3 className="text-3xl font-bold">{name}</h3>

        <p className="mt-2 text-sky-400">{title}</p>

        <p className="mt-6 max-w-2xl leading-8 text-white/60">{bio}</p>
      </div>
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

      <LeaderCard
        name="Paul Rodriguez"
        title="Founder & Managing Partner"
        image="/images/paul-rodriguez.jpg"
        bio="Founder of Spartyn Capital and Praxis. Focused on venture creation, strategic partnerships, capital strategy, technology incubation, and helping founders transform ambitious ideas into scalable businesses."
      />
    </section>
  );
}