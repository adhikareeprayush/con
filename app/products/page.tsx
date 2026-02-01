import PageHeader from "@/components/Resuable/PageHeader";
import ProductCard from "@/components/Resuable/ProductCard";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import Link from "next/link";

const products = [
  {
    title: "Hospital system",
    description:
      "Custom websites and web applications built with modern technologies and best practices.",
    image: "/projects/project1.png",
    category: "Development",
    link: "https://nisargahospitalnepal.com",
  },
  {
    title: "Cosmetic E-commerce",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    image: "/projects/project2.png",
    category: "Development",
    link: "https://careandcleannp.com",
  },
  {
    title: "Perfume Ecommerce",
    description:
      "Beautiful and intuitive user interfaces designed for optimal user experience.",
    image: "/projects/project3.png",
    category: "Development",
    link: "https://desireofficial.com",
  },
  {
    title: "Website development and Digital Marketing Services",
    description:
      "Comprehensive digital marketing strategies to boost your online presence.",
    image: "/projects/project4.png",
    link: "https://www.octagonconsultancy.edu.np/",
    category: "Development & Marketing",
  },
  {
    title: "Perfume Ecommerce",
    description:
      "FleetBox Vechicle Monitoring Solutions is a leading company in GPS-based Vehicle Tracking and Management Solutions in India, Nepal & Australia.",
    image: "/projects/fleetbox.png",
    category: "Development",
    link: "https://fleetboxvms.com",
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        subtitle="Our Products"
        title="Solutions That Drive Results"
        description="Discover our comprehensive range of digital products and services designed to help your business thrive in the digital age."
      />

      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                href={product.link}
                key={index}
                target={product.link.startsWith("http") ? "_blank" : undefined}
                rel={
                  product.link.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block"
              >
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  category={product.category}
                  index={index}
                />
              </Link>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-20 text-center">
          <div className="bg-primary text-white rounded-3xl p-12 md:p-16">
            <h2 className="font-jakarta font-bold text-3xl md:text-5xl mb-6">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="text-xl text-gray-400 mb-8 opacity-90 max-w-2xl mx-auto">
              We offer custom solutions tailored to your specific needs.
              Let&apos;s discuss your project.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all">
              Contact Us
            </button>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
