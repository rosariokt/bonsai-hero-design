
import React from "react";
import { MapPin, Star } from "lucide-react";

const MapLocation = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Visit & Select Your Bonsai
            </h2>
            <p className="text-lg text-gray-600">
              Explore our nursery and choose from our expertly grown collection
            </p>
          </div>

          {/* Map Container */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            {/* Map Frame */}
            <div className="w-full h-[300px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0025455092264!2d107.05640437485845!3d-6.710478048648116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3003c0b9c57%3A0x383c596b750c6b95!2sIndo%20cipanas%20bonsai!5e0!3m2!1sen!2sid!4v1710670898037!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Indo Cipanas Bonsai Location"
                className="rounded-xl"
              />
            </div>

            {/* Location Card - Exact Google Maps Style */}
            <div className="absolute left-4 top-4 bg-white p-3 rounded-lg shadow-lg max-w-[280px]">
              <h3 className="font-semibold text-base mb-1">Indo cipanas bonsai</h3>
              
              <p className="text-gray-600 text-sm mb-1">
                Jl. Hanjawar, Palsaran, Kec. Cipanas, Kabupaten Cianjur, Jawa Barat 43253
              </p>
              
              <div className="flex items-center gap-1 mb-1">
                <span className="font-medium text-sm">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-blue-600 hover:text-blue-800">2 reviews</span>
              </div>
              
              <a
                href="https://maps.app.goo.gl/7p2yoC1BMzJfnKwTA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium block"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
