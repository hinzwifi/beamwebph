"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <header className="bg-[#151515] text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#F2B705]">
          Beam PH
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-[#F2B705] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#F2B705] transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[#F2B705] transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-[#F2B705] transition-colors">
            Pricing
          </Link>
          <Link href="/careers" className="hover:text-[#F2B705] transition-colors">
            Careers
          </Link>
          <Link href="/store" className="hover:text-[#F2B705] transition-colors">
            Store
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <motion.nav
        className="md:hidden"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center py-4 space-y-4 bg-[#151515]">
          <Link href="/" className="hover:text-[#F2B705] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#F2B705] transition-colors">
            About Us
          </Link>
          <Link href="/services" className="hover:text-[#F2B705] transition-colors">
            Services
          </Link>
          <Link href="/pricing" className="hover:text-[#F2B705] transition-colors">
            Pricing
          </Link>
          <Link href="/careers" className="hover:text-[#F2B705] transition-colors">
            Careers
          </Link>
          <Link href="/store" className="hover:text-[#F2B705] transition-colors">
            Store
          </Link>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
