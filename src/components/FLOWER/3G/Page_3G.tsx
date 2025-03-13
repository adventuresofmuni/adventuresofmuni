import React, { useCallback, useEffect, useRef, useState } from 'react'

// Dialogue imgs
const d1_eng = 'assets/FLOWER/3G/d1_eng.png'
const d2_eng = 'assets/FLOWER/3G/d2_eng.png'
const d3_eng = 'assets/FLOWER/3G/d3_eng.png'

// TAG
const d1_tag = 'assets/FLOWER/3G/d1_tag.png'
const d2_tag = 'assets/FLOWER/3G/d2_tag.png'
const d3_tag = 'assets/FLOWER/3G/d3_tag.png'

// TD
const TD_1 = 'assets/TD/TD_1.png'
const TD_2 = 'assets/TD/TD_2.png'
const TD_3 = 'assets/TD/TD_3.png'
import { useLanguage } from '@/hooks/LanguageContext'

// Dialogue Audio
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/FLORIST/FLORIST 1.mp3',
  d2: 'audio/DIALOGUES/FLORIST/FLORIST 2.mp3',
  d3: 'audio/DIALOGUES/FLORIST/FLORIST 3.mp3',
}

const Page_3G = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const { language } = useLanguage()
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const dialogue = React.useMemo(
    () => [
      {
        id: 'd1',
        bg: TD_1,
        eng: d1_eng,
        tag: d1_tag,
        left: 180,
        bottom: 350,
        width: '40%',
      },
      {
        id: 'd2',
        bg: TD_2,
        eng: d2_eng,
        tag: d2_tag,
        left: 260,
        bottom: 340,
        width: '30%',
      },
      {
        id: 'd3',
        bg: TD_3,
        eng: d3_eng,
        tag: d3_tag,
        left: 260,
        bottom: 410,
        width: '30%',
      },
    ],
    []
  )

  const playAudio = useCallback((id: keyof typeof dialogueAudio) => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    const newAudio = new Audio(dialogueAudio[id])
    newAudio.play()
    audioRef.current = newAudio
  }, [])

  const handleNextDialogue = () => {
    if (currentDialogue + 1 < dialogue.length) {
      setCurrentDialogue((prev) => {
        const nextIndex = prev + 1
        playAudio(dialogue[nextIndex].id) // Play corresponding audio
        return nextIndex
      })
    } else {
      onFlipNext()
    }
  }

  useEffect(() => {
    if (page === 11 || page === 13) {
      setCurrentDialogue(0)
    } else if (page === 12) {
      playAudio(dialogue[0].id) // Play first dialogue audio on reset
    }
  }, [dialogue, page, playAudio])

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      ref={ref}
      onClick={handleNextDialogue}
    >
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="w-full h-full absolute inset-0 object-cover"
          sizes="100vw"
          src={dialogue[currentDialogue].bg}
          alt="background"
        />
        {/* English Text */}
        <img
          className="absolute object-contain"
          style={{
            left: dialogue[currentDialogue].left,
            bottom: (() => {
              if (language === 'tag') {
                return dialogue[currentDialogue].id === 'd1'
                  ? 320
                  : dialogue[currentDialogue].bottom
              }
              return dialogue[currentDialogue].bottom
            })(),
            width: dialogue[currentDialogue].width,
          }}
          src={
            language === 'eng'
              ? dialogue[currentDialogue].eng
              : dialogue[currentDialogue].tag
          }
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_3G.displayName = 'Page_3G'

export default Page_3G
