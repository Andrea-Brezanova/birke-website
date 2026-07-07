export function SeasonalCare() {
  return (
    <section
      id="our-mission"
      className="scroll-mt-[88px] bg-forest px-6 pb-0 pt-10 text-center sm:px-12 sm:pt-12"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-[840px]">
        <p
          className="text-[13px] uppercase tracking-[0.32em]"
          style={{ color: "#9DB08F" }}
        >
          Our mission
        </p>
        <p
          id="mission-heading"
          className="mt-6 font-serif text-[28px] font-normal text-ivory sm:text-[34px]"
          style={{ lineHeight: 1.42 }}
        >
          We treat every customer&apos;s needs as a priority. We work with flexibility,
          transparency, and efficiency to keep outdoor spaces beautiful, welcoming,
          and well cared for.
        </p>
        <div className="relative left-1/2 right-1/2 mt-7 -ml-[50vw] -mr-[50vw] w-screen">
          <div className="h-[50vh] min-h-[320px] w-screen overflow-hidden sm:h-[55vh] md:h-[60vh] md:min-h-[420px] lg:h-[68vh]">
            <img
              src="/mission-flowers.png"
              alt="Seasonal flower arrangement"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
