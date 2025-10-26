import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl font-medium text-gray-900 mb-12"
          >
            About
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  I build robots that move, think, and learn. I've been deep in drones, 
                  humanoids, and mechanics — pushing where hardware meets autonomy.
                </p>
                
                <p>
                  At UT Austin I explore how physical systems and perception merge — 
                  because in robotics the world is the playground, not a lab.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center">
              <div className="w-64 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="text-sm mb-2">Profile Photo</div>
                  <div className="text-xs">/images/kashf_profile.webp</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
