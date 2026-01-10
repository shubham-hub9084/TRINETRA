import React, { useState, useEffect } from 'react';
import { Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExpandableGallery } from '@/components/ui/gallery-animation';
import teamGroupImg1 from '../../assets/Team.jpg';
import teamGroupImg2 from '../../assets/Team-2.jpeg';
import teamGroupImg3 from '../../assets/Team-3.jpg';

// Team Member Images
import imgShashwat from '../../assets/SShin.jpeg';
import imgDhairya from '../../assets/DS.jpeg';
import imgPari from '../../assets/PD.jpeg';
import imgShubham from '../../assets/SS.png';
import imgUjjwal from '../../assets/UP.jpeg';
import imgDaksh from '../../assets/DK.jpeg';

interface TeamMember {
    name: string;
    linkedin: string;
    email: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Shashwat Shinghal",
        linkedin: "https://www.linkedin.com/in/shashwat-shinghal?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BpAh43p88S5%2BaSmY9GnRA8w%3D%3D",
        email: "shinghalshashwat@gmail.com",
        image: imgShashwat
    },
    {
        name: "Dhairya Sarswat",
        linkedin: "https://www.linkedin.com/in/dhairya-sarswat/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BCUhmkkuaQQWUaj5Piwhulw%3D%3D",
        email: "dhairyasarswatwork2005@gmail.com",
        image: imgDhairya
    },
    {
        name: "Pari Dubey",
        linkedin: "https://www.linkedin.com/in/pari-dubey-0710072a1/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BCUhmkkuaQQWUaj5Piwhulw%3D%3D",
        email: "dubeypari338@gmail.com",
        image: imgPari
    },
    {
        name: "Shubham Sahu",
        linkedin: "https://www.linkedin.com/in/shubham-sahu-586958274",
        email: "sahushubham2098@gmail.com",
        image: imgShubham
    },
    {
        name: "Ujjwal Paliwal",
        linkedin: "https://www.linkedin.com/in/ujjwalpaliwal/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BCUhmkkuaQQWUaj5Piwhulw%3D%3D",
        email: "ujjwalpaliwal35@gmail.com",
        image: imgUjjwal
    },
    {
        name: "Daksh Dixit",
        linkedin: "https://www.linkedin.com/in/daksh-dixit/?lipi=urn%3Ali%3Apage%3Ad_flagship3_detail_base%3BCUhmkkuaQQWUaj5Piwhulw%3D%3D",
        email: "dakshdixit2006@gmail.com",
        image: imgDaksh
    }
];

const teamImages = [teamGroupImg1, teamGroupImg2, teamGroupImg3];

const Team: React.FC = () => {


    return (
        <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                    >
                        Meet Our Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-light"
                    >
                        The people behind our success. We are a passionate group of innovators dedicated to reshaping public health safety.
                    </motion.p>
                </div>

                {/* Life at Trinetra Carousel */}
                <div className="mb-24">
                    <div className="flex flex-col items-center mb-8">
                        <span className="text-sm font-bold tracking-[0.2em] text-teal-600 dark:text-teal-400 uppercase mb-2">-</span>
                        <div className="h-1 w-12 bg-teal-600 dark:bg-teal-400 rounded-full" />
                    </div>

                    <ExpandableGallery
                        images={teamImages}
                        className="max-w-5xl mx-auto"
                    />
                </div>

                {/* Team Grid (Single Collection) */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100 dark:border-slate-700"
                        >
                            <div className="flex flex-col items-center">
                                <div className="relative mb-6">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-700 shadow-inner group-hover:scale-105 transition-transform duration-300">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    {/* Simple Status Dot */}
                                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-teal-500 rounded-full border-2 border-white dark:border-slate-800" />
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">{member.name}</h3>

                                <div className="flex gap-4 mt-auto opacity-80 group-hover:opacity-100 transition-opacity">
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-400 dark:text-slate-300 hover:bg-[#0077b5] hover:text-white transition-colors"
                                    >
                                        <Linkedin size={18} />
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="p-2 rounded-full bg-slate-50 dark:bg-slate-700 text-slate-400 dark:text-slate-300 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
                                    >
                                        <Mail size={18} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Team;
