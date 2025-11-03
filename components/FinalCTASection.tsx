
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CallToActionArrowIcon, CTAVisual } from './Icons';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FinalCTASection: React.FC = () => {
    
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
        className="py-24 md:py-32"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
    >
        <div className="container mx-auto px-4">
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-no-repeat bg-center opacity-10" style={{
                    backgroundImage: 'url("https://uploads-ssl.webflow.com/646f65e37fe0473ce2d26189/646f66cde5629631d11a64f6_noise-light.png")',
                }}></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">
                    <div className="p-8 md:p-12 lg:p-16 text-center lg:text-left">
                        <motion.h2 
                            variants={itemVariants} 
                            className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400"
                        >
                            Your Turn: Make Your Website Work for You
                        </motion.h2>
                        <motion.p 
                            variants={itemVariants} 
                            className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 mb-10"
                        >
                           Your website shouldn’t just exist. It should sell, engage, and inspire — every single day. If you know your current site isn’t giving you results, this is the moment to take action.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
                            <motion.button
                                onClick={() => window.location.href = 'https://cal.com/martx-website'}
                                className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg shadow-white/20 transition-all duration-300 hover:bg-gray-200"
                                whileHover={{ scale: 1.05, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Get a Free Website Audit</span>
                                <div className="bg-black rounded-full p-0.5 transition-transform duration-300 group-hover:rotate-45">
                                    <CallToActionArrowIcon className="h-5 w-5 text-white" />
                                </div>
                            </motion.button>
                             <motion.button
                                onClick={() => window.location.href = 'https://cal.com/martx-website'}
                                className="group w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-gray-500 text-white font-semibold py-3 px-6 rounded-full transition-colors hover:bg-white hover:text-black"
                                whileHover={{ scale: 1.05, y: -4 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>Book Your Strategy Call</span>
                            </motion.button>
                        </motion.div>
                    </div>
                    <div className="relative h-64 lg:h-full flex items-center justify-center lg:justify-start">
                        <CTAVisual />
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  );
};

export default FinalCTASection;
