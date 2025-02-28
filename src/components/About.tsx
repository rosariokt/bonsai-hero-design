
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Indo Cipanas Bonsai was founded in 2010 as a collective of experienced bonsai growers and ornamental plant specialists. With a commitment to quality and authenticity, we have developed a strong national network of skilled artisans and nurseries, ensuring access to a diverse selection of bonsai and landscaping plants.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Extensive Bonsai & Ornamental Plant Collection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We cultivate and supply a wide range of bonsai species, including Ficus, Juniper, Tamarind, Casuarina, Wrightia, Pemphis, and Premna, along with rare ornamental plants for collectors and landscape projects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Sustainable & Ethical Cultivation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our growers apply time-honored techniques while integrating sustainable and responsible cultivation practices to ensure long-term plant health and ecological balance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Strong National Network & Scalable Supply
              </h3>
              <p className="text-gray-600 leading-relaxed">
                By collaborating with bonsai artisans and nurseries across different regions, we maintain a reliable and scalable production system, allowing us to meet varying demands while preserving plant quality.
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9"
                alt="Bonsai Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                With deep expertise and a passion for bonsai craftsmanship, Indo Cipanas Bonsai continues to uphold the art of bonsai while expanding the reach of ornamental plants to broader markets.
              </p>
              <a 
                href="#products" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300"
              >
                Explore Our Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
