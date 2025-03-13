import Image from 'next/image'
import React, { useEffect, useState } from 'react'

//4L
import TD_2 from '@/components/TD/FISH/TD_2.png'
import Page_4L_eng from '@/components/FISH/4L/Page_4L_eng.png'
import Page_4L_tag from '@/components/FISH/4L/Page_4L_tag.png'
//4M
import TD_3 from '@/components/TD/FISH/TD_3.png'
import Page_4M_eng1 from '@/components/FISH/4L/Page_4M_eng1.png'
import Page_4M_eng2 from '@/components/FISH/4L/Page_4M_eng2.png'

import Page_4M_tag1 from '@/components/FISH/4L/Page_4M_tag1.png'
import Page_4M_tag2 from '@/components/FISH/4L/Page_4M_tag2.png'

import { useLanguage } from '@/hooks/LanguageContext'

// Dialogue Audio
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/FISHER/FISHER 1.mp3',
  d2: 'audio/DIALOGUES/FISHER/FISHER 2.mp3',
  d3: 'audio/DIALOGUES/FISHER/FISHER 3.mp3',
}

const Page_4L = React.forwardRef<
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
      eng: Page_4L_eng,
      tag: Page_4L_tag,
      left: 160,
      bottom: 320,
      bottom_tag: 260,
      width: '40%',
    },
    {
      id: 'd2',
      bg: TD_3,
      eng: Page_4M_eng1,
      tag: Page_4M_tag1,
      left: 180,
      bottom: 300,
      bottom_tag: 310,
      width: '40%',
    },
    {
      id: 'd3',
      bg: TD_3,
      eng: Page_4M_eng2,
      tag: Page_4M_tag2,
      left: 180,
      bottom: 320,
      bottom_tag: 310,
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
    if (page === 27 || page === 29) {
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

Page_4L.displayName = 'Page_4L'

export default Page_4L
