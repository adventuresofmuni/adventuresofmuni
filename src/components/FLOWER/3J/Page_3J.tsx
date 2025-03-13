import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// dialogue choices
import d_option_a_eng from '@/components/FLOWER/3J/d_option_a_eng.png'
import d_option_b_eng from '@/components/FLOWER/3J/d_option_b_eng.png'
import d_answer_a_eng from '@/components/FLOWER/3J/d_answer_a_eng.png'
import d_answer_b_eng from '@/components/FLOWER/3J/d_answer_b_eng.png'
import d2 from '@/components/FLOWER/3G/d2.png'

// tagalog
import d_option_a_tag from '@/components/FLOWER/3J/d_option_a_tag.png'
import d_option_b_tag from '@/components/FLOWER/3J/d_option_b_tag.png'
import d_answer_a_tag from '@/components/FLOWER/3J/d_answer_a_tag.png'
import d_answer_b_tag from '@/components/FLOWER/3J/d_answer_b_tag.png'

// TD_1
import TD_4 from '@/components/TD/TD_4.png'
import { useLanguage } from '@/hooks/LanguageContext'

const choiceAudio = '/audio/DIALOGUES/FLORIST/FLORIST 1.mp3'

const Page_3J = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const { language } = useLanguage()
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const playChoiceAudio = () => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    const newAudio = new Audio(choiceAudio)
    newAudio.play()
    setAudio(newAudio)
  }

  const handleChoiceSelection = (choice: 'A' | 'B') => {
    setSelectedChoice(choice)
    playChoiceAudio()
  }

  const handleNextDialogue = () => {
    if (selectedChoice !== null) {
      onFlipNext()
    }
  }

  useEffect(() => {
    if (page === 12 || page === 14) {
      setSelectedChoice(null)
    }
  }, [page])

  return (
    <div
      className={`relative w-full h-full ${
        selectedChoice ? 'cursor-pointer' : ''
      }`}
      ref={ref}
      onClick={handleNextDialogue}
    >
      {/* Choice dialogue screen */}

      <Image
        className="absolute inset-0 object-cover"
        fill
        sizes="100vw"
        // if selectedChoice is not null, show the selected choice
        src={selectedChoice ? d2 : TD_4}
        alt="choose-dialogue"
      />

      {selectedChoice === null && (
        <>
          <Image
            className="absolute object-contain cursor-pointer hover:opacity-80 transition"
            style={{
              left: language === 'eng' ? 170 : 240,
              bottom: language === 'eng' ? 450 : 420,
              width: language === 'eng' ? '40%' : '31%',
            }}
            src={language === 'eng' ? d_option_a_eng : d_option_a_tag}
            alt="Option A"
            onClick={() => handleChoiceSelection('A')}
          />

          <Image
            className="absolute object-contain cursor-pointer hover:opacity-80 transition"
            style={{ left: 240, bottom: 270, width: '30%' }}
            src={language === 'eng' ? d_option_b_eng : d_option_b_tag}
            alt="Option B"
            onClick={() => handleChoiceSelection('B')}
          />
        </>
      )}

      {/* Display selected answer */}
      {selectedChoice === 'A' && (
        <Image
          className="absolute object-contain"
          style={{
            left: 180,
            bottom: language === 'eng' ? 310 : 290,
            width: '40%',
          }}
          src={language === 'eng' ? d_answer_a_eng : d_answer_a_tag}
          alt="Answer A"
        />
      )}

      {selectedChoice === 'B' && (
        <Image
          className="absolute object-contain"
          style={{ left: 190, bottom: 270, width: '38%' }}
          src={language === 'eng' ? d_answer_b_eng : d_answer_b_tag}
          alt="Answer B"
        />
      )}
    </div>
  )
})

Page_3J.displayName = 'Page_3J'

export default Page_3J
