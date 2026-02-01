"use client";
import Faqs from "@/components/Homepage/Faqs";
import Hero from "@/components/Homepage/Hero";
import HowWeWork from "@/components/Homepage/HowWeWork";
import Projects from "@/components/Homepage/Projects";
import Testimonials from "@/components/Homepage/Testimonials";
import Blog from "@/components/Homepage/Blog";
import Banner from "@/components/Homepage/Banner";
import Footer from "@/components/Homepage/Footer";
import AnimatedSection from "@/components/Resuable/AnimatedSection";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <AnimatedSection>
        <HowWeWork />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Faqs />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <Blog />
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <Banner />
      </AnimatedSection>
      <Footer />
    </div>
  );
}
