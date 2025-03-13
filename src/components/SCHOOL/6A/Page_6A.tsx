import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'

// SCHOOL 6A
import bg1 from '@/components/SCHOOL/6A/bg1.png'
import bg2 from '@/components/SCHOOL/6D/bg.png'

import muni_awake from '@/components/SCHOOL/6A/muni_awake.gif'
import muni_text from '@/components/SCHOOL/6A/muni_text.png'

// Dialogue Audio
const dialogueAudio: { [key: string]: string } = {
  d1: 'audio/SFX/muni_snoring.mp3',
  d2: 'audio/SFX/muni_wakes_up.mp3',
}

const Page_6A = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuniAwake, setIsMuniAwake] = useState(false)

  const dialogue = [
    {
      id: 'd1',
      bg: bg1,

      left: 800,
      bottom: 350,
      width: '40%',
    },
    {
      id: 'd2',
      bg: bg2,

      left: 800,
      bottom: 380,
      width: '40%',
    },
  ]

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
    setIsMuniAwake(true)
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
    if (page === 48 || page === 50) {
      setCurrentDialogue(0)
    } else if (page === 49) {
      playAudio('d1')
    }
  }, [page, playAudio])

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      ref={ref}
      onClick={handleNextDialogue}
    >
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={dialogue[currentDialogue].bg}
          alt="background"
        />

        {isMuniAwake && (
          <>
            <Image
              className="absolute bottom-0 -left-20 object-contain"
              width={1200}
              src={muni_awake}
              alt="muni_awake"
            />
            <Image
              className="absolute p-24 mr-[100px] top-0 -right-20 object-contain"
              width={900}
              src={muni_text}
              alt="muni_text"
            />
          </>
        )}
      </div>
    </div>
  )
})

Page_6A.displayName = 'Page_1C'

export default Page_6A
