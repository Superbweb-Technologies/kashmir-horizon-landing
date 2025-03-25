
import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6 lg:px-12 bg-gradient-to-t from-black to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-1 mb-4">
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                HORIZON
              </span>
              <span className="text-xs font-light text-white/80 mt-3">
                KASHMIR
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Where luxury meets nature's splendor. Nestled in the heart of the Himalayas, our retreat offers an unparalleled experience of Kashmir's breathtaking landscapes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Rooms & Suites', 'Dining', 'Spa & Wellness', 'Experiences', 'Gallery', 'About Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/60 mt-0.5" />
                <span className="text-white/60 text-sm">Tangmarg, Kashmir, India - 193402</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/60 text-sm">+91 94190 00000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/60 text-sm">info@horizonkashmir.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-medium mb-4">Newsletter</h3>
            <p className="text-white/60 text-sm mb-4">Subscribe to receive updates on our latest offers and experiences.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-l-md px-4 py-2 text-sm text-white placeholder:text-white/40 flex-grow focus:outline-none focus:ring-1 focus:ring-accent/50"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-4 rounded-r-md text-sm transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Horizon Kashmir. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-white/60 text-xs transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
