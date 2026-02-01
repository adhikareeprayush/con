"use client";
import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
};

const PageHeader = ({ title, subtitle, description }: PageHeaderProps) => {
  return (
    <div className="bg-gradient-to-br from-[#FAFAFA] to-[#F0F0F0] px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-primary font-semibold text-sm sm:text-base mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black tracking-tight leading-[1.1] mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default PageHeader;
