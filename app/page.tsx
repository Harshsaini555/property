import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Counters from "../components/landing/Counters";
import Services from "../components/landing/Services";
import FeaturedProperties from "../components/landing/FeaturedProperties";
import Agents from "../components/landing/Agents";
import YouTube from "../components/landing/YouTube";
import MapCards from "../components/landing/MapCards";
import Testimonials from "../components/landing/Testimonials";
import { ContactFAQ } from "../components/landing/ContactFAQ";
import Footer from "../components/landing/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import StickyBannerDemo from "../components/landing/sticky";

export const metadata = {
  title: "Edition Realty | Real Estate Consultants ",
  description:
    "Premium real estate services with 25 years of undefeated success. Find your dream home with trust and excellence.",
  keywords:
    "real estate , edition realty, apartments, villas, properties",
  alternates: {
    canonical: "https://editionrealty.in/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-white">
      <StickyBannerDemo />
      <Header />
      <Hero />
      <Counters />
      <Services />
      <FeaturedProperties />
      <Agents />
      <YouTube />
      <MapCards />
      <Testimonials />
      <ContactFAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
