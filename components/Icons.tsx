import React, { useState, useEffect } from 'react';
// FIX: Add AnimatePresence and Variants to framer-motion import to fix type errors.
import { motion, AnimatePresence, Variants } from 'framer-motion';

type IconProps = {
  className?: string;
};

// --- New Illustrative Visuals for Features Section ---

export const BuiltToConvertVisual: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-blue-50 p-4">
        <motion.div 
            className="flex items-center justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
        >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-white">!</span>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative w-24 h-24 rounded-full bg-red-400 flex items-center justify-center shadow-lg">
                 <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </motion.div>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="relative w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-white">$</span>
            </motion.div>
        </motion.div>
    </div>
);

export const EndToEndSolutionVisual: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-indigo-50 p-4">
        <motion.div 
            className="relative w-48 h-48"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
             <motion.div 
                className="absolute top-0 left-1/4 w-24 h-24 bg-purple-300 rounded-2xl shadow-lg" 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
             />
             <motion.div 
                className="absolute bottom-0 left-0 w-20 h-20 bg-purple-400 rounded-2xl shadow-lg" 
                animate={{ x: [0, 10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
             />
             <motion.div 
                className="absolute bottom-1/4 right-0 w-28 h-28 bg-purple-500 rounded-2xl shadow-lg" 
                animate={{ rotate: [0, 5, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
             />
        </motion.div>
    </div>
);

export const TransparentCommunicationVisual: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-cyan-50 p-4">
         <div className="relative w-64 h-48">
            <motion.div 
                className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
            >
                <ChatbotIcon className="w-8 h-8 text-cyan-500" />
            </motion.div>
            <motion.div 
                className="absolute top-10 right-0 bg-white text-sm text-gray-700 px-4 py-2 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
            >
                Any questions?
            </motion.div>
             <motion.div 
                className="absolute bottom-8 left-16 bg-cyan-500 text-sm text-white px-4 py-2 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                We're here to help!
            </motion.div>
        </div>
    </div>
);

export const SEOptimizatedVisual: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-yellow-50 p-4">
        <div className="w-full max-w-xs bg-white rounded-2xl p-4 shadow-lg border border-gray-100 flex items-end gap-2 h-48">
            <motion.div 
                className="w-1/4 bg-yellow-200 rounded-t-lg"
                initial={{ height: '10%' }}
                whileInView={{ height: '40%' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                viewport={{ once: true }}
            />
            <motion.div 
                className="w-1/4 bg-yellow-300 rounded-t-lg"
                initial={{ height: '10%' }}
                whileInView={{ height: '60%' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
            />
            <motion.div 
                className="w-1/4 bg-yellow-400 rounded-t-lg"
                initial={{ height: '10%' }}
                whileInView={{ height: '80%' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true }}
            />
             <motion.div 
                className="w-1/4 bg-yellow-500 rounded-t-lg"
                initial={{ height: '10%' }}
                whileInView={{ height: '70%' }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
                viewport={{ once: true }}
            />
        </div>
    </div>
);

export const GlobalReachVisual: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-blue-50 p-4">
        <svg className="w-48 h-48" viewBox="0 0 100 100">
            <motion.circle 
                cx="50" cy="50" r="40" 
                stroke="#dbeafe" 
                strokeWidth="2" 
                fill="white"
            />
            <motion.path 
                d="M50,10 A40,40 0 0,1 50,90" 
                stroke="#60a5fa" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
             <motion.path 
                d="M10,50 A40,40 0 0,1 90,50" 
                stroke="#93c5fd" strokeWidth="2" fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
            <circle cx="30" cy="30" r="3" fill="#3b82f6" />
            <circle cx="70" cy="60" r="3" fill="#3b82f6" />
            <circle cx="40" cy="70" r="3" fill="#3b82f6" />
        </svg>
    </div>
);

export const RealPartnershipVisual: React.FC = () => (
    <div className="w-full h-full flex items-center justify-center bg-green-50 p-4">
        <motion.div 
            className="text-green-500"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l-4 4l-1.5-1.5" />
                <path d="M14 11l5 5l1.5-1.5" />
                <path d="M22 12l-2-2" />
                <path d="M2 12l2-2" />
                <path d="M15 6l1-1" />
                <path d="M8 6l-1-1" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
            </svg>
        </motion.div>
    </div>
);

// --- New Visuals for Services Section ---
export const WebsiteDevelopmentVisual: React.FC = () => (
  <motion.div 
    className="w-full h-full bg-slate-100 rounded-2xl p-4 flex items-center justify-center gap-2 overflow-hidden border border-slate-200"
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    variants={{ animate: { transition: { staggerChildren: 0.2 }} }}
  >
    <motion.div 
      className="w-1/3 h-32 bg-slate-800 rounded-lg p-2 flex flex-col gap-1 font-mono text-[10px] text-green-400 overflow-hidden"
      variants={{ initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }}}
    >
      <span>&lt;div&gt;</span>
      <span className="pl-2">&lt;h1&gt;Hello&lt;/h1&gt;</span>
      <span className="pl-2">&lt;p&gt;World&lt;/p&gt;</span>
      <span>&lt;/div&gt;</span>
    </motion.div>
    <motion.div 
      className="w-2/3 h-32 bg-white rounded-lg shadow-md p-2 flex flex-col gap-2"
      variants={{ initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }}}
    >
      <div className="w-1/2 h-4 bg-slate-200 rounded"></div>
      <div className="w-full h-2 bg-slate-200 rounded"></div>
      <div className="w-full h-2 bg-slate-200 rounded"></div>
      <div className="w-3/4 h-2 bg-slate-200 rounded"></div>
    </motion.div>
  </motion.div>
);

export const FashionBrandWebsitesVisual: React.FC = () => (
    <div className="w-full h-full bg-rose-50 rounded-2xl p-4 flex items-center justify-center gap-3 border border-rose-200 overflow-hidden">
        <motion.div 
            className="w-24 h-36 bg-white rounded-lg shadow-lg relative overflow-hidden"
            initial={{ y: 20, rotate: -5, opacity: 0 }}
            whileInView={{ y: 0, rotate: -5, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
        >
            <div className="h-2/3 bg-rose-200 rounded-t-lg"></div>
            <div className="p-2">
                <div className="h-2 w-3/4 bg-rose-100 rounded"></div>
                <div className="h-2 w-1/2 bg-rose-100 rounded mt-1.5"></div>
            </div>
        </motion.div>
        <motion.div 
            className="w-24 h-36 bg-white rounded-lg shadow-lg relative overflow-hidden"
            initial={{ y: -20, rotate: 5, opacity: 0 }}
            whileInView={{ y: 0, rotate: 5, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
        >
             <div className="h-1/2 bg-rose-300 rounded-t-lg"></div>
            <div className="p-2">
                <div className="h-2 w-full bg-rose-100 rounded"></div>
                <div className="h-2 w-2/3 bg-rose-100 rounded mt-1.5"></div>
            </div>
        </motion.div>
    </div>
);

export const ECommerceSolutionsVisual: React.FC = () => (
    <div className="w-full h-full bg-emerald-50 rounded-2xl p-4 flex items-center justify-center gap-4 border border-emerald-200 overflow-hidden">
        <motion.div 
            className="w-2/3 h-32 bg-white rounded-lg shadow-lg p-3 flex flex-col gap-2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="flex justify-between items-center">
                <div className="w-16 h-4 bg-emerald-100 rounded"></div>
                <div className="w-8 h-8 bg-emerald-200 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
            </div>
            <div className="flex-grow bg-emerald-50 rounded p-2 flex items-end gap-1">
                <div className="w-1/3 h-1/2 bg-emerald-100 rounded-sm"></div>
                <div className="w-1/3 h-full bg-emerald-100 rounded-sm"></div>
                <div className="w-1/3 h-2/3 bg-emerald-100 rounded-sm"></div>
            </div>
        </motion.div>
        <div className="w-1/3 h-32 flex flex-col justify-between">
            <motion.div 
                className="h-14 bg-white rounded-lg shadow-lg p-2"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                 viewport={{ once: true }}
            >
                <div className="h-2 w-full bg-emerald-100 rounded mb-1.5"></div>
                <div className="h-2 w-2/3 bg-emerald-100 rounded"></div>
            </motion.div>
            <motion.div 
                className="h-14 bg-emerald-600 text-white flex items-center justify-center rounded-lg shadow-lg font-bold"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                 viewport={{ once: true }}
            >
                Pay
            </motion.div>
        </div>
    </div>
);


// --- Re-used Visual Components for Services ---
const ChatbotVisual = () => {
    const [step, setStep] = useState(0);

    useEffect(() => {
        let timers: number[] = [];
        const sequence = () => {
            timers.push(window.setTimeout(() => setStep(1), 0)); // User msg
            timers.push(window.setTimeout(() => setStep(2), 1500)); // Bot typing
            timers.push(window.setTimeout(() => setStep(3), 3500)); // Bot response
            timers.push(window.setTimeout(() => {
                setStep(0); // Reset visual
                timers.push(window.setTimeout(sequence, 500)); // Restart sequence
            }, 5500));
        };
        
        timers.push(window.setTimeout(sequence, 500)); // Initial start

        return () => timers.forEach(window.clearTimeout);
    }, []);

    const dotVariants = {
      start: { y: "0%" },
      end: { y: "-50%" },
    };
    const dotTransition = {
      duration: 0.4,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    } as const;

    return (
        <div className="w-full h-full bg-gray-100 rounded-2xl p-4 flex flex-col justify-end gap-2 border border-gray-200 overflow-hidden">
             <AnimatePresence>
                {step >= 1 && (
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }} 
                        className="self-end flex items-center gap-2 max-w-[80%]"
                    >
                        <p className="bg-black text-white text-[10px] rounded-2xl px-3 py-1.5 leading-tight">Can you book a flight?</p>
                        <UserIcon className="h-6 w-6 bg-gray-200 text-gray-500 rounded-full p-1 flex-shrink-0"/>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {(step === 2 || step === 3) && (
                     <motion.div 
                         initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: -50 }}
                         transition={{ duration: 0.4, type: 'spring', stiffness: 200, damping: 20 }}
                         className="self-start flex items-center gap-2 max-w-[80%]"
                     >
                        <ChatbotIcon className="h-6 w-6 bg-white text-black rounded-full p-1 border border-gray-200 flex-shrink-0"/>
                        
                        <AnimatePresence mode="wait">
                            {step === 2 && (
                                <motion.div
                                    key="typing"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center"
                                >
                                    <motion.div 
                                      className="flex items-center justify-center gap-1 bg-white rounded-2xl px-3 py-2 border border-gray-200"
                                      initial="start"
                                      animate="end"
                                    >
                                       <motion.span variants={dotVariants} transition={dotTransition} className="w-1 h-1 bg-gray-400 rounded-full" />
                                       <motion.span variants={dotVariants} transition={{ ...dotTransition, delay: 0.1 }} className="w-1 h-1 bg-gray-400 rounded-full" />
                                       <motion.span variants={dotVariants} transition={{ ...dotTransition, delay: 0.2 }} className="w-1 h-1 bg-gray-400 rounded-full" />
                                    </motion.div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="response"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
                                    className="flex items-center"
                                >
                                     <p className="bg-white text-black text-[10px] rounded-2xl px-3 py-1.5 leading-tight border border-gray-200">Absolutely! Where to?</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const UIUXVisual = () => {
    const [isOrdered, setIsOrdered] = useState(false);

    useEffect(() => {
        const toggle = () => setIsOrdered(prev => !prev);
        const intervalId = setInterval(toggle, 4000);
        const timerId = setTimeout(() => setIsOrdered(true), 500);
        return () => {
            clearInterval(intervalId)
            clearTimeout(timerId)
        };
    }, []);

    const containerVariants: Variants = {
        disordered: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
        ordered: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    };

    const itemVariants: Variants = {
        disordered: (i: number) => ({ 
            opacity: 0, 
            y: (i % 2 === 0 ? 20 : -20),
            x: (i % 3 - 1) * 30,
            rotate: Math.random() * 40 - 20,
        }),
        ordered: {
            opacity: 1,
            y: 0,
            x: 0,
            rotate: 0,
            transition: { type: 'spring', stiffness: 150, damping: 20 }
        },
    };

    return (
        <motion.div 
            className="w-full h-full flex items-center justify-center bg-gray-100 rounded-2xl border border-gray-200 p-4"
        >
            <motion.div 
                className="w-[150px] h-[120px] flex flex-col items-center gap-2"
                variants={containerVariants}
                initial="disordered"
                animate={isOrdered ? 'ordered' : 'disordered'}
            >
                <motion.div custom={0} variants={itemVariants} className="w-full h-12 bg-gray-300 rounded" />
                <motion.div custom={1} variants={itemVariants} className="w-3/4 h-4 bg-gray-300 rounded-sm" />
                <motion.div custom={2} variants={itemVariants} className="w-full h-3 bg-gray-200 rounded-sm" />
                <motion.div custom={3} variants={itemVariants} className="w-full h-3 bg-gray-200 rounded-sm" />
                <motion.div custom={4} variants={itemVariants} className="w-1/2 h-6 bg-black rounded-md mt-1" />
            </motion.div>
        </motion.div>
    );
};
export const AIChatbotsVisual = ChatbotVisual;
export const UIUXDesignVisual = UIUXVisual;


// --- Process Section Icons ---

export const ConversionEngineIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
            d="M100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" 
            stroke="currentColor" 
            strokeOpacity="0.2" 
            strokeWidth="2"
        />
        <motion.path 
            d="M100 160C133.137 160 160 133.137 160 100C160 66.8629 133.137 40 100 40C66.8629 40 40 66.8629 40 100C40 133.137 66.8629 160 100 160Z" 
            stroke="currentColor" 
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="4 4"
        />
         <motion.path 
            d="M100 120C111.046 120 120 111.046 120 100C120 88.9543 111.046 80 100 80C88.9543 80 80 88.9543 80 100C80 111.046 88.9543 120 100 120Z" 
            fill="currentColor"
            fillOpacity="0.1"
        />
        <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}>
            <motion.path 
                d="M100 150C127.614 150 150 127.614 150 100C150 72.3858 127.614 50 100 50" 
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
            />
        </motion.g>
    </svg>
);


export const DiscoverIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const BuildIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

export const LaunchIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const DesignIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
    </svg>
);


export const OrbIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22C9.23858 22 7 19.7614 7 17C7 14.2386 9.23858 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

export const DataDrivenIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10m16-10v10M9 3v18m6-18v18" />
    </svg>
);

export const FasterInnovationIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const ScalableSolutionsIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
    </svg>
);

export const VirtualAssistanceIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);

export const AutomationIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const CogIcon: React.FC<IconProps> = AutomationIcon; // Alias

export const WorkflowIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
);

export const SupportIcon: React.FC<IconProps> = VirtualAssistanceIcon; // Alias

export const ChatIcon: React.FC<IconProps> = VirtualAssistanceIcon; // Alias

export const StrategyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
);


export const DeployIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.789-2.756 9.348m-2.288-2.288A12.001 12.001 0 012.935 11H12zm0 0V3m0 8h.008m7.058-2.936A12.001 12.001 0 0121.065 11H12v-.001z" />
    </svg>
);


export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733a4.67 4.67 0 002.048-2.578 9.3 9.3 0 01-2.958 1.13 4.66 4.66 0 00-7.938 4.25 13.229 13.229 0 01-9.602-4.868c-.333.57-.523 1.234-.523 1.927 0 1.618.823 3.053 2.072 3.898a4.644 4.644 0 01-2.11-.583v.06a4.658 4.658 0 003.733 4.568 4.693 4.693 0 01-2.104.08 4.658 4.658 0 004.342 3.234 9.348 9.348 0 01-5.786 1.995c-.376 0-.747-.022-1.112-.065a13.175 13.175 0 007.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.203-.005-.405-.014-.606a9.48 9.48 0 002.323-2.41z"></path></svg>
);

export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.557V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
);

export const DribbbleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM3.633 14.242c.394.887.838 1.733 1.33 2.538.56 1.002 1.25 1.905 2.05 2.684a12.5 12.5 0 001.077-.473c-2.443-2.83-4.04-5.92-4.457-4.75zM8.33 21.365c.49.33.99.638 1.498.922.023.013.045.027.068.04a4.42 4.42 0 01-.15-.052c-2.09-2.2-3.8-4.9-4.84-7.92-.303.054-.602.115-.9.183.97 3.53 2.55 6.508 4.324 6.827zm10.596-3.442c-2.48-.37-4.858-1.22-7.05-2.46-.02.013-.038.028-.057.042-1.446 2.01-3.23 3.82-5.11 5.258a10.02 10.02 0 006.27 2.418c2.9.06 5.68-.9 7.9-2.583-.5-1.12-1.08-2.2-1.74-3.2-1.1-.92-2.3-1.7-3.5-2.4L18.925 17.923zM2.004 12c0-.3.02-.6.05-.89C2.42 6.84 5.35 3.23 9.35 1.47c-3.4.92-5.9 3.5-6.66 6.53-.25.99-.39 2.02-.686 4zM15.46 3.2c-1.33.88-2.57 1.9-3.7 3.02-3.48-1.1-6.9-1.2-10.15-.37.33-1.1.8-2.15 1.4-3.1C5.1 -.4 9.1-.8 12.3.9c1.07.56 2.07 1.27 3.16 2.3z m5.8 4.6c-2.03-.4-4.1-.4-6.1-.03-2.3.4-4.5.9-6.7 1.5-1.13.3-2.28.5-3.4.8.2-.9.4-1.8.7-2.7.9-2.8 2.6-5.2 4.9-6.9 2.3-1.7 5-2.6 7.9-2.4 1.9.1 3.7.8 5.2 1.9.07.05.14.1.2.16.1.1.2.2.3.3.4.4.8.8 1.1 1.3.2.3.4.6.5.9.2.3.3.6.4.9.1.3.2.6.2.9.04.3.06.6.08.9.02.3.02.6.02.9s-.02.6-.04.9c0 .3-.07.6-.1.9-.05.3-.1.6-.17.9-.1.3-.2.6-.3.9-.13.3-.27.6-.4.9a13.3 13.3 0 01-1.1 1.3c-.08.1-.17.2-.26.3-.06.05-.12.1-.18.15-2.5 2.1-5.6 3.2-8.8 3.2-.2 0-.4 0-.6-.02-.2 0-.4-.02-.6-.03-.2 0-.4-.02-.6-.04-.2-.02-.4-.04-.6-.06l-.5-.07c.8-.5 1.5-1 2.2-1.6 3-2.5 5-5.7 5.7-9.1z"></path></svg>
);

export const PurposeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L16.732 3.732z" />
    </svg>
);

export const AliveIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);

export const ChatTechnologyIcon: React.FC<IconProps> = VirtualAssistanceIcon;

export const ImmersiveIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const VisionIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

export const SmartFunctionalityIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707.707M19.071 4.929l-1.414 1.414" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);

export const CreativeTechnicalIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000 17z" />
    </svg>
);

export const WebsiteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

export const VRIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="8" width="18" height="8" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16v2a2 2 0 002 2h6a2 2 0 002-2v-2" />
    </svg>
);

export const FashionIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11.857C12 11.857 6.429 8.571 3.429 5.143C0.429 1.714 3.429 1.714 3.429 1.714C3.429 1.714 6.429 1.714 7.714 5.143L12 11.857zM12 11.857C12 11.857 17.571 8.571 20.571 5.143C23.571 1.714 20.571 1.714 20.571 1.714C20.571 1.714 17.571 1.714 16.286 5.143L12 11.857zM12 11.857V22.286" />
    </svg>
);

export const UIIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m14-6h-4a2 2 0 00-2 2v4m0 10v-4a2 2 0 00-2-2h-4m14 0h-4a2 2 0 00-2 2v4M5 9v4a2 2 0 002 2h4" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const SendIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const CallToActionArrowIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChatbotIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);

export const FaqIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const BuildingIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const SlowLoadIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const NoConversionIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18L13.5 14H10.5L3 4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14v4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8" />
    </svg>
);

export const InvisibleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
    </svg>
);

export const PremiumLookIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l4 4L12 3l3 4 4-4M5 21l4-4 3 4 3-4 4 4M12 3v18" />
    </svg>
);

export const FastPerformIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const CTAVisual: React.FC = () => (
    <div className="absolute lg:relative right-0 bottom-0 w-[320px] h-[256px] lg:w-[400px] lg:h-[320px] flex items-center justify-center">
        <motion.div
            className="w-full h-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
        >
            {/* Main dashboard card */}
            <motion.div 
                className="absolute inset-x-0 bottom-0 h-4/5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            />
            
            {/* Floating UI card */}
            <motion.div
                className="absolute top-0 left-0 lg:left-8 w-40 h-24 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30 p-3 flex flex-col gap-2"
                variants={{ hidden: { opacity: 0, x: -20, rotate: -15 }, visible: { opacity: 1, x: 0, rotate: -5 } }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <div className="w-full h-3 bg-blue-300/50 rounded" />
                <div className="w-2/3 h-3 bg-blue-300/50 rounded" />
            </motion.div>

             {/* Floating chart card */}
            <motion.div
                className="absolute bottom-8 right-0 lg:-right-8 w-36 h-28 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/30 p-3 flex items-end gap-2"
                 variants={{ hidden: { opacity: 0, x: 20, rotate: 10 }, visible: { opacity: 1, x: 0, rotate: 5 } }}
                transition={{ type: 'spring', stiffness: 100 }}
            >
                <motion.div 
                  className="w-1/3 h-1/2 bg-green-300/50 rounded-sm" 
                  initial={{ height: '25%' }} animate={{ height: '50%' }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                />
                <motion.div 
                  className="w-1/3 h-full bg-green-300/50 rounded-sm"
                  initial={{ height: '75%' }} animate={{ height: '100%' }}
                  transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                />
                <motion.div 
                  className="w-1/3 h-1/3 bg-green-300/50 rounded-sm"
                  initial={{ height: '50%' }} animate={{ height: '33%' }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                />
            </motion.div>
        </motion.div>
    </div>
);