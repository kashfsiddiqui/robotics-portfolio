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

          {/* HERO */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
            <div className="relative rounded-4xl shadow-soft overflow-hidden bg-gradient-to-br from-hcrl-accent50 via-white to-hcrl-accent200/30">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #7F6CD9 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
              <div className="relative p-8 md:p-12 lg:p-16">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wide rounded-full bg-hcrl-accent200 text-hcrl-accent600">HCRL • Motion Planning • Control</span>
                </div>
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  HCRL Draco-3 Bipedal Robot Planning
                </h1>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 text-hcrl-accent">
                  HCRL • Motion Planning • Control
                </h2>
                <p className="font-inter text-lg text-gray-700 mt-6 max-w-2xl">
                  Developed and tested reinforcement-learning-based gait and GPU-accelerated motion planning for humanoid robot in simulation.
                </p>
                <motion.button onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })} className="mt-8 inline-flex items-center px-8 py-4 bg-hcrl-accent hover:bg-hcrl-accent200 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  View Research
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* RESEARCH OVERVIEW */}
          <motion.section id="research" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-3xl shadow-md bg-gray-50 px-10 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Research Overview</h2>
                <p className="font-inter text-lg text-gray-600">What we explored</p>
              </div>
              <ul className="space-y-4 font-inter text-gray-700 leading-relaxed">
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Selected to research GPU-accelerated sampling-based motion planning for humanoid robots, enabling real-time 100 Hz replanning.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Achieved 10–30 ms replanning latency in cluttered 7-DoF scenes, delivering ~20× faster motion plans vs. OMPL CPU baseline.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Parallelized GPU collision checks with BVH ray casting & CUB/libcu++, boosting motion-planning throughput ~5×.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Integrated perception-in-loop replanning, fusing RGB-D data at ~30 Hz to update obstacles and replan in &lt; 100 ms.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p>Optimized CUDA kernels (shared memory reuse, kernel fusion, warp ops), reducing GPU time ~40% and stabilizing latency.</p>
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
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-hcrl-accent">Simulation & Infrastructure</h3>
                <ul className="space-y-3 font-inter text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Implemented PyBullet/Gazebo environments with DRACO-3 URDF.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Tuned reward functions for gait stability, velocity, and energy efficiency.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Used MoveIt 2 for ROS-based trajectory visualization and debugging.</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-hcrl-accent">GPU Algorithms & Control</h3>
                <ul className="space-y-3 font-inter text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Used PPO (Proximal Policy Optimization) for RL-based gait adaptation.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Designed GPU-accelerated collision detection via BVH + ray tracing.</p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                    <p>Implemented CUDA-based planners with CUB/libcu++ and shared-memory optimization.</p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* PROJECT ROADMAP */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-3xl shadow-md bg-white px-10 py-16">
            <div className="max-w-4xl mx-auto font-inter">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">GPU Motion Planning Algorithm Research – A Road Map</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <h3 className="font-playfair text-xl font-semibold mb-4">Objective</h3>
                <p className="mb-6">Design GPU-accelerated motion planning algorithms for humanoid robots, enabling real-time replanning.</p>
                
                <h3 className="font-playfair text-xl font-semibold mb-4">Method Options</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>RGB-D world representation for perception-in-loop planning.</li>
                  <li>Surface-mounted scanner for environment reconstruction and path planning.</li>
                </ul>
                
                <h3 className="font-playfair text-xl font-semibold mb-4">Expected Outcomes</h3>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Hands-on experience designing GPU-accelerated motion-planning algorithms.</li>
                  <li>Understanding of CUDA kernels, CMake build systems, and benchmarking tools.</li>
                  <li>Mastery of MoveIt 2 and OMPL frameworks with real hardware integration.</li>
                </ul>
                
                <h3 className="font-playfair text-xl font-semibold mb-4">Related Works</h3>
                <p className="mb-2">Professors – Marco Pavone (FMT*), Zachery Kingston (OMPL, VAMP), Jonathan Gammell (IRRT*, BIT*, AIT*), Lydia Kavraki (PRM, OMPL).</p>
                <p className="mb-2">Key papers:</p>
                <ul className="list-disc pl-6 mb-6 space-y-1">
                  <li>[1] ARMOR: Egocentric Perception for Humanoid Robot Collision Avoidance (2024).</li>
                  <li>[2] Hardware-Accelerated Ray Tracing for Collision Detection on GPUs (ICRA 2025).</li>
                </ul>
                
                <h3 className="font-playfair text-xl font-semibold mb-4">Infrastructure Notes</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SSH server (host: desktop-ssz-lab : 2222) for GPU VM access via Tailscale.</li>
                  <li>Persistent storage under <code className="bg-gray-100 px-1 rounded">/home/hcrl</code> and <code className="bg-gray-100 px-1 rounded">/workspace</code>.</li>
                  <li>Docker VNC setup with Nsight Compute, MoveIt Assistant, RViz, nvcc, and CMake ready.</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* WEEKLY PROGRESS */}
          <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="rounded-3xl shadow-md bg-gray-50 px-10 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">Research Progress (Weeks 1 – 5)</h2>
              <ul className="space-y-4 font-inter text-gray-700">
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p><strong>Week 1:</strong> ROS + MoveIt environment setup, Tailscale connection, SSH key exchange.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p><strong>Week 2:</strong> Compiled MoveIt 2, configured CUDA virtual machine.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p><strong>Week 3:</strong> Activated GitHub Copilot Pro, tested Linux commands and VS Code integration.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p><strong>Week 4:</strong> Completed ROS tutorials, built MoveIt planning scene for JAKA ZU12.</p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-3 h-3 rounded-full bg-hcrl-accent mt-2 flex-shrink-0"></div>
                  <p><strong>Week 5:</strong> Built first CUDA CMake project in VM and tested forward kinematics kernel.</p>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* NEXT STEPS */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="text-center">
            <div className="bg-white rounded-4xl p-8 md:p-12 shadow-soft">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Next Steps</h2>
              <p className="font-inter text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                The next phase involves expanding GPU motion planning to DRACO-3’s full-body dynamics, integrating RGB-D sensor feedback for adaptive planning, and benchmarking latency on real-world humanoid experiments.
              </p>
              <motion.button onClick={() => (window.location.href = 'mailto:kashfsiddiqui@utexas.edu')} className="bg-hcrl-accent hover:bg-hcrl-accent200 text-white font-medium px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Contact me
              </motion.button>
            </div>
          </motion.div>

          {/* PROJECT GALLERY */}
          <motion.div id="gallery" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: 'easeOut' }} className="space-y-8">
            <div className="text-center">
              <SectionTitle>Project Gallery</SectionTitle>
            </div>
            <div className="w-full">
              <div className="flex flex-wrap justify-center gap-6 pb-4">
                <div className="snap-center flex-shrink-0">
                  <div className="relative w-80 h-48 rounded-3xl overflow-hidden shadow-soft bg-gradient-to-br from-hcrl-accent to-hcrl-accent600">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <p className="text-white text-sm font-medium text-center">GPU-accelerated motion planning simulation in Gazebo</p>
                    </div>
                  </div>
                </div>
                <div className="snap-center flex-shrink-0">
                  <div className="relative w-80 h-48 rounded-3xl overflow-hidden shadow-soft bg-gradient-to-br from-hcrl-accent to-hcrl-accent600">
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <p className="text-white text-sm font-medium text-center">DRACO-3 bipedal robot motion planning visualization</p>
                    </div>
                  </div>
                </div>
              </div>
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
