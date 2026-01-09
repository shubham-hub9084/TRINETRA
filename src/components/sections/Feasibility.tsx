import React from 'react';
import { Network, Users, DollarSign, Globe, CloudSun, Activity } from 'lucide-react';

const Feasibility: React.FC = () => {
    const factors = [
        { icon: <CloudSun size={32} />, title: "Environmental Factors", desc: "Analyzing climate patterns impacting vector growth." },
        { icon: <Users size={32} />, title: "Human Behavior", desc: "Understanding community habits and movements." },
        { icon: <Network size={32} />, title: "Public Health Infra", desc: "Leveraging existing healthcare networks." },
        { icon: <DollarSign size={32} />, title: "Socio-economic Factors", desc: "Cost-effective solutions for all strata." },
        { icon: <Globe size={32} />, title: "Global Travel & Trade", desc: "Monitoring cross-border disease vectors." },
        { icon: <Activity size={32} />, title: "Disease Dynamics", desc: "Real-time tracking of mutation and spread." },
    ];

    return (
        <section id="feasibility" className="py-24 bg-slate-50 text-slate-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-slate-900">Feasibility & <span className="text-green-600">Viability</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {factors.map((factor, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-green-400 hover:shadow-xl transition-all duration-300 group">
                            <div className="mb-6 text-green-600 bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                                {factor.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-800">{factor.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{factor.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feasibility;
