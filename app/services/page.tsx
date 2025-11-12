import LayoutWrapper from "@/components/layout-wrapper"
import ServicesPageClient from "@/components/services-page-client"
import { translations as allTranslations } from "@/lib/translations"

const translations = {
  en: allTranslations.en.services,
  fr: allTranslations.fr.services,
}

function ServicesPage() {
  return <ServicesPageClient translations={translations} />
}

export default function Services() {
  return (
    <LayoutWrapper>
      <ServicesPage />
    </LayoutWrapper>
  )
}
