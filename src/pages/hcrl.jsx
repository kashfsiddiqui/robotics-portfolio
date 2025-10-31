import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/ui/SectionTitle';

const HCRLPage = () => {
  return (
    <div className="min-h-screen bg-white">
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

          {/* HERO WITH VIDEO */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="relative rounded-4xl overflow-hidden shadow-soft">
              <video
                src="/images/Portfolio/HCRL/HCRL.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-4xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full bg-hcrl-accent200 text-white">ARCHITECTURE</span>
                </div>
                <h2 className="text-white font-playfair text-4xl md:text-5xl font-semibold mb-4 leading-tight">
                  Proven Autonomy. Scalable Deployment.
                </h2>
                <p className="text-neutral-100 font-inter mt-3 max-w-2xl mb-6">
                  The team iterated mounts in Fusion, balanced the payload, and cleaned wiring after each run. Our modular hardware architecture enables rapid payload swaps for different operational scenarios.
                </p>
                <motion.button
                  onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-hcrl-accent hover:bg-hcrl-accent200 text-white px-6 py-2 rounded-full font-medium transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* RESEARCH OVERVIEW */}
          <motion.section id="research" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-3xl shadow-md bg-gray-50 px-10 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Research Overview</h2>
                <p className="font-inter text-lg text-gray-600">What We Explored</p>
              </div>
              <p className="font-inter text-gray-700 leading-relaxed mb-6">
                At the Human-Centered Robotics Lab (HCRL), I'm developing a GPU-accelerated motion-planning framework for the DRACO-3 humanoid robot, aimed at real-time 100 Hz replanning in cluttered environments. The project focuses on leveraging parallel computing to make humanoid motion planning as fast as perception.
              </p>
              <ul className="space-y-4 font-inter text-gray-700 leading-relaxed">
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Achieved 10–30 ms replanning latency in 7-DoF scenarios — about 20× faster than CPU-based OMPL benchmarks.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Parallelized collision checks with BVH ray-casting and CUB/libcu++, boosting throughput by nearly 5×.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Integrated RGB-D perception loops to enable obstacle-aware replanning at 30 Hz.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Optimized CUDA kernels using shared-memory reuse, warp operations, and kernel fusion, cutting GPU time by 40%.</p>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* TECHNICAL HIGHLIGHTS */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-gray-50 rounded-4xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Technical Highlights</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="font-playfair text-xl font-semibold mb-4 text-hcrl-accent">Simulation & Infrastructure</h3>
                <ul className="space-y-3 font-inter text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Built PyBullet and Gazebo environments using the DRACO-3 URDF model.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Tuned reward functions for gait stability, energy efficiency, and recovery behavior.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Used MoveIt 2 for trajectory visualization, validation, and ROS2 integration.</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="font-playfair text-xl font-semibold mb-4 text-hcrl-accent">GPU Algorithms & Control</h3>
                <ul className="space-y-3 font-inter text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Implemented GPU-based collision detection via BVH ray tracing and continuous contact checks.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Applied PPO reinforcement learning for adaptive gait generation in variable terrain.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Developed custom CUDA motion-planning kernels with CUB/libcu++ for high-throughput sampling.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* GPU MOTION-PLANNING ROADMAP */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-3xl shadow-md bg-white px-10 py-16">
            <div className="max-w-4xl mx-auto font-inter">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">GPU Motion-Planning Roadmap</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-hcrl-accent">Objective</h3>
                  <p>Enable real-time humanoid motion planning through GPU acceleration and perception-in-loop adaptation.</p>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-hcrl-accent">Approach</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use on-board RGB-D sensors to build point-cloud world representations for fast replanning.</li>
                    <li>Explore surface-mounted scanning to generate dense environment maps for higher-order stability control.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold mb-3 text-hcrl-accent">Expected Outcomes</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Mastery of CUDA-accelerated algorithm design and real-time optimization.</li>
                    <li>Proficiency in CMake, Nsight profiling, and GPU benchmarking workflows.</li>
                    <li>Integrated motion-planning pipeline for the physical DRACO-3 platform.</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* RESEARCH INFLUENCE */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-3xl shadow-md bg-gray-50 px-10 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">Research Influence</h2>
              <p className="font-inter text-gray-700 leading-relaxed mb-4">
                Inspired by the works of Marco Pavone (FMT*), Zachery Kingston (OMPL/VAMP), Jonathan Gammell (BIT*, AIT*), and Lydia Kavraki (PRM/OMPL).
              </p>
              <p className="font-inter text-gray-700 leading-relaxed mb-2">Key references include:</p>
              <ul className="list-disc pl-6 space-y-2 font-inter text-gray-700">
                <li>ARMOR: Egocentric Perception for Humanoid Robot Collision Avoidance (Kim et al., 2024)</li>
                <li>Hardware-Accelerated Ray Tracing for Collision Detection on GPUs (Sui et al., ICRA 2025)</li>
              </ul>
            </div>
          </motion.section>

          {/* RESEARCH INFRASTRUCTURE */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-3xl shadow-md bg-white px-10 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-center">Research Infrastructure</h2>
              <ul className="space-y-3 font-inter text-gray-700">
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>GPU server with ROS2 + MoveIt 2 + CUDA 12.x running in Docker VNC environment.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Accessed remotely via Tailscale SSH; persistent data in <code className="bg-gray-100 px-1 rounded">/home/hcrl</code> and <code className="bg-gray-100 px-1 rounded">/workspace</code>.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Verified compatibility with Nsight Compute, RViz, and MoveIt Setup Assistant.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Code version-controlled and backed up on GitHub Student Pro.</p>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* NEXT STEPS */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-center">
            <div className="bg-white rounded-4xl p-8 md:p-12 shadow-soft">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Next Steps</h2>
              <p className="font-inter text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                The next stage extends GPU motion planning to whole-body DRACO-3 control, fusing real-time perception with dynamic stability models. Upcoming work focuses on outdoor trajectory testing, sensor fusion under GPS-denied conditions, and benchmarking across NVIDIA architectures.
              </p>
              <motion.button onClick={() => (window.location.href = 'mailto:kashfsiddiqui@utexas.edu')} className="bg-hcrl-accent hover:bg-hcrl-accent200 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

export default HCRLPage;