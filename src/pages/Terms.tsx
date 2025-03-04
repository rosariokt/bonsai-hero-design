
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Terms = () => {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <FileText className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms & Conditions</h1>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <p className="mb-6">Last updated: March 20, 2024</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you agree to be bound by these Terms and Conditions, 
                all applicable laws and regulations, and agree that you are responsible for compliance 
                with any applicable local laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Order and Purchase</h2>
              <ul className="list-disc pl-6 mb-4">
                <li>All orders are subject to product availability</li>
                <li>Prices are subject to change without notice</li>
                <li>Minimum order quantities may apply</li>
                <li>Payment terms will be specified in the quotation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Shipping Policy</h2>
              <p>
                Shipping costs and delivery times vary depending on the destination and size of the order. 
                International shipping requires proper documentation and may be subject to customs duties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Warranty</h2>
              <p>
                We guarantee the health and quality of our plants at the time of shipping. Specific warranty 
                terms will be provided with each purchase.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
