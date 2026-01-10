import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import detectionImg from '../../assets/trinetra_detection_ai_v2.png';
import eliminationImg from '../../assets/trinetra_elimination_drones.png';
import awarenessImg from '../../assets/trinetra_awareness_campaign.png';

const Solution: React.FC = () => {
    const solutions = [
        {
            id: 'detection',
            title: "Detection Module",
            subtitle: "AI & ML Powered Surveillance",
            description: "A proactive system that identifies potential threats before they escalate. By analyzing environmental data and vector signatures using advanced Deep Learning models, Trinetra predicts outbreaks with high precision, allowing authorities to act days before a crisis occurs.",
            features: [
                "Audio-Visual Mosquito Signature Analysis",
                "Real-time Environmental Monitoring (Temp, Humidity)",
                "GIS Spatial Mapping & Hotspot Identification",
                "Predictive Outbreak Modeling"
            ],
            tech: ["Convolutional Neural Networks", "IoT Sensors", "Geospatial Data", "Spectrographic Analysis"],
            image: detectionImg,
            theme: {
                bg: "bg-teal-100",
                badge: "bg-teal-100",
                text: "text-teal-800",
                check: "text-teal-700"
            }
        },
        {
            id: 'elimination',
            title: "Elimination Module",
            subtitle: "Autonomous Vector Control",
            description: "Precision-guided intervention using robotics and unmanned aerial vehicles (UAVs). We target mosquito breeding grounds in hard-to-reach areas like stagnant water bodies and dense vegetation, minimizing human exposure to hazardous control chemicals.",
            features: [
                "Autonomous Interaction Drones",
                "Amphibious Rovers for Marshy Terrain",
                "Precision Chemical & Ultrasonic Spraying",
                "Biological Control Deployment"
            ],
            tech: ["LIDAR Navigation", "Ultrasonic Nebulizers", "Swarm Intelligence", "Robotics"],
            image: eliminationImg,
            theme: {
                bg: "bg-orange-100",
                badge: "bg-orange-100",
                text: "text-orange-800",
                check: "text-orange-700"
            }
        },
        {
            id: 'awareness',
            title: "Awareness Module",
            subtitle: "Community Engagement",
            description: "Empowering citizens with knowledge and real-time alerts. Trinetra connects the public with health officials, providing localized risk alerts, preventive education, and a direct channel for reporting hazards.",
            features: [
                "Multi-channel Alert System (SMS, App)",
                "Educational Content Repository",
                "Community Reporting Tools",
                "Government Health Scheme Integration"
            ],
            tech: ["React Native Mobile App", "Push Notification Service", "Content Management System"],
            image: awarenessImg,
            theme: {
                bg: "bg-blue-100",
                badge: "bg-blue-100",
                text: "text-blue-800",
                check: "text-blue-700"
            }
        }
    ];

    return (
        <section id="solution" className="py-24 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">TRINETRA <span className="text-blue-600">Framework</span></h2>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
                        A holistic three-pillared approach combining advanced technology with community participation to eradicate vector-borne diseases.
                    </p>
                </div>

                <div className="space-y-32">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative group">
                                    <div className={`absolute -inset-4 ${item.theme.bg} rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500`}></div>
                                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                            <p className="text-white font-medium">{item.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div>
                                    <div className={`inline-block px-4 py-1.5 rounded-full ${item.theme.badge} ${item.theme.text} font-bold text-sm mb-4 uppercase tracking-wider`}>
                                        Pillar 0{index + 1}
                                    </div>
                                    <h3 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                    <h4 className="text-xl font-medium text-slate-500 dark:text-slate-400 mb-6">{item.subtitle}</h4>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {item.features.map((feature, i) => (
                                        <div key={i} className="flex items-start space-x-3">
                                            <CheckCircle2 size={20} className={`${item.theme.check} mt-1 shrink-0`} />
                                            <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                                    <p className="text-sm font-bold text-slate-400 mb-3 uppercase">Key Technologies</p>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tech.map((tech, t) => (
                                            <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-lg text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
