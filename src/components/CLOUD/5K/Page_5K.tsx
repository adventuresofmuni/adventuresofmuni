import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// 5K
import TD_2 from '@/components/TD/CLOUD/TD_2.png'
import Page_5K_eng from '@/components/CLOUD/5K/Page_5K_eng.png'
//tag
import Page_5K_tag from '@/components/CLOUD/5K/Page_5K_tag.png'

// 5L
import TD_3 from '@/components/TD/CLOUD/TD_3.png'
import Page_5L_eng1 from '@/components/CLOUD/5K/Page_5L_eng1.png'
import Page_5L_eng2 from '@/components/CLOUD/5K/Page_5L_eng2.png'
import Page_5L_eng3 from '@/components/CLOUD/5K/Page_5L_eng3.png'
// tag
import Page_5L_tag1 from '@/components/CLOUD/5K/Page_5L_tag1.png'
import Page_5L_tag2 from '@/components/CLOUD/5K/Page_5L_tag2.png'
import Page_5L_tag3 from '@/components/CLOUD/5K/Page_5L_tag3.png'

import { useLanguage } from '@/hooks/LanguageContext'

// Dialogue Audio
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/PILOT/PILOT 1.mp3',
  d2: 'audio/DIALOGUES/PILOT/PILOT 2.mp3',
  d3: 'audio/DIALOGUES/PILOT/PILOT 3.mp3',
  d4: 'audio/DIALOGUES/PILOT/PILOT 4.mp3',
}

const Page_5K = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const { language } = useLanguage()
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const dialogue = [
    {
      id: 'd1',
      bg: TD_2,
      eng: Page_5K_eng,
      tag: Page_5K_tag,
      left: 160,
      bottom: 320,
      bottom_tag: 290,
      width: '40%',
    },
    {
      id: 'd2',
      bg: TD_3,
      eng: Page_5L_eng1,
      tag: Page_5L_tag1,
      left: 180,
      bottom: 270,
      bottom_tag: 290,
      width: '40%',
    },
    {
      id: 'd3',
      bg: TD_3,
      eng: Page_5L_eng2,
      tag: Page_5L_tag2,
      left: 180,
      bottom: 340,
      width: '40%',
    },
    {
      id: 'd4',
      bg: TD_3,
      eng: Page_5L_eng3,
      tag: Page_5L_tag3,
      left: 180,
      bottom: 340,
      width: '40%',
    },
  ]

  const playAudio = (id: string) => {
    // Stop any currently playing audio
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    // Play new dialogue audio
    const newAudio = new Audio(dialogueAudio[id])
    newAudio.play()
    setAudio(newAudio)
  }

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
    if (page === 40 || page === 42) {
      setCurrentDialogue(0)
    }
  }, [page])

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      ref={ref}
      onClick={handleNextDialogue}
    >
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={dialogue[currentDialogue].bg}
          alt="background"
        />
        {/* English Text */}
        <Image
          className="absolute object-contain"
          style={{
            left: dialogue[currentDialogue].left,
            bottom: (() => {
              if (language === 'eng') {
                return dialogue[currentDialogue].bottom
              } else {
                return (
                  dialogue[currentDialogue].bottom_tag ||
                  dialogue[currentDialogue].bottom
                )
              }
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

Page_5K.displayName = 'Page_5K'

export default Page_5K
