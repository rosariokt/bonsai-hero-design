
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Truck, Package, RefreshCcw, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Shipping = () => {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center gap-4 mb-12">
            <Truck className="w-10 h-10 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Shipping & Returns</h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  Global Shipping
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                We deliver our premium bonsai worldwide through trusted carriers.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-green-600" />
                  Safe Packaging
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Each bonsai is carefully packaged to ensure safe arrival.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  Fast Delivery
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                3-7 business days delivery worldwide with tracking.
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <RefreshCcw className="w-5 h-5 text-green-600" />
                  Easy Returns
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600">
                Hassle-free returns within 48 hours of delivery.
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-green-600" />
                International Shipping
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Professional Packaging</strong>
                    All plants are carefully packaged to ensure safe arrival
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Delivery Time</strong>
                    Shipping times vary by destination (typically 3-7 business days)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Documentation</strong>
                    Phytosanitary certificates included for international orders
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <RefreshCcw className="w-6 h-6 text-green-600" />
                Returns Policy
              </h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Damage Claims</strong>
                    Plants damaged during shipping are eligible for replacement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Time Frame</strong>
                    Claims must be filed within 48 hours of delivery
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Camera className="w-5 h-5 text-green-600 mt-1" />
                  <div>
                    <strong className="block text-gray-900">Documentation</strong>
                    Photo documentation required for damage claims
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipping;
