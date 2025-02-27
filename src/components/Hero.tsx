
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh5.googleusercontent.com/p/AF1QipNDXnxmDLb6JcbqT70SpWFnkG2T5thvmsBrjuze=s0"
          alt="Bonsai Garden Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Tag */}
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-white text-sm font-medium">Premium Quality Bonsai</span>
          </div>
          
          {/* Headline */}
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Trusted Bonsai Supplier & Exporter – Wholesale & Landscaping Plants
          </h1>

          {/* Description */}
          <p className="mb-8 text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Indo Cipanas Bonsai is a leading bonsai supplier and exporter specializing in wholesale bonsai trees, 
            rare ornamental plants, and large-scale landscaping greenery. We provide export-grade bonsai with 
            global shipping compliance. Trusted by landscapers, collectors, and businesses worldwide.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#products"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-gray-900 font-semibold 
                       transition-all duration-300 hover:bg-gray-100 hover:scale-105"
            >
              Explore Our Bonsai Collection
            </a>
            <a
              href="#footer"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-transparent border-2 border-white 
                       text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              Get a Free Quote on Wholesale Orders
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
