export function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-ivory-warm"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 id="contact-heading" className="section-heading">
            Contact
          </h2>
          <p className="section-subheading">
            Reach out to discuss your garden, window boxes, or seasonal property
            needs. Andrea is happy to talk through what would work best for your
            home.
          </p>
        </div>

        <div className="card mt-10 max-w-2xl p-6 sm:p-8">
          <address className="space-y-6 not-italic">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-sage">
                Call/Text Andrea
              </p>
              <a
                href="tel:5083743018"
                className="mt-2 block font-serif text-2xl text-forest transition-colors hover:text-forest-hover"
              >
                508-374-3018
              </a>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-sage">
                Email
              </p>
              <a
                href="mailto:birkegardencare@gmail.com"
                className="mt-2 block text-lg text-forest transition-colors hover:text-forest-hover"
              >
                birkegardencare@gmail.com
              </a>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-sage">
                Website
              </p>
              <a
                href="https://birkegardens.com"
                className="mt-2 block text-lg text-forest transition-colors hover:text-forest-hover"
              >
                birkegardens.com
              </a>
            </div>
          </address>

          <div className="mt-8 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:gap-4">
            <a href="tel:5083743018" className="btn-primary">
              Call/Text Andrea
            </a>
            <a href="mailto:birkegardencare@gmail.com" className="btn-secondary">
              Email Andrea
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
