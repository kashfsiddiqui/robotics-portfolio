import React from 'react';
import { motion } from 'framer-motion';

export const RoundedCard = ({ 
  imageSrc, 
  alt, 
  children, 
  badge, 
  className = "",
  colorScheme = "brand",
  ...props 
}) => {
  let badgeClasses = "bg-brand-accent200 text-brand-accent600";
  if (colorScheme === "cobot") {
    badgeClasses = "bg-cobot-accent200 text-cobot-accent600";
  } else if (colorScheme === "guada") {
    badgeClasses = "bg-guada-accent200 text-guada-accent600";
  } else if (colorScheme === "claw") {
    badgeClasses = "bg-claw-accent200 text-claw-accent600";
  }
    
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-4xl shadow-soft ${className}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-95 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      
      {/* Bottom-left overlay with gradient */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
        {badge && (
          <div className="mb-3">
            <span className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full ${badgeClasses}`}>
              {badge}
            </span>
          </div>
        )}
        <div className="text-white">
          {children}
        </div>
      </div>
    </motion.div>
  );
};
