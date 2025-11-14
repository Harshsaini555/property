import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import AboutContent from "@/components/about/AboutContent";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Explore luxury apartments, villas, and commercial properties in Gurgaon with Edition Realty. Verified listings and trusted agents."
        />
        <meta name="robots" content="noindex" />
        <meta
          name="keywords"
          content="real estate gurgaon, edition realty, apartments, villas, properties, about us,"
        />
        <link rel="canonical" href="https://editionrealty.in/about" />
      </Head>
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