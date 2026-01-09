import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Building2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {
    const navigate = useNavigate();
    const [department, setDepartment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock signup
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row-reverse"
            >
                {/* Right Side - Visual */}
                <div className="w-full md:w-1/2 bg-gradient-to-bl from-teal-900 to-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <div className="flex justify-end">
                        <Link to="/" className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer w-fit">
                            Back to Home <ArrowLeft size={20} className="ml-2 rotate-180" />
                        </Link>
                    </div>

                    <div className="relative z-10 mt-12 md:mt-0 text-right">
                        <h2 className="text-4xl font-bold mb-4">Join Trinetra</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Register your department or agency to collaborate on the centralized vector-borne disease control initiative.
                        </p>
                    </div>

                    <div className="mt-12 text-sm text-slate-400 text-right">
                        © 2025 Trinetra. Official Portal.
                    </div>
                </div>

                {/* Left Side - Form */}
                <div className="w-full md:w-1/2 p-12 bg-white">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h3>
                        <p className="text-slate-500">Authorized personnel registration</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Department / Agency</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Building2 size={20} />
                                </div>
                                <select
                                    value={department}
                                    onChange={(e) => setDepartment(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 appearance-none text-slate-600"
                                >
                                    <option value="">Select Department</option>
                                    <option value="health">Health Department</option>
                                    <option value="municipal">Municipal Corporation</option>
                                    <option value="research">Research Institute</option>
                                    <option value="ngo">NGO Partner</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Official Email</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Mail size={20} />
                                </div>
                                <input type="email" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="name@gov.in" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Lock size={20} />
                                </div>
                                <input type="password" className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all" placeholder="Create a strong password" />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 hover:shadow-lg transition-all transform active:scale-95 mt-4"
                        >
                            Register Department
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        Already registered? <Link to="/login" className="text-teal-600 font-bold hover:underline">Sign In</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Signup;
