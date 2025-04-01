import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    category: string;
}

const projects: Project[] = [
    {
        title: 'Web stranica za restoran',
        description: 'Moderna i responzivna web stranica za restoran s online naručivanjem.',
        image: '/assets/images/portfolio1.jpg',
        link: '#',
        category: 'Web Development'
    },
    {
        title: 'E-commerce platforma',
        description: 'Potpuna e-commerce platforma s integracijom plaćanja.',
        image: '/assets/images/portfolio2.jpg',
        link: '#',
        category: 'E-commerce'
    },
    {
        title: 'Mobilna aplikacija',
        description: 'iOS i Android aplikacija za praćenje fitness aktivnosti.',
        image: '/assets/images/portfolio3.jpg',
        link: '#',
        category: 'Mobile Development'
    },
    {
        title: 'Branding kampanja',
        description: 'Kompletan branding i marketing kampanja za startup.',
        image: '/assets/images/portfolio4.jpg',
        link: '#',
        category: 'Branding'
    },
    {
        title: 'SEO optimizacija',
        description: 'SEO optimizacija i poboljšanje vidljivosti na tražilicama.',
        image: '/assets/images/portfolio5.jpg',
        link: '#',
        category: 'SEO'
    },
    {
        title: 'Društvene mreže',
        description: 'Upravljanje društvenim mrežama i content marketing.',
        image: '/assets/images/portfolio6.jpg',
        link: '#',
        category: 'Social Media'
    }
];

<section id="projects" className="py-20 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Projekti
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Pogledajte neke od naših najnovijih projekata
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm sm:text-base mb-2">
                                {project.category}
                            </p>
                            <p className="text-gray-300 text-sm sm:text-base mb-4">
                                {project.description}
                            </p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base font-semibold hover:bg-orange-600 transition-colors duration-300"
                            >
                                Pogledajte projekt
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
</section> 