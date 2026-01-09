import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle2, XCircle, Home, Droplets } from 'lucide-react';

const VectorBorneInfo: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                        Understanding <span className="text-teal-600 dark:text-teal-400">Vector-Borne Diseases</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        Knowledge is your first line of defense. Understanding the risks and taking simple precautions can save lives.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left Column: Definition & Importance */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        {/* What Are They */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-xl mr-4 text-teal-600 dark:text-teal-400">
                                    <Droplets size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">What Are They?</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                Vector-borne diseases are illnesses caused by pathogens transmitted to humans through vectors such as mosquitoes, ticks, and flies. These diseases spread rapidly, especially in areas with stagnant water, poor sanitation, and high humidity.
                            </p>
                            <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800">
                                <span className="font-semibold text-teal-800 dark:text-teal-200">Common Risks in India:</span>
                                <p className="text-teal-700 dark:text-teal-300 mt-1">Dengue, Malaria, Chikungunya, Zika, Japanese Encephalitis</p>
                            </div>
                        </div>

                        {/* Why Awareness Important */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
                            <div className="flex items-center mb-4">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-xl mr-4 text-orange-600 dark:text-orange-400">
                                    <AlertTriangle size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Why Awareness Is Important</h3>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">Most vector-borne diseases are preventable. Lack of awareness leads to:</p>
                            <ul className="space-y-3">
                                {["Late diagnosis", "Increased hospitalizations", "Loss of life", "Economic burden on families"].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-700 dark:text-slate-300">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 text-center">
                                <span className="inline-block px-6 py-2 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-full text-sm tracking-wider">
                                    AWARENESS + PREVENTION = PROTECTION
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Steps at Home */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-blue-600 to-indigo-700 dark:from-blue-900 dark:to-indigo-950 rounded-3xl shadow-xl overflow-hidden text-white p-10 flex flex-col justify-center relative"
                    >
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Home size={200} />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-center mb-8">
                                <Home className="mr-4 text-blue-200" size={40} />
                                <h3 className="text-3xl font-bold">Simple Steps at Home</h3>
                            </div>

                            <div className="space-y-6">
                                {[
                                    "Change cooler water every week",
                                    "Clean flower pots and trays",
                                    "Keep overhead tanks covered",
                                    "Use larvicides if recommended by health workers"
                                ].map((step, idx) => (
                                    <div key={idx} className="flex items-start bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors">
                                        <div className="bg-blue-500/30 p-2 rounded-lg mr-4 shrink-0">
                                            <span className="font-bold text-blue-200">0{idx + 1}</span>
                                        </div>
                                        <p className="font-medium text-lg pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>

                            <p className="mt-8 text-blue-200 italic font-medium text-center border-t border-white/20 pt-6">
                                "A clean home is the first step toward a healthy society."
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Do's and Don'ts Header */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white inline-flex items-center">
                        <Shield className="mr-3 text-teal-600 dark:text-teal-400" /> How You Can Protect Yourself
                    </h3>
                </div>

                {/* Do's and Don'ts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Do's */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-green-500/10 dark:bg-green-900/20 rounded-3xl p-8 border border-green-200 dark:border-green-800"
                    >
                        <h4 className="flex items-center text-2xl font-bold text-green-800 dark:text-green-400 mb-6">
                            <CheckCircle2 className="mr-3" /> Do’s
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Use mosquito nets and repellents",
                                "Wear full-sleeve clothing",
                                "Keep surroundings clean and dry",
                                "Cover water storage containers",
                                "Use window and door screens",
                                "Report stagnant water near your home"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-green-900 dark:text-green-200 font-medium">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-green-600 rounded-full shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Don'ts */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-red-500/10 dark:bg-red-900/20 rounded-3xl p-8 border border-red-200 dark:border-red-800"
                    >
                        <h4 className="flex items-center text-2xl font-bold text-red-800 dark:text-red-400 mb-6">
                            <XCircle className="mr-3" /> Don’ts
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Do not allow water to collect in coolers, pots, tyres",
                                "Do not ignore fever symptoms",
                                "Do not self-medicate",
                                "Do not throw waste in open areas"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-red-900 dark:text-red-200 font-medium">
                                    <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-red-600 rounded-full shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default VectorBorneInfo;
