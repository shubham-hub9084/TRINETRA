import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity } from 'lucide-react';
import { Typewriter } from '@/components/ui/typewriter-text';

import heroBg from '../../assets/dehradun_bg.png';

const Hero: React.FC = () => {


    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
            {/* Background Image with Overlay */}
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 scale-105 animate-slow-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Subheading */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex items-center gap-3"
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                            <span className="text-teal-400 font-semibold tracking-widest uppercase text-xs md:text-sm bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                                Public Health Awareness Initiative
                            </span>
                        </motion.div>

                        {/* Primary Headline */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight min-h-[1.2em]">
                            <Typewriter
                                text={["TRINETRA", "PREDICT", "DETECT", "ELIMINATE"]}
                                speed={100}
                                loop={true}
                                cursorClassName="text-teal-500"
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400"
                            />
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-lg md:text-xl text-slate-300 dark:text-slate-200 leading-relaxed max-w-2xl font-light">
                            Empowering communities in Uttarakhand with <span className="text-white font-medium">real-time insights</span> and <span className="text-white font-medium">AI-driven alerts</span>. Join our mission to create a safer, disease-free environment through advanced vector-borne disease surveillance and awareness.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-semibold rounded-full shadow-lg shadow-teal-900/20 hover:shadow-teal-500/30 transition-all flex items-center gap-2 group"
                            >
                                Explore Our Mission
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <a
                                href="https://nhm.uk.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 rounded-full backdrop-blur-md transition-all flex items-center gap-2 hover:border-teal-500/30"
                            >
                                <Activity className="w-5 h-5 text-teal-400" />
                                National Health Mission
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
