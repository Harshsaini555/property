import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import ConstructionContent from "@/components/construction/ConstructionContent";
import Head from "next/head"; 

export default function ConstructionPage() {
  return (
    <>
      <Head>
        <title>Construction | Edition Realty</title>
        <meta
          name="description"
          content="Explore luxury apartments, villas, and commercial properties in Gurgaon with Edition Realty. Verified listings and trusted agents."
        />
        <meta name="robots" content="noindex" />
        <meta
          name="keywords"
          content="real estate gurgaon, edition realty, apartments, villas, properties, realty edition construction"
        />
        {/* ✅ Canonical tag to tell Google this is the main version */}
        <link rel="canonical" href="https://editionrealty.in/construction" />
      </Head>
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