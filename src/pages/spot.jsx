import React, { useEffect, useRef } from 'react';
import { SpotCard, SpotOverlay, SpotPill, SpotGallery } from '../components/spot/SpotComponents';
import '../styles/spot.css';

const SpotPage = () => {
  const revealRefs = useRef([]);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRevealRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // Gallery images
  const galleryImages = [
    {
      src: '/images/Portfolio/Spot Payload/Dual_Zed_Mount_v1_1920x1080.png',
      alt: 'Sensor mount bracket design in Fusion 360',
      caption: 'Payload bracket'
    },
    {
      src: '/images/Portfolio/Spot Payload/ZEDLink_Duo_Rev1_1920x1080.png',
      alt: 'ZEDLink Duo sensor mount revision',
      caption: 'Sensor alignment'
    },
    {
      src: '/images/Portfolio/Spot Payload/Battery_Holder_v6_1920x1080.png',
      alt: 'Battery and adapter subsystem design',
      caption: 'Power system'
    },
    {
      src: '/images/Portfolio/Spot Payload/Buck-Boost_12V_v1_1920x1080.png',
      alt: 'Power subsystem Buck-Boost 12V module',
      caption: 'Control module'
    }
  ];

  return (
    <div className="spot-page min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="/"
              className="flex items-center gap-3 text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-300"
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {/* Hero Card */}
          <SpotCard 
            ref={addToRevealRefs}
            className="spot-reveal"
          >
            <div className="spot-image-container">
              <img
                src="/images/Portfolio/Spot Payload/spot_full_assembly_1920x1080.png"
                alt="Boston Dynamics Spot robot with integrated sensor payload assembly"
              />
              <SpotOverlay>
                <SpotPill>AMRL Project</SpotPill>
                <h1>Boston Dynamics Spot</h1>
                <h2 style={{ color: 'var(--accent-spot)' }}>Perception & Control</h2>
                <p className="text-sm opacity-90 max-w-md">
                  We integrated LiDAR, depth, and stereo vision on a stabilized payload and brought up perception and control on Spot for field testing.
                </p>
              </SpotOverlay>
            </div>
          </SpotCard>

          {/* Three Feature Cards */}
          <div 
            ref={addToRevealRefs}
            className="spot-reveal spot-grid spot-grid--3-col"
          >
            <SpotCard>
              <div className="spot-image-container">
                <img
                  src="/images/Portfolio/Spot Payload/Spot_Walking.png"
                  alt="Spot robot in operational testing"
                  loading="lazy"
                />
                <SpotOverlay>
                  <h3>Proven Field Testing</h3>
                  <p className="text-sm opacity-90">
                    On-robot runs with wiring cleanup and stability validation in real-world conditions.
                  </p>
                </SpotOverlay>
              </div>
            </SpotCard>

            <SpotCard>
              <div className="spot-image-container">
                <img
                  src="/images/Portfolio/Spot Payload/velodyne-vlp16 v1_1920x1080.png"
                  alt="Velodyne VLP-16 LiDAR sensor integration"
                  loading="lazy"
                />
                <SpotOverlay>
                  <h3>Sensor Fusion</h3>
                  <p className="text-sm opacity-90">
                    LiDAR + depth + RGB integration for comprehensive environmental perception.
                  </p>
                </SpotOverlay>
              </div>
            </SpotCard>

            <SpotCard>
              <div className="spot-image-container">
                <img
                  src="/images/Portfolio/Spot Payload/top_lvl_p3737_01142022_1920x1080.png"
                  alt="Top-level board assembly showing modular design"
                  loading="lazy"
                />
                <SpotOverlay>
                  <h3>Designed for Modularity</h3>
                  <p className="text-sm opacity-90">
                    Quick-swap mounts and payload stability for rapid field deployment.
                  </p>
                </SpotOverlay>
              </div>
            </SpotCard>
          </div>

          {/* Gallery Card */}
          <SpotCard 
            ref={addToRevealRefs}
            className="spot-reveal"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6">Project Gallery</h3>
              <SpotGallery images={galleryImages} />
            </div>
          </SpotCard>

          {/* Highlights Card */}
          <SpotCard 
            ref={addToRevealRefs}
            className="spot-reveal"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6">Key Highlights</h3>
              <div className="spot-highlights">
                <div className="spot-highlight-item">
                  <div className="spot-highlight-bullet"></div>
                  <p>CAD design & mechanical integration using Fusion 360</p>
                </div>
                <div className="spot-highlight-item">
                  <div className="spot-highlight-bullet"></div>
                  <p>Sensor fusion LiDAR + RGB + Depth cameras</p>
                </div>
                <div className="spot-highlight-item">
                  <div className="spot-highlight-bullet"></div>
                  <p>Modular hardware architecture for rapid payload swaps</p>
                </div>
                <div className="spot-highlight-item">
                  <div className="spot-highlight-bullet"></div>
                  <p>Field testing and system iteration by the multidisciplinary team</p>
                </div>
              </div>
            </div>
          </SpotCard>

          {/* Next Steps Card */}
          <SpotCard 
            ref={addToRevealRefs}
            className="spot-reveal"
          >
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                The next phase will focus on enabling full autonomy using the integrated sensor suite, 
                refining the hardware platform for field-deployable ruggedness, and enabling rapid 
                sensor payload changes in real world warehouse and logistics applications.
              </p>
              <button className="spot-button">
                Contact me
              </button>
            </div>
          </SpotCard>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 text-sm">
            © 2024 Kashf Siddiqui
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpotPage;