import React from 'react';
// FIX: Add Variants and Variant types to fix framer-motion type errors.
import { motion, Variants, Variant } from 'framer-motion';
import { 
    PremiumLookIcon, 
    FastPerformIcon, 
    AnalyticsIcon,
    WebsiteDevelopmentVisual,
    AIChatbotsVisual,
    FashionBrandWebsitesVisual,
    UIUXDesignVisual,
    ECommerceSolutionsVisual 
} from './Icons';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.15
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

const serviceVideos: { [key: string]: string } = {
    "Website Development": "/webdevelopment.mp4",
    "AI Chatbots": "/Technology That Talks to You2.mp4",
    "Fashion & Brand Websites": "/Fashion & Brand Websites.mp4",
    "UI / UX Design": "/uiux.gif",
    "E-commerce Solutions": "/e_commerce.mp4",
};

const ServiceCard: React.FC<{
    title: string;
    description: string;
    className?: string;
}> = ({ title, description, className }) => {
    const mediaSrc = serviceVideos[title];
    const isGif = mediaSrc?.endsWith('.gif');

    return (
        <motion.div
            className={`bg-white p-6 rounded-3xl border border-gray-200 flex flex-col overflow-hidden group ${className}`}
            variants={{...itemVariants, hover: cardHoverVariant}}
            whileHover="hover"
        >
            <div className="h-48 mb-6 rounded-2xl overflow-hidden">
               {mediaSrc && (
                   isGif ? (
                       <img
                           src={mediaSrc}
                           alt={title}
                           className="w-full h-full object-cover"
                       />
                   ) : (
                       <video
                           autoPlay
                           loop
                           muted
                           className="w-full h-full object-cover"
                       >
                           <source src={mediaSrc} type="video/mp4" />
                       </video>
                   )
               )}
            </div>
            <div className={`flex flex-col flex-grow`}>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 flex-grow">{description}</p>
            </div>
        </motion.div>
    );
};


const ValuePropCard: React.FC<{ icon: React.ElementType, title: string, description: string }> = ({ icon: Icon, title, description }) => (
    <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-lg shadow-black/5 text-center">
        <div className="flex justify-center mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200">
                <Icon className="w-6 h-6 text-black" />
            </div>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </motion.div>
);


const ServicesSection: React.FC = () => {
    const services = [
        { title: "Website Development", description: "Beautiful, fast, and responsive websites crafted for seamless performance and modern appeal, including ongoing website maintenance.", className: "md:col-span-3" },
        { title: "AI Chatbots", description: "Smart, conversational assistants that handle your customers with precision and personality.", className: "md:col-span-2" },
        { title: "Fashion & Brand Websites", description: "Elegant, trend-driven designs that highlight products with class and simplicity.", className: "md:col-span-2" },
        { title: "UI / UX Design", description: "Premium interfaces built with empathy, clarity, and balance. We believe every pixel has a purpose, creating a polished, high-end design that elevates your brand.", className: "md:col-span-3" },
        { title: "E-commerce Solutions", description: "Scalable online stores that convert visitors into loyal customers, complete with seamless checkout experiences.", className: "md:col-span-5" },
    ];
    
    return (
        <motion.section 
            id="services"
            className="py-20 md:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                 <motion.div className="text-center mb-12" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
                        We build conversion-first websites.
                    </h2>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
                    variants={sectionVariants}
                >
                    <ValuePropCard 
                        icon={PremiumLookIcon}
                        title="Look Premium"
                        description="We craft visually stunning designs that build credibility and make your brand unforgettable."
                    />
                    <ValuePropCard 
                        icon={FastPerformIcon}
                        title="Perform Fast"
                        description="Our sites guarantee a Google PageSpeed score of 90+, ensuring visitors never leave out of frustration."
                    />
                    <ValuePropCard 
                        icon={AnalyticsIcon}
                        title="Generate Real Results"
                        description="Every pixel is conversion-optimized to turn your website traffic into measurable revenue."
                    />
                </motion.div>
                
                <motion.p variants={itemVariants} className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
                    We don’t just design — we create a complete online growth engine that attracts, engages, and converts.
                </motion.p>

                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                        <span className="mr-2">🔧</span>
                        SERVICES
                    </div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto"
                    variants={sectionVariants}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            className={service.className}
                        />
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ServicesSection;