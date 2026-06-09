import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030712] px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-sky-400">
          404
        </p>

        <h1 className="mb-6 text-5xl font-black md:text-7xl">
          Page Not Found
        </h1>

        <p className="mb-8 leading-8 text-white/60">
          The page you are looking for does not exist.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/"
            className="rounded-full bg-sky-400 px-7 py-3 text-sm font-bold text-[#03111f]"
          >
            Spartyn Home
          </Link>

          <Link
            href="/praxis"
            className="rounded-full border border-sky-400/60 px-7 py-3 text-sm font-bold text-sky-300"
          >
            Praxis
          </Link>
        </div>
      </div>
    </main>
  );
}