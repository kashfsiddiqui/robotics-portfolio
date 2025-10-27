import React from 'react';
import { motion } from 'framer-motion';

export const SectionTitle = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <motion.h2
      className={`font-playfair text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.h2>
  );
};
