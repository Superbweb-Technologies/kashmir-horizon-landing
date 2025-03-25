
import React, { useRef, useEffect } from 'react';
import { Snowflake, Sunrise, Utensils, Mountain } from 'lucide-react';

interface ExperienceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ icon, title, description, index }) => {
  return (
    <div 
      className="glass-morph rounded-xl p-6 opacity-0 animate-scale-in"
      style={{ animationDelay: `${index * 150 + 300}ms`, animationFillMode: 'forwards' }}
    >
      <div className="mb-4 text-accent/90">{icon}</div>
      <h3 className="font-serif text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const experiences = [
    {
      icon: <Snowflake className="w-10 h-10" />,
      title: "Winter Wonderland",
      description: "Experience the magic of Kashmir's winter landscape with skiing and snowboarding adventures on pristine slopes."
    },
    {
      icon: <Mountain className="w-10 h-10" />,
      title: "Mountain Excursions",
      description: "Guided treks through breathtaking Himalayan trails offering panoramic views of snow-capped peaks."
    },
    {
      icon: <Sunrise className="w-10 h-10" />,
      title: "Sunrise Meditation",
      description: "Start your day with peaceful meditation sessions overlooking the tranquil valley as the sun rises."
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: "Authentic Cuisine",
      description: "Indulge in traditional Kashmiri cuisine prepared by our master chefs using local ingredients and recipes."
    }
  ];
  
  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 lg:px-12 bg-background opacity-0 transition-opacity duration-1000"
      id="experiences"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Unforgettable Experiences
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Immerse yourself in curated experiences that showcase the best of Kashmir's natural beauty and cultural heritage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => (
            <ExperienceItem 
              key={index}
              icon={experience.icon}
              title={experience.title}
              description={experience.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
