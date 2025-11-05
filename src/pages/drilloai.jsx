import React from 'react';
import { motion } from 'framer-motion';

const DrilloAIPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation spacing */}
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

          {/* Hero - text only, mint tinted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-4 md:mx-8 lg:mx-12"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(211, 246, 235, 0.15) 0%, rgba(0,0,0,0.0) 100%)' }} />
              <div className="relative px-8 py-16 sm:py-24 text-center">
                <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] mb-4">AI-Powered Content Platform</h1>
                <h2 className="font-playfair text-xl sm:text-2xl text-mint-accent mb-8">Drillo.AI • Vertex AI • ML</h2>
                <p className="font-inter text-lg text-[#334155] max-w-3xl mx-auto mb-8">Vertex AI recommender with 90%+ accuracy and &lt; 200 ms latency.</p>
                <motion.button
                  className="bg-mint-accent text-[#0F172A] font-inter font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-mint-accent50 hover:shadow-[0_0_12px_rgba(211,246,235,0.45)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Overview
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Overview */}
          <motion.div
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F9FAFB] rounded-4xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-[#0F172A]">Project Overview</h2>
            <p className="font-inter text-lg text-[#334155] max-w-4xl">
              During my internship at Drillo.AI, I built an AI-powered recommendation engine for influencer marketing, deploying it through Google Cloud’s Vertex AI. The system matched over 2K influencer briefs to 5K hashtags, helping Microdrive generate real-time campaign insights with high accuracy and reliability.
            </p>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-[#F9FAFB] rounded-4xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
          >
            <div className="text-center mb-10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-3 text-[#0F172A]">Key Highlights</h2>
              <p className="font-inter text-lg text-mint-accent">What we accomplished</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                'Achieved 90%+ hashtag-tagging accuracy on 2K+ briefs.',
                'Deployed 1.5K+ pair vector index using GPU embeddings (< 200 ms latency).',
                'Automated orchestration with Vertex AI Pipelines, cutting maintenance 60%.',
                'Improved influencer match efficiency 30% via real-time inference tracking.'
              ].map((t, i) => (
                <div className="flex items-start space-x-4" key={i}>
                  <div className="w-3 h-3 rounded-full bg-mint-accent mt-2 flex-shrink-0" />
                  <p className="font-inter text-[#334155]">{t}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
          >
            <div className="bg-white rounded-4xl p-8 md:p-12 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-[#0F172A]">Next Steps</h2>
              <p className="font-inter text-lg text-[#334155] mb-8 max-w-3xl mx-auto">
                The next phase will focus on integrating multimodal content inputs, scaling the recommendation engine for larger influencer datasets, and extending real-time performance monitoring to new client dashboards.
              </p>
              <motion.button
                onClick={() => (window.location.href = 'mailto:kashfsiddiqui@utexas.edu')}
                className="bg-mint-accent text-[#0F172A] font-inter font-medium px-8 py-4 rounded-full transition-all duration-300 hover:bg-mint-accent50 hover:shadow-[0_8px_24px_rgba(211,246,235,0.45)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact me
              </motion.button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default DrilloAIPage;


