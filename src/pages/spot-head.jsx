import React from 'react';
import { motion } from 'framer-motion';
import { RoundedCard } from '../components/ui/RoundedCard';
import { SectionTitle } from '../components/ui/SectionTitle';

const SpotHeadPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="/"
              className="flex items-center gap-3 text-lg font-playfair text-[#0F172A] hover:text-gray-600 transition-colors duration-300"
            >
              <img 
                src="/images/Landing Page Graphics/logo.png" 
                alt="KS Logo" 
                className="w-8 h-8 rounded-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span>Kashf Siddiqui</span>
            </a>
            
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/kashfsiddiqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/kashfsiddiqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:kashfsiddiqui@utexas.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          
          {/* Hero Band - Edge-to-edge rounded card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-4 md:mx-8 lg:mx-12"
          >
            <RoundedCard
              imageSrc="/images/Portfolio/Spot Head/Full Head Render (Hero View).png"
              alt="AMRL Spot Head Servo-Actuated Payload & Sensor Mount"
              badge="AMRL • Mechatronics • Sensors"
              colorScheme="spothead"
            >
              {/* warm yellow gradient + reduced dark overlay for readability */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{background: 'linear-gradient(180deg, rgba(255, 240, 170, 0.0) 0%, rgba(0, 0, 0, 0.35) 100%)'}} />
              <div className="relative max-w-2xl flex flex-col justify-center min-h-[18rem] md:min-h-[24rem]">
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
                  AMRL Spot Head
                </h1>
                <h2 className="font-playfair text-2xl md:text-3xl font-semibold mb-6 text-spothead-accent">
                  Servo-Actuated Payload & Sensor Mount
                </h2>
                <p className="font-inter text-lg opacity-90 mb-2 text-[#E5E7EB]">
                  Built servo-actuated head and modular sensor mounts for Boston Dynamics Spot.
                </p>
                <p className="font-inter text-lg opacity-90 mb-8 text-[#E5E7EB]">
                  Dynamixel pan-tilt, LiDAR + camera pods, and touchscreen HRI — packaged for fast swaps.
                </p>
                <motion.button
                  className="bg-spothead-accent text-[#0F172A] font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:bg-spothead-accent50 active:bg-[#CBB753] shadow-[0_10px_30px_rgba(0,0,0,0.05)] inline-flex items-center gap-2 max-w-fit self-start"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Gallery
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.button>
              </div>
            </RoundedCard>
          </motion.div>

          {/* Info Sections - Four cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="bg-[#F9FAFB] rounded-3xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="font-playfair text-xl font-bold mb-2 text-spothead-accent600">Actuation</h3>
              <p className="font-inter text-sm text-gray-700">
                Dynamixel XM/XW pan-tilt, ±170° pan, ±45° tilt
              </p>
            </div>
            <div className="bg-[#F9FAFB] rounded-3xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="font-playfair text-xl font-bold mb-2 text-spothead-accent600">Sensors</h3>
              <p className="font-inter text-sm text-gray-700">
                LiDAR puck + dual pods + touchscreen HRI
              </p>
            </div>
            <div className="bg-[#F9FAFB] rounded-3xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="font-playfair text-xl font-bold mb-2 text-spothead-accent600">Mounting</h3>
              <p className="font-inter text-sm text-gray-700">
                Aluminum base + pan tower, M4/M5 hardware
              </p>
            </div>
            <div className="bg-[#F9FAFB] rounded-3xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h3 className="font-playfair text-xl font-bold mb-2 text-spothead-accent600">Harnessing</h3>
              <p className="font-inter text-sm text-gray-700">
                Bundled cabling w/ strain relief
              </p>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F9FAFB] rounded-4xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Key Highlights</h2>
              <p className="font-inter text-lg text-spothead-accent">What we accomplished</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Actuation: Dynamixel XM/XW pan-tilt, ±170° pan, ±45° tilt",
                "Sensors: LiDAR puck + dual pods + touchscreen HRI",
                "Mounting: Aluminum base + pan tower, M4/M5 hardware",
                "Harnessing: Bundled cabling w/ strain relief"
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-3 h-3 rounded-full bg-spothead-accent mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-gray-800">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gallery carousel */}
          <motion.div
            id="gallery"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="text-center">
              <SectionTitle>Project Gallery</SectionTitle>
              <p className="font-inter text-lg text-spothead-accent mt-4">
                Assembly renders and component details
              </p>
            </div>

            {/* Horizontal scroll gallery */}
            <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                {[
                  {
                    src: '/images/Portfolio/Spot Head/LiDAR & Sensor Pods.png',
                    alt: 'Dual sensor pods with matte finish and metallic LiDAR puck',
                    title: 'LiDAR & Sensor Pods',
                    caption: 'Dual sensor pods with matte finish and metallic LiDAR puck.'
                  },
                  {
                    src: '/images/Portfolio/Spot Head/Mounting Base & Pan Tower Assembly.png',
                    alt: 'Base plate and tower interface hardware',
                    title: 'Mounting Base & Pan Tower Assembly',
                    caption: 'Base plate and tower interface hardware.'
                  },
                  {
                    src: '/images/Portfolio/Spot Head/Tilt Yoke.png',
                    alt: 'Eye bezels, smile insert, fillets, and curvature continuity',
                    title: 'Tilt Yoke + Face Shell Close-Up',
                    caption: 'Eye bezels, smile insert, fillets, and curvature continuity.'
                  },
                  {
                    src: '/images/Portfolio/Spot Head/Fastener Hardware (Macro).png',
                    alt: 'M4/M5 countersunk bolts, washers, and corner fillet plate',
                    title: 'Fastener Hardware (Macro)',
                    caption: 'M4/M5 countersunk bolts, washers, and corner fillet plate.'
                  },
                  {
                    src: '/images/Portfolio/Spot Head/Full Head Render (Hero View).png',
                    alt: 'Hero view of full assembly and servo-actuated head',
                    title: 'Spot Head',
                    caption: 'Hero view of full assembly and servo-actuated head.'
                  },
                  {
                    src: '/images/Portfolio/Spot Head/Cable Bundling Detail.png',
                    alt: 'Harness routing, zip ties, grommets, strain relief',
                    title: 'Cable Bundling Detail',
                    caption: 'Harness routing, zip ties, grommets, strain relief.'
                  }
                ].map((item, index) => (
                  <div key={index} className="snap-center flex-shrink-0">
                    <div className="relative w-80 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] group bg-white">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-95 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-inter text-lg font-semibold mb-2 text-spothead-accent">{item.title}</h3>
                        <p className="font-inter text-sm text-[#334155]">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll cue */}
            <div className="flex justify-center">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-spothead-accent rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <div className="bg-white rounded-4xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-[#0F172A]">Next Steps</h2>
              <p className="font-inter text-lg text-[#334155] mb-8 max-w-3xl mx-auto">
                The next phase will focus on field testing the servo-actuated head system, refining sensor integration for improved HRI feedback, and optimizing the modular mounting system for rapid payload swaps in operational scenarios.
              </p>
              <motion.button
                onClick={() => window.location.href = "mailto:kashfsiddiqui@utexas.edu"}
                className="bg-spothead-accent text-[#0F172A] font-inter font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:bg-spothead-accent600 active:bg-[#CBB753] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(249,226,122,0.5)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact me
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-playfair text-gray-600 text-sm">
            © 2024 Kashf Siddiqui
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpotHeadPage;

