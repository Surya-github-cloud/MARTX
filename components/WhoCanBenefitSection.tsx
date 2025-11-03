
import React from 'react';
// FIX: Add Variants type to fix framer-motion type errors.
import { motion, Variants } from 'framer-motion';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const WhoCanBenefitSection: React.FC = () => {

  const indiaLocations = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad"];
  const worldwideLocations = ["USA", "UK", "UAE", "Singapore", "Australia", "EU Countries"];

  return (
    <motion.section 
        id="clients"
        className="py-20 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
    >
        <div className="container mx-auto px-4">
            <motion.div className="text-center mb-16" variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Who We Work With</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We empower ambitious brands — from local startups to global enterprises.
                </p>
            </motion.div>

            <motion.div 
                className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center"
                variants={itemVariants}
            >
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">India</h3>
                    <p className="text-gray-600">{indiaLocations.join(' · ')}</p>
                </div>
                <div className="w-24 h-px md:w-px md:h-16 bg-gray-200"></div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Worldwide</h3>
                    <p className="text-gray-600">{worldwideLocations.join(' · ')}</p>
                </div>
            </motion.div>
        </div>
    </motion.section>
  );
};

export default WhoCanBenefitSection;