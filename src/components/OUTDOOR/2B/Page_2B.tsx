import React, { useEffect, useState } from 'react'

// 2A OUTDOOR
const TD_SMILE = 'assets/TD/TD_smile.png'
const Page_2B_eng1 = 'assets/OUTDOOR/2B/Page_2B_eng1.png'
const Page_2B_eng2 = 'assets/OUTDOOR/2B/Page_2B_eng2.png'
const Page_2B_eng3 = 'assets/OUTDOOR/2B/Page_2B_eng3.png'
const Page_2B_eng4 = 'assets/OUTDOOR/2B/Page_2B_eng4.png'

// tagalog
const Page_2B_tag1 = 'assets/OUTDOOR/2B/Page_2B_tag1.png'
const Page_2B_tag2 = 'assets/OUTDOOR/2B/Page_2B_tag2.png'
const Page_2B_tag3 = 'assets/OUTDOOR/2B/Page_2B_tag3.png'
const Page_2B_tag4 = 'assets/OUTDOOR/2B/Page_2B_tag4.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_2B = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const { language } = useLanguage()

  const dialogue = [
    {
      id: 'd1',
      bg: TD_SMILE,
      eng: Page_2B_eng1,
      tag: Page_2B_tag1,
      left: 260,
      bottom_tag: 320,
      bottom: 340,
      width: '30%',
    },
    {
      id: 'd2',
      bg: TD_SMILE,
      eng: Page_2B_eng2,
      tag: Page_2B_tag2,
      left: 180,
      left_tag: 230,
      bottom: 320,
      bottom_tag: 280,
      width: '40%',
      width_tag: '34%',
    },
    {
      id: 'd1',
      bg: TD_SMILE,
      eng: Page_2B_eng3,
      tag: Page_2B_tag3,
      left: 220,
      bottom: 320,
      width: '35%',
    },
    {
      id: 'd2',
      bg: TD_SMILE,
      eng: Page_2B_eng4,
      tag: Page_2B_tag4,
      left: 180,
      bottom: 320,
      bottom_tag: 280,
      width: '40%',
    },
  ]

  const handleNextDialogue = () => {
    if (currentDialogue + 1 < dialogue.length) {
      setCurrentDialogue((prev) => {
        const nextIndex = prev + 1
        return nextIndex
      })
    } else {
      onFlipNext()
    }
  }
  useEffect(() => {
    if (page === 3 || page === 5) {
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
            left: (() => {
              if (language === 'eng') {
                return dialogue[currentDialogue].left
              } else {
                return (
                  dialogue[currentDialogue].left_tag ||
                  dialogue[currentDialogue].left
                )
              }
            })(),
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
            width: (() => {
              if (language === 'eng') {
                return dialogue[currentDialogue].width
              } else {
                return (
                  dialogue[currentDialogue].width_tag ||
                  dialogue[currentDialogue].width
                )
              }
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

Page_2B.displayName = 'Page_2B'

export default Page_2B
