import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Logo light />
            <p className="mt-4 text-sm text-ivory/70">Nantucket, Massachusetts</p>
          </div>

          <div className="space-y-1.5 text-sm text-ivory/80">
            <p>
              <a href="tel:5083743018" className="transition-colors hover:text-ivory">
                508-374-3018
              </a>
            </p>
            <p>
              <a
                href="mailto:birkegardencare@gmail.com"
                className="transition-colors hover:text-ivory"
              >
                birkegardencare@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://birkegardens.com"
                className="transition-colors hover:text-ivory"
              >
                birkegardens.com
              </a>
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-ivory/15 pt-6 text-xs text-ivory/50">
          &copy; {new Date().getFullYear()} Birke Garden Care
        </p>
      </div>
    </footer>
  );
}
