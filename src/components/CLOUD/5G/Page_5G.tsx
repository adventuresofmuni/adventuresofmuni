import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// 5G
const TD_1 = 'assets/TD/CLOUD/TD_1.png'
const Page_5G_eng = 'assets/CLOUD/5G/Page_5G_eng.png'
// 5H
const TD_2 = 'assets/TD/CLOUD/TD_2.png'
const Page_5H_eng = 'assets/Page_5H_eng.png'
// 5I
const TD_3 = 'assets/TD_3.png'
const Page_5I_eng = 'assets/Page_5I_eng.png'

// tagalog
const Page_5G_tag = 'assets/Page_5G_tag.png'
const Page_5H_tag = 'assets/Page_5H_tag.png'
const Page_5I_tag = 'assets/Page_5I_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

// Dialogue Audio
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/PILOT/PILOT 1.mp3',
  d2: 'audio/DIALOGUES/MUNI.mp3',
  d3: 'audio/DIALOGUES/PILOT/PILOT 3.mp3',
}

const Page_5G = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const { language } = useLanguage()
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const dialogue = [
    {
      id: 'd1',
      bg: TD_1,
      eng: Page_5G_eng,
      tag: Page_5G_tag,
      left: 180,
      bottom: 330,
      width: '40%',
    },
    {
      id: 'd2',
      bg: TD_2,
      eng: Page_5H_eng,
      tag: Page_5H_tag,
      left: 160,
      bottom: 330,
      width: '40%',
    },
    {
      id: 'd3',
      bg: TD_3,
      eng: Page_5I_eng,
      tag: Page_5I_tag,
      left: 250,
      bottom: 360,
      width: '30%',
    },
  ]

  const playAudio = (id: keyof typeof dialogueAudio) => {
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
    if (page === 38 || page === 40) {
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
            bottom: dialogue[currentDialogue].bottom,
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

Page_5G.displayName = 'Page_5G'

export default Page_5G
