import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const SpotProject = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const carouselImages = [
    {
      src: "/images/portfolio/spot/Dual_Zed_Mount_v1_1920x1080.png",
      caption: "Sensor mount bracket design (Fusion 360)"
    },
    {
      src: "/images/portfolio/spot/ZEDLink_Duo_Rev1_1920x1080.png",
      caption: "ZEDLink Duo sensor mount revision"
    },
    {
      src: "/images/portfolio/spot/spot_payload_mount_bracket_1920x1080.png",
      caption: "Payload mount plate installed on Spot"
    },
    {
      src: "/images/portfolio/spot/Battery_Holder_v6_1920x1080.png",
      caption: "Battery and adapter subsystem design"
    },
    {
      src: "/images/portfolio/spot/Buck-Boost_12V_v1_1920x1080.png",
      caption: "Power subsystem: Buck-Boost 12 V module"
    },
    {
      src: "/images/portfolio/spot/velodyne-vlp16_v1_1920x1080.png",
      caption: "Sensor detail: Velodyne VLP-16 module"
    }
  ];

  const thumbnailImages = [
    {
      src: "/images/portfolio/spot/top_lvl_p3737_01142022_1920x1080.png",
      caption: "Top-level board assembly"
    },
    {
      src: "/images/portfolio/spot/ZEDX_v1_1920x1080.png",
      caption: "ZEDX module mock-up"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0">
          <img
            src="/images/portfolio/spot/spot_full_assembly_1920x1080.png"
            alt="Boston Dynamics Spot with sensor payload"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 claude-font"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Boston Dynamics Spot
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-3xl font-semibold mb-8 claude-font"
            style={{ color: '#FF7F00' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Perception & Control
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl opacity-90 claude-font"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            AMRL • LiDAR • Depth • Camera Integration
          </motion.p>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants} className="mb-16">
            <h2
              className="text-4xl font-bold mb-8 claude-font"
              style={{ color: '#FF7F00' }}
            >
              Project Overview
            </h2>
            <p
              className="text-lg leading-relaxed text-gray-700 claude-font"
            >
              At the Autonomous Mobile Robotics Lab (AMRL) our team collaborated to design, build and integrate a custom sensor payload suite for the Spot robot platform. We modelled the sensor mount and adapter interfaces in Fusion 360, integrated LiDAR, RGB and depth cameras into the system, coordinated calibration and testing across mechanical, electrical and software disciplines, and iterated our design based on results from physical trials. As we move into the next phase, we will focus on full autonomous behaviour and developing a more modular sensor platform that supports rapid payload swaps and field deployment.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Carousel Section */}
      <motion.section
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="mb-12">
            <h2
              className="text-4xl font-bold text-center mb-8 claude-font"
              style={{ color: '#FF7F00' }}
            >
              Project Gallery
            </h2>
          </motion.div>

          {/* Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <img
                src={carouselImages[currentSlide].src}
                alt={carouselImages[currentSlide].caption}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Carousel Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 claude-font"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110 claude-font"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <p className="text-center text-lg claude-font">
                  {carouselImages[currentSlide].caption}
                </p>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnail Images */}
          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {thumbnailImages.map((image, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <p className="text-center mt-4 text-gray-600 claude-font">
                  {image.caption}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Video Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="relative overflow-hidden rounded-lg">
              <video
                className="w-full h-auto"
                controls
                poster="/images/portfolio/spot/Spot_Walking.png"
              >
                <source src="/images/portfolio/spot/Spot_Deployment_Testing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-center mt-4 text-gray-600 claude-font">
              Deployment test video – Spot walking with integrated sensor suite
            </p>
          </motion.div>

          {/* Live Test Image */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/images/portfolio/spot/Spot_Walking.png"
                alt="Live test image – Spot in operational scenario"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
            <p className="text-center mt-4 text-gray-600 claude-font">
              Live test image – Spot in operational scenario
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Key Highlights Section */}
      <motion.section
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <h2
              className="text-4xl font-bold mb-12 text-center claude-font"
              style={{ color: '#FF7F00' }}
            >
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "CAD design & mechanical integration using Fusion 360",
                "Sensor fusion: LiDAR + RGB + Depth cameras",
                "Modular hardware architecture for rapid payload swaps",
                "Field-testing and system iteration by the multidisciplinary team"
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4"
                >
                  <div
                    className="w-2 h-2 rounded-full mt-3 flex-shrink-0"
                    style={{ backgroundColor: '#FF7F00' }}
                  ></div>
                  <p className="text-lg text-gray-700 claude-font">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Next Steps Section */}
      <motion.section
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div variants={itemVariants}>
            <h2
              className="text-4xl font-bold mb-8 claude-font"
              style={{ color: '#FF7F00' }}
            >
              Next Steps
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 claude-font">
              The next phase will focus on enabling full autonomy using the integrated sensor suite, refining the hardware platform for field-deployable ruggedness, and enabling rapid sensor payload changes in real-world warehouse and logistics applications.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SpotProject;
