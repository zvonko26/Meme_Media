import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll } from 'framer-motion';
import { Bars3Icon, XMarkIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrolled(latest > 50);
        });
    }, [scrollY]);

    const languages = [
        { code: 'hr', name: 'Hrvatski' },
        { code: 'en', name: 'English' },
        { code: 'de', name: 'Deutsch' },
    ];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setIsLangMenuOpen(false);
    };

    const navItems = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    return (
        <motion.nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24 py-2">
                    <div className="flex-shrink-0">
                        <img
                            src="/assets/images/meme_media_transparent.png"
                            alt="Meme Media Logo"
                            className="h-20 w-auto"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative group text-white hover:text-white transition-colors duration-200"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 transition-transform duration-200 origin-left group-hover:scale-x-100" />
                            </a>
                        ))}
                        <div className="flex space-x-2">
                            <button
                                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                                className="flex items-center text-white hover:text-orange-500 transition-colors duration-200"
                            >
                                <GlobeAltIcon className="h-6 w-6" />
                                <span className="ml-2">{i18n.language.toUpperCase()}</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-500 focus:outline-none"
                        >
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <motion.div
                className="md:hidden"
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                    open: { opacity: 1, height: 'auto' },
                    closed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-sm">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 text-white hover:text-orange-500 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="px-3 py-2">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center text-white hover:text-orange-500 transition-colors duration-200"
                        >
                            <GlobeAltIcon className="h-6 w-6" />
                            <span className="ml-2">{i18n.language.toUpperCase()}</span>
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Language Menu */}
            {isLangMenuOpen && (
                <div className="absolute right-4 mt-2 w-48 rounded-md shadow-lg bg-black/90 backdrop-blur-sm">
                    <div className="py-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500/20 transition-colors duration-200"
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar; 