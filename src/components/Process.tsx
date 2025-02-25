
import React from "react";

const Process = () => {
  return (
    <section id="process" className="py-20 bg-white">
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

          {/* Process Steps */}
          <div className="grid gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform -translate-x-1/2" />

            {/* Step 1 */}
            <div className="group lg:grid lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:block" /> {/* Spacer for right alignment */}
              <div className="bg-white p-8 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                {/* Number Badge */}
                <div className="absolute -left-3 lg:-left-16 top-8 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 transform transition-transform group-hover:rotate-12">
                  1️⃣
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
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
            <div className="group lg:grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="absolute -right-3 lg:-right-16 top-8 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 transform transition-transform group-hover:rotate-12">
                  2️⃣
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Shaping & Refinement
                </h3>
                <p className="text-gray-600">
                  Our skilled artisans use traditional and modern bonsai training methods—pruning, 
                  wiring, and grafting—to sculpt each plant into a masterpiece. This process enhances 
                  the tree's natural character, making it suitable for both indoor and outdoor displays.
                </p>
              </div>
              <div className="hidden lg:block" /> {/* Spacer for left alignment */}
            </div>

            {/* Step 3 */}
            <div className="group lg:grid lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:block" />
              <div className="bg-white p-8 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="absolute -left-3 lg:-left-16 top-8 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 transform transition-transform group-hover:rotate-12">
                  3️⃣
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
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
            <div className="group lg:grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="absolute -right-3 lg:-right-16 top-8 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 transform transition-transform group-hover:rotate-12">
                  4️⃣
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Secure Packaging for Export
                </h3>
                <p className="text-gray-600">
                  Our specialized packaging methods protect the bonsai's structure, roots, 
                  and moisture levels. Each tree is secured with breathable wrapping and 
                  reinforced materials to ensure safe transportation.
                </p>
              </div>
              <div className="hidden lg:block" />
            </div>

            {/* Step 5 */}
            <div className="group lg:grid lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:block" />
              <div className="bg-white p-8 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="absolute -left-3 lg:-left-16 top-8 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 transform transition-transform group-hover:rotate-12">
                  5️⃣
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
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
            <div className="group lg:grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="absolute -right-3 lg:-right-16 top-8 w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold z-10 transform transition-transform group-hover:rotate-12">
                  6️⃣
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  Aftercare Support & Guidance
                </h3>
                <p className="text-gray-600">
                  To help you maintain your bonsai's beauty, we provide comprehensive care 
                  instructions and expert consultation. Our team is always ready to assist 
                  with post-delivery inquiries, ensuring customer satisfaction.
                </p>
              </div>
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
