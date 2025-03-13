import React, { useEffect, useState } from 'react'

// 4H
const TD_1 = 'assets/TD/FISH/TD_1.png'
const Page_4H_eng = 'assets/FISH/4H/Page_4H_eng.png'
const Page_4H_tag = 'assets/FISH/4H/Page_4H_tag.png'
// 4I
const TD_2 = 'assets/TD/FISH/TD_2.png'
const Page_4I_eng = 'assets/FISH/4H/Page_4I_eng.png'
const Page_4I_tag = 'assets/FISH/4H/Page_4I_tag.png'
// 4J
const TD_3 = 'assets/TD/FISH/TD_3.png'
const Page_4J_eng = 'assets/FISH/4H/Page_4J_eng.png'
const Page_4J_tag = 'assets/FISH/4H/Page_4J_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

// Dialogue Audio
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/FISHER/FISHER 1.mp3',
  d2: 'audio/DIALOGUES/FISHER/FISHER 2.mp3',
  d3: 'audio/DIALOGUES/FISHER/FISHER 3.mp3',
}

const Page_4H = React.forwardRef<
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
      eng: Page_4H_eng,
      tag: Page_4H_tag,
      left: 180,
      bottom: 330,
      width: '40%',
    },
    {
      id: 'd2',
      bg: TD_2,
      eng: Page_4I_eng,
      tag: Page_4I_tag,
      left: 240,
      bottom: 360,
      width: '30%',
    },
    {
      id: 'd3',
      bg: TD_3,
      eng: Page_4J_eng,
      tag: Page_4J_tag,
      left: 350,
      bottom: 360,
      width: '18%',
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
    if (page === 25 || page === 27) {
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
            left: (() => {
              if (language === 'tag') {
                return dialogue[currentDialogue].id === 'd3'
                  ? '190px'
                  : dialogue[currentDialogue].left
              }
              return dialogue[currentDialogue].left
            })(),
            bottom: (() => {
              if (language === 'tag') {
                return dialogue[currentDialogue].id === 'd1'
                  ? 310
                  : dialogue[currentDialogue].id === 'd2'
                  ? 330
                  : dialogue[currentDialogue].bottom
              }
              return dialogue[currentDialogue].bottom
            })(),

            width: (() => {
              if (language === 'tag') {
                return dialogue[currentDialogue].id === 'd3'
                  ? '40%'
                  : dialogue[currentDialogue].width
              }
              return dialogue[currentDialogue].width
            })(),
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

Page_4H.displayName = 'Page_4H'

export default Page_4H
