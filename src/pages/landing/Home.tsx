import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Hero from '../../components/sections/Hero';
import About from '../../components/sections/About';
import VectorBorneInfo from '../../components/sections/VectorBorneInfo';
import Problem from '../../components/sections/Problem';
import Solution from '../../components/sections/Solution';
import Architecture from '../../components/sections/Architecture';
import Team from '../../components/sections/Team';
import LeadersMessage from '../../components/sections/LeadersMessage';

import Footer from '../../components/layout/Footer';

const Home: React.FC = () => {
    return (
        <div className="bg-gray-950 min-h-screen text-white font-sans selection:bg-teal-500 selection:text-white">
            <Navbar />
            <Hero />
            <About />
            <VectorBorneInfo />
            <Problem />
            <Solution />
            <Architecture />
            <LeadersMessage />
            <Team />
            <Footer />
        </div>
    );
};

export default Home;
