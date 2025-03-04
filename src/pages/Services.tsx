import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, TreePine, Trees, Sprout, Trophy, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      title: "Premium Ornamental Plants & Bonsai",
      description: "Buy export-quality ornamental plants, bonsai, and rare tropical species. We supply high-demand plants for landscapers, nurseries, and collectors worldwide.",
      highlight: "Bulk and wholesale orders available with international shipping",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      icon: <TreePine className="w-12 h-12 text-green-600" />,
      title: "Semi-Mature Bonsai",
      description: "Order semi-mature bonsai (70-80% developed), ideal for export, nurseries, and further cultivation. Our bonsai are carefully trained for years to ensure strong roots.",
      highlight: "Available in bulk for international buyers",
      image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78"
    },
    {
      icon: <Trees className="w-12 h-12 text-green-600" />,
      title: "Wholesale Landscaping & Bulk Plants",
      description: "Buy premium landscaping plants in bulk for urban beautification, resorts, and commercial spaces. Our plants are grown using sustainable methods.",
      highlight: "Large-scale supply with full export certification",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
    },
    {
      icon: <Sprout className="w-12 h-12 text-green-600" />,
      title: "Rare Tropical Plants",
      description: "Discover and order rare tropical plants, including exotic variegated species, sourced from Asia's rich biodiversity. Perfect for collectors and specialty stores.",
      highlight: "Professional packaging and export compliance",
      image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672"
    },
    {
      icon: <Trophy className="w-12 h-12 text-green-600" />,
      title: "Competition-Ready Bonsai",
      description: "Fully matured, exhibition-grade bonsai, crafted with precision for competitions and high-end collections. Each tree is shaped using traditional techniques.",
      highlight: "Limited stock available for direct purchase",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
    },
    {
      icon: <Search className="w-12 h-12 text-green-600" />,
      title: "Custom Plant Sourcing",
      description: "Looking for specific plants? We provide tailored procurement services, connecting buyers with trusted growers and exporters.",
      highlight: "Rare species and bulk orders available",
      image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Services
            </h1>
            <p className="text-xl text-gray-600">
              Discover our comprehensive range of expert plant services, from rare specimens to wholesale solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 z-20">
                    {service.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <p className="text-green-600 font-medium">
                    {service.highlight}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
