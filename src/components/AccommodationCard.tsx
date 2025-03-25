
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface AccommodationCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ title, description, price, image, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "relative group overflow-hidden rounded-xl glass-morph h-[450px] opacity-0",
        "animate-fade-in-right"
      )}
      style={{ animationDelay: `${index * 100 + 300}ms`, animationFillMode: 'forwards' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={title} 
          className={cn(
            "w-full h-full object-cover transition-all duration-700 ease-in-out transform",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="space-y-2">
          <div className="flex justify-between items-end">
            <h3 className="font-serif text-2xl font-semibold">{title}</h3>
            <span className="text-sm font-light">{price}</span>
          </div>
          <p className="text-sm text-white/80 line-clamp-2 transition-all duration-500 ease-in-out" style={{ maxHeight: isHovered ? '10rem' : '2.5rem' }}>
            {description}
          </p>
          
          <div className={cn(
            "pt-3 transform transition-all duration-500 ease-in-out opacity-0",
            isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <button className="px-4 py-2 bg-white text-background text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationCard;
