export default function ImageCard({
  title,
  text,
  image,
  tall = false,
}: {
  title: string;
  text: string;
  image: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-3xl border border-sky-500/20 bg-[#07111f] shadow-[0_0_40px_rgba(14,165,233,0.08)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 ${
        tall ? "min-h-[360px]" : ""
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/25 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-sm leading-6 text-white/60">{text}</p>
      </div>
    </div>
  );
}