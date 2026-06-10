type ImageCardProps = {
  title: string;
  text: string;
  image: string;
  tall?: boolean;
};

export default function ImageCard({ title, text, image, tall }: ImageCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-sky-500/20 bg-[#07111f] shadow-[0_0_35px_rgba(14,165,233,0.08)]">
      <div className={tall ? "h-56 md:h-72" : "h-52 md:h-60"}>
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="p-6 md:p-7">
        <h3 className="text-2xl font-black leading-tight">{title}</h3>

        <p className="mt-3 text-base leading-7 text-white/60">{text}</p>
      </div>
    </div>
  );
}