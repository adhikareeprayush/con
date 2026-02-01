"use client";
import PageHeader from "@/components/Resuable/PageHeader";
import AnimatedSection from "@/components/Resuable/AnimatedSection";
import Footer from "@/components/Homepage/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const timelineData = [
  {
    year: "2023",
    title: "Company Founded",
    description:
      "Started with a vision to transform businesses through innovative digital solutions.",
  },
  {
    year: "2023",
    title: "First Major Client",
    description:
      "Delivered our first enterprise-level project, setting the foundation for future success.",
  },
  {
    year: "2023",
    title: "Team Expansion",
    description:
      "Grew our team to 25+ talented professionals across multiple disciplines.",
  },

  {
    year: "2024",
    title: "Growing our Portfolio",
    description:
      "Recognized as a leading digital innovation company in the industry.",
  },
  {
    year: "2025",
    title: "Continued Growth",
    description:
      "Serving 230+ satisfied clients with cutting-edge digital solutions.",
  },
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries and embrace new technologies.",
    icon: "💡",
  },
  {
    title: "Quality",
    description: "Excellence is at the core of everything we deliver.",
    icon: "⭐",
  },
  {
    title: "Integrity",
    description:
      "We build trust through transparency and honest communication.",
    icon: "🤝",
  },
  {
    title: "Collaboration",
    description: "Success comes from working together with our clients.",
    icon: "🤜🤛",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <PageHeader
        subtitle="About Us"
        title="Building Digital Excellence Since 2018"
        description="We are a team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions."
      />

      {/* Company Overview */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="font-jakarta font-bold text-4xl md:text-5xl text-black mb-6">
                Who We Are
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Convolution Labs is a forward-thinking digital agency
                specializing in web development, mobile applications, and
                digital marketing. We combine creativity with technical
                expertise to deliver solutions that drive real business results.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                Founded in 2018, we&apos;ve grown from a small startup to a
                trusted partner for businesses worldwide. Our team of 50+
                experts brings together diverse skills and perspectives to solve
                complex challenges.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    60+
                  </div>
                  <div className="text-sm text-gray-500">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-3xl overflow-hidden bg-primary"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg opacity-90">
                    To empower businesses with innovative digital solutions that
                    drive growth and create lasting impact.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Mission, Vision, Values */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              {/* <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">🎯</span>
              </div> */}
              <h3 className="font-jakarta font-bold text-2xl text-black mb-4">
                Our Mission
              </h3>
              <p className="text-gray-500 leading-relaxed">
                To deliver exceptional digital experiences that transform
                businesses and exceed expectations. We strive to be the trusted
                partner that empowers organizations to achieve their digital
                ambitions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              {/* <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl">🔭</span>
              </div> */}
              <h3 className="font-jakarta font-bold text-2xl text-black mb-4">
                Our Vision
              </h3>
              <p className="text-gray-500 leading-relaxed">
                To be the world&apos;s most innovative digital solutions
                provider, recognized for excellence, creativity, and impact. We
                envision a future where technology seamlessly integrates with
                business to create extraordinary value.
              </p>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Core Values */}
        <AnimatedSection delay={0.3}>
          <div className="mb-24">
            <h2 className="font-jakarta font-bold text-4xl md:text-5xl text-black text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all text-center"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="font-jakarta font-bold text-xl text-black mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <AnimatedSection delay={0.4}>
          <div>
            <h2 className="font-jakarta font-bold text-4xl md:text-5xl text-black text-center mb-16">
              Our Journey
            </h2>
            <div className="max-w-4xl mx-auto">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8 pb-12 border-l-2 border-primary border-opacity-20 last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                    <div className="text-primary font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-jakarta font-bold text-xl text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection delay={0.5} className="mt-24">
          <div className="bg-gradient-to-br from-primary to-[#0d5a0d] text-white rounded-3xl p-12 md:p-16 text-center">
            <h2 className="font-jakarta font-bold text-3xl md:text-5xl mb-6">
              Join Us on Our Journey
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you're looking to transform your business or join our
              team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-opacity-90 transition-all">
                  Work With Us
                </button>
              </Link>
              <Link href="/careers">
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all">
                  Join Our Team
                </button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
}
