import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// dialogue choices
const TD_1 = 'assets/TD/CLOUD/TD_1.png'
const TD_4 = 'assets/TD/CLOUD/TD_4.png'

const d_option_a_eng = 'assets/CLOUD/5M/d_option_a_eng.png'
const d_option_b_eng = 'assets/CLOUD/5M/d_option_b_eng.png'
const d_answer_a1_eng = 'assets/CLOUD/5M/d_answer_a1_eng.png'
const d_answer_b1_eng = 'assets/CLOUD/5M/d_answer_b1_eng.png'

// tagalog
const d_option_a_tag = 'assets/CLOUD/5M/d_option_a_tag.png'
const d_option_b_tag = 'assets/CLOUD/5M/d_option_b_tag.png'
const d_answer_a1_tag = 'assets/CLOUD/5M/d_answer_a1_tag.png'
const d_answer_b1_tag = 'assets/CLOUD/5M/d_answer_b1_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const choiceAudio = 'audio/DIALOGUES/PILOT/PILOT 2.mp3'

const Page_5M = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const { language } = useLanguage()
  const [selectedChoice, setSelectedChoice] = useState<'A' | 'B' | null>(null)
  const [dialogueIndex, setDialogueIndex] = useState(0)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  const answers = {
    A: [
      {
        eng: d_answer_a1_eng,
        tag: d_answer_a1_tag,
        left: 180,
        bottom: 330,
        bottom_tag: 300,
        width: '40%',
      },
    ],
    B: [
      {
        eng: d_answer_b1_eng,
        tag: d_answer_b1_tag,
        left: 180,
        bottom: 320,
        bottom_tag: 290,
        width: '40%',
      },
    ],
  }

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
    if (selectedChoice && dialogueIndex < answers[selectedChoice].length - 1) {
      setDialogueIndex(dialogueIndex + 1)
    } else if (selectedChoice) {
      onFlipNext() // Flip page only when the last dialogue is reached
    }
  }

  useEffect(() => {
    if (page === 41 || page === 43) {
      setSelectedChoice(null)
      setDialogueIndex(0) // Reset dialogue when moving to new pages
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
        src={selectedChoice ? TD_1 : TD_4}
        alt="choose-dialogue"
      />

      {selectedChoice === null && (
        <>
          <Image
            className="absolute object-contain cursor-pointer hover:opacity-80 transition"
            style={{ left: 210, bottom: 430, width: '33%' }}
            src={language === 'eng' ? d_option_a_eng : d_option_a_tag}
            alt="Option A"
            onClick={() => handleChoiceSelection('A')}
          />

          <Image
            className="absolute object-contain cursor-pointer hover:opacity-80 transition"
            style={{ left: 250, bottom: 280, width: '28%' }}
            src={language === 'eng' ? d_option_b_eng : d_option_b_tag}
            alt="Option B"
            onClick={() => handleChoiceSelection('B')}
          />
        </>
      )}

      {/* Display selected answer dialogues */}
      {selectedChoice !== null &&
        dialogueIndex < answers[selectedChoice].length && (
          <Image
            className="absolute object-contain"
            style={{
              left: answers[selectedChoice][dialogueIndex].left,
              bottom: (() => {
                if (language === 'eng') {
                  return answers[selectedChoice][dialogueIndex].bottom
                } else {
                  return (
                    answers[selectedChoice][dialogueIndex].bottom_tag ||
                    answers[selectedChoice][dialogueIndex].bottom
                  )
                }
              })(),
              width: answers[selectedChoice][dialogueIndex].width,
            }}
            src={
              language === 'eng'
                ? answers[selectedChoice][dialogueIndex].eng
                : answers[selectedChoice][dialogueIndex].tag
            }
            alt={`Answer ${selectedChoice} - ${dialogueIndex + 1}`}
          />
        )}
    </div>
  )
})

Page_5M.displayName = 'Page_5M'

export default Page_5M
