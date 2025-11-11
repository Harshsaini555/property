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
    title: "Master Plan of Yamuna Expressway",
    src: "/yeida-maps/0.jpg",
    ctaText: "View",
    index:1,
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 17(Yamuna Expressway)",
    src: "/yeida-maps/1.jpg",
    ctaText: "View",
    index:2
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 18(Part-1A)",
    src: "/yeida-maps/2.jpg",
    ctaText: "View",
    index:3
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 18(Part-1B)",
    src: "/yeida-maps/3.jpg",
    ctaText: "View",
    index:4
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 18(Part-2B)",
    src: "/yeida-maps/4.jpg",
    ctaText: "View",
    index:5
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 18(Part-2A & 2C)",
    src: "/yeida-maps/5.jpg",
    ctaText: "View",
    index:6
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 18(Part-3A)",
    src: "/yeida-maps/6.jpg",
    ctaText: "View",
    index:7
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 18(Part-3B)",
    src: "/yeida-maps/7.jpg",
    ctaText: "View",
    index:8
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 18(Part-3C)",
    src: "/yeida-maps/8.jpg",
    ctaText: "View",
    index:9
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 18(Part-3D)",
    src: "/yeida-maps/9.jpg",
    ctaText: "View",
    index:10
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 18(Part-4A)",
    src: "/yeida-maps/10.jpg",
    ctaText: "View",
    index:11
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 18(Part-5A)",
    src: "/yeida-maps/11.jpg",
    ctaText: "View",
    index:12
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 18(Part-5B)",
    src: "/yeida-maps/12.jpg",
    ctaText: "View",
    index:13
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 18(Part-5C)",
    src: "/yeida-maps/13.jpg",
    ctaText: "View",
    index:14
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 18(Part-5D)",
    src: "/yeida-maps/14.jpg",
    ctaText: "View",
    index:15
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 18(Part-6A)",
    src: "/yeida-maps/15.jpg",
    ctaText: "View",
    index:16
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 18(Part-6B)",
    src: "/yeida-maps/16.jpg",
    ctaText: "View",
    index:17
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 18(Part-6C)",
    src: "/yeida-maps/17.jpg",
    ctaText: "View",
    index:18
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 18(Part-6D)",
    src: "/yeida-maps/18.jpg",
    ctaText: "View",
    index:19
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 18(Part-7E)",
    src: "/yeida-maps/19.jpg",
    ctaText: "View",
    index:20
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 18(Part-7B & 7F)",
    src: "/yeida-maps/20.jpg",
    ctaText: "View",
    index:21
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 18(Part-7C & 7D)",
    src: "/yeida-maps/21.jpg",
    ctaText: "View",
    index:22
  },
  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "/yeida-maps/22.jpg",
    ctaText: "View",
    index:23
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    src: "/yeida-maps/23.jpg",
    ctaText: "View",
    index:24
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 20(Part-A)",
    src: "/yeida-maps/24.jpg",
    ctaText: "View",
    index:25
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 20(Part-B & C)",
    src: "/yeida-maps/25.jpg",
    ctaText: "View",
    index:26
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 20(Part-B & C) -2",
    src: "/yeida-maps/26.jpg",
    ctaText: "View",
    index:27
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 20(Part-D)",
    src: "/yeida-maps/27.jpg",
    ctaText: "View",
    index:28
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 20(Part-E)",
    src: "/yeida-maps/28.jpg",
    ctaText: "View",
    index:29
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 20(Part-F)",
    src: "/yeida-maps/29.jpg",
    ctaText: "View",
    index:30
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 20(Part-G)",
    src: "/yeida-maps/30.jpg",
    ctaText: "View",
    index:31
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 20(Part-H)",
    src: "/yeida-maps/31.jpg",
    ctaText: "View",
    index:32
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 20(Part-K & L)",
    src: "/yeida-maps/32.jpg",
    ctaText: "View",
    index:33
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 20(Part-M)",
    src: "/yeida-maps/33.jpg",
    ctaText: "View",
    index:34
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 20(Part-N)",
    src: "/yeida-maps/34.jpg",
    ctaText: "View",
    index:35
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 20(Part-T)",
    src: "/yeida-maps/35.jpg",
    ctaText: "View",
    index:36
  },
  {
    description: "2031(Phase 1)",
    title: "Layout Plan of Sector 20(Part-P)",
    src: "/yeida-maps/36.jpg",
    ctaText: "View",
    index:37
  },
  {
    description: "Babbu Maan",
    title: "Layout Plan of Sector 20(Part-Q)",
    src: "/yeida-maps/37.jpg",
    ctaText: "View",
    index:38
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 20(Part-R & S)",
    src: "/yeida-maps/38.jpg",
    ctaText: "View",
    index:39
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector 20(Part-O)",
    src: "/yeida-maps/39.jpg",
    ctaText: "View",
    index:40
  },
  {
    description: "Metallica",
    title: "Layout Plan of Sector 20(Part-U)",
    src: "/yeida-maps/40.jpg",
    ctaText: "View",
    index:41
  },
  {
    description: "Lord Himesh",
    title: "Layout Plan of Sector -22D",
    src: "/yeida-maps/41.jpg",
    ctaText: "View",
    index:42
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
        <link rel="canonical" href="https://www.editionrealty.in/yeida-maps" />
      </Head>
      <div className="min-h-screen bg-white">
        <StickyBannerDemo />
        <Header />
        <MapsContentAny cards={cards} heading={"YEIDA Maps"}/>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}