import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectPhases = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const phases = [
        {
            title: "Faza 1: Istraživanje, ciljevi i struktura",
            description: "Planiranje & Strategija",
            details: "Definiranje ciljeva, analiza tržišta i izrada plana razvoja",
            icon: "🎯",
            gradient: "from-blue-500 to-purple-500"
        },
        {
            title: "Faza 2: UI/UX dizajn i prototipiranje",
            description: "Dizajn",
            details: "Kreiranje wireframe-a, mockup-a i interaktivnih prototipova",
            icon: "🎨",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            title: "Faza 3: Frontend & backend development",
            description: "Razvoj",
            details: "Implementacija dizajna i funkcionalnosti",
            icon: "💻",
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Faza 4: Objavljivanje, SEO i analitika",
            description: "Lansiranje & Optimizacija",
            details: "Optimizacija performansi i praćenje rezultata",
            icon: "🚀",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
                >
                    Proces Razvoja
                </motion.h2>

                <div className="space-y-32">
                    {phases.map((phase, index) => {
                        const [ref, inView] = useInView({
                            threshold: 0.2,
                            triggerOnce: true
                        });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-r ${phase.gradient} opacity-10 rounded-2xl blur-xl`} />

                                <div className="relative bg-neutral-900/50 backdrop-blur-lg rounded-2xl p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                                        <div className="text-6xl">{phase.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                                {phase.title}
                                            </h3>
                                            <p className="text-xl text-white/70 mb-2">
                                                {phase.description}
                                            </p>
                                            <p className="text-gray-400">
                                                {phase.details}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Animated progress line */}
                                    {index < phases.length - 1 && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={inView ? { height: '100px' } : {}}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                            className={`absolute left-8 md:left-12 top-full w-0.5 bg-gradient-to-b ${phase.gradient}`}
                                        />
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
            </div>
        </section>
    );
};

export default ProjectPhases; 