import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: "max(680px, calc(100svh - 88px))" }}
      aria-labelledby="hero-heading"
    >
      <Image
        src="/hero-lilies.jpg"
        alt="Pink and white lilies in a Nantucket garden"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "0% 35%" }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,53,32,0.02) 0%, rgba(20,53,32,0.06) 45%, rgba(15,38,23,0.80) 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 mx-auto flex w-full items-end justify-center text-center"
        style={{ minHeight: "max(680px, calc(100svh - 88px))", padding: "64px 48px 76px" }}
      >
        <div style={{ maxWidth: "820px", color: "#FBF8F1" }}>
        <h1
          id="hero-heading"
          className="font-serif"
          style={{
            fontWeight: 500,
            fontSize: "56px",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            marginBottom: "16px",
            textShadow: "0 2px 20px rgba(0,0,0,0.25)",
          }}
        >
          Gardens made beautiful, season after season.
        </h1>

        <p
          className="mx-auto"
          style={{
            fontSize: "19px",
            lineHeight: 1.5,
            color: "#E9EFE3",
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          Taking care of Nantucket gardens since 2005.
        </p>
        </div>
      </div>
    </section>
  );
}
