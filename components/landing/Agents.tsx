"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const AgentCard = ({ agent, delay }: any) => {
  return (
    <div
      className="bg-white flex flex-col  transition-all group overflow-hidden"
    >
      <div className="relative h-64 w-full p-6">
        <img
          src={agent.image}
          alt={agent.name}
          className="md:h-[20rem] h-[16rem] w-full rounded-3xl object-cover object-center "
        />
      </div>
      
      <div className="pt-10 md:mt-20  text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{agent.name}</h3>
        <p className="text-blue-600 font-medium mb-6">{agent.designation}</p>
        
        <Link
          href={`/about/agents-info?agent=${agent.id}`}
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Know More
        </Link>
      </div>
    </div>
  );
};

const Agents = () => {
  const agents = [
    {
      id: "ajesh",
      name: "Mr. Ajesh",
      designation: "Head of Property Consultant",
      image: "/Ajesh.jpeg",
    },
    {
      id: "dinesh",
      name: "Mr. Dinesh Khatana",
      designation: "Marketing Executive",
      image: "/Dinesh.jpeg",
    },
    {
      id: "vaaren",
      name: "Mr. Vaaren Kapasiya",
      designation: "Marketing Executive",
      image: "/Vaaren.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Agents</h2>
          <p className="text-[14px] md:text-[1rem] text-gray-600 max-w-2xl mx-auto">
            Our experienced team of professionals is here to guide you through your real estate journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <AgentCard key={agent.id} agent={agent} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;