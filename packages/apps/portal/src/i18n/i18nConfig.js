import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './translations/en'
import pt_BR from './translations/pt_BR'

const initI18n = () => {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    // .on('languageChanged', (lng = 'pt_BR') => {
    //   const lngKebab = lng
    //     .match(
    //       /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
    //     )
    //     .map(x => x.toLowerCase())
    //     .join('-')

    //   return moment.locale(lngKebab)
    // })
    .init({
      detection: {
        // order and from where user language should be detected
        order: [
          'querystring',
          'cookie',
          'localStorage',
          'navigator',
          'htmlTag',
          'path',
          'subdomain',
        ],

        // keys or params to lookup language from
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupFromPathIndex: 0,
        lookupFromSubdomainIndex: 0,

        // cache user language on
        caches: ['localStorage', 'cookie'],
        excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

        // only detect languages that are in the whitelist
        checkWhitelist: true,
      },
      resources: {
        en,
        pt_BR,
      },
      whitelist: ['pt_BR', 'en'],
      fallbackLng: 'pt_BR',
      interpolation: {
        escapeValue: false,
      },
    })
}

export default initI18n
