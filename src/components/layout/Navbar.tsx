import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

import logoImg from '../../assets/trinetra_logo.png';

import FeedbackDialog from '../ui/feedback-dialog';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Problem', href: '#problem' },
        { name: 'Solution', href: '#solution' },
        { name: 'Team', href: '#team' },
    ];

    const openFeedback = () => setIsFeedbackOpen(true);

    return (
        <>
            <FeedbackDialog open={isFeedbackOpen} onOpenChange={(e) => setIsFeedbackOpen(e.open)} />
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-slate-800/50 py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <a href="#" className="flex items-center space-x-3 group">
                        <img
                            src={logoImg}
                            alt="Trinetra Logo"
                            className={`w-12 h-12 object-contain filter drop-shadow-md group-hover:scale-110 transition-transform ${isScrolled ? 'invert dark:invert-0' : ''}`}
                        />
                        <span className={`text-2xl font-display font-bold transform group-hover:scale-105 transition-transform origin-left ${isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'}`}>
                            TRINETRA
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`transition-colors text-sm font-bold tracking-wide ${isScrolled ? 'text-slate-700 hover:text-teal-700 dark:text-slate-200 dark:hover:text-teal-400' : 'text-white/90 hover:text-white'
                                    }`}
                            >
                                {link.name.toUpperCase()}
                            </a>
                        ))}

                        <button
                            onClick={openFeedback}
                            className={`relative flex items-center gap-2 transition-colors text-sm font-bold tracking-wide uppercase ${isScrolled ? 'text-slate-700 hover:text-teal-700 dark:text-slate-200 dark:hover:text-teal-400' : 'text-white/90 hover:text-white'
                                }`}>
                            <span>Feedback</span>
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                            </span>
                        </button>

                        <div className="flex items-center space-x-4 ml-4">
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-full transition-colors ${isScrolled
                                    ? 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                                    : 'text-white/90 hover:bg-white/10'
                                    }`}
                                aria-label="Toggle Theme"
                            >
                                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full transition-colors ${isScrolled
                                ? 'text-slate-600 dark:text-slate-300'
                                : 'text-white/90'
                                }`}
                            aria-label="Toggle Theme"
                        >
                            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                        </button>
                        <button
                            className={`${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-t border-gray-100 dark:border-slate-800 shadow-xl"
                        >
                            <div className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-gray-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 text-lg font-medium"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <button
                                    onClick={() => {
                                        openFeedback();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-gray-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 text-lg font-medium w-full text-left"
                                >
                                    <span>Feedback</span>
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-500"></span>
                                    </span>
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
};

export default Navbar;
