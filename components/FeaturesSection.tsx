import React from 'react';
// FIX: Add Variants and Variant types to fix framer-motion type errors.
import { motion, Variants, Variant } from 'framer-motion';
import { 
    EndToEndSolutionVisual, 
    BuiltToConvertVisual, 
    GlobalReachVisual, 
    TransparentCommunicationVisual, 
    SEOptimizatedVisual, 
    RealPartnershipVisual 
} from './Icons';


const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const cardHoverVariant: Variant = {
  y: -8,
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  transition: { type: 'spring', stiffness: 300 }
};

const featureVisuals: { [key: string]: React.ElementType } = {
    "End-to-End Solution": EndToEndSolutionVisual,
    "Built to Convert": BuiltToConvertVisual,
    "Global Reach, Indian Expertise": GlobalReachVisual,
    "Transparent Communication": TransparentCommunicationVisual,
    "SEO + Performance Optimized": SEOptimizatedVisual,
    "Real Partnership": RealPartnershipVisual,
};

const FeatureCard: React.FC<{ title: string, description: string, className?: string }> = ({ title, description, className }) => {
    const Visual = featureVisuals[title];
    return (
        <motion.div 
            className={`bg-white p-6 rounded-3xl border border-gray-200 flex flex-col overflow-hidden group ${className}`}
            variants={{...itemVariants, hover: cardHoverVariant}}
            whileHover="hover"
        >
            <div className="h-56 mb-6 rounded-2xl overflow-hidden">
                {Visual && <Visual />}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 flex-grow text-sm">{description}</p>
        </motion.div>
    );
};


const FeaturesSection: React.FC = () => {
    const features = [
        { title: "End-to-End Solution", description: "From design and development to chatbot integration and automation, we provide a complete solution under one roof.", className: "md:col-span-3" },
        { title: "Built to Convert", description: "Every element we create is meticulously crafted not just to look good, but to drive leads and generate revenue.", className: "md:col-span-2" },
        { title: "Global Reach, Indian Expertise", description: "Based in India, we serve clients worldwide, blending global best practices with deep market understanding.", className: "md:col-span-2" },
        { title: "Transparent Communication", description: "We believe in a partnership built on clarity. No jargon, no delays, and no hidden costs.", className: "md:col-span-3" },
        { title: "SEO + Performance Optimized", description: "We guarantee a Google PageSpeed score of 90+ and build websites structured for top search engine rankings.", className: "md:col-span-3" },
        { title: "Real Partnership", description: "Your success is our success. We act as an extension of your team, dedicated to your growth long after launch.", className: "md:col-span-2" }
    ];

    return (
        <motion.section 
            id="why-us"
            className="py-20 md:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                        <span className="mr-2">🤝</span>
                        WHY CHOOSE US
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Why Choose M A R T X Premium Web Studio</h2>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto"
                    variants={sectionVariants}
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            className={feature.className}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default FeaturesSection;