import { motion, AnimatePresence } from 'framer-motion'

import React, { useEffect, useState } from 'react'

const bg = 'assets/FISH/4Q/bg.png'
const muni = 'assets/FISH/4Q/muni.png'
const fishing_rod = 'assets/FISH/4Q/fishing_rod.gif'

// caught screen
const Page_4R = 'assets/FISH/4Q/caught/Page_4R.png'
// Fish
const fish1 = 'assets/FISH/4Q/fish1.gif'
const fish2 = 'assets/FISH/4Q/fish2.gif'
const fish3 = 'assets/FISH/4Q/fish3.gif'
const fish4 = 'assets/FISH/4Q/fish4.gif'
const fish5 = 'assets/FISH/4Q/fish5.gif'
const fish6 = 'assets/FISH/4Q/fish6.gif'
const dialogue_eng = 'assets/FISH/4Q/fish_dialogue_box_eng.png'
const rod = 'assets/FISH/4Q/caught/rod.gif'
const dialogue_tag = 'assets/FISH/4Q/fish_dialogue_box_tag.png'
// Caught fish
const bangus = 'assets/FISH/4Q/caught/bangus.gif'
const tilapia = 'assets/FISH/4Q/caught/tilapia.gif'
const galunggong = 'assets/FISH/4Q/caught/galunggong.gif'
const lapulapu = 'assets/FISH/4Q/caught/lapulapu.gif'
const bangus_eng = 'assets/FISH/4Q/caught/bangus_eng.png'
const tilapia_eng = 'assets/FISH/4Q/caught/tilapia_eng.png'
const galunggong_eng = 'assets/FISH/4Q/caught/galunggong_eng.png'
const lapulapu_eng = 'assets/FISH/4Q/caught/lapulapu_eng.png'
// tagalog
const bangus_tag = 'assets/FISH/4Q/caught/bangus_tag.png'
const tilapia_tag = 'assets/FISH/4Q/caught/tilapia_tag.png'
const galunggong_tag = 'assets/FISH/4Q/caught/galung_tag.png'
const lapulapu_tag = 'assets/FISH/4Q/caught/lapulapu_tag.png'

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
          <img
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
        <img
          className="absolute inset-0 object-cover"
          sizes="100vw"
          src={bg}
          alt="background"
        />
        <img
          className="absolute object-contain w-[20%]"
          style={{ left: 180, top: 100 }}
          src={fishing_rod}
          alt="fishing_rod"
        />
        <img
          className="absolute object-contain w-[9%]"
          style={{ left: 110, top: 115 }}
          src={muni}
          alt="muni"
        />
      </div>

      {fishes.map(
        ({ id, fish, left, bottom, width }) =>
          !caughtFish.includes(id) && (
            <img
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
                <img
                  className="z-50 absolute object-contain"
                  src={randomCaughtFish.fish}
                  style={{ left: 720, top: 230, width: '34%' }}
                  alt="random caught fish"
                />
                <img
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

            <img
              className="object-cover w-full h-full"
              src={Page_4R}
              sizes="100vw"
              alt="caught fish"
            />
            <img
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
