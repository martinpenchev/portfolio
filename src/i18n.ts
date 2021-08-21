import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';
import bg from './locales/bg/translation.json';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false, // react escapes by default
  },
  resources: {
    en: {
      translation: en,
    },
    fr: {
      translation: fr,
    },
    bg: {
      translation: bg,
    },
  },
});

export default i18n;
