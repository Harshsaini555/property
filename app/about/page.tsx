import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import AboutContent from "@/components/about/AboutContent";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <StickyBannerDemo />
      <Header />
      <AboutContent />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}