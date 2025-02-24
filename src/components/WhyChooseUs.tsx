import React from "react";

const WhyChooseUs = () => {
  return (
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
  );
};

export default WhyChooseUs;
