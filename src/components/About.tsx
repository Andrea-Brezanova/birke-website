import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[88px]"
      style={{ backgroundColor: "#FBF8F1" }}
      aria-labelledby="about-heading"
    >
      <h2 id="about-heading" className="sr-only">
        Meet Andrea
      </h2>
      <div className="mx-auto grid min-h-[620px] max-w-[1280px] md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex items-center px-5 py-12 sm:px-10 md:px-10 md:py-[88px] lg:px-[64px]">
          <div className="relative mx-auto w-full max-w-[400px]">
            <div
              className="absolute left-[38px] top-[38px] h-[460px] w-full overflow-hidden rounded-[10px] border-[8px]"
              style={{
                borderColor: "#FBF8F1",
                boxShadow: "0 20px 40px -20px rgba(20,53,32,.35)",
                transform: "rotate(4deg)",
              }}
            >
              <Image
                src="/about-behind.png"
                alt="Andrea on a Nantucket dock holding a blue watering can"
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
                style={{ objectPosition: "center 30%" }}
              />
            </div>
            <div
              className="relative h-[460px] w-full overflow-hidden rounded-[10px] border-[8px]"
              style={{
                borderColor: "#FBF8F1",
                boxShadow: "0 24px 50px -20px rgba(20,53,32,.4)",
                transform: "rotate(-3deg)",
              }}
            >
              <Image
                src="/andrea-mulching.JPG"
                alt="Andrea mulching a Nantucket garden bed"
                fill
                sizes="(max-width: 768px) 90vw, 400px"
                className="object-cover"
                style={{ objectPosition: "65% 35%" }}
              />
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-center px-5 py-12 sm:px-10 md:px-10 md:py-[88px] lg:px-[64px]"
          style={{ backgroundColor: "#F1EBDD" }}
        >
          <p
            className="mb-5 text-[12px] uppercase tracking-[0.3em]"
            style={{ color: "#7A8770" }}
          >
            Meet Andrea
          </p>

          <p
            className="mb-5 text-[16.5px] leading-[1.75]"
            style={{ color: "#4C5A47" }}
          >
            Birke Garden Care has emerged from a lifelong love of flowers, that began in early childhood and grew into a career caring for Nantucket gardens.
          </p>
          <p
            className="mb-5 text-[16.5px] leading-[1.75]"
            style={{ color: "#4C5A47" }}
          >
            What started with a job at Bartlett&apos;s Farm developed through years of hands-on experience, including nearly two decades learning from and working alongside Bridget of Champoux Landscapes.
          </p>
          <p
            className="mb-5 text-[16.5px] leading-[1.75]"
            style={{ color: "#4C5A47" }}
          >
            With more than 20 years of on-island experience, Andrea brings a practical eye, steady attention to detail, and a personal understanding of what Nantucket homes, rentals, and seasonal properties need throughout the year.
          </p>
          <p
            className="mb-[30px] text-[16.5px] leading-[1.75]"
            style={{ color: "#4C5A47" }}
          >
            Hardworking and hands-on, she takes pride in her work and approaches every project with professionalism, efficiency, and trust.
          </p>

          <blockquote
            className="border-l-[2.5px] pl-[22px]"
            style={{ borderColor: "#1E4A2C" }}
          >
            <p
              className="mb-3 font-serif text-[19px] italic leading-[1.5]"
              style={{ color: "#1E4A2C" }}
            >
              I have great memories of our time working together. You are one of the best workers I know and have such a pleasant disposition. Anyone would be lucky to have you.
            </p>
            <p className="text-[13.5px]" style={{ color: "#7A8770" }}>
              — Bridget Montgomery, Champoux Landscapes
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
