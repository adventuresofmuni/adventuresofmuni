import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// dialogue choices
const TD_1 = 'assets/TD/FISH/TD_1.png'
const TD_4 = 'assets/TD/FISH/TD_4.png'

const d_option_a_eng = 'assets/FISH/4K/d_option_a_eng.png'
const d_option_b_eng = 'assets/FISH/4K/d_option_b_eng.png'
const d_answer_a1_eng = 'assets/FISH/4K/d_answer_a1_eng.png'
const d_answer_a2_eng = 'assets/FISH/4K/d_answer_a2_eng.png'
const d_answer_b1_eng = 'assets/FISH/4K/d_answer_b1_eng.png'
const d_answer_b2_eng = 'assets/FISH/4K/d_answer_b2_eng.png'
const d_answer_b3_eng = 'assets/FISH/4K/d_answer_b3_eng.png'

//tagalog
const d_option_a_tag = 'assets/FISH/4K/d_option_a_tag.png'
const d_option_b_tag = 'assets/FISH/4K/d_option_b_tag.png'
const d_answer_a1_tag = 'assets/FISH/4K/d_answer_a1_tag.png'
const d_answer_a2_tag = 'assets/FISH/4K/d_answer_a2_tag.png'
const d_answer_b1_tag = 'assets/FISH/4K/d_answer_b1_tag.png'
const d_answer_b2_tag = 'assets/FISH/4K/d_answer_b2_tag.png'
const d_answer_b3_tag = 'assets/FISH/4K/d_answer_b3_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
// 'audio/DIALOGUES/FISHER/FISHER 1.mp3'

const dialogueAudio = [
  'audio/DIALOGUES/FISHER/FISHER 1.mp3',
  'audio/DIALOGUES/FISHER/FISHER 2.mp3',
  'audio/DIALOGUES/FISHER/FISHER 3.mp3',
]

const Page_4K = React.forwardRef<
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
        bottom: 340,
        width: '40%',
      },
      {
        eng: d_answer_a2_eng,
        tag: d_answer_a2_tag,
        left: 200,
        bottom: 330,
        width: '38%',
        width_tag: '44%',
        left_tag: 150,
        bottom_tag: 330,
      },
    ],
    B: [
      {
        eng: d_answer_b1_eng,
        tag: d_answer_b1_tag,
        left: 180,
        bottom: 340,
        bottom_tag: 320,
        width: '40%',
      },
      {
        eng: d_answer_b2_eng,
        tag: d_answer_b2_tag,
        left: 200,
        left_tag: 180,
        bottom: 330,
        bottom_tag: 340,
        width: '40%',
      },
      {
        eng: d_answer_b3_eng,
        tag: d_answer_b3_tag,
        left: 200,
        bottom: 370,
        width: '38%',
        left_tag: 250,
        bottom_tag: 340,
        width_tag: '30%',
      },
    ],
  }

  const playAudio = (index: number) => {
    if (audio) {
      audio.pause()
      audio.currentTime = 0
    }

    if (dialogueAudio[index]) {
      const newAudio = new Audio(dialogueAudio[index])
      newAudio.play()
      setAudio(newAudio)
    }
  }

  const handleChoiceSelection = (choice: 'A' | 'B') => {
    setSelectedChoice(choice)
    setDialogueIndex(0) // Reset dialogue index when a choice is selected
    playAudio(0) // Play first audio in sequence
  }

  const handleNextDialogue = () => {
    if (selectedChoice && dialogueIndex < answers[selectedChoice].length - 1) {
      setDialogueIndex((prev) => {
        const nextIndex = prev + 1
        playAudio(nextIndex) // Play next audio in sequence
        return nextIndex
      })
    } else if (selectedChoice) {
      onFlipNext()
    }
  }

  useEffect(() => {
    if (page === 26 || page === 28) {
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
            style={{
              left: 200,
              bottom: language === 'eng' ? 450 : 420,
              width: language === 'eng' ? '33%' : '32%',
            }}
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
              left: (() => {
                if (language === 'eng') {
                  return answers[selectedChoice][dialogueIndex].left
                } else {
                  return (
                    answers[selectedChoice][dialogueIndex].left_tag ||
                    answers[selectedChoice][dialogueIndex].left
                  )
                }
              })(),
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
              width: (() => {
                if (language === 'eng') {
                  return answers[selectedChoice][dialogueIndex].width
                } else {
                  return (
                    answers[selectedChoice][dialogueIndex].width_tag ||
                    answers[selectedChoice][dialogueIndex].width
                  )
                }
              })(),
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

Page_4K.displayName = 'Page_4K'

export default Page_4K
