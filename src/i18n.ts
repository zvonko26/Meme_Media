import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    hr: {
        translation: {
            nav: {
                home: "Početna",
                services: "Usluge",
                about: "O nama",
                contact: "Kontakt"
            },
            services: {
                title: "Naše Usluge",
                scrollHint: "Scroll za rotaciju usluga",
                web: {
                    title: "Web Development",
                    description: "Izrada modernih web stranica"
                },
                ecommerce: {
                    title: "E-commerce",
                    description: "Online trgovine i sustavi"
                },
                seo: {
                    title: "SEO Optimization",
                    description: "Optimizacija za tražilice"
                },
                marketing: {
                    title: "Digital Marketing",
                    description: "Marketing strategije"
                },
                brand: {
                    title: "Brand Design",
                    description: "Dizajn i brendiranje"
                }
            },
            footer: {
                description: "Transformiramo vaše digitalne ideje u stvarnost. Pružamo kompletan servis za vašu digitalnu prisutnost.",
                navigation: "Navigacija",
                contact: "Kontakt",
                address: "Ilica 123, 10000 Zagreb",
                phone: "+385 1 234 5678",
                email: "info@mememedia.hr",
                copyright: "Sva prava pridržana."
            },
            portfolio: {
                title: "Portfolio",
                subtitle: "Naši najbolji projekti",
                viewProject: "Pogledaj projekt",
                viewImages: "Pregledaj slike"
            }
        }
    },
    en: {
        translation: {
            nav: {
                home: "Home",
                services: "Services",
                about: "About",
                contact: "Contact"
            },
            services: {
                title: "Our Services",
                scrollHint: "Scroll to rotate services",
                web: {
                    title: "Web Development",
                    description: "Modern website development"
                },
                ecommerce: {
                    title: "E-commerce",
                    description: "Online stores and systems"
                },
                seo: {
                    title: "SEO Optimization",
                    description: "Search engine optimization"
                },
                marketing: {
                    title: "Digital Marketing",
                    description: "Marketing strategies"
                },
                brand: {
                    title: "Brand Design",
                    description: "Design and branding"
                }
            },
            footer: {
                description: "We transform your digital ideas into reality. Providing a complete service for your digital presence.",
                navigation: "Navigation",
                contact: "Contact",
                address: "Ilica 123, 10000 Zagreb",
                phone: "+385 1 234 5678",
                email: "info@mememedia.hr",
                copyright: "All rights reserved."
            },
            portfolio: {
                title: "Portfolio",
                subtitle: "Our best projects",
                viewProject: "View project",
                viewImages: "View images"
            }
        }
    },
    de: {
        translation: {
            nav: {
                home: "Startseite",
                services: "Dienstleistungen",
                about: "Über uns",
                contact: "Kontakt"
            },
            services: {
                title: "Unsere Dienstleistungen",
                scrollHint: "Scrollen Sie, um die Dienstleistungen zu rotieren",
                web: {
                    title: "Webentwicklung",
                    description: "Moderne Website-Entwicklung"
                },
                ecommerce: {
                    title: "E-Commerce",
                    description: "Online-Shops und Systeme"
                },
                seo: {
                    title: "SEO-Optimierung",
                    description: "Suchmaschinenoptimierung"
                },
                marketing: {
                    title: "Digitales Marketing",
                    description: "Marketingstrategien"
                },
                brand: {
                    title: "Markendesign",
                    description: "Design und Branding"
                }
            },
            footer: {
                description: "Wir verwandeln Ihre digitalen Ideen in die Realität. Bieten einen vollständigen Service für Ihre digitale Präsenz.",
                navigation: "Navigation",
                contact: "Kontakt",
                address: "Ilica 123, 10000 Zagreb",
                phone: "+385 1 234 5678",
                email: "info@mememedia.hr",
                copyright: "Alle Rechte vorbehalten."
            },
            portfolio: {
                title: "Portfolio",
                subtitle: "Unsere besten Projekte",
                viewProject: "Projekt ansehen",
                viewImages: "Bilder ansehen"
            }
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "hr",
        fallbackLng: "hr",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n; 