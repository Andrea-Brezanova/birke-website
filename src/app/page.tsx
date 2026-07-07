import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SeasonalCare } from "@/components/SeasonalCare";
import { ServicesTabs } from "@/components/ServicesTabs";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesTabs />
        <SeasonalCare />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
