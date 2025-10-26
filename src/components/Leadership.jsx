import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const leadership = [
    {
      title: "Texas Social Impact Consulting",
      role: "Academic Director",
      description: "Leading academic initiatives and strategic partnerships for social impact consulting projects across Texas universities."
    },
    {
      title: "Longhorn Racing (Baja)",
      role: "Dynamics Engineer",
      description: "Designing and optimizing vehicle dynamics systems for competitive off-road racing, focusing on suspension and handling performance."
    },
    {
      title: "USA Water Ski",
      role: "Competitive Athlete",
      description: "Competing at national level in water skiing, demonstrating dedication, precision, and performance under pressure."
    }
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50">
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
            Leadership & Experience
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <div className="text-sm text-primary font-medium">
                    {item.role}
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
