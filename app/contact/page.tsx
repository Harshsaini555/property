import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import ContactContent from "@/components/contact/ContactContent";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Edition Realty</title>
        <meta
          name="description"
          content="Explore luxury apartments, villas, and commercial properties in Gurgaon with Edition Realty. Verified listings and trusted agents."
        />
        <meta
          name="keywords"
          content="real estate gurgaon, edition realty, apartments, villas, properties, contact us"
        />
        {/* ✅ Canonical tag to tell Google this is the main version */}
        <link rel="canonical" href="https://editionrealty.in/contact" />
      </Head>
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