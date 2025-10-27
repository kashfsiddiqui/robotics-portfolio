import React from 'react';

export const Eyebrow = ({ 
  children, 
  className = "",
  ...props 
}) => {
  return (
    <span 
      className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide bg-brand-accent200 text-brand-accent600 rounded-full ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
