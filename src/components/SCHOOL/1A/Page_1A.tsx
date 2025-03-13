import Image from 'next/image'

const school_1A = 'assets/SCHOOL/1A/school_1A.png'
const school_1A_eng = 'assets/SCHOOL/1A/school_1A_eng1.png'
import React, { useEffect, useState } from 'react'

// tagalog
const Page_1A_tag1 = 'assets/SCHOOL/1A/Page_1A_tag1.png'
// components pick_language
const pick_lang = 'assets/pick_language.png'
const pick_eng = 'assets/pick_eng.png'
const pick_tag = 'assets/pick_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const clickAudio = 'audio/SFX/click_storybook.mp3'

const Page_1A = React.forwardRef<
  HTMLDivElement,
  { page: number; startAudio: () => void }
>(({ page, startAudio }, ref) => {
  const [showPickLanguage, setShowPickLanguage] = React.useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const { language, setLanguage } = useLanguage()

  const playClickAudio = () => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    const newAudio = new Audio(clickAudio)
    newAudio.play()
    setAudio(newAudio)
  }

  const handleLanguageSelection = (lang: string) => {
    playClickAudio()
    setShowPickLanguage(false)
    if (lang === 'eng') {
      setLanguage('eng')
    } else {
      setLanguage('tag')
    }
    startAudio() // 🔥 Start audio at the book.tsx level
  }

  useEffect(() => {
    if (page === 0) {
      setShowPickLanguage(true)
    }
  }, [page])

  return (
    <div className="relative w-full h-full" ref={ref}>
      {showPickLanguage && (
        <div className="z-[20] absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white">
          {/* dialogue */}
          <Image
            className=" object-contain"
            style={{
              bottom: 0,
              width: '60%',
            }}
            src={pick_lang}
            alt="language"
          />
          <div className="absolute bottom-[360px] flex justify-center space-x-4">
            <Image
              className="object-contain cursor-pointer transition-transform duration-200 ease-in-out 
               hover:scale-110 active:scale-90  active:opacity-60"
              style={{
                bottom: 200,
                width: '20%',
              }}
              src={pick_eng}
              onClick={() => handleLanguageSelection('eng')}
              alt="eng"
            />

            <Image
              className="object-contain cursor-pointer transition-transform duration-200 ease-in-out 
               hover:scale-110 active:scale-90  active:opacity-60"
              style={{
                bottom: 200,
                width: '20%',
              }}
              src={pick_tag}
              onClick={() => handleLanguageSelection('tag')}
              alt="tag"
            />
          </div>
        </div>
      )}
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-full">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={school_1A}
          alt="background"
        />
        <Image
          className="absolute object-cover w-[600px]"
          style={{ top: '320px', right: '100px' }}
          width={600}
          height={600}
          src={language === 'eng' ? school_1A_eng : Page_1A_tag1}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_1A.displayName = 'Page_1A'

export default Page_1A
