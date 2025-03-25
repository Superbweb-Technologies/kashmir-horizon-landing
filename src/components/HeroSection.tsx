
import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrollY = window.scrollY;
      // Parallax effect - moving slower than the scroll
      parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        ref={parallaxRef}
        className="parallax-bg opacity-80" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')`,
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"></div>
      
      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 opacity-0 animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <span className="inline-block py-1 px-3 rounded-full border border-white/20 text-xs font-light tracking-wider text-white/90">
              TANGMARG, KASHMIR
            </span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight opacity-0 animate-fade-in text-shadow-lg" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            Experience Tranquility in the Heart of the Himalayas
          </h1>
          
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in text-shadow-sm" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Immerse yourself in unparalleled luxury amidst breathtaking mountain panoramas and discover the serenity of Kashmir.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <button className="px-8 py-3 rounded-full bg-accent hover:bg-accent/90 text-white font-medium transition-all duration-300 transform hover:scale-105">
              Book Your Stay
            </button>
            <button className="px-8 py-3 rounded-full glass-morph text-white font-medium transition-all duration-300 transform hover:scale-105">
              Explore Experiences
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <ChevronDown className="w-8 h-8 text-white/70" />
      </div>
    </section>
  );
};

export default HeroSection;
