import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Brain, Bot, Leaf, Globe2 } from 'lucide-react';

const FutureScope: React.FC = () => {
    const steps = [
        { icon: <Building2 />, title: "Smart Cities", desc: "Integration with urban IoT grids." },
        { icon: <Brain />, title: "Advanced Forecasting", desc: "Long-term climate impact models." },
        { icon: <Bot />, title: "Autonomous Elimination", desc: "Fully automated drone swarms." },
        { icon: <Leaf />, title: "Bio-Control", desc: "Sustainable biological vector control." },
        { icon: <Globe2 />, title: "Global Network", desc: "Worldwide disease tracking grid." },
    ];

    return (
        <section className="py-24 bg-white text-slate-800 border-t border-slate-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">Future <span className="text-teal-600">Scope</span></h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="w-full sm:w-64 bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-teal-400 transition-all shadow-lg hover:shadow-teal-100 flex flex-col items-center text-center group"
                        >
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-teal-600 mb-6 text-3xl shadow-md group-hover:bg-teal-600 group-hover:text-white transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-lg mb-3 text-slate-900">{step.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureScope;
