'use client'
import Book from '@/components/Book'
import { LanguageProvider } from '@/hooks/LanguageContext'

export default function Home() {
  return (
    <div className="page-canvas">
      <div className="flipbook-container">
        <LanguageProvider>
          <Book />
        </LanguageProvider>
      </div>
    </div>
  )
}
