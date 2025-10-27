import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import ContactContent from "@/components/contact/ContactContent";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <StickyBannerDemo />
      <Header />
      <ContactContent />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}