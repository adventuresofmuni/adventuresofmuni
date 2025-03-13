import React, { useEffect, useState } from 'react'

// d1
const TD_2 = 'assets/TD/TD_2.png'
const TD_3 = 'assets/TD/TD_3.png'
const Page_3M_eng = 'assets/FLOWER/3MN/Page_3M_eng.png'
const Page_3N_eng = 'assets/FLOWER/3MN/Page_3N_eng.png'

// tagalog
const Page_3M_tag = 'assets/FLOWER/3MN/Page_3M_tag.png'
const Page_3N_tag = 'assets/FLOWER/3MN/Page_3N_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

// Dialogue Audio
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/FLORIST/FLORIST 1.mp3',
  d2: 'audio/DIALOGUES/FLORIST/FLORIST 2.mp3',
}

const Page_3MN = React.forwardRef<
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
      eng: Page_3M_eng,
      tag: Page_3M_tag,
      left: 220,
      bottom: 300,
      width: '35%',
    },
    {
      id: 'd2',
      bg: TD_3,
      eng: Page_3N_eng,
      tag: Page_3N_tag,
      left: 220,
      bottom: 360,
      width: '35%',
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

  // Reset currentDialogue when the page is revisited
  useEffect(() => {
    if (page === 15 || page === 17) {
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
          sizes="100vw"
          src={dialogue[currentDialogue].bg}
          alt="background"
        />
        {/* English Text */}
        <img
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

Page_3MN.displayName = 'Page_3MN'

export default Page_3MN
