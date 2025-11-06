import React from 'react';
import { motion } from 'framer-motion';

export const RoundedCard = ({ 
  imageSrc, 
  alt, 
  children, 
  badge, 
  className = "",
  colorScheme = "brand",
  overlayOpacity = { from: 60, via: 20 },
  ...props 
}) => {
  let badgeClasses = "bg-brand-accent200 text-brand-accent600";
  if (colorScheme === "cobot") {
    badgeClasses = "bg-cobot-accent200 text-cobot-accent600";
  } else if (colorScheme === "guada") {
    badgeClasses = "bg-guada-accent200 text-guada-accent600";
  } else if (colorScheme === "claw") {
    badgeClasses = "bg-claw-accent200 text-claw-accent600";
  } else if (colorScheme === "vector") {
    badgeClasses = "bg-vector-accent200 text-vector-accent600";
  } else if (colorScheme === "hcrl") {
    badgeClasses = "bg-hcrl-accent200 text-hcrl-accent600";
  } else if (colorScheme === "spothead") {
    badgeClasses = "bg-spothead-accent200 text-spothead-accent600";
  } else if (colorScheme === "vr") {
    badgeClasses = "bg-vr-accent200 text-vr-accent600";
  } else if (colorScheme === "vacuum") {
    badgeClasses = "bg-vacuum-accent200 text-vacuum-accent600";
  } else if (colorScheme === "pictureplots") {
    badgeClasses = "bg-pictureplots-accent200 text-pictureplots-accent600";
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
      <div 
        className="absolute bottom-0 left-0 right-0 p-6"
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, ${overlayOpacity.from / 100}), rgba(0, 0, 0, ${overlayOpacity.via / 100}), transparent)`
        }}
      >
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
