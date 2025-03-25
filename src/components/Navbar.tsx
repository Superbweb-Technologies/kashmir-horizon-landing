
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import BookingForm from './BookingForm';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [bookingFormOpen, setBookingFormOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 lg:px-12",
          scrolled 
            ? "py-4 glass-morph bg-opacity-90" 
            : "py-6 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="inline-flex items-center space-x-1">
            <span className="text-2xl font-serif font-bold tracking-tight text-white animate-fade-in">
              HORIZON
            </span>
            <span className="text-xs font-light text-white/80 mt-3 animate-fade-in" style={{ animationDelay: '200ms' }}>
              KASHMIR
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            {['Rooms', 'Experiences', 'Dining', 'About', 'Contact'].map((item, index) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="relative text-sm text-white/90 hover:text-white transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <span className="relative">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-white/70 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>
          
          <button 
            className="px-5 py-2 rounded-full glass-morph text-sm text-white hover:bg-accent/20 transition-all duration-300 animate-fade-in"
            style={{ animationDelay: '600ms' }}
            onClick={() => setBookingFormOpen(true)}
          >
            Book Now
          </button>
        </div>
      </nav>
      
      <BookingForm
        open={bookingFormOpen}
        onOpenChange={setBookingFormOpen}
      />
    </>
  );
};

export default Navbar;
