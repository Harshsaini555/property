import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <StickyBannerDemo />
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-center mb-8 max-w-md">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
        >
          Go Back Home
        </a>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}