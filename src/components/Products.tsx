import React from "react";

const Products = () => {
  return (
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
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
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
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
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
  );
};

export default Products;
