import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './Locales/en.json';
import az from './Locales/az.json';

// Get saved language or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            az: { translation: az }
        },
        lng: savedLanguage,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;