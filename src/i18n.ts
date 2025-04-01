import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            hr: {
                translation: {
                    nav: {
                        home: 'Početna',
                        services: 'Usluge',
                        about: 'O nama',
                        contact: 'Kontakt'
                    }
                }
            },
            en: {
                translation: {
                    nav: {
                        home: 'Home',
                        services: 'Services',
                        about: 'About',
                        contact: 'Contact'
                    }
                }
            },
            de: {
                translation: {
                    nav: {
                        home: 'Startseite',
                        services: 'Dienstleistungen',
                        about: 'Über uns',
                        contact: 'Kontakt'
                    }
                }
            }
        },
        lng: 'hr',
        fallbackLng: 'hr',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n; 