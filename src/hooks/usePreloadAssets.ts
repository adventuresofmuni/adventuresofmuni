// hooks/usePreloadAssets.ts
import { useState, useEffect } from 'react'
import { preloadImage } from '@/utils/preloadImage'
// Import the generated manifest (adjust the path as needed)
import assetUrls from '@/assetsManifest.json'

export function usePreloadAssets() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    async function loadAssets() {
      try {
        // Preload each asset from the manifest
        await Promise.all(assetUrls.map((src: string) => preloadImage(src)))
        setLoaded(true)
      } catch (error) {
        console.error('Asset preloading failed:', error)
        // Optionally handle the error or proceed anyway
        setLoaded(true)
      }
    }
    loadAssets()
  }, [])

  return loaded
}
