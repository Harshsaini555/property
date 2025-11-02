"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MessageCircle,User} from "lucide-react";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import StickyBannerDemo from "@/components/landing/sticky";

const agentsData = {
  ajesh: {
    name: "Mr. Ajesh",
    designation: "Head of Property Consultant",
    image: "/Ajesh.jpeg",
    email: "Ajesheditionrealty@gmail.com",
    phone: "+91 9876543210",
    linkedin: "https://linkedin.com/in/ajesh",
    whatsapp: "https://wa.me/919876543210",
    description: `With over 25 years of unparalleled experience in the luxury real estate sector, Mr. Ajesh stands as a beacon of excellence and trust in the industry. His journey began in the late 1990s when the real estate market was undergoing significant transformations, and he has since witnessed and adapted to every major shift in the industry.

Mr. Ajesh's expertise spans across residential, commercial, and industrial properties, with a particular specialization in high-end luxury developments. His deep understanding of market dynamics, coupled with an intuitive grasp of client needs, has made him the go-to consultant for discerning buyers and sellers alike.

Throughout his illustrious career, Mr. Ajesh has successfully facilitated transactions worth over ₹500 crores, establishing long-lasting relationships with clients who often return for multiple property dealings. His approach is characterized by meticulous attention to detail, transparent communication, and an unwavering commitment to client satisfaction.

As the Head of Property Consultant at Edition Realty, Mr. Ajesh leads a team of dedicated professionals, sharing his wealth of knowledge and ensuring that every client receives the highest standard of service. His leadership style emphasizes mentorship, continuous learning, and maintaining the ethical standards that have become synonymous with his name.

`
  },
  dinesh: {
    name: "Mr. Dinesh Khtana",
    designation: "Marketing Executive",
    image: "/Dinesh.jpeg",
    email: "Dinesheditionrealty@gmail.com",
    phone: "+91 6396500826",
    linkedin: "https://linkedin.com/in/dinesh-khtana",
    whatsapp: "https://wa.me/916396500826",
    description: `Client-focused Real Estate Agent with 8+ years of experience helping clients find their perfect home by carefully researching market trends, property values and neighborhoods. Real Estate Agen Conduct open houses to help market for-sale properties Stay up-to-date on market trends and property values to best assist clients Develop positive and trusting relationships with customers by


Mr. Dinesh is particularly skilled in handling luxury property marketing, where presentation and positioning are crucial. He has developed comprehensive marketing portfolios for high-end residential projects, commercial spaces, and investment properties. His creative campaigns often feature professional photography, detailed floor plans, neighborhood analysis, and investment potential assessments.

His client interaction skills are exceptional, as he believes in educating buyers about their investment decisions rather than just selling properties. He provides detailed market comparisons, future growth projections, and comprehensive area development plans to help clients make informed decisions.
`
  },
  vaaren: {
    name: "Mr. Vaaren Kapasiya",
    designation: "Marketing Executive",
    image: "/Vaaren.jpeg",
    email: "Vaareneditionrealty@gmail.com",
    phone: "+91 9711309600",
    linkedin: "https://linkedin.com/in/vaaren-kapasiya",
    whatsapp: "https://wa.me/919711309600",
    description: `Mr. Vaaren Kapasiya is a dedicated Marketing Executive at Edition Realty, known for his exceptional client service skills and comprehensive understanding of the real estate market. His personalized approach to property consulting has earned him recognition as one of the most trusted professionals in the team.

As a Marketing Executive with five years of experience A real estate agent MR- Vaaren Kapasiya 
He is Expert in Residential on Yamuna Expressway And Greater Noida Residential Expert , I have been consistently recognized for implementing innovative marketing strategies that drive brand growth and boost property sales.

On My YouTube Chanel Edition Realty  
social media and creating targeted campaigns that resonate with potential buyers. I am known for delivering results by blending market insights with creative approaches, which has helped numerous real estate agents increase visibility and close high-value deals. My ability to manage marketing budgets, collaborate with cross-functional teams, and execute data-initiatives has earned me praise from both colleagues and clients alike.`
  }
};

export default function AgentsInfo() {
  const searchParams = useSearchParams();
  const agentId = searchParams.get("agent") || "ajesh";
  const agent = agentsData[agentId as keyof typeof agentsData];

  if (!agent) {
    return <div>Agent not found</div>;
  }

  return (
    <>
      <StickyBannerDemo />
      <Header />
      <div className="min-h-screen bg-white py-12 mt-12">
        <div className="w-screen h-[10rem] bg-[#0F828C] flex   justify-center "> 
          <h1 className="my-auto mx-auto text-4xl md:text-6xl text-bold text-white">{agent.name}</h1>
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          
        
        <motion.div
          className="bg-whte rounded-2xl  overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:w-1/3 p-8">
              <img
                src={agent.image}
                alt={agent.name}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{agent.name}</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 py-9">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <a href={`mailto:${agent.email}`} className="text-gray-700 hover:text-blue-600">
                    {agent.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                  <a href={`tel:${agent.phone}`} className="text-gray-700 hover:text-blue-600">
                    {agent.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-gray-600" />
                  <a  target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    {agent.designation}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-gray-600" />
                  <a href={agent.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {agent.name}</h2>
            <div className="prose prose-gray max-w-none">
              {agent.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}