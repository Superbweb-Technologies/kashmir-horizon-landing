
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AccommodationCard from '@/components/AccommodationCard';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const accommodationsRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize animation observers
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (accommodationsRef.current) {
      observer.observe(accommodationsRef.current);
    }
    
    return () => {
      if (accommodationsRef.current) {
        observer.unobserve(accommodationsRef.current);
      }
    };
  }, []);
  
  // Accommodations data
  const accommodations = [
    {
      title: "Mountain View Suite",
      description: "Our premium suite offers panoramic views of the Himalayan ranges, a luxurious king-sized bed, and a private balcony to soak in the natural beauty.",
      price: "₹22,000/night",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      title: "Valley View Cottage",
      description: "Nestled amidst pine trees, these cottages offer serene valley views, a cozy fireplace, and a private garden to enjoy the crisp mountain air.",
      price: "₹18,000/night",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    },
    {
      title: "River Side Villa",
      description: "Experience tranquility with the soothing sounds of flowing water in our spacious villas located by the pristine river, featuring luxury amenities and outdoor dining.",
      price: "₹28,000/night",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      {/* Accommodations Section */}
      <section 
        ref={accommodationsRef} 
        className="py-24 px-6 lg:px-12 bg-background opacity-0 transition-opacity duration-1000"
        id="rooms"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              Exceptional Accommodations
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Immerse yourself in luxury with our thoughtfully designed spaces that blend comfort with the natural beauty of Kashmir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation, index) => (
              <AccommodationCard 
                key={index}
                title={accommodation.title}
                description={accommodation.description}
                price={accommodation.price}
                image={accommodation.image}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <button className="px-8 py-3 rounded-full glass-morph text-white font-medium hover:bg-white/5 transition-all duration-300">
              View All Accommodations
            </button>
          </div>
        </div>
      </section>
      
      {/* Panoramic View Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')`,
            backgroundAttachment: isMobile ? 'scroll' : 'fixed'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        
        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center z-10">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight max-w-3xl mx-auto text-shadow-lg">
            "A sanctuary where heaven meets earth in perfect harmony"
          </h2>
          <p className="text-white/80 italic">Conde Nast Traveler</p>
        </div>
      </section>
      
      <ExperienceSection />
      
      <Footer />
    </div>
  );
};

export default Index;
