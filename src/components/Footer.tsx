export function Footer() {
  return (
    <footer style={{ backgroundColor: "#143520", padding: "56px 56px 40px" }}>
      <div className="mx-auto max-w-[1080px]">
        <div
          className="flex flex-col items-center pb-8"
          style={{ borderBottom: "1px solid rgba(251,248,241,.16)" }}
        >
          {/* BG monogram — place bg-logo-light.png in /public */}
          <img src="/bg-logo-light.png" alt="Birke Garden Care" className="h-[118px] w-auto" />
        </div>

        <p className="mt-6 text-center text-[13px]" style={{ color: "#C6D3BC" }}>
          © Copyright 2026 &nbsp;|&nbsp; birkegardens.com &nbsp;|&nbsp; All Rights
          Reserved. &nbsp;|&nbsp; Contact &nbsp;|&nbsp; Testimonials &nbsp;|&nbsp; Job
          Opportunities
        </p>
        <p className="mt-2 text-center text-[12px]" style={{ color: "#9DB08F" }}>
          Branding, website and logo design by Andrea
        </p>
      </div>
    </footer>
  );
}
