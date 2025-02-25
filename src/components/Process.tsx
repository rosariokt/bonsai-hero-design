
import React from "react";

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process: From Cultivation to Delivery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every step matters, ensuring premium-quality bonsai for collectors, 
              landscapers, and wholesalers worldwide.
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1590249003789-3c0f5c038c50"
                  alt="Careful Selection & Growth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Careful Selection & Growth
                </h3>
                <p className="text-gray-600">
                  We meticulously select the finest seedlings, sourced from trusted growers, 
                  and nurture them for years. Through expert cultivation techniques, we ensure 
                  strong root development, resilience, and aesthetic appeal.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1512428813834-c702c7702b78"
                  alt="Shaping & Refinement"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Shaping & Refinement
                </h3>
                <p className="text-gray-600">
                  Our skilled artisans use traditional and modern bonsai training methods—pruning, 
                  wiring, and grafting—to sculpt each plant into a masterpiece. This process enhances 
                  the tree's natural character.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1576995853168-e3c1361859d4"
                  alt="Health & Quality Inspection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Health & Quality Inspection
                </h3>
                <p className="text-gray-600">
                  To meet international phytosanitary standards, every bonsai undergoes strict 
                  health checks. We ensure that each plant is pest-free, disease-resistant, 
                  and fully acclimated before export.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8"
                  alt="Secure Packaging for Export"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Secure Packaging for Export
                </h3>
                <p className="text-gray-600">
                  Our specialized packaging methods protect the bonsai's structure, roots, 
                  and moisture levels. Each tree is secured with breathable wrapping and 
                  reinforced materials to ensure safe transportation.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                  alt="Fast & Reliable Global Shipping"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  5
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Fast & Reliable Global Shipping
                </h3>
                <p className="text-gray-600">
                  We collaborate with experienced logistics partners, ensuring smooth handling, 
                  customs clearance, and timely delivery to clients worldwide. Whether shipping 
                  bulk orders or exclusive specimens, we guarantee a seamless export experience.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="relative h-64">
                <img 
                  src="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
                  alt="Aftercare Support & Guidance"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  6
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Aftercare Support & Guidance
                </h3>
                <p className="text-gray-600">
                  To help you maintain your bonsai's beauty, we provide comprehensive care 
                  instructions and expert consultation. Our team is always ready to assist 
                  with post-delivery inquiries, ensuring customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
