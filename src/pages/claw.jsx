import React from 'react';
import { motion } from 'framer-motion';
import { RoundedCard } from '../components/ui/RoundedCard';
import { SectionTitle } from '../components/ui/SectionTitle';

const ClawPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Local nav/header mirrors Spot/Cobot pages */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="/" className="flex items-center gap-3 text-lg font-playfair text-gray-900 hover:text-gray-600 transition-colors duration-300">
              <img src="/images/Landing Page Graphics/logo.png" alt="KS Logo" className="w-8 h-8 rounded-full object-cover" />
              <span>Kashf Siddiqui</span>
            </a>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/kashfsiddiqui" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/kashfsiddiqui" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:kashfsiddiqui@utexas.edu" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

          {/* HERO CARD */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center rounded-4xl shadow-soft overflow-hidden bg-white">
              <div className="p-8 md:p-12">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full bg-claw-accent200 text-claw-accent600">TAR PROJECT</span>
                </div>
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Texas Aerial Robotics
                  <br />
                  Drone Claw Retrieval System
                </h1>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-claw-accent">
                  UAV • Manipulation
                </h2>
                <p className="font-inter text-lg text-gray-700 mt-6 max-w-2xl">
                  We designed and implemented a claw-equipped UAV for autonomous object pickup and delivery. The system combines landing gear, grasping, and payload handling in one mechanism, so the drone can land, stabilize, grab, and lift without needing a full manipulator arm.
                </p>
                <motion.button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 inline-flex items-center px-8 py-4 bg-claw-accent hover:bg-claw-accent200 text-gray-900 font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Gallery
                </motion.button>
              </div>
              <div className="relative h-full">
                <img
                  src="/images/Portfolio/Claw Retrieval/UAV Frame & Payload Integration.png"
                  alt="UAV frame with claw-ready landing gear and electronics bay"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* MINI CARD ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RoundedCard
              imageSrc="/images/Portfolio/Claw Retrieval/Claw Mechanism Prototype.png"
              alt="Claw mechanism prototype with dual-rail actuation"
              badge="MECHANISM"
              colorScheme="claw"
            >
              <h3 className="font-playfair text-2xl font-semibold">Integrated Claw + Landing Gear</h3>
              <p className="font-inter text-sm opacity-90 mt-2">Dual-use mechanism handles landing stability and object grasping without adding a separate arm.</p>
            </RoundedCard>

            <RoundedCard
              imageSrc="/images/Portfolio/Claw Retrieval/UAV Frame & Payload Integration.png"
              alt="UAV frame and payload integration with claw-ready gear"
              badge="STABILITY"
              colorScheme="claw"
            >
              <h3 className="font-playfair text-2xl font-semibold">Flight-Endurance Tuning</h3>
              <p className="font-inter text-sm opacity-90 mt-2">Servo actuation and weight placement were tuned for balance, extending flight time about 18 percent in testing.</p>
            </RoundedCard>

            <RoundedCard
              imageSrc="/images/Portfolio/Claw Retrieval/Claw Retrieval Team.png"
              alt="Team conducting autonomous pickup test with UAV"
              badge="FIELD TESTING"
              colorScheme="claw"
            >
              <h3 className="font-playfair text-2xl font-semibold">Autonomous Retrieval Trials</h3>
              <p className="font-inter text-sm opacity-90 mt-2">Ran 5+ autonomous pickup tests and improved payload grip by about 25 percent in real retrieval scenarios.</p>
            </RoundedCard>
          </div>

          

          {/* SUMMARY PARAGRAPH ABOVE GALLERY */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="rounded-3xl shadow-md bg-gray-50 px-10 py-16 mt-4"
          >
            <div className="max-w-3xl mx-auto font-inter">
              <p className="text-gray-700 leading-relaxed text-center">
                Our team is part of Texas Aerial Robotics. We are building a drone that can pick up objects and deliver them. The core idea is a 2-in-1 landing gear and claw so the UAV can land, brace, grab a payload, and lift again. I led design work on the claw mechanism and early integration. We tuned servo actuation, center of mass, and frame stability so the aircraft could hold a load without tipping. We also started a motor driver PCB with PID control for the claw and added a searchlight so retrieval can still work in low light. We validated grip force, pickup accuracy, and hover stability in more than five autonomous retrieval tests.
              </p>
            </div>
          </motion.section>

          {/* PROJECT GALLERY */}
          <motion.div id="gallery" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="space-y-8">
            <div className="text-center">
              <SectionTitle>Project Gallery</SectionTitle>
              <p className="font-inter text-lg text-gray-600 mt-4">See the claw retrieval platform in testing and CAD</p>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-center gap-6 pb-4">
                {[
                  { src: '/images/Portfolio/Claw Retrieval/UAV Frame & Payload Integration.png', alt: 'Quadrotor frame with claw-ready landing gear and electronics bay', caption: 'Quadrotor frame with claw-ready landing gear and electronics bay' },
                  { src: '/images/Portfolio/Claw Retrieval/Claw Mechanism Prototype.png', alt: 'Claw mechanism prototype with dual-rail actuation', caption: 'Claw mechanism prototype with dual-rail actuation' },
                  { src: '/images/Portfolio/Claw Retrieval/Claw Retrieval Team.png', alt: 'Subsystem team after successful pickup test', caption: 'Subsystem team after successful pickup test' },
                ].map((item, index) => (
                  <div key={index} className="snap-center flex-shrink-0">
                    <div className="relative w-80 h-48 rounded-3xl overflow-hidden shadow-soft group bg-white">
                      <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-95 group-hover:scale-105" loading="lazy" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <p className="text-white text-sm font-medium">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          

          {/* KEY HIGHLIGHTS */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-gray-50 rounded-4xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Key Highlights</h2>
              <p className="font-inter text-lg text-gray-600">What we accomplished</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                "Designed and prototyped the drone’s claw mechanism, improving payload grip about 25 percent and stability across 5+ autonomous pickup tests",
                "Integrated landing gear and grasping into one assembly to reduce added mass and keep the airframe balanced under load",
                "Tuned servo actuation and center of mass to extend flight time about 18 percent and improve retrieval accuracy",
                "Started a dedicated driver PCB with PID motor control and added a searchlight module for low light operation",
              ].map((highlight, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-claw-accent mt-2 flex-shrink-0"></div>
                  <p className="font-inter text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* NEXT STEPS */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-center">
            <div className="bg-white rounded-4xl p-8 md:p-12 shadow-soft">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Next Steps</h2>
              <p className="font-inter text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Next we are working on fully autonomous pickup and drop-off flights with the integrated claw, adding onboard sensing to confirm when an object is secured, and stress testing the landing gear under repeated grabs. We are also finishing the motor driver PCB and validating the searchlight module for low light retrieval.
              </p>
              <motion.button onClick={() => (window.location.href = 'mailto:kashfsiddiqui@utexas.edu')} className="bg-claw-accent hover:bg-claw-accent200 text-gray-900 font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Contact me
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>

      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-inter text-gray-600 text-sm">© 2024 Kashf Siddiqui</p>
        </div>
      </footer>
    </div>
  );
};

export default ClawPage;
