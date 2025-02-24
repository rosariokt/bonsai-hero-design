import React from "react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
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
                href="/collection"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-white text-gray-900 font-semibold 
                         transition-all duration-300 hover:bg-gray-100 hover:scale-105"
              >
                Explore Our Bonsai Collection
              </a>
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-transparent border-2 border-white 
                         text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
              >
                Get a Free Quote on Wholesale Orders
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Rooted in Tradition, Growing with Passion
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Founded in 2010, Indo Cipanas Bonsai has been shaping nature into living art, 
                specializing in bonsai, rare ornamental plants, and landscaping solutions.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Feature 1 */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Decades of Expertise</h3>
                <p className="text-gray-600">
                  Our team has years of experience in cultivating and shaping high-quality bonsai 
                  and ornamental plants.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentic Craftsmanship</h3>
                <p className="text-gray-600">
                  Our bonsai are trained with traditional techniques, ensuring natural elegance 
                  and character in every tree.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6 rounded-lg bg-gray-50">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Export-Grade Quality</h3>
                <p className="text-gray-600">
                  We follow international phytosanitary regulations, making our plants ready for 
                  safe global shipment.
                </p>
              </div>
            </div>

            {/* About Image and Text */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                  alt="Bonsai Craftsmanship"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6">
                  With years of expertise, we seamlessly blend tradition and innovation to cultivate 
                  plants of exceptional quality, beauty, and longevity.
                </p>
                <p className="text-gray-600">
                  Trusted by landscape designers, collectors, and international exporters, our plants 
                  have transformed luxury residences, commercial spaces, and gardens worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products/Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Premium Products & Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover our wide range of export-quality plants and specialized services
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                    alt="Premium Ornamental Plants"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Premium Ornamental Plants & Bonsai
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Export-quality ornamental plants, bonsai, and rare tropical species for 
                    landscapers and collectors.
                  </p>
                  <a href="/products" className="text-green-600 font-semibold hover:text-green-700">
                    Learn More →
                  </a>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1518495973542-4542c06a5843"
                    alt="Semi-Mature Bonsai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Semi-Mature Bonsai
                  </h3>
                  <p className="text-gray-600 mb-4">
                    70-80% developed bonsai trees, perfect for further cultivation and 
                    international buyers.
                  </p>
                  <a href="/bonsai" className="text-green-600 font-semibold hover:text-green-700">
                    Learn More →
                  </a>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                    alt="Wholesale Landscaping Plants"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Wholesale Landscaping Plants
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Premium plants for urban beautification and commercial spaces with export 
                    certification.
                  </p>
                  <a href="/wholesale" className="text-green-600 font-semibold hover:text-green-700">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>

            {/* Additional Services */}
            <div className="mt-16 text-center">
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-green-600 text-white 
                         font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105"
              >
                View All Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
