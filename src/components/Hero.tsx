
import React from "react";
import { useIsMobile } from "../hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();

  const mobileContent = {
    title: "Wholesale exotic Bonsai & Landscaping Plants",
    subtitle: "Supplier & Exporter of Rare & Ornamental Plants",
    description: "Indo Cipanas Bonsai provides wholesale bonsai, rare plants, and landscaping greenery for businesses, landscapers, and plant importers. Our plants meet export standards with reliable global shipping."
  };

  const desktopContent = {
    title: "Trusted Bonsai Supplier & Exporter – Wholesale & Landscaping Plants",
    subtitle: "Premium Quality Bonsai",
    description: "Indo Cipanas Bonsai is a leading bonsai supplier and exporter specializing in wholesale bonsai trees, rare ornamental plants, and large-scale landscaping greenery. We provide export-grade bonsai with global shipping compliance. Trusted by landscapers, collectors, and businesses worldwide."
  };

  const content = isMobile ? mobileContent : desktopContent;

  return (
    <div className="relative min-h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipNDXnxmDLb6JcbqT70SpWFnkG2T5thvmsBrjuze=s0"
          alt="Bonsai Garden Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white text-sm font-medium">
              {content.subtitle}
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="mb-6 text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            {content.title}
          </h1>

          {/* Description */}
          <p className="mb-8 text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {content.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg 
                       bg-green-600 text-white font-semibold transition-all duration-300 
                       hover:bg-green-700 hover:scale-105"
            >
              {isMobile ? "Browse Products" : "Explore Our Bonsai Collection"}
            </a>
            {!isMobile && (
              <a
                href="#footer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg 
                         bg-transparent border-2 border-white text-white font-semibold 
                         transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Get a Free Quote on Wholesale Orders
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
