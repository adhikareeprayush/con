import Faqs from "@/components/Homepage/Faqs";
import Hero from "@/components/Homepage/Hero";
import HowWeWork from "@/components/Homepage/HowWeWork";
import Projects from "@/components/Homepage/Projects";
import Testimonials from "@/components/Homepage/Testimonials";
import Blog from "@/components/Homepage/Blog";
import Banner from "@/components/Homepage/Banner";
import Footer from "@/components/Homepage/Footer";

export default function Home() {
  return (
    <div className="bg-[#FAFAFA]">
      <Hero />
      <HowWeWork />
      <Projects />
      <Testimonials />
      <Faqs />
      <Blog />
      <Banner />
      <Footer />
    </div>
  );
}
