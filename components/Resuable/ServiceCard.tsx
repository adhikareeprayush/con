"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
  index?: number;
};

const ServiceCard = ({
  title,
  description,
  icon,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300"
      >
        <div className="text-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </motion.div>
      <h3 className="font-jakarta font-bold text-2xl text-black mb-4 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
