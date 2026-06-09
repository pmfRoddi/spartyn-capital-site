export default function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-sky-400">
        {eyebrow}
      </p>

      <h2 className="text-4xl font-black uppercase tracking-[0.08em] md:text-6xl">
        {title}
      </h2>

      {text && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/60">
          {text}
        </p>
      )}
    </div>
  );
}