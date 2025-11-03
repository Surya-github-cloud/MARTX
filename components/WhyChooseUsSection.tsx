
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants, useScroll, useTransform } from 'framer-motion';
import { 
    ArrowRightIcon, 
    DiscoverIcon, 
    StrategyIcon, 
    DesignIcon, 
    BuildIcon, 
    LaunchIcon,
    ConversionEngineIcon
} from './Icons';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const processSteps = [
    { 
        number: '01', 
        title: 'Discover & Define', 
        description: 'We begin with a free strategy call to understand your business, audience, and goals.',
        icon: DiscoverIcon
    },
    { 
        number: '02', 
        title: 'Research & UX Strategy', 
        description: 'We audit your current website, map user journeys, and find conversion gaps.',
        icon: StrategyIcon
    },
    { 
        number: '03', 
        title: 'Design That Sells', 
        description: 'We design experiences that connect emotionally and guide visitors to act.',
        icon: DesignIcon
    },
    { 
        number: '04', 
        title: 'Build, Integrate & Automate', 
        description: 'We develop your new or revamped site with global best practices and AI integration.',
        icon: BuildIcon
    },
    { 
        number: '05', 
        title: 'Launch & Growth Support', 
        description: 'We monitor performance, SEO, and conversions — so your growth never stops.',
        icon: LaunchIcon
    },
];

const AnimatedStep = ({ step, stepRef }: { step: typeof processSteps[0], stepRef: React.RefObject<HTMLDivElement> }) => {
    const { scrollYProgress } = useScroll({
        target: stepRef,
        offset: ["center end", "center start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1, 1, 1]);

    return (
         <motion.div style={{ opacity }} className="w-full">
            <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 text-5xl font-bold text-gray-200 mt-1">
                    {step.number}
                </div>
                <div>
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

const WhyChooseUsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const stepRefs = useRef<Array<React.RefObject<HTMLDivElement>>>(
        processSteps.map(() => React.createRef())
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0', 10);
                        setActiveIndex(index);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px',
                threshold: 0
            }
        );

        const currentRefs = stepRefs.current;
        currentRefs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            currentRefs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <motion.section 
      id="process"
      className="py-20 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Our Process – Simple, Transparent, and Fast</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 relative">
            {/* Left Column: Sticky Visual */}
            <div className="hidden lg:block sticky top-0 h-screen">
                <div className="flex items-center justify-center h-full">
                    <div className="relative w-80 h-80">
                       <ConversionEngineIcon className="w-full h-full text-gray-200" />
                       <AnimatePresence mode="wait">
                           {processSteps.map((step, index) => (
                               activeIndex === index && (
                                   <motion.div
                                    key={index}
                                    className="absolute inset-0 flex items-center justify-center"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
                                    exit={{ opacity: 0, scale: 0.5 }}
                                   >
                                       <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center border border-gray-100">
                                          <step.icon className="h-12 w-12 text-black" />
                                       </div>
                                   </motion.div>
                               )
                           ))}
                       </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Right Column: Scrollable Steps */}
            <div className="lg:pt-16">
                {processSteps.map((step, index) => (
                    <div 
                        key={index}
                        ref={stepRefs.current[index]}
                        data-index={index}
                        className="min-h-[60vh] flex items-center"
                    >
                        <AnimatedStep step={step} stepRef={stepRefs.current[index]} />
                    </div>
                ))}
            </div>
        </div>
        
        <motion.div variants={itemVariants} className="flex justify-center mt-16">
           <motion.button
            onClick={() => window.location.href = 'https://cal.com/martx-website'}
            className="group inline-flex items-center justify-center bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Build Your Conversion Engine <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default WhyChooseUsSection;