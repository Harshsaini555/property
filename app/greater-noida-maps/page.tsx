import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StickyBannerDemo from "@/components/landing/sticky";
import MapsContent from "@/components/maps/MapsContent";
import Head from "next/head";
const MapsContentAny = MapsContent as any;

const cards = [
  {
    title: "Master Plan of Greater Noida",
    src: "/greater-noida/1.jpg",
    ctaText: "View",
    index:2
  },
  {
    description: "Metallica",
    title: "Layout Plan of Alpha-l",
    src: "/greater-noida/2.jpg",
    ctaText: "View",
    index:3
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Alpha-2",
    src: "/greater-noida/3.jpg",
    ctaText: "View",
    index:4
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Gamma-l",
    src: "/greater-noida/4.jpg",
    ctaText: "View",
    index:5
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Nri City",
    src: "/greater-noida/5.jpg",
    ctaText: "View",
    index:6
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sigma-1, Sectore-42",
    src: "/greater-noida/6.jpg",
    ctaText: "View",
    index:7
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sigma-2",
    src: "/greater-noida/7.jpg",
    ctaText: "View",
    index:8
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sigma-3",
    src: "/greater-noida/8.jpg",
    ctaText: "View",
    index:9
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sigma-4",
    src: "/greater-noida/9.jpg",
    ctaText: "View",
    index:10
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector-31",
    src: "/greater-noida/10.jpg",
    ctaText: "View",
    index:11
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector-37",
    src: "/greater-noida/11.jpg",
    ctaText: "View",
    index:12
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Omicron-1A",
    src: "/greater-noida/12.jpg",
    ctaText: "View",
    index:13
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Omicron-1",
    src: "/greater-noida/13.jpg",
    ctaText: "View",
    index:14
  },
  {
    description: "Metallica",
    title: "Layout Plan of Omicron-3",
    src: "/greater-noida/14.jpg",
    ctaText: "View",
    index:15
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Omicron-3 -A Block",
    src: "/greater-noida/15.jpg",
    ctaText: "View",
    index:16
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Omicron-1(Udyog Kendra)",
    src: "/greater-noida/16.jpg",
    ctaText: "View",
    index:17
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector MU-1",
    src: "/greater-noida/17.jpg",
    ctaText: "View",
    index:18
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/greater-noida/18.jpg",
    ctaText: "View",
    index:19
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector MU-2",
    src: "/greater-noida/19.jpg",
    ctaText: "View",
    index:20
  },
  {
    description: "2031(Phase 1)",
    title: "Master Plan of Yamuna Expressway",
    src: "/greater-noida/20.jpg",
    ctaText: "View",
    index:21
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Golf Link-1(P-8)",
    src: "/greater-noida/21.jpg",
    ctaText: "View",
    index:22
  },
  {
    description: "Metallica",
    title: "Layout Plan of Golf Link-2",
    src: "/greater-noida/22.jpg",
    ctaText: "View",
    index:23
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Institutional Area Phase-2",
    src: "/greater-noida/23.jpg",
    ctaText: "View",
    index:24
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of ETA-1",
    src: "/greater-noida/24.jpg",
    ctaText: "View",
    index:25
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Delta-1",
    src: "/greater-noida/25.jpg",
    ctaText: "View",
    index:26
  },
  {
    description: "Metallica",
    title: "Layout Plan of Delta-2",
    src: "/greater-noida/26.jpg",
    ctaText: "View",
    index:27
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Delta-3",
    src: "/greater-noida/27.jpg",
    ctaText: "View",
    index:28
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Beta-2",
    src: "/greater-noida/28.jpg",
    ctaText: "View",
    index:29
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Beta-1",
    src: "/greater-noida/29.jpg",
    ctaText: "View",
    index:30
  },
  {
    description: "Metallica",
    title: "Layout Plan of Chi-Phi Extension",
    src: "/greater-noida/30.jpg",
    ctaText: "View",
    index:31
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "/greater-noida/31.jpg",
    ctaText: "View",
    index:32
  },
  {
    description: "2031(Phase 1)",
    title: "Master Plan of Yamuna Expressway",
    src: "/greater-noida/32.jpg",
    ctaText: "View",
    index:33
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Pocket P-3",
    src: "/greater-noida/33.jpg",
    ctaText: "View",
    index:34
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/greater-noida/34.jpg",
    ctaText: "View",
    index:35
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "/greater-noida/35.jpg",
    ctaText: "View",
    index:36
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector-XU1",
    src: "/greater-noida/36.jpg",
    ctaText: "View",
    index:37
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector-XU2",
    src: "/greater-noida/37.jpg",
    ctaText: "View",
    index:38
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector-XU3",
    src: "/greater-noida/38.jpg",
    ctaText: "View",    
    index:39
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Zeta-1",
    src: "/greater-noida/39.jpg",
    ctaText: "View",
    index:40
  },
  {
    description: "Metallica",
    title: "Layout Plan of Zeta-2",
    src: "/greater-noida/40.jpg",
    ctaText: "View",
    index:41
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Surajpur Site-V",
    src: "/greater-noida/41.jpg",
    ctaText: "View",
    index:42
  },
  {
    description: "Lord Himesh",
    title: "Master Plan of Green Belt",
    src: "/greater-noida/42.jpg",
    ctaText: "View",
    index:43
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Industrial Area Sikandrabad",
    src: "/greater-noida/43.jpg",
    ctaText: "View",
    index:44
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Ecotech-3(Udyog Kendra)",
    src: "/greater-noida/44.jpg",
    ctaText: "View",
    index:45
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Ecotech-2",
    src: "/greater-noida/45.jpg",
    ctaText: "View",
    index:46
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Ecotech-1(Extension-1)",
    src: "/greater-noida/46.jpg",
    ctaText: "View",
    index:47
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Ecotech-1(Extension)",
    src: "/greater-noida/47.jpg",
    ctaText: "View",
    index:48
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Pocket P-4",
    src: "/greater-noida/48.jpg",
    ctaText: "View",
    index:49
  },

];

export const metadata = {
  title: "Layout Plan of Greater Noida | Edition Realty",
  description:
    "Explore luxury apartments, villas, and commercial properties in jaypee sports city with Edition Realty. Verified listings and trusted agents.",
  keywords:
    "greater noida,maps,map of greater noida, greater noida layout, greater noida master plan",
  alternates: {
    canonical: "https://editionrealty.in/greater-noida-maps" ,
  },
};

export default function MapsPage() {

  return (
    <>
      <Head>
        <title>Layout Plan of Greater Noida | Edition Realty</title>
        <meta
          name="description"
          content="Explore luxury apartments, villas, and commercial properties in greater noida with Edition Realty. Verified listings and trusted agents."
        />
        <meta
          name="keywords"
          content="greater noida,maps,map of greater noida, greater noida layout, greater noida master plan"
        />
        {/* ✅ Canonical tag to tell Google this is the main version */}
        <link rel="canonical" href="https://editionrealty.in/greater-noida-maps" />
      </Head>
      <div className="min-h-screen bg-white">
        <StickyBannerDemo />
        <Header />
        <MapsContentAny cards={cards} heading={"Greater Noida Maps"}/>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}