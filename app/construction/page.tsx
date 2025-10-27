import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import ConstructionContent from "@/components/construction/ConstructionContent";

export default function ConstructionPage() {
  return (
    <div className="min-h-screen bg-white">
      <StickyBannerDemo />
      <Header />
      <ConstructionContent />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}