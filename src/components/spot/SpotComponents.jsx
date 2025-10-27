import React from 'react';

// Spot Card Component - rounded container with shadow and padding
export const SpotCard = ({ children, className = "", role = "group", ...props }) => {
  return (
    <div 
      className={`spot-card ${className}`}
      role={role}
      tabIndex={0}
      {...props}
    >
      {children}
    </div>
  );
};

// Spot Overlay Component - positions text at bottom-left with gradient
export const SpotOverlay = ({ children, className = "" }) => {
  return (
    <div className={`spot-overlay ${className}`}>
      {children}
    </div>
  );
};

// Spot Pill Component - small rounded label using accent color
export const SpotPill = ({ children, className = "" }) => {
  return (
    <span className={`spot-pill ${className}`}>
      {children}
    </span>
  );
};

// Spot Gallery Component - image list with rounded corners
export const SpotGallery = ({ images, className = "" }) => {
  return (
    <div className={`spot-gallery ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="spot-gallery-item">
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
          {image.caption && (
            <div className="spot-overlay">
              <p className="text-sm font-medium">{image.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
