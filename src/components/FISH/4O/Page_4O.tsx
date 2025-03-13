import Image from 'next/image'
import React, { useEffect, useState } from 'react'

//4O
const TD_2 = 'assets/TD/FISH/TD_2.png'
const Page_4O_eng1 = 'assets/FISH/4O/Page_4O_eng1.png'
const Page_4O_eng2 = 'assets/FISH/4O/Page_4O_eng2.png'
// tagalog
const Page_4O_tag1 = 'assets/FISH/4O/Page_4O_tag1.png'
const Page_4O_tag2 = 'assets/FISH/4O/Page_4O_tag2.png'

//4P
const TD_3 = 'assets/TD/FISH/TD_3.png'
const Page_4P_eng = 'assets/FISH/4O/Page_4P_eng1.png'
// tagalog
const Page_4P_tag = 'assets/FISH/4O/Page_4P_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/DIALOGUES/FISHER/FISHER 1.mp3',
  d2: 'audio/DIALOGUES/FISHER/FISHER 2.mp3',
  d3: 'audio/DIALOGUES/FISHER/FISHER 3.mp3',
}

const Page_4O = React.forwardRef<
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
      eng: Page_4O_eng1,
      tag: Page_4O_tag1,
      left: 160,
      bottom: 320,
      bottom_tag: 290,
      width: '40%',
    },
    {
      id: 'd2',
      bg: TD_2,
      eng: Page_4O_eng2,
      tag: Page_4O_tag2,
      left: 230,
      bottom: 330,
      bottom_tag: 310,
      width: '30%',
    },
    {
      id: 'd3',
      bg: TD_3,
      eng: Page_4P_eng,
      tag: Page_4P_tag,
      left: 180,
      bottom: 320,
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
    if (page === 29 || page === 31) {
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

Page_4O.displayName = 'Page_4O'

export default Page_4O
