export default function ContactCTA({
  label = "Contact",
  title = "Have an opportunity worth discussing?",
  subtitle = "Tell us what you are building, funding, or trying to move forward.",
  buttonText = "Contact Spartyn Capital",
}: {
  label?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
}) {
  return (
    <section id="contact" className="px-6 py-24 md:px-14">
      <div className="grid gap-8 rounded-3xl border border-sky-500/20 bg-gradient-to-r from-[#07111f] to-[#041022] p-8 shadow-[0_0_50px_rgba(14,165,233,0.08)] md:p-12 lg:grid-cols-[1fr_420px]">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
            {label}
          </p>

          <h2 className="mb-6 max-w-3xl text-4xl font-bold md:text-6xl">
            {title}
          </h2>

          <p className="max-w-2xl text-white/60">{subtitle}</p>
        </div>

        <form className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
          <input
            placeholder="Name"
            className="w-full rounded-2xl border border-white/10 bg-[#030712] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-sky-400"
          />

          <input
            placeholder="Email"
            type="email"
            className="w-full rounded-2xl border border-white/10 bg-[#030712] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-sky-400"
          />

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full resize-none rounded-2xl border border-white/10 bg-[#030712] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-sky-400"
          />

          <a
            href="mailto:paul@spartyncapital.com"
            className="flex w-full justify-center rounded-full bg-sky-400 px-8 py-4 text-sm font-bold text-[#03111f]"
          >
            {buttonText}
          </a>
        </form>
      </div>
    </section>
  );
}