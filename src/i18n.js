import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import entranslation from './assets/i18n/locales/en/translation.json';
import frtranslation from './assets/i18n/locales/fr/translation.json';
const resources = {
  en: {
    translation: entranslation
  },
  fr: {
    translation: frtranslation
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: navigator.language || navigator.userLanguage,
    ns: ['translation'],
    defaultNS: 'translation',
    fallbackNS: 'translation',
    load: 'languageOnly',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
  nonExplicitWhitelist: true,
    whitelist: ['en', 'fr'],
  });

  export default i18n;