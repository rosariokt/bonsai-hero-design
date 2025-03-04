
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Shield, Scale, Book } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-12">
            <FileText className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          
          <div className="grid md:grid-cols-[250px,1fr] gap-8">
            {/* Sidebar */}
            <div className="space-y-4 hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <a href="#agreement" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                    <Shield className="w-4 h-4" />
                    <span>Agreement to Terms</span>
                  </a>
                  <a href="#order" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                    <Scale className="w-4 h-4" />
                    <span>Order and Purchase</span>
                  </a>
                  <a href="#shipping" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                    <Book className="w-4 h-4" />
                    <span>Shipping Policy</span>
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="prose max-w-none">
              <div id="agreement" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  1. Agreement to Terms
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using this website, you agree to be bound by these Terms and Conditions, 
                  all applicable laws and regulations, and agree that you are responsible for compliance 
                  with any applicable local laws.
                </p>
              </div>

              <div id="order" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Scale className="w-6 h-6 text-green-600" />
                  2. Order and Purchase
                </h2>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>All orders are subject to product availability</li>
                  <li>Prices are subject to change without notice</li>
                  <li>Minimum order quantities may apply</li>
                  <li>Payment terms will be specified in the quotation</li>
                </ul>
              </div>

              <div id="shipping" className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Book className="w-6 h-6 text-green-600" />
                  3. Shipping Policy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Shipping costs and delivery times vary depending on the destination and size of the order. 
                  International shipping requires proper documentation and may be subject to customs duties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
