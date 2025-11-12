"use client"

import type React from "react"

import { useState, createContext, useContext, useEffect } from "react"
import Navigation from "./navigation"
import Footer from "./footer"

type Language = "en" | "fr"

interface LanguageContextType {
  currentLang: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: "en",
  setLanguage: () => {},
})

export const useLanguage = () => useContext(LanguageContext)

interface LayoutWrapperProps {
  children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  // Always initialize with "en" for SSR to avoid hydration mismatch
  const [currentLang, setCurrentLang] = useState<Language>("en")
  const [isHydrated, setIsHydrated] = useState(false)

  // Load language from localStorage after component mounts (client-side only)
  useEffect(() => {
    const stored = localStorage.getItem("language")
    if (stored && (stored === "en" || stored === "fr")) {
      setCurrentLang(stored as Language)
    }
    setIsHydrated(true)
  }, [])

  // Persist language to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("language", currentLang)
    }
  }, [currentLang, isHydrated])

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage: setCurrentLang }}>
      <div className="min-h-screen flex flex-col">
        <Navigation currentLang={currentLang} onLanguageChange={setCurrentLang} />
        <main className="flex-1">{children}</main>
        <Footer currentLang={currentLang} />
      </div>
    </LanguageContext.Provider>
  )
}
