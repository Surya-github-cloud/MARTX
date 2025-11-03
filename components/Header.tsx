import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Process', id: 'process' },
    { name: 'Why Us', id: 'why-us' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (id: string) => {
    handleScroll(id);
    setIsMenuOpen(false);
  };

  const headerVariants = {
    top: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(8px)',
      boxShadow: 'inset 0 0px 0 0 rgba(0, 0, 0, 0)',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(16px)',
      boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.05)',
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={headerVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.div
        className="container mx-auto px-4 flex items-center justify-between"
        animate={{ height: scrolled ? '4.5rem' : '6rem' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <button onClick={scrollToTop} className="flex items-center cursor-pointer flex-shrink-0">
          <div className="flex flex-col items-start">
            <span className="font-bold text-lg leading-tight tracking-[0.2em]">M A R T X</span>
            <span className="text-xs text-gray-500 leading-tight">Premium Web Studio</span>
          </div>
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleScroll(item.id)}
              className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <motion.button
          onClick={() => window.location.href = 'https://cal.com/martx-website'}
          className="hidden md:flex bg-black text-white font-semibold text-sm py-2 px-4 rounded-full hover:bg-gray-800 transition-colors flex-shrink-0"
          whileHover={{ scale: 1.05, y: -2, transition: { type: 'spring', stiffness: 400, damping: 10 } }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 md:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-[0.2em]">M A R T X</span>
              <span className="text-xs text-gray-500 leading-tight">Premium Web Studio</span>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile navigation */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left text-lg font-medium text-gray-700 hover:text-black transition-colors py-3 px-4 rounded-lg bg-gray-50 hover:bg-gray-100"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-gray-200">
            <motion.button
              onClick={() => {
                window.location.href = 'https://cal.com/martx-website';
                setIsMenuOpen(false);
              }}
              className="w-full bg-black text-white font-semibold text-lg py-4 px-6 rounded-full hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
