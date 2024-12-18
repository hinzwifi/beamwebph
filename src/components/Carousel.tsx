import React from "react";
import Image, { StaticImageData } from "next/image";

// Import the logo image locally
import logo from "../public/images/logo7.png"; // This imports the image file

interface Logo {
  src: string | StaticImageData; // Allow src to be a string (URL) or StaticImageData (local image)
  alt: string;
}

const logos: Logo[] = [
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/facebook.svg",
    alt: "Facebook",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/disney.svg",
    alt: "Disney",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/airbnb.svg",
    alt: "Airbnb",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/apple.svg",
    alt: "Apple",
  },
  // Use the imported logo image
  {
    src: logo, // This is now allowed as it is StaticImageData
    alt: "Spark",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/samsung.svg",
    alt: "Samsung",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/quora.svg",
    alt: "Quora",
  },
  {
    src: "https://cruip-tutorials.vercel.app/logo-carousel/sass.svg",
    alt: "Sass",
  },
];

const LogoCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-infinite-scroll">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-4">
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={logo.alt}
              className="h-12"
            />
          </div>
        ))}
        {/* Duplicate logos to create the infinite effect */}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="flex-shrink-0 mx-4">
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={logo.alt}
              className="h-12"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="flex-shrink-0 mx-4">
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={logo.alt}
              className="h-12"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="flex-shrink-0 mx-4">
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={logo.alt}
              className="h-12"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
