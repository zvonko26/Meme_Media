import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const portfolioItems = [
    {
        title: "CryptoMapa App",
        description: "Interaktivna mapa crypto-friendly lokacija u Hrvatskoj",
        images: {
            desktop: "/assets/images/cryptomapa-desktop.jpg",
            tablet: "/assets/images/cryptomapa-tablet.jpg",
            mobile: "/assets/images/cryptomapa-mobile.jpg"
        },
        features: [
            "Pretraživanje crypto-friendly lokacija",
            "Filtriranje po tipu (restorani, trgovine, smještaj)",
            "Prikaz podržanih kriptovaluta",
            "Interaktivna mapa s markerima",
            "Responsive dizajn"
        ]
    },
    {
        title: "Vila Macan",
        description: "Web stranica za luksuznu vilu za odmor",
        images: {
            desktop: "/assets/images/vila-macan-desktop.jpg",
            tablet: "/assets/images/vila-macan-tablet.jpg",
            mobile: "/assets/images/vila-macan-mobile.jpg"
        },
        features: []
    },
    {
        title: "Micro Shots",
        description: "Portfolio stranica za fotografa",
        images: {
            desktop: "/assets/images/micro-shots-desktop.jpg",
            tablet: "/assets/images/micro-shots-tablet.jpg",
            mobile: "/assets/images/micro-shots-mobile.jpg"
        },
        link: "https://micro-shots.com"
    },
    {
        title: "Mali Raj",
        description: "Web stranica za kuću za odmor",
        images: {
            desktop: "/assets/images/mali-raj-desktop.jpg",
            tablet: "/assets/images/mali-raj-tablet.jpg",
            mobile: "/assets/images/mali-raj-mobile.jpg"
        },
        link: "https://mali-raj.hr"
    },
    {
        title: "Pula Film Festival",
        description: "Digitalni arhiv filmskog festivala",
        images: {
            desktop: "/assets/images/pff-desktop.jpg",
            tablet: "/assets/images/pff-tablet.jpg",
            mobile: "/assets/images/pff-mobile.jpg"
        },
        link: "https://arhiv.pulafilmfestival.hr"
    }
];

interface ImageModalProps {
    images: typeof portfolioItems[0]['images'];
    title: string;
    onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, title, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div className="relative max-w-7xl w-full mx-auto" onClick={e => e.stopPropagation()}>
                <button
                    className="absolute top-4 right-4 text-white text-4xl hover:text-orange-500 transition-colors"
                    onClick={onClose}
                >
                    ×
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold mb-2">Desktop verzija</h3>
                        <img
                            src={images.desktop}
                            alt={`${title} desktop`}
                            className="w-full rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold mb-2">Tablet verzija</h3>
                        <img
                            src={images.tablet}
                            alt={`${title} tablet`}
                            className="w-full rounded-lg shadow-2xl"
                        />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-bold mb-2">Mobilna verzija</h3>
                        <img
                            src={images.mobile}
                            alt={`${title} mobile`}
                            className="w-full rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedImages, setSelectedImages] = useState<{ images: typeof portfolioItems[0]['images'], title: string } | null>(null);

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

    return (
        <section ref={containerRef} className="relative min-h-screen bg-black py-32">
            <div className="h-full flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

                <div className="absolute inset-0 opacity-5">
                    <div className="matrix-bg" />
                </div>

                <motion.div
                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            {t('portfolio.title')}
                        </h2>
                        <p className="text-xl text-white/70">
                            {t('portfolio.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {portfolioItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="relative group cursor-pointer"
                                onClick={() => setSelectedImages({ images: item.images, title: item.title })}
                            >
                                <div className="relative flex items-center justify-center">
                                    {/* Desktop */}
                                    <div className="relative w-full max-w-[600px]">
                                        <img
                                            src="/assets/images/macbook-frame.png"
                                            alt="Desktop frame"
                                            className="w-full"
                                        />
                                        <div className="absolute top-[6.2%] left-[11.8%] right-[11.8%] bottom-[31.5%] overflow-hidden rounded-[2%]">
                                            <img
                                                src={item.images.desktop}
                                                alt={`${item.title} desktop`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Tablet */}
                                    <div className="absolute right-[-10%] bottom-[-5%] w-[25%]">
                                        <img
                                            src="/assets/images/ipad-frame.png"
                                            alt="Tablet frame"
                                            className="w-full"
                                        />
                                        <div className="absolute top-[6%] left-[6%] right-[6%] bottom-[6%] overflow-hidden rounded-[5%]">
                                            <img
                                                src={item.images.tablet}
                                                alt={`${item.title} tablet`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile */}
                                    <div className="absolute left-[-5%] bottom-[-10%] w-[15%]">
                                        <img
                                            src="/assets/images/iphone-frame.png"
                                            alt="Mobile frame"
                                            className="w-full"
                                        />
                                        <div className="absolute top-[2%] left-[6%] right-[6%] bottom-[2%] overflow-hidden rounded-[8%]">
                                            <img
                                                src={item.images.mobile}
                                                alt={`${item.title} mobile`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 text-center">
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4">
                                        {item.description}
                                    </p>
                                    {item.features?.length > 0 && (
                                        <ul className="text-left text-gray-400 mb-4 space-y-2">
                                            {item.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <span className="text-orange-500 mr-2">•</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <button
                                        className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
                                    >
                                        {t('portfolio.viewImages')}
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <AnimatePresence>
                {selectedImages && (
                    <ImageModal
                        images={selectedImages.images}
                        title={selectedImages.title}
                        onClose={() => setSelectedImages(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio; 