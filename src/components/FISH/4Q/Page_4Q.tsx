import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import bg from '@/components/FISH/4Q/bg.png'
import muni from '@/components/FISH/4Q/muni.png'
import fishing_rod from '@/components/FISH/4Q/fishing_rod.gif'

// caught screen
import Page_4R from '@/components/FISH/4Q/caught/Page_4R.png'
// Fish
import fish1 from '@/components/FISH/4Q/fish1.gif'
import fish2 from '@/components/FISH/4Q/fish2.gif'
import fish3 from '@/components/FISH/4Q/fish3.gif'
import fish4 from '@/components/FISH/4Q/fish4.gif'
import fish5 from '@/components/FISH/4Q/fish5.gif'
import fish6 from '@/components/FISH/4Q/fish6.gif'
import dialogue_eng from '@/components/FISH/4Q/fish_dialogue_box_eng.png'
import rod from '@/components/FISH/4Q/caught/rod.gif'
import dialogue_tag from '@/components/FISH/4Q/fish_dialogue_box_tag.png'
// Caught fish
import bangus from '@/components/FISH/4Q/caught/bangus.gif'
import tilapia from '@/components/FISH/4Q/caught/tilapia.gif'
import galunggong from '@/components/FISH/4Q/caught/galunggong.gif'
import lapulapu from '@/components/FISH/4Q/caught/lapulapu.gif'
import bangus_eng from '@/components/FISH/4Q/caught/bangus_eng.png'
import tilapia_eng from '@/components/FISH/4Q/caught/tilapia_eng.png'
import galunggong_eng from '@/components/FISH/4Q/caught/galunggong_eng.png'
import lapulapu_eng from '@/components/FISH/4Q/caught/lapulapu_eng.png'
// tagalog
import bangus_tag from '@/components/FISH/4Q/caught/bangus_tag.png'
import tilapia_tag from '@/components/FISH/4Q/caught/tilapia_tag.png'
import galunggong_tag from '@/components/FISH/4Q/caught/galung_tag.png'
import lapulapu_tag from '@/components/FISH/4Q/caught/lapulapu_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

const fishCatchAudio = 'audio/SFX/fish_catch.mp3'

const Page_4Q = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const { language } = useLanguage()
  const [caughtFish, setCaughtFish] = useState<string[]>([])
  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({})
  const [timers, setTimers] = useState<{
    [key: string]: NodeJS.Timeout | null
  }>({})
  const [showCatchModal, setShowCatchModal] = useState(true)
  const [hasCaughtFish, setHasCaughtFish] = useState(0)
  const [showInstructions, setShowInstructions] = useState(true)
  const [randomCaughtFish, setRandomCaughtFish] = useState<
    (typeof caughtFishInfo)[number] | undefined
  >(undefined)
  const [disablePointer, setDisablePointer] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const playAudio = () => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    const newAudio = new Audio(fishCatchAudio)
    newAudio.play()
    setAudio(newAudio)
  }

  const fishes = [
    {
      id: 'fish1',
      fish: fish1,
      left: 890,
      bottom: 270,
      width: '12%',
    },
    {
      id: 'fish2',
      fish: fish2,
      left: 470,
      bottom: 450,
      width: '12%',
    },
    {
      id: 'fish3',
      fish: fish3,
      left: 1200,
      bottom: 200,
      width: '12%',
    },
    {
      id: 'fish4',
      fish: fish4,
      left: 1100,
      bottom: 400,
      width: '12%',
    },
    {
      id: 'fish5',
      fish: fish5,
      left: 400,
      bottom: 230,
      width: '12%',
    },
    {
      id: 'fish6',
      fish: fish6,
      left: 90,
      bottom: 360,
      width: '12%',
    },
  ]

  const caughtFishInfo = [
    {
      id: 'bangus',
      fish: bangus,
      caption: bangus_eng,
      caption_tag: bangus_tag,
    },
    {
      id: 'tilapia',
      fish: tilapia,
      caption: tilapia_eng,
      caption_tag: tilapia_tag,
    },
    {
      id: 'galunggong',
      fish: galunggong,
      caption: galunggong_eng,
      caption_tag: galunggong_tag,
    },
    {
      id: 'lapulapu',
      fish: lapulapu,
      caption: lapulapu_eng,
      caption_tag: lapulapu_tag,
    },
  ]
  useEffect(() => {
    if (page === 30 || page === 32) {
      // reset everything
      setCaughtFish([])
      setClickCounts({})
      setTimers({})
      setShowCatchModal(false)
      setHasCaughtFish(0)
      setShowInstructions(true)
    }
  }, [page])
  const getRandomCaughtFish = () => {
    if (hasCaughtFish >= 2) return
    let newIndex

    do {
      newIndex = Math.floor(Math.random() * caughtFishInfo.length)
    } while (
      randomCaughtFish &&
      caughtFishInfo[newIndex].id === randomCaughtFish.id
    )

    const newFish = caughtFishInfo[newIndex]
    setRandomCaughtFish(newFish) // Update the state with the new fish

    console.log('Random Caught Fish:', newFish) // ✅ Logs the correct fish
    return newFish // Return the selected fish
  }

  const startGame = () => {
    setShowInstructions(false)
  }

  const handleCaughtFishClick = () => {
    console.log('Caught Fish: ', hasCaughtFish)
    if (hasCaughtFish >= 2) {
      onFlipNext() // Flip to next page once 2 fishes are caught
      setHasCaughtFish(0) // Reset count
    } else {
      setShowCatchModal(false) // Close modal for next catch
    }
  }

  const handleFishClick = (id: string) => {
    if (caughtFish.includes(id) || hasCaughtFish >= 2) return
    if (caughtFish.includes(id)) return

    setClickCounts((prev) => {
      const newCount = (prev[id] || 0) + 1
      if (newCount >= 10) {
        playAudio()
        setCaughtFish([...caughtFish, id])
        setTimeout(() => setClickCounts((prev) => ({ ...prev, [id]: 0 })), 0)
        getRandomCaughtFish()
        setShowCatchModal(true)
        setDisablePointer(true)
        setTimeout(() => setDisablePointer(false), 1500)
        setHasCaughtFish((prev) => prev + 1) // Increase count
        //@ts-expect-error - setTimeout is not assignable to NodeJS.Timeout
        clearTimeout(timers[id])
        setTimers((prev) => ({ ...prev, [id]: null }))
        return { ...prev, [id]: 0 }
      }
      return { ...prev, [id]: newCount }
    })

    if (!timers[id]) {
      const timer = setTimeout(() => {
        setClickCounts((prev) => ({ ...prev, [id]: 0 }))
        setTimers((prev) => ({ ...prev, [id]: null }))
      }, 1500)
      setTimers((prev) => ({ ...prev, [id]: timer }))
    }
  }

  return (
    <div className="relative w-full h-full" ref={ref}>
      {showInstructions && (
        <div
          onClick={startGame}
          className="z-[20] cursor-pointer absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white"
        >
          {/* dialogue */}
          <Image
            className="absolute object-contain"
            style={{
              bottom: 0,
              width: '70%',
            }}
            src={language === 'eng' ? dialogue_eng : dialogue_tag}
            alt="dialogue"
          />
        </div>
      )}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={bg}
          alt="background"
        />
        <Image
          className="absolute object-contain w-[20%]"
          style={{ left: 180, top: 100 }}
          src={fishing_rod}
          alt="fishing_rod"
        />
        <Image
          className="absolute object-contain w-[9%]"
          style={{ left: 110, top: 115 }}
          src={muni}
          alt="muni"
        />
      </div>

      {fishes.map(
        ({ id, fish, left, bottom, width }) =>
          !caughtFish.includes(id) && (
            <Image
              key={id}
              className="absolute object-contain cursor-pointer transition-transform duration-100"
              style={{
                left,
                bottom,
                width,
                transform: `scale(${1 + (clickCounts[id] || 0) * 0.05})`,
              }}
              src={fish}
              alt="fish"
              onClick={() => handleFishClick(id)}
            />
          )
      )}

      {/* Animated Catch Modal */}
      <AnimatePresence>
        {showCatchModal && hasCaughtFish && (
          <motion.div
            onClick={handleCaughtFishClick}
            className={`absolute cursor-pointer inset-0 flex items-center justify-center
             transition-opacity duration-300 
             ${disablePointer ? 'pointer-events-none opacity-50' : ''}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.0, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            {/* Random Caught Fish */}

            {randomCaughtFish && (
              <div>
                <Image
                  className="z-50 absolute object-contain"
                  src={randomCaughtFish.fish}
                  style={{ left: 720, top: 230, width: '34%' }}
                  alt="random caught fish"
                />
                <Image
                  className="z-50 absolute object-contain"
                  src={
                    language === 'eng'
                      ? randomCaughtFish.caption
                      : randomCaughtFish.caption_tag
                  }
                  style={{ left: '30%', top: 60, width: '40%' }}
                  alt="random caught fish caption"
                />
              </div>
            )}

            <Image
              className="object-cover w-full h-full"
              src={Page_4R}
              fill
              sizes="100vw"
              alt="caught fish"
            />
            <Image
              className="absolute object-contain w-[100%]"
              style={{ left: -20, top: 10 }}
              src={rod}
              alt="fishing_rod"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

Page_4Q.displayName = 'Page_4Q'
export default Page_4Q
