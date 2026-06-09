export default function AboutPraxis() {
  return (
    <section className="px-6 py-20 md:px-14">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
            Why Praxis
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            More than a development shop.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-9 text-white/70">
            Praxis exists to identify meaningful opportunities, develop
            technology, and execute on ambitious ideas. We operate at the
            intersection of research, engineering, strategy, and venture
            creation.
          </p>

          <p className="mt-6 text-lg leading-9 text-white/70">
            We are builders first. Whether developing internal ventures or
            helping strategic partners execute, our focus remains the same:
            create real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
}