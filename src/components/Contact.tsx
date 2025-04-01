import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Contact = () => {
    const { t } = useTranslation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <section id="contact" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Kontaktirajte nas
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                        Imate pitanja? Slobodno nas kontaktirajte i odgovorit ćemo vam u najkraćem mogućem roku.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-900 p-6 sm:p-8 rounded-lg">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            Informacije
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <EnvelopeIcon className="h-6 w-6 text-orange-500 mr-3" />
                                <span className="text-gray-300">info@mememedia.hr</span>
                            </div>
                            <div className="flex items-center">
                                <PhoneIcon className="h-6 w-6 text-orange-500 mr-3" />
                                <span className="text-gray-300">+385 91 123 4567</span>
                            </div>
                            <div className="flex items-center">
                                <MapPinIcon className="h-6 w-6 text-orange-500 mr-3" />
                                <span className="text-gray-300">Zagreb, Hrvatska</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Ime i prezime
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Poruka
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                        >
                            Pošaljite poruku
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 