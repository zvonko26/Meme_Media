import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

interface Service {
    title: string;
    description: string;
    image: string;
    category: string;
    fullDescription: string;
}

const categories = [
    'Sve',
    'Development',
    'E-commerce',
    'SEO',
    'Marketing',
    'Branding'
];

const services: Service[] = [
    {
        title: 'Web Development',
        description: 'Moderne i responzivne web stranice prilagođene vašim potrebama.',
        image: '/assets/images/web-dev.jpg',
        category: 'Development',
        fullDescription: 'Moderne i responzivne web stranice prilagođene vašim potrebama.'
    },
    {
        title: 'E-commerce',
        description: 'Potpune e-commerce platforme s integracijom plaćanja.',
        image: '/assets/images/ecommerce.jpg',
        category: 'E-commerce',
        fullDescription: 'Potpune e-commerce platforme s integracijom plaćanja.'
    },
    {
        title: 'SEO',
        description: 'Optimizacija za tražilice i poboljšanje vidljivosti.',
        image: '/assets/images/seo.jpg',
        category: 'SEO',
        fullDescription: 'Optimizacija za tražilice i poboljšanje vidljivosti.'
    },
    {
        title: 'Marketing',
        description: 'Digitalni marketing i kampanje na društvenim mrežama.',
        image: '/assets/images/marketing.jpg',
        category: 'Marketing',
        fullDescription: 'Digitalni marketing i kampanje na društvenim mrežama.'
    },
    {
        title: 'Branding',
        description: 'Vizualni identitet i branding strategije.',
        image: '/assets/images/brand.jpg',
        category: 'Branding',
        fullDescription: 'Vizualni identitet i branding strategije.'
    }
];

const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState('Sve');
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 15,
        restDelta: 0.001,
        mass: 0.1
    });

    const y = useTransform(smoothProgress, [0, 1], [0, -100]);
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(smoothProgress, [0, 1], [0.8, 1]);

    const filteredServices = selectedCategory === 'Sve'
        ? services
        : services.filter(service => service.category === selectedCategory);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black pt-32">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

                <div className="absolute inset-0 opacity-5">
                    <div className="matrix-bg" />
                </div>

                <motion.div
                    style={{ opacity, y, scale }}
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Naše Usluge
                        </h2>
                        <p className="text-xl text-white/70">
                            Sve što vam treba za uspješan online posao
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-colors duration-300 ${selectedCategory === category
                                    ? 'bg-orange-500 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-lg bg-gray-900"
                            >
                                <div className="aspect-w-16 aspect-h-9">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm sm:text-base mb-2">
                                            {service.category}
                                        </p>
                                        <p className="text-gray-300 text-sm sm:text-base">
                                            {service.description}
                                        </p>
                                        <button
                                            onClick={() => setSelectedService(service)}
                                            className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors duration-300"
                                        >
                                            Saznajte više
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-900 rounded-lg p-6 max-w-2xl w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <h3 className="text-2xl font-bold text-white mb-4">
                                {selectedService.title}
                            </h3>
                            <p className="text-gray-300 mb-4">
                                {selectedService.fullDescription}
                            </p>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                            >
                                Zatvori
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Services; 