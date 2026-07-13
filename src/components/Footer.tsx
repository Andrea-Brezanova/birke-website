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
        <div
          className="flex flex-col items-center pb-4"
          style={{ borderBottom: "1px solid rgba(122,135,112,.24)" }}
        >
          <img
            src="/birke-wordmark-forest.png"
            alt="Birke Garden Care"
            className="h-[44px] w-auto sm:h-[48px]"
          />
        </div>

        <p className="mt-4 text-center text-[13px]" style={{ color: "#1E4A2C" }}>
          © Copyright 2026 &nbsp;|&nbsp; birkegardens.com &nbsp;|&nbsp; All Rights
          Reserved. &nbsp;|&nbsp; Contact &nbsp;|&nbsp; Testimonials &nbsp;|&nbsp; Job
          Opportunities
        </p>
        <p className="mt-1.5 text-center text-[12px]" style={{ color: "#7A8770" }}>
          Branding, website and logo design made with ❤️ on Nantucket by Andrea
        </p>
      </div>
    </footer>
  );
}
