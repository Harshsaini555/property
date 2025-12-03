import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import ConstructionContent from "@/components/construction/ConstructionContent";

export const metadata = {
  title: "Construction | Edition Realty",
  description:
    "Explore luxury apartments, villas, and commercial properties in jaypee sports city with Edition Realty. Verified listings and trusted agents.",
  keywords:
    "real estate, edition, edition realty, apartments, villas, properties, realty edition construction",
    robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://editionrealty.in/construction" ,
  },
};


export default function ConstructionPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <StickyBannerDemo />
        <Header />
        <ConstructionContent />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}