export default function StatStrip() {
  const stats = [
    {
      label: "Research",
      value: "Signal",
    },
    {
      label: "Build",
      value: "Systems",
    },
    {
      label: "Deploy",
      value: "Scale",
    },
  ];

  return (
    <div className="mt-16 grid gap-4 md:grid-cols-3">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-sky-500/20 bg-white/[0.04] p-6 shadow-[0_0_30px_rgba(14,165,233,0.08)] backdrop-blur"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400">
            {item.label}
          </p>

          <h3 className="mt-3 text-3xl font-black">{item.value}</h3>
        </div>
      ))}
    </div>
  );
}