import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
    const { t } = useTranslation();

    const navigation = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', href: '#', icon: 'facebook' },
        { name: 'Instagram', href: '#', icon: 'instagram' },
        { name: 'LinkedIn', href: '#', icon: 'linkedin' },
        { name: 'Twitter', href: '#', icon: 'twitter' },
    ];

    return (
        <footer className="bg-black border-t border-white/10">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo i opis */}
                    <div className="col-span-1 md:col-span-2">
                        <img
                            src="/assets/images/meme_media_transparent.png"
                            alt="Meme Media Logo"
                            className="h-16 w-auto mb-4"
                        />
                        <p className="text-gray-400 text-sm">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Navigacija */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.navigation')}</h3>
                        <ul className="space-y-2">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kontakt i društvene mreže */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400 text-sm">
                                <span className="block">{t('footer.address')}</span>
                                <span className="block">{t('footer.phone')}</span>
                                <span className="block">{t('footer.email')}</span>
                            </li>
                        </ul>
                        <div className="mt-6 flex space-x-4">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <i className={`fab fa-${item.icon} text-xl`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-gray-400 text-sm text-center">
                        © {new Date().getFullYear()} Meme Media. {t('footer.copyright')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 