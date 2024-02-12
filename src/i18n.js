
import i18n from "i18next";
import { initReactI18next } from "react-i18next";


// Importing translation files

import translationEN from "./locales/en/translation.json";
import translationHN from "./locales/hn/translation.json";
import translationINA from "./locales/ina/translation.json";
import translationCNN from './locales/cnn/translation.json';

import translationFRNC from './locales/frnc/translation.json';
import translationGRM from './locales/grm/translation.json';
import translationRSS from './locales/rss/translation.json';
import translationSPA from './locales/spa/translation.json';

import translationJPN from './locales/jpn/translation.json';
import translationKOR from './locales/kor/translation.json';


//Creating object with the variables of imported translation files
const resources = {
  en: {
    translation: translationEN,
  },
  hn: {
    translation: translationHN,
  },
  ina :{
    translation : translationINA
  },
  cnn :{
    translation : translationCNN
  },
  frnc :{
    translation : translationFRNC
  },
  grm :{
    translation : translationGRM
  },
  rss :{
    translation : translationRSS
  },
  spa :{
    translation : translationSPA
  },
  jpn : {
    translation : translationJPN
  },
  kor : {
    translation : translationKOR
  }
};

//i18N Initialization

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng:"en", //default language
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;