'use client'
import { usePreloadAssets } from '@/hooks/usePreloadAssets'
import LoadingPage from '@/components/loadingPage'
import Book from '@/components/Book'
import { LanguageProvider } from '@/hooks/LanguageContext'

export default function Home() {
  const assetsLoaded = usePreloadAssets()

  if (!assetsLoaded) {
    return <LoadingPage />
  }

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
