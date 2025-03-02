
import React from "react";
import { MapPin } from "lucide-react";

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

            {/* Location Card */}
            <div className="absolute left-4 top-4 bg-white p-4 md:p-6 rounded-lg shadow-xl max-w-[280px] md:max-w-sm border border-green-100">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-base md:text-lg mb-2">Indo Cipanas Bonsai</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    Jl. Hanjawar, Palsaran, Kec. Cipanas,<br />
                    Kabupaten Cianjur, Jawa Barat 43253
                  </p>
                  <a
                    href="https://maps.app.goo.gl/RFuWH1EoRd4xZNav7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 mt-3 text-sm font-medium transition-colors"
                  >
                    Get Directions
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
