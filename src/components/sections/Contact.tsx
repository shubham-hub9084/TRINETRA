import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Feedback <span className="text-teal-400">& Suggestions</span></h2>
                    <p className="text-slate-400 text-lg">Reach out for collaborations, data requests, or pilot programs.</p>
                </div>

                <div className="bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Name</label>
                                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-slate-600" placeholder="Enter your name" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-slate-300 mb-2">Email</label>
                                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-slate-600" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">Subject</label>
                            <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-slate-600" placeholder="Collaboration / Inquiry" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                            <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder-slate-600" placeholder="Your message..."></textarea>
                        </div>
                        <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 py-4.5 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-teal-500/25">
                            <span>Send Message</span>
                            <Send size={20} />
                        </button>
                    </form>

                    <div className="mt-12 flex flex-col md:flex-row justify-center gap-8 text-slate-400 text-sm font-medium">
                        <div className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
                            <Mail size={18} className="text-teal-500" />
                            <span>queries@trinetra-technophiles.com</span>
                        </div>
                        <div className="flex items-center space-x-2 hover:text-teal-400 transition-colors">
                            <MessageSquare size={18} className="text-teal-500" />
                            <span>Live Chat Available (9 AM - 6 PM)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
