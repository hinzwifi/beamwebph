import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beam PH</h3>
            <p>Nurturing Tomorrow's Brands, Today</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#F2B705] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F2B705] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F2B705] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#F2B705] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="hover:text-[#F2B705] transition-colors">
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="">
              Email:{" "}
              <a
                href="mailto:beamph.official@gmail.com"
                className="hover:text-[#F2B705] transition-colors"
              >
                beamph.official@gmail.com
              </a>
            </p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/BEAMPHOfficial"
                target="_blank"
                className="hover:text-[#F2B705] transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/beamph.official/"
                target="_blank"
                className="hover:text-[#F2B705] transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/beamph/"
                target="_blank"
                className="hover:text-[#F2B705] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 Beam PH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
