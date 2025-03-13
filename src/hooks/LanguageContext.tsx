import React, { createContext, useContext, useState } from 'react'

type Language = 'eng' | 'tag'

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
}

// Create Context
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
)

// Provider Component
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('eng') // Default is English

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom Hook to use LanguageContext
export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
