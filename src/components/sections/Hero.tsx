import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';

import heroBg from '../../assets/dehradun_bg.png';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        {/* Subheading */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-12 bg-teal-400/60" />
                            <span className="text-teal-400 font-medium tracking-widest uppercase text-sm">
                                Predict • Detect • Eliminate
                            </span>
                        </motion.div>

                        {/* Primary Headline */}
                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                            TRINETRA
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg text-slate-300 dark:text-slate-200 leading-relaxed max-w-2xl font-light">
                            Advancing public health safety across Uttarakhand through <span className="text-teal-400 font-medium">pioneering AI integration</span> and autonomous response systems. We enable real-time risk identification and rapid neutralization.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3.5 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-md transition-all flex items-center gap-2 group"
                            >
                                Explore System
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => document.getElementById('awareness')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/20 rounded-md backdrop-blur-sm transition-all flex items-center gap-2"
                            >
                                <Activity className="w-4 h-4 text-teal-400" />
                                Public Portal
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
