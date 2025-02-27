
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Is your company legally registered for international trade?",
      answer: "Yes, Indo Cipanas Bonsai is fully registered and licensed for international trade. We comply with all necessary regulations and maintain current export licenses.",
    },
    {
      question: "Do you provide phytosanitary certificates and export permits?",
      answer: "Yes, we provide all necessary documentation including phytosanitary certificates and export permits for each shipment, ensuring smooth customs clearance.",
    },
    {
      question: "Can I request specific bonsai styles or plant species?",
      answer: "Absolutely! We can accommodate specific requests for bonsai styles and species based on availability. Our expert team will work with you to meet your requirements.",
    },
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "Our MOQ varies depending on the product type and shipping destination. Please contact us for detailed information about specific products.",
    },
    {
      question: "Do you offer wholesale pricing?",
      answer: "Yes, we offer competitive wholesale pricing for bulk orders. The price varies based on quantity, species, and specifications.",
    },
    {
      question: "Do you ship worldwide?",
      answer: "Yes, we ship to most countries worldwide, subject to local import regulations and phytosanitary requirements.",
    },
    {
      question: "How is the shipping process handled?",
      answer: "We work with experienced logistics partners who specialize in plant transportation. Each bonsai is carefully packed to ensure safe delivery.",
    },
    {
      question: "How long does it take to receive my order?",
      answer: "Delivery times vary by destination and shipping method, typically ranging from 7-21 business days. We'll provide tracking information for your shipment.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including wire transfer, letter of credit (L/C), and other secure international payment options.",
    },
    {
      question: "Can I get a sample order before placing a bulk order?",
      answer: "Yes, we can arrange sample orders to help you assess our quality. Sample pricing and minimum quantities may apply.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our products, services, and processes.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Accordion type="single" collapsible className="px-6 py-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Didn't find what you're looking for?
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
