'use client';

import dynamic from "next/dynamic";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically load the Slider to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Arrow component props type
type ArrowProps = {
  onClick?: () => void;
};

// Custom Next Arrow
function SampleNextArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="w-44 h-8 absolute z-50 right-4 sm:right-8 md:right-12 lg:right-16 top-[calc(50%+140px)] transform -translate-y-1/2 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase flex items-center justify-end group">
        <span className="absolute -translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          next
        </span>
        <span className="absolute -translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          next
        </span>
        <FaChevronRight className="text-lg" />
      </div>
    </div>
  );
}

// Custom Previous Arrow
function SamplePrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="w-44 h-8 absolute z-50 left-4 sm:left-8 md:left-12 lg:left-16 top-[calc(50%+140px)] transform -translate-y-1/2 border-[1px] border-gray-900 px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-sm uppercase flex items-center justify-between group">
        <FaChevronLeft className="text-lg" />
        <span className="absolute translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          previous
        </span>
        <span className="absolute translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          previous
        </span>
      </div>
    </div>
  );
}

// Banner Component
const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full h-[650px] relative">
      <Slider {...settings}>
        {[
          { src: "/img 1.png", alt: "Banner Image One" },
          { src: "/img 2.jpg", alt: "Banner Image Two" },
          { src: "/img 3.jpg", alt: "Banner Image Three" },
          { src: "/img 4.jpg", alt: "Banner Image Four" },
        ].map((image, index) => (
          <div key={index} className="relative w-full h-[650px]">
            <Image
              className="object-cover"
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0} // Load the first image with higher priority
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
