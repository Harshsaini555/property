import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import MapsContent from "@/components/maps/MapsContent";
import Head from "next/head";
const MapsContentAny = MapsContent as any;

const cards = [
  {
    description: "2031(Phase 1)",
    title: "Jaypee Sports City yamuna Expressway full Master Plan",
    src: "/jaypee-sports-city/7.jpg",
    ctaText: "View",
    index:1,
  },
  {
    description: "Babbu Maan",
    title: "Pocket Yamuna Vihar",
    src: "/jaypee-sports-city/0.jpg",
    ctaText: "View",
    index:2
  },
  {
    description: "Babbu Maan",
    title: "Pocket Yamuna Vihar",
    src: "/jaypee-sports-city/1.jpg",
    ctaText: "View",
    index:3
  },
  {
    description: "Babbu Maan",
    title: "Pocket Yamuna Vihar",
    src: "/jaypee-sports-city/2.jpg",
    ctaText: "View",
    index:4
  },
  {
    description: "Metallica",
    title: "R Block Country Homes-2",
    src: "/jaypee-sports-city/5.jpg",
    ctaText: "View",
    index:5
  },
  {
    description: "Lord Himesh",
    title: "Country homes-2",
    src: "/jaypee-sports-city/4.jpg",
    ctaText: "View",
    index:6
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Krown Plots",
    src: "/jaypee-sports-city/8.jpg",
    ctaText: "View",
    index:7
  },
  {
    description: "Babbu Maan",
    title: "YEA Country Homes-1",
    src: "/jaypee-sports-city/6.jpg",
    ctaText: "View",
    index:8
  },
  {
    description: "Metallica",
    title: "Layout of Greencrest Homes",
    src: "/jaypee-sports-city/3.jpg",
    ctaText: "View",
    index:9
  },
];

export default function MapsPage() {

  return (
    <>
      <Head>
        <title>Edition Realty | Luxury Properties in Gurgaon</title>
        <meta
          name="description"
          content="Explore luxury apartments, villas, and commercial properties in Gurgaon with Edition Realty. Verified listings and trusted agents."
        />
        <meta
          name="keywords"
          content="real estate gurgaon, edition realty, apartments, villas, properties"
        />
        {/* ✅ Canonical tag to tell Google this is the main version */}
        <link rel="canonical" href="https://www.editionrealty.in/jaypee-sports-city" />
      </Head>
      <div className="min-h-screen bg-white">
        <StickyBannerDemo />
        <Header />
        <MapsContentAny cards={cards} heading={"Jaypee Sports City"}/>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}