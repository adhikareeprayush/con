"use client";
import Image from "next/image";
import Button from "../Resuable/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const whatsappNumber = "9779700045699"; // include country code, no + sign
const whatsappMessage = "Hello, I would like to schedule a call.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const Hero = () => {
  return (
    <div className="bg-white grid grid-cols-1 lg:grid-cols-2 min-h-auto mb-20 lg:h-[80vh] px-4 sm:px-8 md:px-12 lg:px-20 py-8 md:py-12 lg:py-0 gap-8 lg:gap-0">
      <div className="col-span-1 h-full flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          <h1 className="font-jakarta font-semibold text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter leading-[1.1]">
            Engineering Tomorrow’s Technology Today.
          </h1>
          <p className="text-sm sm:text-base font-medium">
            Convolution Labs is a forward-thinking technology company
            specializing in web and mobile development, digital marketing, stem
            & robotics and UI/UX design. We combine creativity with cutting-edge
            technology to build scalable, secure, and user-friendly digital
            solutions that drive growth and transform businesses.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <Button
            type="button"
            label="Schedule Call"
            icon={
              <Image
                src="/arrow-right.svg"
                alt="Arrow Right Icon"
                width={24}
                height={24}
              />
            }
            iconPosition="right"
            variant="primary"
            onClick={() => window.open(whatsappUrl, "_blank")}
          />

          <Link
            href={"/contact"}
            className="text-gray-500 text-sm sm:text-base font-medium underline"
          >
            View Case Study
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mt-4 sm:mt-6"
        >
          <div className="text-sm sm:text-base text-gray-500 font-medium w-auto">
            Trusted by the world's <br className="hidden sm:block" />
            biggest brands
          </div>
          <div className="flex items-center  gap-4 sm:gap-6 flex-wrap">
            <Image
              src="/companies/nisargalogo.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="object-contain w-20 sm:w-[100px] md:w-20 h-auto"
            />
            <Image
              src="/companies/careandclean.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="object-contain w-20 sm:w-[100px] md:w-20 h-auto"
            />
            <Image
              src="/companies/shabdastralogo.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="object-contain w-20 sm:w-[100px] md:w-20 h-auto"
            />
            <Image
              src="/companies/fleetbox.png"
              alt="Company Logo"
              width={50}
              height={40}
              className="object-contain w-20 sm:w-[100px] md:w-20 h-auto"
            />
            {/* <Image
              src="/companies/itmarg.png"
              alt="Company Logo"
              width={40}
              height={40}
              className="object-contain w-20 sm:w-[100px] md:w-[120px] h-auto"
            /> */}
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="col-span-1 flex items-center justify-center order-1 lg:order-2"
      >
        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[550px]">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="h-[180px] sm:h-[220px] md:h-[275px] w-full sm:w-[55%] rounded-tl-full relative"
            >
              <div className="absolute inset-0 rounded-tl-full overflow-hidden bg-gray-400 z-0">
                <Image
                  src="/heroconv.avif"
                  alt="Curve background"
                  fill
                  className="object-cover opacity-80"
                  priority
                />
              </div>
              <div className="flex items-center justify-center w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[108px] md:h-[108px] border-[6px] sm:border-8 md:border-10 border-white rounded-full bg-primary absolute -top-6 sm:-top-8 md:-top-10 right-2 sm:right-4 z-10">
                <Image
                  src="/trending-up.png"
                  alt="Trending Up Icon"
                  width={42}
                  height={42}
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-[42px] md:h-[42px]"
                />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="px-3 sm:px-4 pt-6 sm:pt-8 py-3 sm:py-4 h-[180px] sm:h-[220px] md:h-[275px] bg-[#F0F0F0] rounded-2xl relative flex items-center flex-col justify-between w-full sm:w-[45%]"
            >
              <div className="flex flex-col">
                <h1 className="text-5xl sm:text-6xl md:text-[84px] text-primary font-bold leading-tight sm:leading-20 font-jakarta">
                  50+
                </h1>
                <p className="text-[#5C5D5F] text-xs sm:text-sm md:text-base font-medium leading-5 sm:leading-6 max-w-[200px]">
                  some big companies that we work with, and trust us very much
                </p>
              </div>
              <div className="w-full h-1.5 sm:h-2 bg-black relative">
                <div className="h-1.5 sm:h-2 w-[75%] bg-[#D9D9D9] absolute right-0"></div>
              </div>
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="flex w-full items-center h-[140px] sm:h-[180px] md:h-[216px] bg-primary rounded-2xl sm:rounded-[20px] relative overflow-hidden"
          >
            <Image
              src="/bg.svg"
              alt="Background decoration"
              width={320}
              height={450}
              className="w-[200px] sm:w-[260px] md:w-[320px] h-[300px] sm:h-[380px] md:h-[450px] object-contain top-10"
            />
            <div className="flex flex-col gap-2 sm:gap-3 text-white absolute left-4 sm:left-6 md:left-10 w-[180px] sm:w-[220px] md:w-[280px]">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                <div className="h-0.5 sm:h-1 w-8 sm:w-10 md:w-12 bg-white"></div>
                <span className="text-xs sm:text-sm font-semibold tracking-tighter">
                  Drive More Traffic and Sales
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl md:text-[32px] font-semibold tracking-tight leading-tight sm:leading-8 md:leading-10">
                Drive more traffic and product sales
              </h2>
            </div>
            <div className="flex items-end gap-1 sm:gap-2 h-full absolute right-2 sm:right-4 bottom-0">
              <div className="h-[30%] bg-[#EA5F38]/60 w-[30px] sm:w-[45px] md:w-[60px]"></div>
              <div className="h-[50%] bg-[#EA5F38]/80 w-[30px] sm:w-[45px] md:w-[60px]"></div>
              <div className="h-[70%] bg-[#EA5F38] w-[30px] sm:w-[45px] md:w-[60px]"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
