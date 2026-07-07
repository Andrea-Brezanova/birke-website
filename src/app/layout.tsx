import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Birke Garden Care | Nantucket Garden Maintenance",
  description:
    "Boutique garden care for Nantucket homes, rentals, and seasonal properties. Window boxes, containers, design refreshes, and reliable maintenance.",
  openGraph: {
    title: "Birke Garden Care",
    description:
      "Reliable garden care for Nantucket homes and seasonal properties.",
    url: "https://birkegardens.com",
    siteName: "Birke Garden Care",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
