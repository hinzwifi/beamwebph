"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#151515] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* <Image
          src="/galaxy-background.jpg"
          alt="Galaxy Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 text-[#F2B705]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Nurturing Tomorrow's Brands, Today
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Empowering businesses with innovative solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link
              href="/contact"
              className="bg-[#F2B705] text-[#151515] px-8 py-3 rounded-full font-bold hover:bg-[#019D9C] hover:text-white transition-colors"
            >
              Try a FREE Virtual Assistant Now!
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#151515] mb-8">Trusted By</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Add partner logos here */}
            <div className="w-32 h-16 bg-gray-200"></div>
            <div className="w-32 h-16 bg-gray-200"></div>
            <div className="w-32 h-16 bg-gray-200"></div>
            <div className="w-32 h-16 bg-gray-200"></div>
          </div>
        </div>
      </section>

      {/* Why Beam PH Section */}
      <section className="py-16 bg-[#151515]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#F2B705] mb-8">Why Beam PH</h2>
          <p className="text-center text-white max-w-2xl mx-auto mb-8">
            With over 20 years of collective experience in the industry, we are committed to helping
            local businesses, startups, and entrepreneurs grow through innovative and tailored
            solutions.
          </p>
          <div className="flex justify-center">
            <Link
              href="/about"
              className="bg-[#019D9C] text-white px-6 py-2 rounded-full font-bold hover:bg-[#F2B705] hover:text-[#151515] transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#151515] mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              title="Business Solutions"
              description="Tailored strategies for your business growth"
              icon="💼"
            />
            <ServiceCard
              title="Executive/General VA"
              description="Professional virtual assistance for your needs"
              icon="👨‍💼"
            />
            <ServiceCard
              title="Automation"
              description="Streamline your processes with cutting-edge automation"
              icon="🤖"
            />
            <ServiceCard
              title="Marketing"
              description="Innovative marketing solutions to boost your brand"
              icon="📈"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="/services"
              className="bg-[#F2B705] text-[#151515] px-6 py-2 rounded-full font-bold hover:bg-[#019D9C] hover:text-white transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F2B705]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#151515] mb-4">Ready to Get Started?</h2>
          <p className="text-[#151515] mb-8">
            Experience the power of our virtual assistance today!
          </p>
          <Link
            href="/contact"
            className="bg-[#151515] text-white px-8 py-3 rounded-full font-bold hover:bg-[#019D9C] transition-colors"
          >
            Try a FREE Virtual Assistant Now!
          </Link>
        </div>
      </section>
    </div>
  );
}

const ServiceCard = ({ title, description, icon }: any) => (
  <motion.div
    className="bg-[#F2B705] p-6 rounded-lg text-[#151515]"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p>{description}</p>
  </motion.div>
);
