
import React from "react";

const About = () => {
  return (
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
  );
};

export default About;
