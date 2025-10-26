import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

// Carousel Component
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      type: 'image',
      src: '/images/Portfolio/Spot Payload/Spot_Walking.png',
      alt: 'Boston Dynamics Spot robot walking with integrated sensor payload',
      caption: 'Spot robot in operational testing with integrated sensor suite'
    },
    {
      type: 'video',
      src: '/images/Portfolio/Spot Payload/Spot_Deployement_Testing.mp4',
      alt: 'Spot deployment testing video',
      caption: 'Deployment testing - Spot walking with integrated sensor suite'
    },
    {
      type: 'image',
      src: '/images/Portfolio/Spot Payload/velodyne-vlp16 v1_1920x1080.png',
      alt: 'Velodyne VLP-16 LiDAR sensor module detail',
      caption: 'Velodyne VLP-16 LiDAR sensor integration'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative">
      <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
        {slides[currentSlide].type === 'image' ? (
          <img
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={slides[currentSlide].src}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
        )}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
          <p className="text-center text-sm claude-font">
            {slides[currentSlide].caption}
          </p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description, image, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold claude-font text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 claude-font text-sm leading-relaxed">{description}</p>
      
      {/* Hover Image Preview */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

// Main Spot Page Component
const SpotPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "Sensor mount and balance",
      description: "Precision-engineered mounting system ensuring optimal sensor positioning and payload stability.",
      image: "/images/Portfolio/Spot Payload/Dual_Zed_Mount_v1_1920x1080.png"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Stereo and depth capture",
      description: "Advanced stereo vision system providing real-time depth perception and 3D mapping capabilities.",
      image: "/images/Portfolio/Spot Payload/ZEDX v1_1920x1080.png"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: "LiDAR mapping",
      description: "High-resolution LiDAR integration for accurate environmental mapping and obstacle detection.",
      image: "/images/Portfolio/Spot Payload/velodyne-vlp16 v1_1920x1080.png"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Power and cabling",
      description: "Robust power management system with clean cable routing for reliable field operation.",
      image: "/images/Portfolio/Spot Payload/Buck-Boost_12V_v1_1920x1080.png"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "Jetson control bring-up",
      description: "NVIDIA Jetson integration for high-performance edge computing and real-time control algorithms.",
      image: "/images/Portfolio/Spot Payload/ZEDLink_Duo_Rev1_1920x1080.png"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Testing in the loop",
      description: "Comprehensive testing framework ensuring system reliability and performance validation.",
      image: "/images/Portfolio/Spot Payload/Battery_Holder_v6_1920x1080.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a
              href="/"
              className="flex items-center gap-3 text-lg claude-font text-gray-900 hover:text-orange-500 transition-colors duration-200"
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
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/kashfsiddiqui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:kashfsiddiqui@utexas.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="pt-20 py-16 md:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <div className="text-orange-500 text-sm font-medium claude-font mb-4">
                AMRL Project
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold claude-font text-gray-900 mb-6 leading-tight">
                Boston Dynamics Spot: Perception and Control
              </h1>
              <p className="text-lg text-gray-600 claude-font mb-8 leading-relaxed">
                We integrated LiDAR, depth, and stereo vision on a stabilized payload and brought up perception and control on Spot for field testing. The team iterated mounts in Fusion, balanced the payload, and cleaned wiring after each run.
              </p>
              <button
                onClick={() => document.getElementById('media')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium claude-font rounded-lg transition-colors duration-200"
              >
                Watch demo
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </motion.div>

            {/* Media Content */}
            <motion.div variants={itemVariants} className="lg:col-span-6">
              <div className="relative">
                <img
                  src="/images/Portfolio/Spot Payload/spot_full_assembly_1920x1080.png"
                  alt="Boston Dynamics Spot robot with integrated sensor payload assembly"
                  className="w-full h-auto rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Problem/Solution Band */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="py-16 md:py-20 bg-gray-50"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold claude-font text-gray-900 mb-8">
                What we built
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 mr-4 flex-shrink-0"></div>
                  <p className="claude-font text-gray-700">Integrated multi-sensor payload with LiDAR, stereo cameras, and depth sensors</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 mr-4 flex-shrink-0"></div>
                  <p className="claude-font text-gray-700">Stabilized mounting system ensuring optimal sensor positioning and balance</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 mr-4 flex-shrink-0"></div>
                  <p className="claude-font text-gray-700">Real-time perception and control algorithms for autonomous navigation</p>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <img
                src="/images/Portfolio/Spot Payload/top_lvl_p3737_01142022_1920x1080.png"
                alt="Top-level board assembly showing integrated sensor control systems"
                className="w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature Tiles */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="py-16 md:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold claude-font text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 claude-font max-w-2xl mx-auto">
              Comprehensive sensor integration and control systems designed for autonomous robotics applications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                image={feature.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Media Story */}
      <motion.section
        id="media"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="py-16 md:py-20 bg-gray-50"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold claude-font text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-lg text-gray-600 claude-font">
              See the Spot robot in action with integrated sensor payload
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Carousel />
          </motion.div>
        </div>
      </motion.section>

      {/* How we built it */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="py-16 md:py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h2 className="text-2xl md:text-3xl font-bold claude-font text-gray-900 mb-6">
                How we built it
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 mr-4 flex-shrink-0"></div>
                  <p className="claude-font text-gray-700">CAD modeling and simulation in Fusion 360</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 mr-4 flex-shrink-0"></div>
                  <p className="claude-font text-gray-700">Iterative design and testing methodology</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-orange-500 mt-3 mr-4 flex-shrink-0"></div>
                  <p className="claude-font text-gray-700">Field deployment and real-world validation</p>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <img
                src="/images/Portfolio/Spot Payload/GL-AR750_v1_1920x1080.png"
                alt="GL-AR750 networking module integration for sensor communication"
                className="w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Footer */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="py-16 md:py-20 bg-orange-50"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold claude-font text-gray-900 mb-6">
              Want more build notes or CAD renders?
            </h2>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium claude-font rounded-lg transition-colors duration-200"
            >
              Contact me
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 claude-font text-sm">
            © 2024 Kashf Siddiqui
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SpotPage;
