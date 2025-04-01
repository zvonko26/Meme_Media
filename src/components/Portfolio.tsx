import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface PortfolioItem {
    title: string;
    description: string;
    image: string;
    category: string;
}

const categories = [
    'Sve',
    'Web Development',
    'E-commerce',
    'Mobile Development',
    'Branding',
    'SEO',
    'Social Media'
];

const portfolioItems: PortfolioItem[] = [
    {
        title: 'Web stranica za restoran',
        description: 'Moderna i responzivna web stranica za restoran s online naručivanjem.',
        image: '/assets/images/portfolio1.jpg',
        category: 'Web Development'
    },
    {
        title: 'E-commerce platforma',
        description: 'Potpuna e-commerce platforma s integracijom plaćanja.',
        image: '/assets/images/portfolio2.jpg',
        category: 'E-commerce'
    },
    {
        title: 'Mobilna aplikacija',
        description: 'iOS i Android aplikacija za praćenje fitness aktivnosti.',
        image: '/assets/images/portfolio3.jpg',
        category: 'Mobile Development'
    },
    {
        title: 'Branding kampanja',
        description: 'Kompletan branding i marketing kampanja za startup.',
        image: '/assets/images/portfolio4.jpg',
        category: 'Branding'
    },
    {
        title: 'SEO optimizacija',
        description: 'SEO optimizacija i poboljšanje vidljivosti na tražilicama.',
        image: '/assets/images/portfolio5.jpg',
        category: 'SEO'
    },
    {
        title: 'Društvene mreže',
        description: 'Upravljanje društvenim mrežama i content marketing.',
        image: '/assets/images/portfolio6.jpg',
        category: 'Social Media'
    }
];

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('Sve');

    const filteredItems = selectedCategory === 'Sve'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <section id="portfolio" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Portfolio
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                        Pogledajte neke od naših najboljih projekata
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredItems.map((item, index) => (
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
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm sm:text-base mb-2">
                                        {item.category}
                                    </p>
                                    <p className="text-gray-300 text-sm sm:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio; 