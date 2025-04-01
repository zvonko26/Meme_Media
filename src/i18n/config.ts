import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            nav: {
                home: 'Home',
                services: 'Services',
                about: 'About',
                contact: 'Contact',
            },
            hero: {
                title: 'Digital Media Solutions',
                subtitle: 'Transform your online presence with our expert services',
                cta: 'Get Started',
                learnMore: 'Learn More',
            },
            services: {
                title: 'Our Services',
                subtitle: 'Comprehensive digital solutions for your business',
                webDev: {
                    title: 'Web Development',
                    description: 'Custom websites and web applications built with cutting-edge technologies.',
                },
                seo: {
                    title: 'SEO Optimization',
                    description: 'Improve your search engine rankings and drive organic traffic.',
                },
                social: {
                    title: 'Social Media Management',
                    description: 'Engage your audience and build brand awareness across all platforms.',
                },
                video: {
                    title: 'Video Production',
                    description: 'Professional video content that tells your story and captures attention.',
                },
            },
            reviews: {
                title: 'What Our Clients Say',
                subtitle: 'Don\'t just take our word for it - hear from some of our satisfied clients',
            },
            about: {
                title: 'About Us',
                description: 'We are a team of digital experts passionate about creating exceptional online experiences.',
                stats: {
                    projects: 'Projects Completed',
                    clients: 'Happy Clients',
                    years: 'Years Experience',
                },
                team: {
                    member1: {
                        name: 'John Doe',
                        role: 'Creative Director',
                    },
                    member2: {
                        name: 'Jane Smith',
                        role: 'Lead Developer',
                    },
                    member3: {
                        name: 'Mike Johnson',
                        role: 'SEO Specialist',
                    },
                    member4: {
                        name: 'Sarah Williams',
                        role: 'Content Strategist',
                    },
                },
            },
            contact: {
                title: 'Contact Us',
                subtitle: 'Let\'s discuss your project',
                name: 'Name',
                email: 'Email',
                message: 'Message',
                send: 'Send Message',
            },
        },
    },
    hr: {
        translation: {
            nav: {
                home: 'Početna',
                services: 'Usluge',
                about: 'O nama',
                contact: 'Kontakt',
            },
            hero: {
                title: 'Digitalna Medijska Rješenja',
                subtitle: 'Transformirajte svoju online prisutnost s našim stručnim uslugama',
                cta: 'Započni',
                learnMore: 'Saznaj Više',
            },
            services: {
                title: 'Naše Usluge',
                subtitle: 'Sveobuhvatna digitalna rješenja za vaše poslovanje',
                webDev: {
                    title: 'Izrada Web Stranica',
                    description: 'Prilagođene web stranice i aplikacije izrađene najnovijim tehnologijama.',
                },
                seo: {
                    title: 'SEO Optimizacija',
                    description: 'Poboljšajte svoje pozicije u pretraživačima i povećajte organski promet.',
                },
                social: {
                    title: 'Upravljanje Društvenim Mrežama',
                    description: 'Angažirajte svoju publiku i izgradite svijest o brendu na svim platformama.',
                },
                video: {
                    title: 'Video Produkcija',
                    description: 'Profesionalni video sadržaj koji priča vašu priču i privlači pažnju.',
                },
            },
            reviews: {
                title: 'Što Kažu Naši Klijenti',
                subtitle: 'Ne vjerujte nam na riječ - poslušajte što kažu naši zadovoljni klijenti',
            },
            about: {
                title: 'O nama',
                description: 'Mi smo tim digitalnih stručnjaka strastvenih oko stvaranja iznimnih online iskustava.',
                stats: {
                    projects: 'Završenih Projekata',
                    clients: 'Zadovoljnih Klijenata',
                    years: 'Godina Iskustva',
                },
                team: {
                    member1: {
                        name: 'Ivan Horvat',
                        role: 'Kreativni Direktor',
                    },
                    member2: {
                        name: 'Ana Kovač',
                        role: 'Glavni Programer',
                    },
                    member3: {
                        name: 'Marko Novak',
                        role: 'SEO Stručnjak',
                    },
                    member4: {
                        name: 'Petra Kovačić',
                        role: 'Strateški Direktor Sadržaja',
                    },
                },
            },
            contact: {
                title: 'Kontaktirajte Nas',
                subtitle: 'Razgovarajmo o vašem projektu',
                name: 'Ime',
                email: 'Email',
                message: 'Poruka',
                send: 'Pošalji Poruku',
            },
        },
    },
    de: {
        translation: {
            nav: {
                home: 'Startseite',
                services: 'Dienstleistungen',
                about: 'Über uns',
                contact: 'Kontakt',
            },
            hero: {
                title: 'Digitale Medienlösungen',
                subtitle: 'Transformieren Sie Ihre Online-Präsenz mit unseren Expertenleistungen',
                cta: 'Jetzt Starten',
                learnMore: 'Mehr Erfahren',
            },
            services: {
                title: 'Unsere Dienstleistungen',
                subtitle: 'Umfassende digitale Lösungen für Ihr Unternehmen',
                webDev: {
                    title: 'Webentwicklung',
                    description: 'Maßgeschneiderte Websites und Webanwendungen mit modernsten Technologien.',
                },
                seo: {
                    title: 'SEO-Optimierung',
                    description: 'Verbessern Sie Ihre Suchmaschinen-Rankings und steigern Sie den organischen Traffic.',
                },
                social: {
                    title: 'Social Media Management',
                    description: 'Engagieren Sie Ihr Publikum und bauen Sie Markenbewusstsein auf allen Plattformen auf.',
                },
                video: {
                    title: 'Videoproduktion',
                    description: 'Professionelle Videoinhalte, die Ihre Geschichte erzählen und Aufmerksamkeit erregen.',
                },
            },
            reviews: {
                title: 'Was Unsere Kunden Sagen',
                subtitle: 'Glauben Sie uns nicht einfach - hören Sie, was unsere zufriedenen Kunden sagen',
            },
            about: {
                title: 'Über uns',
                description: 'Wir sind ein Team von Digitalexperten, die sich für die Schaffung außergewöhnlicher Online-Erlebnisse begeistern.',
                stats: {
                    projects: 'Abgeschlossene Projekte',
                    clients: 'Zufriedene Kunden',
                    years: 'Jahre Erfahrung',
                },
                team: {
                    member1: {
                        name: 'Thomas Schmidt',
                        role: 'Kreativdirektor',
                    },
                    member2: {
                        name: 'Lisa Weber',
                        role: 'Leitende Entwicklerin',
                    },
                    member3: {
                        name: 'Michael Müller',
                        role: 'SEO-Spezialist',
                    },
                    member4: {
                        name: 'Sophie Wagner',
                        role: 'Content-Strategin',
                    },
                },
            },
            contact: {
                title: 'Kontaktieren Sie uns',
                subtitle: 'Lassen Sie uns über Ihr Projekt sprechen',
                name: 'Name',
                email: 'E-Mail',
                message: 'Nachricht',
                send: 'Nachricht Senden',
            },
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'hr',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n; 