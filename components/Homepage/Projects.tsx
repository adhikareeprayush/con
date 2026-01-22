"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

const tabs = ["All Work", "UI/UX Design", "Digital Marketing", "Branding"];

interface Project {
  id: number;
  title: string;
  company: string;
  year: string;
  image: string;
  category: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Ai Wave - Ai Chatbot Mobile App",
    company: "Ai Corporation",
    year: "2023",
    image: "/projects/1.png",
    category: "UI/UX Design",
    link: "#",
  },
  {
    id: 2,
    title: "Brand Identity Design System",
    company: "TechStart Inc",
    year: "2024",
    image: "/projects/1.png",
    category: "Branding",
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce Growth Campaign",
    company: "ShopMax",
    year: "2024",
    image: "/projects/1.png",
    category: "Digital Marketing",
    link: "#",
  },
  {
    id: 4,
    title: "Finance Dashboard UI",
    company: "FinTech Labs",
    year: "2023",
    image: "/projects/1.png",
    category: "UI/UX Design",
    link: "#",
  },
  {
    id: 5,
    title: "Social Media Strategy",
    company: "GrowthHub",
    year: "2024",
    image: "/projects/1.png",
    category: "Digital Marketing",
    link: "#",
  },
  {
    id: 6,
    title: "Corporate Rebranding",
    company: "Legacy Corp",
    year: "2023",
    image: "/projects/1.png",
    category: "Branding",
    link: "#",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredProjects =
    activeTab === "All Work"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-20 flex">
      <div className="bg-black w-full min-h-[600px] md:min-h-[700px] lg:min-h-[800px] overflow-hidden relative rounded-[20px] md:rounded-[30px]">
        {/* Background Image */}
        <Image
          src="/black-bg.png"
          className="absolute h-full w-full top-0 left-0 opacity-5 z-10"
          width={1920}
          height={1080}
          alt="black background"
        />

        <div className="relative z-20 text-white text-3xl font-semibold px-4 sm:px-8 md:px-16 lg:px-24 pt-10 md:pt-16 lg:pt-20 pb-16 md:pb-24 lg:pb-32 flex flex-col flex-1 h-full w-full gap-6 md:gap-8 lg:gap-10 font-jakarta leading-[130%] tracking-tighter">
          {/* Title */}
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold text-center animate-fade-in">
            Real-world examples of how we have helped companies achieve their
            marketing objectives.
          </h2>

          <div className="flex flex-col justify-between flex-1 gap-8 md:gap-12">
            {/* Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 md:gap-6 justify-center flex-wrap">
              {tabs.map((tab, index) => {
                const count =
                  tab === "All Work"
                    ? projects.length
                    : projects.filter((p) => p.category === tab).length;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(tab)}
                    className={`cursor-pointer border rounded-full px-4 sm:px-6 md:px-8 py-2 font-manrope text-xs sm:text-sm md:text-base leading-[140%] tracking-tight font-bold text-white transition-all duration-300 hover:scale-105 ${
                      activeTab === tab
                        ? "bg-[#EA5F38] border-[#EA5F38] shadow-lg shadow-[#EA5F38]/30"
                        : "border-white/50 hover:border-white"
                    }`}
                  >
                    {tab} <span className="opacity-70">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Swiper Carousel */}
            <div className="w-full">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={40}
                slidesPerView={"auto"}
                centeredSlides={true}
                loop={filteredProjects.length > 3}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                onSlideChange={handleSlideChange}
                breakpoints={{
                  640: {
                    spaceBetween: 50,
                  },
                  1024: {
                    spaceBetween: 60,
                  },
                  1280: {
                    spaceBetween: 70,
                  },
                }}
                className="!overflow-visible"
              >
                {filteredProjects.map((project, index) => (
                  <SwiperSlide key={project.id} className="!w-auto">
                    <div
                      className={`group transition-all duration-500 ease-out ${
                        index === activeIndex
                          ? "scale-100 opacity-100"
                          : "scale-95 opacity-70"
                      }`}
                    >
                      {index === activeIndex ? (
                        // Active/Hovered Slide - Circle Style
                        <div className="overflow-hidden flex items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full border-[8px] md:border-[10px] border-white/40 relative mx-auto transform transition-[border-color,transform] duration-500 ease-in-out hover:border-[#EA5F38]/60">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={360}
                            height={360}
                            className="object-cover w-full h-full rounded-full group-hover:scale-110 transition-transform duration-500 brightness-75"
                          />
                          <Link
                            href={project.link}
                            className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] flex items-center justify-center bg-[#EA5F38] rounded-full opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl shadow-[#EA5F38]/40"
                          >
                            <span className="text-sm sm:text-base md:text-xl font-jakarta font-bold tracking-tighter text-center leading-tight">
                              See Details
                            </span>
                          </Link>
                          {/* Project Info Overlay */}
                          <div className="absolute bottom-4 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-xs sm:text-sm font-medium text-white/80">
                              {project.company} • {project.year}
                            </p>
                          </div>
                        </div>
                      ) : (
                        // Normal Slide - Rounded Rectangle Style
                        <div className="overflow-hidden flex items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-2xl border-[8px] md:border-[10px] border-white/20 relative mx-auto group-hover:border-white/40 transition-[border-color,transform,filter] duration-500 ease-in-out">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={360}
                            height={360}
                            className="object-cover w-full h-full brightness-50 group-hover:brightness-75 transition-all duration-300"
                          />
                          {/* Company & Year */}
                          <div className="flex items-center gap-2 sm:gap-3 absolute z-30 top-3 sm:top-4 left-3 sm:left-4">
                            <hr className="w-[30px] sm:w-[40px] h-[1px] bg-white border-0" />
                            <span className="text-xs sm:text-sm font-medium tracking-wide text-white/90">
                              {project.company}. {project.year}
                            </span>
                          </div>
                          {/* Project Title */}
                          <h4 className="text-center absolute z-30 bottom-3 sm:bottom-4 font-semibold leading-[140%] font-jakarta w-full text-sm sm:text-base md:text-lg text-white tracking-wide px-4">
                            {project.title}
                          </h4>
                          {/* Category Badge */}
                          <span className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#EA5F38]/80 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {project.category}
                          </span>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Decorative Background */}
        <Image
          src="/bg.png"
          className="absolute transform rotate-115 -right-80 opacity-60 pointer-events-none"
          width={2094}
          height={1301}
          alt="decorative background"
        />
      </div>
    </div>
  );
};

export default Projects;
