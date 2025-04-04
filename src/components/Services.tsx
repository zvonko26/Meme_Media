import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const services = [
    {
        title: "Web Development",
        description: "Izrada modernih web stranica",
        image: "/assets/images/web-dev.jpg",
        fullDescription: "Pružamo kompletan servis izrade modernih web stranica, uključujući responzivni dizajn, optimizaciju performansi i integraciju s najnovijim tehnologijama. Naš tim stručnjaka osigurava da vaša web stranica bude brza, sigurna i laka za održavanje."
    },
    {
        title: "E-commerce",
        description: "Online trgovine i sustavi",
        image: "/assets/images/ecommerce.jpg",
        fullDescription: "Razvijamo napredne e-commerce sustave koji omogućavaju jednostavno upravljanje proizvodima, naručivanje i plaćanje. Uključujemo sve potrebne funkcionalnosti poput upravljanja zalihama, analitike prodaje i integracije s plaćanim sustavima."
    },
    {
        title: "SEO Optimization",
        description: "Optimizacija za tražilice",
        image: "/assets/images/seo.jpg",
        fullDescription: "Optimiziramo vašu web stranicu za tražilice kako biste bili bolje vidljivi u rezultatima pretrage. Naš SEO pristup uključuje tehničku optimizaciju, optimizaciju sadržaja i analizu konkurencije."
    },
    {
        title: "Digital Marketing",
        description: "Marketing strategije",
        image: "/assets/images/marketing.jpg",
        fullDescription: "Razvijamo i implementiramo digitalne marketing strategije koje povećavaju vašu online prisutnost i privlače nove klijente. Uključujemo SEO, društvene mreže, PPC kampanje i analizu podataka."
    },
    {
        title: "Brand Design",
        description: "Dizajn i brendiranje",
        image: "/assets/images/brand.jpg",
        fullDescription: "Kreiramo jedinstveni vizualni identitet vašeg brenda koji će vas istaknuti na tržištu. Naš tim dizajnera razvija logo, boje, tipografiju i vizualne elemente koji odgovaraju vašoj poslovnoj strategiji."
    }
];

const Services = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 15,
        restDelta: 0.001,
        mass: 0.1
    });

    const carouselRotation = useTransform(smoothProgress, [0, 1], [0, -360]);

    const handleServiceClick = (service: typeof services[0]) => {
        setSelectedService(service);
    };

    return (
        <section ref={containerRef} className="relative h-[150vh] bg-black pt-32">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

                <div className="absolute inset-0 opacity-5">
                    <div className="matrix-bg" />
                </div>

                <motion.div
                    style={{ opacity: useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]) }}
                    className="absolute top-[15vh] left-0 right-0 text-center z-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t('services.title')}
                    </h2>
                    <p className="text-lg text-white/70">
                        {t('services.scrollHint')}
                    </p>
                </motion.div>

                <div
                    style={{
                        perspective: "2000px",
                        perspectiveOrigin: "50% 50%"
                    }}
                    className="relative w-[1000px] h-[500px] mt-32"
                >
                    {services.map((service, index) => {
                        const angle = (index * 360) / services.length;
                        const radius = 300;

                        const progress = useTransform(carouselRotation, (rotation) => {
                            const currentAngle = (angle + rotation) % 360;
                            return currentAngle / 360;
                        });

                        const x = useTransform(progress, (p) => {
                            return Math.sin(p * Math.PI * 2) * radius;
                        });

                        const z = useTransform(progress, (p) => {
                            return Math.cos(p * Math.PI * 2) * radius;
                        });

                        const isActive = useTransform(progress, (p) => {
                            const normalizedProgress = ((p + 0.5) % 1);
                            return Math.max(0, 1 - Math.abs(normalizedProgress - 0.5) * 2);
                        });

                        const y = useTransform(isActive, [0, 1], ["-50%", "-55%"]);
                        const scale = useTransform(isActive, [0, 1], [0.8, 1]);

                        return (
                            <motion.div
                                key={index}
                                style={{
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    x,
                                    y,
                                    z,
                                    scale,
                                    opacity: useTransform(isActive, [0, 1], [0.3, 1]),
                                    filter: useTransform(isActive, (active) => `brightness(${active * 100 + 50}%)`),
                                    pointerEvents: useTransform(isActive, (active) => active > 0.6 ? "auto" : "none"),
                                    zIndex: useTransform(isActive, (active) => Math.round(active * 10))
                                }}
                                className="w-[240px] h-[340px] transition-all duration-300"
                                whileHover={{
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <div
                                    className="relative group cursor-pointer"
                                    onClick={() => handleServiceClick(service)}
                                >
                                    <motion.div
                                        className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur-md"
                                        style={{
                                            opacity: useTransform(isActive, [0, 1], [0.2, 0.6])
                                        }}
                                    />

                                    <div className="relative bg-black rounded-xl overflow-hidden h-full shadow-xl shadow-black/60">
                                        <div className="h-44 overflow-hidden">
                                            {service.image && (
                                                <motion.img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                    style={{
                                                        scale: useTransform(isActive, [0, 1], [1, 1.1])
                                                    }}
                                                />
                                            )}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"
                                                style={{
                                                    opacity: useTransform(isActive, [0, 1], [0.9, 0.7])
                                                }}
                                            />
                                        </div>

                                        <div className="p-5 bg-black">
                                            <motion.h3
                                                className="text-xl font-bold mb-2"
                                                style={{
                                                    color: useTransform(isActive, [0, 1], ['#ffffff', '#f97316'])
                                                }}
                                            >
                                                {service.title}
                                            </motion.h3>
                                            <motion.p
                                                className="text-sm mb-4"
                                                style={{
                                                    color: useTransform(isActive, [0, 1], ['#6b7280', '#d1d5db'])
                                                }}
                                            >
                                                {service.description}
                                            </motion.p>

                                            <motion.button
                                                initial={false}
                                                whileHover={{
                                                    scale: 1.05,
                                                    backgroundColor: "#ea580c",
                                                    transition: { duration: 0.2 }
                                                }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-4 py-2 bg-orange-500 text-white rounded-lg transition-all duration-200 shadow-lg hover:shadow-orange-500/50 w-full text-sm font-semibold"
                                            >
                                                Saznaj više
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-black rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="relative h-[300px]">
                                <img
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                            </div>

                            <div className="p-6">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    {selectedService.title}
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    {selectedService.fullDescription}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services; 