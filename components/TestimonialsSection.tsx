
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
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};


const testimonials = [
    {
        name: 'Kavita R',
        title: 'Director – Retail Brand, India',
        avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
        quote: "“We thought our website was fine — until Martex rebuilt it. Our leads doubled in 30 days.”",
    },
    {
        name: 'Amit B',
        title: 'CEO – SaaS Company, Singapore',
        avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
        quote: "“The chatbot they integrated has become our best salesperson.”",
    },
    {
        name: 'Rohan S',
        title: 'Founder – Tech Startup, UAE',
        avatar: 'https://randomuser.me/api/portraits/men/68.jpg',
        quote: "“They understood what we needed better than we did. Now our site finally converts.”",
    },
];

const TestimonialsSection: React.FC = () => {
    return (
        <motion.section 
            id="testimonials"
            className="py-20 md:py-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-4">
                <motion.div className="text-center mb-16" variants={itemVariants}>
                    <div className="inline-flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-600 mb-6">
                        <span className="mr-2">💬</span>
                        CLIENT SUCCESS STORIES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Real stories from partners who have transformed their businesses with us.
                    </p>
                </motion.div>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" variants={sectionVariants}>
                    {testimonials.map((testimonial, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col"
                            variants={itemVariants}
                            whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <p className="text-gray-600 text-lg mb-6 flex-grow">{testimonial.quote}</p>
                            <div className="flex items-center mt-auto">
                                <img src={testimonial.avatar} alt={testimonial.name} className="h-12 w-12 rounded-full mr-4 object-cover"/>
                                <div className="border-l border-gray-200 pl-4">
                                    <p className="font-semibold text-black">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default TestimonialsSection;