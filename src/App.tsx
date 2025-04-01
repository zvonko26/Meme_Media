import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                    >
                        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                    </motion.div>
                )}
            </AnimatePresence>

            <Navbar />
            <main className="relative">
                <Hero />
                <Services />
                <Projects />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App; 