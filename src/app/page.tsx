import { AboutTeaser } from "@/components/AboutTeaser";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SeasonalCare } from "@/components/SeasonalCare";
import { ServicesTeaser } from "@/components/ServicesTeaser";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesTeaser />
        <SeasonalCare />
        <AboutTeaser />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
