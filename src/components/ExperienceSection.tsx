import React, { useRef } from 'react';
import { Mountain, Sunrise, Snowflake, Utensils } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Trekking to the Glaciers",
      description: "Embark on an unforgettable journey through snow-capped peaks and pristine glaciers, guided by seasoned mountaineers.",
      icon: Mountain
    },
    {
      title: "Sunrise Meditation",
      description: "Find inner peace with guided meditation sessions as you witness the breathtaking sunrise over the Himalayan range.",
      icon: Sunrise
    },
    {
      title: "Skiing & Snowboarding",
      description: "Experience the thrill of gliding down powdery slopes with our exclusive skiing and snowboarding adventures.",
      icon: Snowflake
    },
    {
      title: "Kashmiri Cuisine Workshop",
      description: "Delight your taste buds with an immersive culinary experience, learning to prepare traditional Kashmiri dishes.",
      icon: Utensils
    }
  ];
  
  const ExperienceCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType }) => (
    <div className="p-6 rounded-lg glass-morph hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
  
  return (
    <section className="py-24 px-6 lg:px-12 bg-card" id="experiences">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Curated Experiences
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover unique adventures that connect you with the soul of Kashmir, from serene sunrises to thrilling mountain expeditions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index}
              title={experience.title}
              description={experience.description}
              icon={experience.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
