export default function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black leading-tight md:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/60">
        {text}
      </p>
    </div>
  );
}