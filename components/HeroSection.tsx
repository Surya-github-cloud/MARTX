import React, { useRef } from 'react';
// FIX: Add Variants type to fix framer-motion type errors.
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRightIcon } from './Icons';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
};

const HeroSection: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    // Replace with your actual WhatsApp number in international format
    window.open('https://wa.me/910000000000', '_blank');
  };

  return (
    <section ref={ref} id="home" className="relative pt-40 pb-32 md:pt-48 md:pb-40 text-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-no-repeat bg-center [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" 
        style={{
          backgroundImage: 'url("https://uploads-ssl.webflow.com/646f65e37fe0473ce2d26189/646f66cde5629631d11a64f6_noise-light.png"), radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0))',
          y: yBg,
        }}>
      </motion.div>
      <div 
        className="relative z-10 container mx-auto px-4"
      >
         <motion.div
          className="flex flex-col items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            <div className="max-w-4xl">
                <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-600">
                Your Website Is Silently Costing You Customers.
                </motion.h1>

                <motion.div variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 space-y-10">
                    <p>Every second, someone visits your website… and leaves. Why?</p>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
                        <motion.div 
                             className="bg-white border border-gray-200/80 rounded-full px-8 py-3 text-lg font-semibold text-gray-800 shadow-lg shadow-black/5"
                             whileHover={{ y: -5, scale: 1.05, boxShadow: '0 10px 20px -5px rgb(0 0 0 / 0.1)' }}
                             transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Slow Load
                        </motion.div>
                        <motion.div 
                             className="bg-white border border-gray-200/80 rounded-full px-8 py-3 text-lg font-semibold text-gray-800 shadow-lg shadow-black/5"
                             whileHover={{ y: -5, scale: 1.05, boxShadow: '0 10px 20px -5px rgb(0 0 0 / 0.1)' }}
                             transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Outdated Design
                        </motion.div>
                        <motion.div 
                             className="bg-white border border-gray-200/80 rounded-full px-8 py-3 text-lg font-semibold text-gray-800 shadow-lg shadow-black/5"
                             whileHover={{ y: -5, scale: 1.05, boxShadow: '0 10px 20px -5px rgb(0 0 0 / 0.1)' }}
                             transition={{ type: 'spring', stiffness: 300 }}
                        >
                            No Clear Message
                        </motion.div>
                    </div>

                    <p className="font-medium text-gray-800">
                        You lose trust, leads, and opportunities. At M A R T X Premium Web Studio, we fix that—with premium websites, modern revamps, and AI-powered chatbots that make your site sell while you sleep.
                    </p>
                </motion.div>
    
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.button
                        onClick={() => window.location.href = 'https://cal.com/martx-website'}
                        className="group w-full sm:w-auto inline-flex items-center justify-center bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                        whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Get a Free Website Audit <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                    <motion.button
                        onClick={openWhatsApp}
                        className="group w-full sm:w-auto bg-white border border-gray-200 text-black font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                        whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Chat with Our Expert on WhatsApp <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;