import LayoutWrapper from "@/components/layout-wrapper"
import AboutPageClient from "@/components/about-page-client"
import { translations } from "@/lib/translations"

const aboutTranslations = {
  en: translations.en.about,
  fr: translations.fr.about,
}

function AboutPage() {
  return <AboutPageClient translations={aboutTranslations} />
}

export default function About() {
  return (
    <LayoutWrapper>
      <AboutPage />
    </LayoutWrapper>
  )
}
