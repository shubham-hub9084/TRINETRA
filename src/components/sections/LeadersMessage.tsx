import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ShieldAlert, HeartPulse, Megaphone, Activity } from 'lucide-react';
import pmImg from '../../assets/PM_MODI.jpg';
import cmImg from '../../assets/CM_DH.jpg';

const tickerItems = [
    { text: "Prevention is better than cure", icon: <ShieldAlert size={20} className="text-teal-400" /> },
    { text: "Small actions today prevent big diseases tomorrow", icon: <HeartPulse size={20} className="text-orange-400" /> },
    { text: "A mosquito bite can be deadly — stay alert", icon: <Megaphone size={20} className="text-teal-400" /> },
    { text: "Awareness saves lives", icon: <Activity size={20} className="text-orange-400" /> },
    { text: "Keep your surroundings clean and dry", icon: <ShieldAlert size={20} className="text-teal-400" /> },
    { text: "Join the mission for a healthier Uttarakhand", icon: <HeartPulse size={20} className="text-orange-400" /> }
];

const LeadersMessage: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                        Leaders' <span className="text-orange-600">Message</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-orange-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Inspiring words from our leadership driving the mission for a healthier India.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto items-stretch mb-24">
                    {/* PM Modi Message */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-2xl transition-all h-full"
                    >
                        <div className="relative w-full h-64 md:h-80 overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/80 to-transparent z-10"></div>
                            <img
                                src={pmImg}
                                alt="Hon'ble Prime Minister Narendra Modi"
                                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
                                <h3 className="text-2xl font-bold">Narendra Modi</h3>
                                <p className="text-orange-200 font-medium">Hon'ble Prime Minister of India</p>
                            </div>
                        </div>
                        <div className="p-8 relative flex-grow flex flex-col justify-center">
                            <Quote className="absolute top-6 left-6 text-orange-100 dark:text-orange-900/20 w-12 h-12 -z-0" />
                            <div className="relative z-10 space-y-6">
                                <div>
                                    <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 leading-snug font-hindi">
                                        “स्वच्छता ही सुरक्षा है, <br /> और जागरूकता ही बचाव।”
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-xl font-semibold text-slate-600 dark:text-slate-400 font-hindi border-l-4 border-orange-500 pl-4 text-left">
                                        “बीमारी से पहले सावधानी, <br /> यही है स्वस्थ भारत की निशानी।”
                                    </p>
                                    <p className="text-xl font-semibold text-slate-600 dark:text-slate-400 font-hindi border-l-4 border-green-500 pl-4 text-left">
                                        “जन-भागीदारी से ही <br /> बीमारी पर विजय संभव है।”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CM Dhami Message */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col group hover:shadow-2xl transition-all h-full"
                    >
                        <div className="relative w-full h-64 md:h-80 overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 to-transparent z-10"></div>
                            <img
                                src={cmImg}
                                alt="Hon'ble Chief Minister Pushkar Singh Dhami"
                                className="w-full h-full object-cover object-[50%_25%] transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 z-20 text-white">
                                <h3 className="text-2xl font-bold">Pushkar Singh Dhami</h3>
                                <p className="text-teal-200 font-medium">Hon'ble Chief Minister, Uttarakhand</p>
                            </div>
                        </div>
                        <div className="p-8 relative flex-grow flex flex-col justify-center">
                            <Quote className="absolute top-6 left-6 text-teal-100 dark:text-teal-900/20 w-12 h-12 -z-0" />
                            <div className="relative z-10">
                                <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 leading-snug mb-6 font-hindi">
                                    “स्वच्छ उत्तराखंड, स्वस्थ उत्तराखंड – <br /> मच्छर मुक्त प्रदेश हमारा संकल्प।”
                                </p>
                                <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-xl border border-teal-100 dark:border-teal-800">
                                    <p className="text-teal-800 dark:text-teal-200 font-medium italic">
                                        "Clean Uttarakhand, Healthy Uttarakhand – <br /> A mosquito-free state is our collective commitment."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Professional Awareness Ticker */}
            <div className="w-full bg-slate-900 py-6 overflow-hidden border-y border-slate-800 relative">
                {/* Gradient Masks for fade effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-20" />

                <div className="flex">
                    <motion.div
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30
                        }}
                        className="flex items-center gap-16 whitespace-nowrap px-4"
                    >
                        {[...tickerItems, ...tickerItems].map((item, index) => (
                            <div key={index} className="flex items-center gap-4 group">
                                <div className="p-2 rounded-full bg-slate-800 group-hover:bg-slate-700 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-slate-300 font-medium tracking-wide uppercase text-sm group-hover:text-white transition-colors">
                                    {item.text}
                                </span>
                                <div className="h-1 w-1 rounded-full bg-slate-600 ml-12" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LeadersMessage;
