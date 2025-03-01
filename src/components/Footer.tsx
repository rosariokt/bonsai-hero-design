
import React from "react";
import { Mail, Phone, Clock, MessageCircle, Camera, FileText, Download } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-lg italic text-green-400">
              "Where Passion for Plants Thrives and Greenery Finds Its Home"
            </p>
            <p className="text-gray-400 leading-relaxed">
              We're always ready to help you grow your collection, design stunning landscapes, 
              and bring nature closer to your everyday life. From large-scale bonsai projects 
              to rare ornamental plants, let's make your green space a reflection of artistry and care.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <address className="not-italic">
                <strong className="text-white">PT INDO CIPANAS BONSAI</strong><br />
                Kp Hanjawar, Desa Cimacan, Kec. Cipanas,<br />
                Kab. Cianjur, Jawa Barat,<br />
                Indonesia 43253
              </address>
              
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+62-838-6966-3229" className="hover:text-green-400 transition-colors">
                  +62-838-6966-3229
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-400" />
                <a href="mailto:business@icbplants.com" className="hover:text-green-400 transition-colors">
                  business@icbplants.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span>9:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a href="#" className="hover:text-green-400 transition-colors">
                  WhatsApp: Chat Us Now
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-green-400" />
                <a href="#" className="hover:text-green-400 transition-colors">
                  Follow Us: @timurbonsai
                </a>
              </div>

              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-400" />
                <a href="#" className="hover:text-green-400 transition-colors">
                  Request a Quote Now
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-green-400" />
                <a href="#" className="hover:text-green-400 transition-colors">
                  Download Our Catalog
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Indo Cipanas Bonsai is a legally registered company in Indonesia, officially recognized 
            under the Indonesian business registry with NIB 212240016669. We operate in full 
            compliance with national regulations, ensuring reliable and professional service for 
            our clients worldwide.
          </p>
          <p className="text-sm text-gray-500">
            Copyright © 2025 Indo Cipanas Bonsai. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
