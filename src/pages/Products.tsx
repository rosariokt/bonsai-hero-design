
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingBag } from "lucide-react";

const Products = () => {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <ShoppingBag className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Bonsai Trees */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1512428813834-c702c7702b78" 
                alt="Bonsai Trees" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Bonsai Trees</h3>
                <p className="text-gray-600 mb-4">
                  Expertly crafted bonsai trees in various styles and sizes. Each piece is unique and carefully maintained.
                </p>
                <p className="text-sm text-gray-500">Starting from $100 USD</p>
              </div>
            </div>

            {/* Ornamental Plants */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1446071103084-c257b5f70672" 
                alt="Ornamental Plants" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ornamental Plants</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful selection of decorative plants perfect for both indoor and outdoor spaces.
                </p>
                <p className="text-sm text-gray-500">Starting from $25 USD</p>
              </div>
            </div>

            {/* Landscaping Services */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1534710961216-75c88202f43e" 
                alt="Landscaping Services" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Landscaping Services</h3>
                <p className="text-gray-600 mb-4">
                  Professional landscaping design and implementation services for gardens and properties.
                </p>
                <p className="text-sm text-gray-500">Custom quotes available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
