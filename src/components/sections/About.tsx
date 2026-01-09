import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Target, Users, Landmark } from 'lucide-react';

const About: React.FC = () => {
    const features = [
        {
            icon: <Cpu className="w-8 h-8 text-teal-700" />,
            title: "AI-Based Detection",
            desc: "Advanced algorithms to identify mosquito breeding capability tailored for audio-visual signatures."
        },
        {
            icon: <Target className="w-8 h-8 text-orange-700" />,
            title: "Drone-Based Elimination",
            desc: "Targeted insecticide spraying and accessible rover systems for difficult terrains."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-700" />,
            title: "Community Awareness",
            desc: "Public health interface providing real-time alerts and educational content."
        },
        {
            icon: <Landmark className="w-8 h-8 text-slate-700" />,
            title: "Policy Integration",
            desc: "Providing data-driven insights for government resource optimization."
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About <span className="text-teal-600 dark:text-teal-400">Trinetra</span></h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mb-8"></div>
                    <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                        Trinetra is an AI-driven Vector Borne Disease Management System developed by <span className="text-teal-700 dark:text-teal-400 font-bold">Team Technophiles</span>.
                        The system integrates Artificial Intelligence, Machine Learning, IoT, GIS mapping, and drones to combat diseases like malaria and dengues.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 hover:border-teal-200 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="bg-slate-50 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-slate-200 dark:border-slate-700 group-hover:border-teal-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">{feature.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
