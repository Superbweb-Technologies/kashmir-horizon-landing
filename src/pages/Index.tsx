
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AccommodationCard from '@/components/AccommodationCard';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import { Utensils, Phone, Info, MapPin } from 'lucide-react';

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
      
      {/* Dining Section */}
      <section className="py-24 px-6 lg:px-12 bg-background" id="dining">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Utensils className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              Exquisite Dining
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Savor authentic Kashmiri cuisine prepared with locally-sourced ingredients by our master chefs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                alt="Gourmet Kashmiri Cuisine" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="glass-morph p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Wazwan Experience</h3>
                <p className="text-white/80">Indulge in the traditional multi-course royal feast of Kashmir prepared by our master chefs using family recipes passed down through generations.</p>
              </div>
              <div className="glass-morph p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">Lakeside Dining</h3>
                <p className="text-white/80">Enjoy a romantic dinner by the serene lakeside with personalized service and a curated menu featuring the freshest local ingredients.</p>
              </div>
              <div className="glass-morph p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-2">High Tea in the Himalayas</h3>
                <p className="text-white/80">Experience our signature afternoon tea with panoramic mountain views, featuring delicate pastries and Kashmiri kahwa tea.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-24 px-6 lg:px-12 bg-card" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Info className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              About Horizon Kashmir
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Discover our story and commitment to providing unparalleled luxury experiences in the heart of the Himalayas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-white/90 leading-relaxed">
                Horizon Kashmir was established in 2010 with a vision to create a luxury retreat that harmonizes with the natural beauty of Kashmir while honoring its rich cultural heritage. Our property is nestled amidst the majestic Himalayan ranges, offering breathtaking views and serene surroundings.
              </p>
              <p className="text-white/90 leading-relaxed">
                Our commitment to sustainability is reflected in our eco-friendly practices, from locally-sourced materials used in construction to supporting local communities through employment and cultural preservation initiatives.
              </p>
              <p className="text-white/90 leading-relaxed">
                Each detail at Horizon Kashmir is thoughtfully curated to provide our guests with authentic experiences that connect them to the soul of Kashmir while indulging in world-class luxury and comfort.
              </p>
              <div className="pt-4">
                <button className="px-6 py-2 rounded-full glass-morph text-white font-medium hover:bg-white/5 transition-all duration-300">
                  Learn More About Our Story
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1585993573306-bce25c3a832c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80" 
                alt="Horizon Kashmir Property" 
                className="rounded-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Local Craftsmanship" 
                className="rounded-lg h-full object-cover mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
                alt="Mountain View" 
                className="rounded-lg h-full object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1629123952616-11faf10a0526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
                alt="Kashmiri Culture" 
                className="rounded-lg h-full object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-24 px-6 lg:px-12 bg-background" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Phone className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
              Contact Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're here to assist you in planning your perfect Himalayan getaway. Reach out to us for inquiries or reservations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-morph p-8 rounded-lg flex flex-col items-center text-center">
              <Phone className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-white/80 mb-4">Our team is available 24/7 to assist you with any inquiries.</p>
              <a href="tel:+911234567890" className="text-accent hover:text-accent/80 transition-colors">+91 123 456 7890</a>
            </div>
            
            <div className="glass-morph p-8 rounded-lg flex flex-col items-center text-center">
              <MapPin className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-white/80 mb-4">Nestled in the serene mountains of Tangmarg, Kashmir.</p>
              <address className="text-accent not-italic">
                Horizon Kashmir, Tangmarg Road<br />
                Gulmarg, Kashmir 193403<br />
                India
              </address>
            </div>
            
            <div className="glass-morph p-8 rounded-lg flex flex-col items-center text-center">
              <div className="w-10 h-10 flex items-center justify-center text-accent mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-white/80 mb-4">Send us an email and we'll get back to you promptly.</p>
              <a href="mailto:info@horizonkashmir.com" className="text-accent hover:text-accent/80 transition-colors">info@horizonkashmir.com</a>
            </div>
          </div>
          
          <div className="mt-16 glass-morph p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Send Us a Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your Email"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white focus:border-accent focus:outline-none transition-colors"
                  placeholder="Subject"
                />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-2 text-white focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <button 
                  type="submit" 
                  className="px-8 py-3 rounded-full bg-accent hover:bg-accent/90 text-white font-medium transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
