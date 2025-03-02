
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.993418494799!2d107.05642487485847!3d-6.710680493348116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b3003c0b9c57%3A0x383c596b750c6b95!2sIndo%20cipanas%20bonsai!5e0!3m2!1sen!2sid!4v1710670898037!5m2!1sen!2sid"
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

            {/* Location Card - Google Maps Style */}
            <div className="absolute left-4 top-4 bg-white p-4 rounded-lg shadow-xl max-w-[280px] md:max-w-sm">
              <div className="space-y-3">
                {/* Business Name with Icon */}
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <h3 className="font-semibold text-base">Indo Cipanas Bonsai</h3>
                </div>

                {/* Address */}
                <p className="text-gray-600 text-sm pl-7">
                  Jl. Hanjawar, Palsaran, Kec. Cipanas,<br />
                  Kabupaten Cianjur, Jawa Barat 43253
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 pl-7">
                  <div className="flex items-center">
                    <span className="font-medium mr-1">5.0</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-600">(2 reviews)</span>
                </div>

                {/* Get Directions Link */}
                <a
                  href="https://maps.app.goo.gl/RFuWH1EoRd4xZNav7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block pl-7 text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
                >
                  Get Directions →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
