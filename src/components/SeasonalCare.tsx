export function SeasonalCare() {
  return (
    <section
      id="our-mission"
      className="scroll-mt-[88px] bg-forest px-6 pb-0 pt-10 text-center sm:px-12 sm:pt-12"
      aria-labelledby="mission-heading"
    >
      <div className="mx-auto max-w-[840px]">
        <p
          id="mission-heading"
          className="font-serif text-[28px] font-normal text-ivory sm:text-[34px]"
          style={{ lineHeight: 1.42 }}
        >
          Our customers&apos; needs are our priority. With quality work, transparency,
          efficiency, and teamwork, we help keep outdoor spaces beautiful,
          welcoming, and well cared for.
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
