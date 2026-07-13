export function ServicesTeaser() {
  const previews = [
    {
      title: "Window Boxes & Containers",
      imageSrc: "/containers.JPG",
    },
    {
      title: "Installations",
      imageSrc: "/install.jpg",
    },
    {
      title: "Greenscapes Maintenance",
      imageSrc: "/greenscapes-hydrangea.png",
    },
  ];

  return (
    <section className="bg-ivory px-6 py-14 text-center sm:px-10 sm:py-16" aria-labelledby="services-teaser-heading">
      <div className="mx-auto max-w-[860px]">
        <p
          className="text-[13px] uppercase tracking-[0.32em]"
          style={{ color: "#7A8770" }}
        >
          What we do
        </p>
        <h2 id="services-teaser-heading" className="sr-only">
          Services
        </h2>
        <p
          className="mx-auto mt-5 max-w-[820px] text-[18px] leading-[1.45] md:text-[19px]"
          style={{ color: "#4C5A47" }}
        >
          From window boxes and seasonal planting to established gardens, Birke
          Garden Care offers thoughtful, hands-on service tailored to each
          property.
        </p>

        <div className="mt-9 grid gap-8 sm:grid-cols-3 sm:gap-10">
          {previews.map((preview) => (
            <article key={preview.title} className="flex flex-col items-center">
              <img
                src={preview.imageSrc}
                alt={preview.title}
                className="h-[170px] w-[170px] rounded-full object-cover"
              />
              <p className="mt-4 text-[18px] font-serif leading-tight" style={{ color: "#1E4A2C" }}>
                {preview.title}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="/services#services"
            className="inline-flex min-h-11 items-center justify-center rounded-md border px-10 text-[12px] font-semibold uppercase tracking-[0.2em] transition-opacity hover:opacity-80"
            style={{
              borderColor: "#1E4A2C",
              color: "#1E4A2C",
              backgroundColor: "transparent",
            }}
          >
            See More Services
          </a>
        </div>
      </div>
    </section>
  );
}
