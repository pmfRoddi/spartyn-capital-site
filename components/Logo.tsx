import Link from "next/link";

export default function Logo({
  variant = "spartyn",
}: {
  variant?: "spartyn" | "praxis";
}) {
  return (
    <Link
      href={variant === "praxis" ? "/praxis" : "/"}
      className="font-black tracking-[0.35em]"
    >
      {variant === "praxis" ? (
        <>
          PR<span className="text-sky-400">A</span>XIS
        </>
      ) : (
        "SPARTYN"
      )}
    </Link>
  );
}