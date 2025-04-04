import { useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import ProjectPhases from './components/ProjectPhases';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './index.css';

function App() {
    useEffect(() => {
        const handleSmoothScroll = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const link = target.closest('a');

            if (link?.hash) {
                e.preventDefault();
                const element = document.querySelector(link.hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        document.addEventListener('click', handleSmoothScroll);
        return () => document.removeEventListener('click', handleSmoothScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />
            <main>
                <Hero />
                <div className="py-32">
                    <Services />
                </div>
                <ProjectPhases />
                <Portfolio />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App; 