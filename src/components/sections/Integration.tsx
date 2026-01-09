import React from 'react';
import { motion } from 'framer-motion';
import { Database, Bell, Globe } from 'lucide-react';

const Integration: React.FC = () => {
    return (
        <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Keeping this section dark for contrast or changing to light? Let's make it a key "Dark Mode" feature section for variety, or switch to light. 
        User asked to redesign full website colors. Let's make this one a distinct "Policy" section, maybe dark blue/slate to keep it professional but distinct. */}

            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Public Health & <br /><span className="text-purple-400">Policy Integration</span></h2>
                        <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                            TRINETRA integrates with public health databases to support real-time data sharing with government agencies and NGOs, enabling faster decision-making and response times.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-purple-500/20 p-4 rounded-xl text-purple-300"><Database size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Efficient Resource Allocation</h4>
                                    <p className="text-slate-400 text-sm">Optimized deployment of resources in high-risk areas based on predictive analysis.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-red-500/20 p-4 rounded-xl text-red-300"><Bell size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">Policy Formulation & Planning</h4>
                                    <p className="text-slate-400 text-sm">Data-driven insights for long-term policy making and national coordination.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-500/20 p-4 rounded-xl text-blue-300"><Globe size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg text-white">International Coordination</h4>
                                    <p className="text-slate-400 text-sm">Aligns with WHO standards for global vector-borne disease prevention.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="aspect-video bg-white rounded-3xl border border-slate-200 p-8 flex flex-col justify-center items-center relative shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-grid-slate-100/[0.5] rounded-3xl"></div>
                            <h3 className="text-2xl font-black mb-8 font-mono text-slate-800 tracking-widest relative z-10">POLICY DASHBOARD</h3>
                            <div className="w-full max-w-xs space-y-4 relative z-10">
                                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div className="h-full bg-purple-600 w-3/4 shadow-lg shadow-purple-200" animate={{ width: ['0%', '75%'] }} transition={{ duration: 1.5 }}></motion.div>
                                </div>
                                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div className="h-full bg-teal-500 w-1/2 shadow-lg shadow-teal-200" animate={{ width: ['0%', '50%'] }} transition={{ duration: 1.5, delay: 0.2 }}></motion.div>
                                </div>
                                <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div className="h-full bg-blue-600 w-5/6 shadow-lg shadow-blue-200" animate={{ width: ['0%', '85%'] }} transition={{ duration: 1.5, delay: 0.4 }}></motion.div>
                                </div>
                            </div>
                            <div className="mt-8 flex gap-4 relative z-10">
                                <button className="px-6 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 transition-colors shadow-lg">GENERATE REPORT</button>
                                <button className="px-6 py-2 bg-white text-slate-900 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-50 transition-colors shadow-sm">DEPLOY TEAMS</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Integration;
