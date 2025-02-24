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

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Indo Cipanas Bonsai?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Not all bonsai and ornamental plants are created equal. Here's what makes 
                Indo Cipanas Bonsai the top choice for collectors, landscapers, and exporters worldwide.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Decades of Expertise</h3>
                <p className="text-gray-600 text-center">
                  Our team has years of experience in cultivating and shaping high-quality 
                  bonsai and ornamental plants.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Handpicked Selection</h3>
                <p className="text-gray-600 text-center">
                  We carefully choose every plant, ensuring it meets strict standards in 
                  aesthetics, health, and longevity.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Authentic Craftsmanship</h3>
                <p className="text-gray-600 text-center">
                  Our bonsai are trained with traditional techniques, ensuring natural 
                  elegance and character in every tree.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Export-Grade Quality</h3>
                <p className="text-gray-600 text-center">
                  We follow international phytosanitary regulations, making our plants 
                  ready for safe global shipment.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Large-Scale & Custom Orders</h3>
                <p className="text-gray-600 text-center">
                  Whether for personal collections, landscaping projects, or bulk exports, 
                  we accommodate all requests.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Sustainable Growing</h3>
                <p className="text-gray-600 text-center">
                  We implement eco-friendly techniques that promote plant health while 
                  preserving the environment.
                </p>
              </div>

              {/* Feature 7 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Dedicated Support</h3>
                <p className="text-gray-600 text-center">
                  From selection to aftercare, our team ensures you receive the best 
                  advice and guidance.
                </p>
              </div>

              {/* Feature 8 */}
              <div className="bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Wide Variety</h3>
                <p className="text-gray-600 text-center">
                  We offer a diverse range of bonsai and ornamental plants to suit 
                  different styles and preferences.
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
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
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
                    Buy export-quality ornamental plants, bonsai, and rare tropical species. 
                    We supply high-demand plants for landscapers, nurseries, and collectors worldwide.
                  </p>
                  <p className="text-green-600 font-medium">
                    Bulk and wholesale orders available with international shipping
                  </p>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
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
                    Order semi-mature bonsai (70-80% developed), ideal for export, nurseries, 
                    and further cultivation. Our bonsai are carefully trained for years to ensure 
                    strong roots.
                  </p>
                  <p className="text-green-600 font-medium">
                    Available in bulk for international buyers
                  </p>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
                    alt="Wholesale Landscaping Plants"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Wholesale Landscaping & Bulk Plants
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Buy premium landscaping plants in bulk for urban beautification, resorts, 
                    and commercial spaces. Our plants are grown using sustainable methods.
                  </p>
                  <p className="text-green-600 font-medium">
                    Large-scale supply with full export certification
                  </p>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151"
                    alt="Rare Tropical Plants"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Rare Tropical Plants
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover and order rare tropical plants, including exotic variegated species, 
                    sourced from Asia's rich biodiversity. Perfect for collectors and specialty stores.
                  </p>
                  <p className="text-green-600 font-medium">
                    Professional packaging and export compliance
                  </p>
                </div>
              </div>

              {/* Product 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                    alt="Competition-Ready Bonsai"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Competition-Ready Bonsai
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fully matured, exhibition-grade bonsai, crafted with precision for competitions 
                    and high-end collections. Each tree is shaped using traditional techniques.
                  </p>
                  <p className="text-green-600 font-medium">
                    Limited stock available for direct purchase
                  </p>
                </div>
              </div>

              {/* Product 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1433832597046-4f10e10ac764"
                    alt="Custom Plant Sourcing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Custom Plant Sourcing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Looking for specific plants? We provide tailored procurement services, 
                    connecting buyers with trusted growers and exporters.
                  </p>
                  <p className="text-green-600 font-medium">
                    Rare species and bulk orders available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
