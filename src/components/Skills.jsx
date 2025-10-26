import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
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

  const skills = [
    {
      title: "Robotics & Autonomy",
      technologies: ["ROS/ROS2", "SLAM", "Sensor Fusion", "Isaac Gym"]
    },
    {
      title: "Hardware & Design",
      technologies: ["SolidWorks", "Fusion 360", "ANSYS", "3D Printing"]
    },
    {
      title: "Embedded & Software",
      technologies: ["C/C++", "Python", "MATLAB/Simulink", "Linux"]
    },
    {
      title: "AI & ML",
      technologies: ["CUDA", "PyTorch", "TensorFlow", "Real-Time Inference"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
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
            Skills & Technologies
          </motion.h2>
          
          <motion.div
            variants={containerVariants}
            className="space-y-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {skill.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
