import LayoutWrapper from "@/components/layout-wrapper"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TechnologiesSection from "@/components/technologies-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import { translations } from "@/lib/translations"

function HomePage() {
  const heroTranslations = {
    en: translations.en.home.hero,
    fr: translations.fr.home.hero,
  }

  const servicesTranslations = {
    en: translations.en.home.services,
    fr: translations.fr.home.services,
  }

  const statsTranslations = {
    en: translations.en.home.stats,
    fr: translations.fr.home.stats,
  }

  const technologiesTranslations = {
    en: translations.en.home.technologies,
    fr: translations.fr.home.technologies,
  }

  const faqTranslations = {
    en: translations.en.home.faq,
    fr: translations.fr.home.faq,
  }

  const ctaTranslations = {
    en: translations.en.home.cta,
    fr: translations.fr.home.cta,
  }

  return (
    <div className="bg-white">
      <HeroSection translations={heroTranslations} />
      <ServicesSection translations={servicesTranslations} />
      <TechnologiesSection translations={technologiesTranslations} />
      <FAQSection translations={faqTranslations} />
      <CTASection translations={ctaTranslations} />
    </div>
  )
}

export default function Home() {
  return (
    <LayoutWrapper>
      <HomePage />
    </LayoutWrapper>
  )
}
