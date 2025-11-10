import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Counters from "../components/landing/Counters";
import Services from "../components/landing/Services";
import FeaturedProperties from "../components/landing/FeaturedProperties";
import Agents from "../components/landing/Agents";
import YouTube from "../components/landing/YouTube";
import Testimonials from "../components/landing/Testimonials";
import {ContactFAQ} from "../components/landing/ContactFAQ";
import Footer from "../components/landing/Footer";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import StickyBannerDemo from "../components/landing/sticky";

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
      <Testimonials />
      <ContactFAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
