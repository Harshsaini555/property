"use client";

import { motion } from "framer-motion";
import { Home, RefreshCw, Key, CreditCard, DollarSign, Users, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
 
export default function Services() {
  const features = [
    {
      title: "Home For Sale",
      description:
        "Find your dream home from verified listings across premium locations.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Home For Resale",
      description:
        "Get the best value while reselling your property effortlessly online.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Homes for Mortgage",
      description:
        "Explore mortgage-ready homes with flexible financing and trusted guidance.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Home on Lease",
      description: "Lease premium homes easily with transparent deals and verified owners.",
      icon: <IconCloud />,
    },
    {
      title: "Matching Buyers",
      description: "Connect buyers and sellers instantly through our smart matching system.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Price Analysis",
      description:
        "Access real-time property price insights for confident, data-driven decisions.",
      icon: <IconHelp />,
    },
    {
      title: "Make Money",
      description:
        "Earn through property referrals, partnerships, and exclusive investment opportunities.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Financial Services",
      description: "Simplify your property financing with trusted loan and mortgage experts.",
      icon: <IconHeart />,
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
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Our <span className="text-red-500">Property</span> Services</h2>
          <p className="text-[14px] md:text-[1rem] text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </motion.div>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-green-500 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-green-600 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

