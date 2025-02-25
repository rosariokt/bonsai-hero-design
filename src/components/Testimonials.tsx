
import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stories from Our Customers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses, landscapers, collectors, and bonsai enthusiasts worldwide 
              for our exceptional quality, reliability, and commitment to excellence.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                  </svg>
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed italic">
                    "We've worked with Indo Cipanas Bonsai on a previous project for our landscaping 
                    plant supply, and we couldn't be happier with the results. The plants were of 
                    excellent quality, and their team was professional and reliable throughout the 
                    process. It was a great experience, and we highly recommend them for anyone 
                    looking for quality landscaping plants."
                  </p>
                </blockquote>
                <footer className="mt-auto">
                  <p className="font-semibold text-gray-900">Puri Botanical Residence</p>
                  <p className="text-green-600">Landscape Client</p>
                </footer>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z"/>
                  </svg>
                </div>
                <blockquote className="flex-grow">
                  <p className="text-gray-600 mb-8 leading-relaxed italic">
                    "I've been sourcing bonsai from Indo Cipanas Bonsai for my exports to Europe, 
                    and I'm really happy with their quality. They offer a great variety of species, 
                    which makes it much easier for me to meet my clients' needs. The pricing is also 
                    reasonable, and the whole process has been smooth. Definitely a supplier I can 
                    rely on."
                  </p>
                </blockquote>
                <footer className="mt-auto">
                  <p className="font-semibold text-gray-900">Rahmad Alsaubar</p>
                  <p className="text-green-600">Export Client</p>
                </footer>
              </div>
            </div>
          </div>

          {/* Commitment Section */}
          <div className="bg-green-50 p-8 rounded-2xl text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-green-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">🌟 Committed to Customer Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                At Indo Cipanas Bonsai, we take pride in building long-term relationships with our 
                clients. Whether you are a landscaper, a bonsai collector, or an exporter, we 
                guarantee the highest quality plants, smooth transactions, and dedicated customer 
                support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
