
import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Indo Cipanas Bonsai</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2010, Indo Cipanas Bonsai has grown from a small family nursery into one of Indonesia's premier bonsai and ornamental plant suppliers. Located in the fertile region of Cipanas, Cianjur, our extensive nursery benefits from the perfect climate and rich volcanic soil that characterizes West Java.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team consists of experienced bonsai masters and horticulturists who combine traditional techniques with modern cultivation methods to produce exceptional specimens. We take pride in our sustainable practices and commitment to preserving the ancient art of bonsai.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                alt="Indo Cipanas Bonsai Nursery" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">To cultivate and provide the highest quality bonsai and ornamental plants while promoting the appreciation of this living art form.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the leading provider of premium bonsai and ornamental plants in Southeast Asia, known for quality, sustainability, and expertise.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">We believe in patience, precision, and respect for nature, values that guide every aspect of our work with these living artworks.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
