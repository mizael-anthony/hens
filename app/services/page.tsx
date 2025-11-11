import LayoutWrapper from "@/components/layout-wrapper"
import ServicesPageClient from "@/components/services-page-client"

const translations = {
  en: {
    hero: {
      title: "Our Services",
      subtitle:
        "Comprehensive technology solutions designed to accelerate your business growth and digital transformation.",
    },
    services: {
      web: {
        title: "Web Development",
        description:
          "Create powerful, responsive web applications that deliver exceptional user experiences and drive business results.",
        features: [
          "SaaS Applications",
          "Progressive Web Apps (PWA)",
          "SEO Optimization",
        ],
      },
      mobile: {
        title: "Mobile Development",
        description:
          "Build native and cross-platform mobile applications that engage users and expand your reach across all devices.",
        features: [
          "iOS & Android Apps",
          "Offline Functionality",
          "App Store Publishing",
        ],
      },
      api: {
        title: "API Development",
        description:
          "Design and develop robust, scalable APIs that power your applications and enable seamless integrations.",
        features: [
          "RESTful API Design",
          "GraphQL Implementation",
          "Third-party Integrations",
        ],
      },
      ai: {
        title: "AI Integration",
        description:
          "Integrate powerful Large Language Models and AI services to automate processes and gain competitive advantages.",
        features: [
          "LLM Integration",
          "Chatbots & Virtual Assistants",
          "AI-powered Automation",
        ],
      },
    },
    pricing: {
      title: "Transparent Pricing",
      subtitle: "Choose the plan that best fits your project needs and budget.",
      badge: "MOST POPULAR",
      plans: [
        {
          name: "Freelaka",
          description: "Flexible daily rate for agile development",
          price: "$69",
          period: "per day (ADR)",
          features: [
            "✓ Average Daily Rate (ADR) pricing",
            "✓ Flexible engagement duration",
            "✓ Direct collaboration with our team",
            "✓ Agile iterative development",
            "✓ Daily progress updates",
            "✓ Source code ownership",
            "✗ Domain name not included",
            "✗ Hosting not included",
            "✗ Post-launch support not included",
          ],
          cta: "Start Project",
          featured: false,
        },
        {
          name: "One Shot",
          description: "Complete turnkey solution for your project",
          price: "Custom",
          period: "",
          features: [
            "✓ Fixed price based on scope",
            "✓ Guaranteed delivery timeline",
            "✓ Domain name & SSL certificate included",
            "✓ 2 years of hosting included",
            "✓ Complete source code ownership",
            "✓ 30 days post-launch support",
            "✓ Documentation & training",
            "✗ Ongoing maintenance not included",
          ],
          cta: "Get a Quote",
          featured: true,
        },
        {
          name: "Partner",
          description: "Ongoing development & maintenance partnership",
          price: "$120",
          period: "per month",
          features: [
            "✓ Monthly retainer model",
            "✓ Domain & hosting fully managed",
            "✓ Continuous feature development",
            "✓ Priority support & maintenance",
            "✓ Monthly strategy consultations",
            "✓ Performance monitoring & optimization",
            "✓ Unlimited revisions & updates",
            "✓ Cancel anytime (no long-term contract)",
          ],
          cta: "Become a Partner",
          featured: false,
        },
      ],
    },
    cta: {
      title: "Ready to Get Started?",
      subtitle: "Let's discuss your project requirements and create a solution that exceeds your expectations.",
      button: "Start Your Project",
    },
  },
  fr: {
    hero: {
      title: "Nos Services",
      subtitle:
        "Solutions technologiques complètes conçues pour accélérer la croissance de votre entreprise et votre transformation numérique.",
    },
    services: {
      web: {
        title: "Développement Web",
        description:
          "Créez des applications web puissantes et responsives qui offrent des expériences utilisateur exceptionnelles et génèrent des résultats commerciaux.",
        features: [
          "Applications SaaS",
          "Applications Web Progressives (PWA)",
          "Optimisation SEO",
        ],
      },
      mobile: {
        title: "Développement Mobile",
        description:
          "Construisez des applications mobiles natives et multiplateformes qui engagent les utilisateurs et étendent votre portée sur tous les appareils.",
        features: [
          "Apps iOS & Android",
          "Fonctionnalité Hors Ligne",
          "Publication App Store",
        ],
      },
      api: {
        title: "Développement d'API",
        description:
          "Concevez et développez des API robustes et évolutives qui alimentent vos applications et permettent des intégrations transparentes.",
        features: [
          "Design d'API RESTful",
          "Implémentation GraphQL",
          "Intégrations Tierces",
        ],
      },
      ai: {
        title: "Intégration IA",
        description:
          "Intégrez de puissants modèles de langage (LLM) et services IA pour automatiser les processus et obtenir des avantages concurrentiels.",
        features: [
          "Intégration LLM",
          "Chatbots & Assistants Virtuels",
          "Automatisation Alimentée par IA",
        ],
      },
    },
    pricing: {
      title: "Tarification Transparente",
      subtitle: "Choisissez le plan qui correspond le mieux aux besoins et au budget de votre projet.",
      badge: "LE PLUS POPULAIRE",
      plans: [
        {
          name: "Freelaka",
          description: "Tarif journalier flexible pour développement agile",
          price: "69$",
          period: "par jour (TJM)",
          features: [
            "✓ Tarif Journalier Moyen (TJM)",
            "✓ Durée d'engagement flexible",
            "✓ Collaboration directe avec l'équipe",
            "✓ Développement itératif agile",
            "✓ Mises à jour quotidiennes",
            "✓ Propriété du code source",
            "✗ Nom de domaine non inclus",
            "✗ Hébergement non inclus",
            "✗ Support post-lancement non inclus",
          ],
          cta: "Démarrer le Projet",
          featured: false,
        },
        {
          name: "One Shot",
          description: "Solution clé en main complète pour votre projet",
          price: "Sur mesure",
          period: "",
          features: [
            "✓ Prix fixe selon le périmètre",
            "✓ Délai de livraison garanti",
            "✓ Nom de domaine & certificat SSL inclus",
            "✓ 2 ans d'hébergement inclus",
            "✓ Propriété complète du code source",
            "✓ Support post-lancement 30 jours",
            "✓ Documentation & formation",
            "✗ Maintenance continue non incluse",
          ],
          cta: "Obtenir un Devis",
          featured: true,
        },
        {
          name: "Partner",
          description: "Partenariat continu de développement & maintenance",
          price: "120$",
          period: "par mois",
          features: [
            "✓ Modèle de forfait mensuel",
            "✓ Domaine & hébergement gérés",
            "✓ Développement continu de fonctionnalités",
            "✓ Support & maintenance prioritaires",
            "✓ Consultations stratégiques mensuelles",
            "✓ Surveillance & optimisation des performances",
            "✓ Révisions & mises à jour illimitées",
            "✓ Annulation à tout moment (sans engagement)",
          ],
          cta: "Devenir Partenaire",
          featured: false,
        },
      ],
    },
    cta: {
      title: "Prêt à Commencer ?",
      subtitle: "Discutons de vos exigences de projet et créons une solution qui dépasse vos attentes.",
      button: "Démarrer Votre Projet",
    },
  },
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
