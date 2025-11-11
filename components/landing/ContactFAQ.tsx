"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, Send } from "lucide-react";
import { Button } from "@/components/ui/stateful-button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) setStatus("✅ Message sent successfully!");
      else setStatus("❌ Failed to send message.");
    } catch (err) {
      console.error(err);
      setStatus("❌ Something went wrong.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-6 text-[12px] md:text-[1rem]">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
          />
        </div>
        
        <div className="flex h-20 w-full items-center justify-center">
          <Button type="submit">Send message</Button>
        </div>
      </form>
    </motion.div>
  );
};

const FAQItem = ({ faq, isOpen, onToggle }: any) => {
  return (
    <div className=" rounded-lg mb-4 text-[12px] md:text-[1rem]">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between  transition-colors"
      >
        <span className="font-semibold text-gray-900">{faq.question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="px-6 pb-4"
        >
          <p className="text-gray-600">{faq.answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does Edition Realty offer?",
      answer: "Edition Realty offers comprehensive property consulting services, including property buying and selling assistance, investment advice, market analysis, legal consultation, and support with documentation for properties in Greater Noida and surrounding areas."
    },
    {
      question: " Why should I choose Edition Realty over other property consultants?",
      answer: "Edition Realty stands out for its personalized service, deep market knowledge, and a proven track record of successful property deals. We prioritize transparency, client satisfaction, and building long-term trust."
    },
    {
      question: ". How do I get started with Edition Realty for a property consultation?",
      answer: "Simply contact us via phone, email, or our website to schedule an initial consultation. We’ll discuss your property needs, preferences, and budget to create a customized plan for you."
    },
    {
      question: ". What types of properties do you deal with?",
      answer: "We specialize in residential, commercial, and investment properties, including apartments, villas, plots, office spaces, and retail outlets."
    },
    {
      question: " What is the consultation process like?",
      answer: "Our process includes An initial meeting to understand your requirements.Property recommendations and guided site visits.Market insights and analysis to aid decision-making.Negotiation support and assistance with legal paperwork."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl p-8 "
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </motion.div>
  );
};

const ContactFAQ = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-[14px] md:text-[1rem] text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you with all your real estate needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <FAQ />
        </div>
      </div>
    </section>
  );
};

export { ContactFAQ , ContactForm };