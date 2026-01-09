import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Lock, Github, Linkedin, Chrome } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            >
                {/* Left Side - Visual */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-16 -mb-16"></div>

                    <Link to="/" className="flex items-center text-slate-300 hover:text-white transition-colors cursor-pointer w-fit">
                        <ArrowLeft size={20} className="mr-2" /> Back to Home
                    </Link>

                    <div className="relative z-10 mt-12 md:mt-0">
                        <h2 className="text-4xl font-bold mb-4">Welcome Back</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Access the Trinetra dashboard to monitor vector-borne disease data, view real-time analytics, and coordinate response efforts.
                        </p>
                    </div>

                    <div className="mt-12 text-sm text-slate-400">
                        © 2025 Trinetra. Secure Access.
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-12 bg-white">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-slate-900 mb-2">Sign In</h3>
                        <p className="text-slate-500">Enter your credentials to access your account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Mail size={20} />
                                </div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="admin@trinetra.gov.in"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Lock size={20} />
                                </div>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-slate-600 cursor-pointer">
                                <input type="checkbox" className="mr-2 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300" />
                                Remember me
                            </label>
                            <a href="#" className="text-blue-600 hover:underline font-medium">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-3.5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all transform active:scale-95"
                        >
                            Sign In
                        </button>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-100"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-slate-400 font-medium">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <button type="button" className="flex items-center justify-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                <Chrome size={20} className="text-slate-600" />
                            </button>
                            <button type="button" className="flex items-center justify-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                <Github size={20} className="text-slate-600" />
                            </button>
                            <button type="button" className="flex items-center justify-center p-3 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
                                <Linkedin size={20} className="text-blue-700" />
                            </button>
                        </div>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-500">
                        Don't have an account? <Link to="/signup" className="text-blue-600 font-bold hover:underline">Sign Up</Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
