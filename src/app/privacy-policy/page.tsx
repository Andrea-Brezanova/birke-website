import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy — Birke Garden Care",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#FBF8F1" }}>
        <div className="mx-auto max-w-[720px] px-5 py-16 sm:px-6 sm:py-24">
          <p
            className="text-[12px] uppercase tracking-[0.3em]"
            style={{ color: "#7A8770" }}
          >
            Legal
          </p>
          <h1
            className="font-serif text-[40px] font-semibold"
            style={{ color: "#1E4A2C", margin: "8px 0 4px" }}
          >
            Privacy Policy
          </h1>
          <p className="text-[14px]" style={{ color: "#7A8770" }}>
            Last updated: July 2026
          </p>

          <div
            className="my-10 h-px"
            style={{ backgroundColor: "rgba(20,53,32,0.15)", marginTop: "32px", marginBottom: "40px" }}
            aria-hidden="true"
          />

          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            At Birke Garden Care, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect through birkegardens.com, how we use it, and your choices regarding your information.
          </p>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            Information We Collect
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            When you contact us or request a quote through our website, we may collect information such as:
          </p>
          <ul className="mb-5 list-disc pl-5 text-[16px] leading-[1.8]" style={{ color: "#4C5A47" }}>
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Property address (if provided)</li>
            <li>Service preferences</li>
            <li>Any information you choose to include in your message</li>
          </ul>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            How We Use Your Information
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            The information you provide is used solely to:
          </p>
          <ul className="mb-5 list-disc pl-5 text-[16px] leading-[1.8]" style={{ color: "#4C5A47" }}>
            <li>Respond to your inquiry</li>
            <li>Prepare estimates and quotes</li>
            <li>Communicate about your gardening project or services</li>
            <li>Schedule appointments when requested</li>
            <li>Improve our customer service</li>
          </ul>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            We only collect information that helps us provide our services.
          </p>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            Sharing Your Information
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            Birke Garden Care does not sell, rent, or trade your personal information.
          </p>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            We may use trusted service providers to operate our website and process inquiries, including:
          </p>
          <ul className="mb-5 list-disc pl-5 text-[16px] leading-[1.8]" style={{ color: "#4C5A47" }}>
            <li>Vercel (website hosting)</li>
            <li>Resend (contact form email delivery)</li>
          </ul>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            These providers only process information necessary to provide their services.
          </p>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            Data Security
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            We take reasonable steps to protect the information submitted through our website. While no online transmission can be guaranteed to be completely secure, we work with reputable service providers and follow reasonable security practices.
          </p>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            Data Retention
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            We retain inquiry information only as long as reasonably necessary to respond to your request, provide services, maintain business records, or comply with applicable legal obligations.
          </p>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            Cookies
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            Our website may use essential cookies required for the website to function properly.
          </p>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            If analytics are added in the future, this Privacy Policy will be updated accordingly.
          </p>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            Your Rights
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            If you would like to:
          </p>
          <ul className="mb-5 list-disc pl-5 text-[16px] leading-[1.8]" style={{ color: "#4C5A47" }}>
            <li>access the information you have provided,</li>
            <li>correct your information,</li>
            <li>or request that we delete it,</li>
          </ul>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            please contact us using the information below.
          </p>

          <h2 className="mb-3 mt-9 text-[19px] font-bold" style={{ color: "#1E4A2C" }}>
            Contact
          </h2>
          <p className="mb-5 text-[16px] leading-[1.75]" style={{ color: "#4C5A47" }}>
            If you have any questions about this Privacy Policy or how your information is handled, please contact:
          </p>

          <div>
            <p className="text-[16px] font-semibold" style={{ color: "#1E4A2C" }}>
              Birke Garden Care
            </p>
            <p className="mt-1 text-[16px]" style={{ color: "#4C5A47" }}>
              Nantucket, Massachusetts
            </p>
            <p className="mt-4 text-[13px] uppercase tracking-[0.16em]" style={{ color: "#7A8770" }}>
              Email
            </p>
            <a
              href="mailto:birkegardencare@gmail.com"
              className="mt-1 block text-[18px] font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#1E4A2C" }}
            >
              birkegardencare@gmail.com
            </a>
            <p className="mt-4 text-[13px] uppercase tracking-[0.16em]" style={{ color: "#7A8770" }}>
              Phone
            </p>
            <a
              href="tel:5083743018"
              className="mt-1 block text-[18px] font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#1E4A2C" }}
            >
              508-374-3018
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
