import React from 'react';
// FIX: Add Variants type to fix framer-motion type errors.
import { motion, Variants } from 'framer-motion';
import { SlowLoadIcon, ImmersiveIcon, NoConversionIcon, InvisibleIcon, ChatbotIcon } from './Icons';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const painPoints = [
    { 
      icon: SlowLoadIcon,
      text: "It loads too slow — users leave before it even appears." 
    },
    { 
      icon: ImmersiveIcon, // Using ImmersiveIcon for "outdated"
      text: "It looks outdated — visitors assume your brand is too." 
    },
    { 
      icon: NoConversionIcon,
      text: "It’s not built for conversion — there’s no emotional journey or call to act." 
    },
    { 
      icon: InvisibleIcon,
      text: "It doesn’t show up on Google — you’re invisible to new customers." 
    },
    { 
      icon: ChatbotIcon, // Using ChatbotIcon for "no chatbot"
      text: "It has no chatbot — so leads leave without engaging." 
    }
];

const QuoteSection: React.FC = () => {
  return (
    <motion.section 
      className="py-20 md:py-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={itemVariants} className="text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Your Website Might Look Fine — But It’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Not Working</span>.</h2>
                <p className="text-lg text-gray-600">
                    Let’s face it — most websites aren’t built to sell. They might look “okay,” but they silently kill your credibility. Here’s the harsh truth:
                </p>
            </motion.div>

            <motion.div className="space-y-6" variants={sectionVariants}>
                {painPoints.map((point, index) => (
                    <motion.div key={index} className="flex items-start p-4 bg-white rounded-xl border border-gray-200 shadow-sm" variants={itemVariants}>
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full mr-4">
                            <point.icon className="h-6 w-6 text-gray-700" />
                        </div>
                        <span className="text-gray-700 mt-1.5">{point.text}</span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
        
        <motion.div 
            className="mt-20 lg:mt-24 max-w-4xl mx-auto"
            variants={sectionVariants} // Using section variants for stagger
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
            <div className="relative bg-gray-900 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
                 <div className="absolute inset-0 bg-no-repeat bg-center opacity-10" style={{
                    backgroundImage: 'url("https://uploads-ssl.webflow.com/646f65e37fe0473ce2d26189/646f66cde5629631d11a64f6_noise-light.png"), radial-gradient(circle at 50% 100%, #be123c, transparent 40%)',
                }}></div>
                <div className="relative z-10">
                    <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                        Every day your website underperforms, you lose customers — not because your service is bad, but because your digital experience is.
                    </motion.p>
                    <motion.div 
                        className="h-px w-2/3 mx-auto my-8 bg-gradient-to-r from-transparent via-red-500 to-transparent" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '66.66%' }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                        viewport={{ once: true }}
                    />
                    <motion.div variants={itemVariants}>
                        <span className="block text-2xl md:text-3xl text-red-400 font-medium tracking-normal">That’s the pain.</span>
                        <span className="mt-2 block text-4xl md:text-5xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">And we’re here to end it.</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default QuoteSection;