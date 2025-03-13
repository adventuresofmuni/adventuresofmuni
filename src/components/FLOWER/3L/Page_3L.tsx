import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// dialogue choices
const Page_3_eng_ans_a = 'assets/FLOWER/3L/Page_3L_eng_ans_a.png'
const Page_3_eng_ans_b = 'assets/FLOWER/3L/Page_3L_eng_ans_b.png'
const Page_3_eng_opt_a = 'assets/FLOWER/3L/Page_3L_eng_opt_a.png'
const Page_3_eng_opt_b = 'assets/FLOWER/3L/Page_3L_eng_opt_b.png'

// tagalog
const d_answer_a_tag = 'assets/FLOWER/3J/d_answer_a_tag.png'
const d_answer_b_tag = 'assets/FLOWER/3J/d_answer_b_tag.png'
const d_option_a_tag = 'assets/FLOWER/3J/d_option_a_tag.png'
const d_option_b_tag = 'assets/FLOWER/3J/d_option_b_tag.png'

const TD_1 = 'assets/TD/TD_1.png'
const TD_4 = 'assets/TD/TD_4.png'
import { useLanguage } from '@/hooks/LanguageContext'

const choiceAudio = 'audio/DIALOGUES/FLORIST/FLORIST 3.mp3'

const Page_3L = React.forwardRef<
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
    if (page === 14 || page === 16) {
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
        src={selectedChoice ? TD_1 : TD_4}
        alt="choose-dialogue"
      />

      {selectedChoice === null && (
        <>
          <Image
            className="absolute object-contain cursor-pointer hover:opacity-80 transition"
            style={{
              left: language === 'eng' ? 210 : 250,
              bottom: language === 'eng' ? 430 : 420,
              width: language === 'eng' ? '35%' : '30%',
            }}
            src={language === 'eng' ? Page_3_eng_opt_a : d_option_a_tag}
            alt="Option A"
            onClick={() => handleChoiceSelection('A')}
          />

          <Image
            className="absolute object-contain cursor-pointer hover:opacity-80 transition"
            style={{
              left: language === 'eng' ? 250 : 260,
              bottom: language === 'eng' ? 280 : 278,
              width: language === 'eng' ? '30%' : '29%',
            }}
            src={language === 'eng' ? Page_3_eng_opt_b : d_option_b_tag}
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
            bottom: language === 'eng' ? 350 : 310,
            width: '40%',
          }}
          src={language === 'eng' ? Page_3_eng_ans_a : d_answer_a_tag}
          alt="Answer A"
        />
      )}

      {selectedChoice === 'B' && (
        <Image
          className="absolute object-contain"
          style={{
            left: 220,
            bottom: language === 'eng' ? 320 : 310,
            width: language === 'eng' ? '34%' : '36%',
          }}
          src={language === 'eng' ? Page_3_eng_ans_b : d_answer_b_tag}
          alt="Answer B"
        />
      )}
    </div>
  )
})

Page_3L.displayName = 'Page_3L'

export default Page_3L
