import Image from "next/image";

export default function LeadershipSection() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Leadership</p>

        <div className="leader">
          <div className="leader-photo" aria-hidden="true">
            <Image
              src="/images/mountain-hero.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) calc(100vw - 32px), 420px"
              className="object-cover grayscale contrast-[1.08] brightness-[1.08]"
              style={{ objectPosition: "52% 44%" }}
            />
          </div>

          <div>
            <h2 className="display text-[clamp(2.6rem,5vw,4.5rem)] leading-none">
              Built by operators.
            </h2>
            <h3 className="mt-12">Paul Rodriguez</h3>
            <p className="leader-role">Founder &amp; Managing Partner</p>
            <p className="prose max-w-2xl">
              Spartyn Capital is led with an operator&apos;s perspective and a
              focus on disciplined execution. The work spans
              venture creation, strategic partnerships, capital strategy, and
              technology incubation, helping founders transform ambitious ideas
              into scalable businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
