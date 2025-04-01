import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ value, delay }: { value: number; delay: number }) => {
    const [count, setCount] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView && !isAnimating) {
            setIsAnimating(true);
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = value / steps;
            let current = 0;
            let interval: NodeJS.Timeout;

            const timer = setTimeout(() => {
                interval = setInterval(() => {
                    current += increment;
                    if (current >= value) {
                        setCount(value);
                        clearInterval(interval);
                    } else {
                        setCount(Math.floor(current));
                    }
                }, duration / steps);
            }, delay);

            return () => {
                clearTimeout(timer);
                if (interval) {
                    clearInterval(interval);
                }
            };
        }
    }, [inView, value, delay, isAnimating]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay }}
            className="text-4xl font-bold text-orange-500 mb-2"
        >
            {count}+
        </motion.div>
    );
};

const About = () => {
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const [inViewRef, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    const stats = [
        { number: 15, label: 'Završenih projekata' },
        { number: 120, label: 'Zadovoljnih klijenata' },
        { number: 5, label: 'Godine iskustva' },
    ];

    const Counter = ({ number, label }: { number: number; label: string }) => {
        const { ref, inView } = useInView({
            threshold: 0.5,
            triggerOnce: true,
        });

        return (
            <motion.div
                ref={ref}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="text-center p-6 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-lg backdrop-blur-sm"
            >
                <div className="text-5xl font-bold text-orange-500 mb-2">{number}</div>
                <div className="text-white/90">{label}</div>
            </motion.div>
        );
    };

    return (
        <section id="about" ref={ref} className="relative py-20 overflow-hidden">
            {/* Background with parallax effect */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 bg-gradient-to-br from-black via-orange-900 to-yellow-900"
            >
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
            </motion.div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={inViewRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        {t('about.title')}
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        {t('about.description')}
                    </p>
                </motion.div>

                {/* Team stats */}
                <motion.div
                    ref={inViewRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {stats.map((stat, index) => (
                        <Counter key={index} number={stat.number} label={stat.label} />
                    ))}
                </motion.div>

                {/* Team members */}
                <motion.div
                    ref={inViewRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {[1, 2, 3, 4].map((member) => (
                        <motion.div
                            key={member}
                            whileHover={{ scale: 1.05, rotateY: 10 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <div className="relative bg-black/50 backdrop-blur-lg rounded-lg p-6 text-center">
                                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500" />
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {t(`about.team.member${member}.name`)}
                                </h3>
                                <p className="text-white/80">
                                    {t(`about.team.member${member}.role`)}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About; 