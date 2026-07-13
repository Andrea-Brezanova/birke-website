export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "rgba(251,248,241,.94)",
        padding: "30px 24px 24px",
        borderTop: "1px solid rgba(122,135,112,.28)",
      }}
    >
      <div className="mx-auto max-w-[1080px]">
        <div className="flex flex-col items-center pb-4">
          <img
            src="/birke-wordmark-forest.png"
            alt="Birke Garden Care"
            className="h-[44px] w-auto sm:h-[48px]"
          />
        </div>

        <p className="mt-4 text-center text-[13px]" style={{ color: "#1E4A2C" }}>
          © 2026 Birke Garden Care. All rights reserved.
        </p>
        <p className="mt-1.5 text-center text-[12px]" style={{ color: "#7A8770" }}>
          Nantucket, Massachusetts
        </p>
        <p className="mt-1.5 text-center text-[12px]">
          <a
            href="/privacy-policy"
            className="transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7A8770] focus-visible:ring-offset-2"
            style={{ color: "#1E4A2C" }}
          >
            Privacy Policy
          </a>
        </p>
        <p className="mt-1.5 text-center text-[12px]" style={{ color: "#7A8770" }}>
          Created with ❤️ on Nantucket by Andrea.
        </p>
      </div>
    </footer>
  );
}
