import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Projects = ({ onSpotClick, onCobotClick }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });

  const gridItems = [
    // Intro block - spans 2x2
    {
      type: "intro",
      title: "Hi, I'm Kashf.",
      subtitle: "I design and build things.",
      description: "These are some of my projects.",
      bgColor: "bg-[#F4F4EE]",
      gridSpan: "col-span-2 row-span-2",
      mobileSpan: "col-span-2 row-span-2"
    },
        // Project blocks in new specified order
        {
          type: "project",
          title: "Boston Dynamics Spot Perception & Control",
          subtitle: "AMRL • LiDAR • Perception",
          description: "Enhanced Spot's perception and control systems with LiDAR, depth, and camera integration.",
          image: "/images/Landing Page Graphics/amrl_spot.png",
          bgColor: "bg-blue-100",
          gridSpan: "col-span-1 row-span-1",
          mobileSpan: "col-span-1 row-span-1",
          link: "/portfolio/spot"
        },
        {
          type: "project",
          title: "UT Indoor Cobot Perception & HRI",
          subtitle: "UT • Localization • HRI",
          description: "Developed modular cobot platform for indoor localization, perception, and human-robot interaction research.",
          image: "/images/Landing Page Graphics/amrl_cobot.png",
          bgColor: "bg-green-100",
          gridSpan: "col-span-1 row-span-1",
          mobileSpan: "col-span-1 row-span-1",
          link: "/portfolio/cobot"
        },
    {
      type: "project",
      title: "AMRL Cobot Arm Manipulation & Coordination",
      subtitle: "AMRL • Robotics • Control",
      description: "Designed and simulated multi-axis control system for collaborative robot arm using sensor feedback.",
      image: "/images/Landing Page Graphics/amrl_cobot.png",
      bgColor: "bg-green-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "HCRL Draco 3 Bipedal Robot Planning",
      subtitle: "HCRL • Motion Planning • Control",
      description: "Developed and tested reinforcement-learning-based gait planning for humanoid robot in simulation.",
      image: "/images/Landing Page Graphics/hcrl_draco3.png",
      bgColor: "bg-purple-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "AMRL Spot Head Servo Actuated Payload & Sensor Mount",
      subtitle: "AMRL • Mechatronics • Sensors",
      description: "Built servo-actuated head and sensor mounts for Boston Dynamics Spot.",
      image: "/images/Landing Page Graphics/amrl_spot_head.png",
      bgColor: "bg-yellow-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "Texas Aerial Robotics Thrust Vector Drone System",
      subtitle: "TAR • Controls • Simulink",
      description: "Programmed thrust-vector control in Simulink; trajectory accuracy +20%.",
      image: "/images/Landing Page Graphics/tar_dart_drone.png",
      bgColor: "bg-indigo-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "Guadaloop Dynamics Engineer Bogie Suspension & Controls",
      subtitle: "Guadaloop • Dynamics • Suspension",
      description: "Engineered bogie suspension system and control algorithms for hyperloop pod.",
      image: "/images/Landing Page Graphics/guadaloop_bogie.png",
      bgColor: "bg-orange-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "Texas Aerial Robotics Drone Claw Retrieval System",
      subtitle: "TAR • UAV • Manipulation",
      description: "Designed and implemented drone claw system for aerial object retrieval.",
      image: "/images/Landing Page Graphics/tar_drone_claw.png",
      bgColor: "bg-pink-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "Formula SAE & Baja Off Road Dynamics",
      subtitle: "Racing • Dynamics • Vehicle Control",
      description: "Designed and optimized vehicle dynamics systems for competitive racing.",
      image: "/images/Landing Page Graphics/formula_baja.png",
      bgColor: "bg-red-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "GUADALOOP Depressurization Research Vacuum Chamber Systems",
      subtitle: "Guadaloop • Vacuum • Research",
      description: "Developed vacuum chamber systems for hyperloop depressurization research.",
      image: "/images/Landing Page Graphics/guadaloop_vacuum.png",
      bgColor: "bg-teal-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "Guadaloop VR Simulation Immersive Pod Dynamics",
      subtitle: "Guadaloop • VR • Unity",
      description: "Developed Unity-based VR simulation for pod testing; stability +15%.",
      image: "/images/Landing Page Graphics/guadaloop_pod_sim.png",
      bgColor: "bg-cyan-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "AI Powered Content Platform",
      subtitle: "Drillo.AI • Vertex AI • ML",
      description: "Vertex AI recommender with 90%+ accuracy and <200 ms latency.",
      image: "/images/Landing Page Graphics/drilloai_dashboard.png",
      bgColor: "bg-emerald-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    },
    {
      type: "project",
      title: "AI 3D Printed Planters",
      subtitle: "PicturePlots • CAD • Sustainability",
      description: "Founded startup selling biodegradable planters with AI-generated designs; $10K revenue.",
      image: "/images/Landing Page Graphics/pictureplots_planter.png",
      bgColor: "bg-lime-100",
      gridSpan: "col-span-1 row-span-1",
      mobileSpan: "col-span-1 row-span-1"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.25,
        ease: "ease-in-out",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Dense grid with no gaps - desktop 4 columns, mobile 2 columns */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-0 min-h-screen"
            style={{ gridAutoRows: 'minmax(200px, auto)' }}
          >
            {gridItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={item.type === "project" ? cardHoverVariants.hover : undefined}
                className={`group relative overflow-hidden ${item.bgColor} cursor-pointer project-card ${item.gridSpan} md:${item.gridSpan}`}
                style={{ 
                  minHeight: item.type === "intro" ? "400px" : "200px",
                  gridRowEnd: item.type === "intro" ? "span 2" : "span 1"
                }}
                onClick={item.type === "project" && item.link ? () => {
                  if (item.link === "/portfolio/spot" && onSpotClick) {
                    onSpotClick();
                  } else if (item.link === "/portfolio/cobot" && onCobotClick) {
                    onCobotClick();
                  } else {
                    window.location.href = item.link;
                  }
                } : undefined}
              >
                {item.type === "intro" ? (
                  // Intro block content
                  <div className="flex flex-col justify-center items-center h-full p-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-4">
                      {item.title}
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-playfair text-gray-900 mb-4">
                      {item.subtitle}
                    </h2>
                    <p className="text-3xl md:text-4xl font-playfair text-gray-900">
                      {item.description}
                    </p>
                  </div>
                ) : (
                  // Project block content
                  <>
                    {/* Project image with lazy loading and proper cropping */}
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <motion.img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-contain p-4 group-hover:brightness-75 group-hover:scale-105 transition-all duration-250 ease-in-out"
                        loading="lazy"
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="text-gray-500 text-xs text-center flex items-center justify-center" style={{display: 'none'}}>
                        <div>
                          <div className="text-xs mb-1">Project Image</div>
                          <div className="text-xs">{item.image.split('/').pop()}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover overlay with CSS-only hover targeting */}
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 opacity-0 transition-opacity duration-150 ease-in group-hover:opacity-100">
                      <div className="text-white hover-text">
                        <h3 className="project-title text-sm md:text-base font-playfair mb-2 leading-tight text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-200 mb-2 font-inter">
                          {item.subtitle}
                        </p>
                        <p className="text-xs text-gray-300 leading-relaxed font-inter">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
