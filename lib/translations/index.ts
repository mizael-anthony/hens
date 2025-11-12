import enTranslations from "./en.json"
import frTranslations from "./fr.json"

export type Language = "en" | "fr"

export type Translations = typeof enTranslations

export const translations = {
  en: enTranslations,
  fr: frTranslations,
} as const

// Helper function to get translations for a specific language
export function getTranslations(lang: Language): Translations {
  return translations[lang]
}

// Helper functions for specific sections
export function getNavigationTranslations(lang: Language) {
  return translations[lang].navigation
}

export function getFooterTranslations(lang: Language) {
  return translations[lang].footer
}

export function getHomeTranslations(lang: Language) {
  return translations[lang].home
}

export function getAboutTranslations(lang: Language) {
  return translations[lang].about
}

export function getServicesTranslations(lang: Language) {
  return translations[lang].services
}

// Export for backward compatibility with existing code pattern
export function createTranslationsObject<T extends keyof Translations>(section: T) {
  return {
    en: enTranslations[section],
    fr: frTranslations[section],
  }
}
