import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingUp, ShieldAlert } from 'lucide-react';
import activeCaseImg from '../../assets/uttarakhand_vector_borne_map.png';

const Problem: React.FC = () => {
    return (
        <section id="problem" className="py-24 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Vector-Borne Disease <span className="text-red-600">Distribution</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Overview of vector-borne disease cases across Uttarakhand districts (September 2023).
                    </p>
                </div>

                {/* Hotspot Analysis Section - Infographic */}
                <div className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-6 md:p-10 shadow-xl border border-slate-200 dark:border-slate-700 mb-20">
                    <div className="flex flex-col items-center">
                        <div className="w-full">
                            <motion.img
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                src={activeCaseImg}
                                alt="Uttarakhand Vector Borne Disease Distribution Infographic"
                                className="w-full rounded-xl shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* General Challenges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Late Detection",
                            desc: "Traditional methods only detect outbreaks after they spread.",
                            icon: <AlertTriangle size={40} className="text-orange-500" />
                        },
                        {
                            title: "Manual Spraying Risks",
                            desc: "Human-operated fogging is hazardous and lacks precision.",
                            icon: <ShieldAlert size={40} className="text-red-500" />
                        },
                        {
                            title: "Information Gap",
                            desc: "Communities in high-risk zones lack real-time preventive alerts.",
                            icon: <TrendingUp size={40} className="text-blue-500" />
                        }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group">
                            <div className="bg-white dark:bg-slate-900 w-20 h-20 mx-auto rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Problem;
