import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Database, Share2, Activity } from 'lucide-react';

const Architecture: React.FC = () => {
    const pillars = [
        {
            id: 1,
            title: "Data Acquisition",
            subtitle: "Detection Module",
            icon: <Activity size={32} />,
            desc: "IoT Sensors, Audio/Visual Inputs, GIS Mapping",
            color: "bg-teal-100 text-teal-600 border-teal-200",
            arrowColor: "text-teal-300"
        },
        {
            id: 2,
            title: "AI Analysis",
            subtitle: "Processing Core",
            icon: <Server size={32} />,
            desc: "ML Classifiers, Predictive Modeling, Hotspot ID",
            color: "bg-blue-100 text-blue-600 border-blue-200",
            arrowColor: "text-blue-300"
        },
        {
            id: 3,
            title: "Strategic Decision",
            subtitle: "Policy Integration",
            icon: <Database size={32} />,
            desc: "Resource Allocation, Govt. Alerts, Planning",
            color: "bg-purple-100 text-purple-600 border-purple-200",
            arrowColor: "text-purple-300"
        },
        {
            id: 4,
            title: "Action Execution",
            subtitle: "Elimination & Awareness",
            icon: <Share2 size={32} />,
            desc: "Drone Spraying, Public Alerts, Community Ops",
            color: "bg-orange-100 text-orange-600 border-orange-200",
            arrowColor: "text-orange-300"
        }
    ];

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-200 dark:bg-teal-900/40 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-200 dark:bg-purple-900/40 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">System <span className="text-purple-600 dark:text-purple-400">Architecture</span></h2>
                    <div className="w-24 h-1.5 bg-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A seamless end-to-end flow from data collection to ground-level action.
                    </p>
                </div>

                <div className="relative flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-0">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-20 right-20 h-1 bg-gradient-to-r from-teal-200 via-purple-200 to-orange-200 dark:from-teal-800 dark:via-purple-800 dark:to-orange-800 -z-10 rounded-full"></div>

                    {pillars.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center group w-full lg:w-1/4 px-4"
                        >
                            {/* Icon Circle */}
                            <div className={`w-24 h-24 rounded-3xl ${step.color} border-4 flex items-center justify-center shadow-lg transform group-hover:-translate-y-2 group-hover:rotate-3 transition-all duration-300 z-20 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm dark:border-opacity-50`}>
                                {step.icon}
                            </div>

                            {/* Content Card */}
                            <div className="mt-8 text-center bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 w-full max-w-xs hover:shadow-2xl transition-all relative z-20">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-800 dark:bg-slate-950 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                                    Step 0{step.id}
                                </div>
                                <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">{step.title}</h4>
                                <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 mb-3">{step.subtitle}</p>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>

                            {/* Mobile Connector */}
                            {index < pillars.length - 1 && (
                                <div className="lg:hidden my-4 text-slate-300 dark:text-slate-600">
                                    <ArrowRight className="transform rotate-90" size={32} />
                                </div>
                            )}

                            {/* Desktop Connector Arrow */}
                            {index < pillars.length - 1 && (
                                <div className={`hidden lg:block absolute top-8 -right-4 z-0 ${step.arrowColor}`}>
                                    <ArrowRight size={32} />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Architecture;
