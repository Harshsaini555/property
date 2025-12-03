import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import ContactContent from "@/components/contact/ContactContent";

export const metadata = {
  title: "Contact Us | Edition Realty",
  description:
    "Explore luxury apartments, villas, and commercial properties in jaypee sports city with Edition Realty. Verified listings and trusted agents.",
  keywords:
    "edition realty, real estate contact, property consultants contact, get in touch edition realty",
  alternates: {
    canonical: "https://editionrealty.in/contact" ,
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <StickyBannerDemo />
        <Header />
        <ContactContent />
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}