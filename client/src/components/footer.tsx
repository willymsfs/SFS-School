import { Facebook, Instagram, Youtube, Phone, MapPin, Clock } from "lucide-react";
import logoPath from "@assets/logo_1753112523490.jpg";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: "about", label: "About Us" },
    { id: "mission", label: "Vision & Mission" },
    { id: "management", label: "Management" },
    { id: "facilities", label: "Facilities" },
    { id: "admissions", label: "Admissions" }
  ];

  return (
    <footer className="bg-royal-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src={logoPath}
                alt="St. Francis de Sales School Logo" 
                className="h-12 w-12 rounded-full object-cover border-2 border-elegant-gold"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">St. Francis de Sales</h3>
                <p className="elegant-gold">School & Junior College</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Nurturing minds, building character, and inspiring excellence since 1982. Join us in shaping the leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="elegant-gold hover:text-yellow-300 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="elegant-gold hover:text-yellow-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="elegant-gold hover:text-yellow-300 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold elegant-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:elegant-gold transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold elegant-gold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 elegant-gold flex-shrink-0" />
                <a href="tel:+919545395680" className="hover:elegant-gold transition-colors">
                  +91 9545395680
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 elegant-gold mt-1 flex-shrink-0" />
                <span>Tayade Colony, Khamgaon 444303</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 elegant-gold mt-1 flex-shrink-0" />
                <span>Mon-Fri: 9AM-3PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 St. Francis de Sales School & Junior College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
