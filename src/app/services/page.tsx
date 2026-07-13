import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesTabs } from "@/components/ServicesTabs";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesTabs />
      </main>
      <Footer />
    </>
  );
}
