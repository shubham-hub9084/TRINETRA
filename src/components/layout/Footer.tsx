import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-16 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold mb-4 tracking-wider bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">TRINETRA</h2>
                        <p className="text-slate-400 mb-6 text-lg leading-relaxed">
                            Predict Early. Act Smart. Save Lives. <br />
                            A unified framework for vector-borne disease control.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-700 pb-2 inline-block">Our Mission</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Educate communities</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Prevent vector-borne diseases</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Promote early detection</li>
                            </ul>
                            <ul className="space-y-3 text-slate-300">
                                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Support government initiatives</li>
                                <li className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>Build a safer, healthier India</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Trinetra | AI for Public Health & Disaster Management. Developed by Team Technophiles.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
