
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

const Shipping = () => {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-8">
            <Truck className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Shipping & Returns</h1>
          </div>
          
          <div className="prose max-w-none text-gray-600">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Shipping</h2>
              <p className="mb-4">
                We ship our bonsai and ornamental plants worldwide, working with experienced carriers 
                who specialize in live plant transportation.
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>All plants are carefully packaged to ensure safe arrival</li>
                <li>Shipping times vary by destination (typically 3-7 business days)</li>
                <li>Tracking information provided for all shipments</li>
                <li>Phytosanitary certificates included for international orders</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Returns Policy</h2>
              <p className="mb-4">
                We want you to be completely satisfied with your purchase. Our returns policy includes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Plants damaged during shipping are eligible for replacement</li>
                <li>Claims must be filed within 48 hours of delivery</li>
                <li>Photo documentation required for damage claims</li>
                <li>Return shipping costs may apply in certain situations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customs & Import Duties</h2>
              <p>
                International customers are responsible for any customs duties, taxes, and import fees. 
                We recommend checking your country's import regulations for live plants before placing an order.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipping;
