"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  price?: string;
  category?: string;
  index?: number;
};

const ProductCard = ({
  title,
  description,
  image,
  price,
  category,
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative h-64 bg-linear-to-br from-[#F0F0F0] to-[#E5E5E5] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>
        {category && (
          <div className="absolute top-4 left-4 ">
            <span className="bg-primary group-hover:bg-orange-400 text-white px-4 py-1.5 rounded-full text-xs font-semibold">
              {category}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-jakarta font-bold text-xl text-black mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        {price && (
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-all"
            >
              Visit
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
