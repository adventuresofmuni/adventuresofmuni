import React, { useEffect, useState } from 'react'

// 5S
const TD_smile = 'assets/TD/TD_smile.png'
const Page_5S_eng1 = 'assets/CLOUD/5R/Page_5S_eng1.png'
const Page_5S_eng2 = 'assets/CLOUD/5R/Page_5S_eng2.png'
// tagalog
const Page_5S_tag1 = 'assets/PATHSDONE/Page_5S_tag1.png'
const Page_5S_tag2 = 'assets/PATHSDONE/Page_5S_tag2.png'

import { useLanguage } from '@/hooks/LanguageContext'
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/OTTIE.mp3',
  d2: 'audio/DIALOGUES/OTTIE.mp3',
}

const Page_5S = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const { language } = useLanguage()
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const dialogue = [
    {
      id: 'd1',
      bg: TD_smile,
      eng: Page_5S_eng1,
      tag: Page_5S_tag1,
      left: 180,
      bottom: 310,
      bottom_tag: 310,
      width: '40%',
    },
    {
      id: 'd2',
      bg: TD_smile,
      eng: Page_5S_eng2,
      tag: Page_5S_tag2,
      left: 180,
      bottom: 290,
      bottom_tag: 320,
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
    if (page === 46 || page === 48) {
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
          className="absolute inset-0 object-cover"
          fill
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

Page_5S.displayName = 'Page_5S'

export default Page_5S
