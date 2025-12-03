import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import AboutContent from "@/components/about/AboutContent";

export const metadata = {
  title: "About Us | Edition Realty",
  description:
    "Explore luxury apartments, villas, and commercial properties in jaypee sports city with Edition Realty. Verified listings and trusted agents.",
  keywords:
    "about us, edition realty, real estate noida, apartments, villas, properties",
    robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://editionrealty.in/about" ,
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <StickyBannerDemo />
        <Header />
        <AboutContent />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}