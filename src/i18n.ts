import { createI18n } from 'vue-i18n'
import de from './locales/de.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en', // Set default locale
  fallbackLocale: 'de', // Fallback locale
  messages: {
    en,
    de,
  },
})

export default i18n
