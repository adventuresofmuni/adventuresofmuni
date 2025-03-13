import Image from 'next/image'
import React, { useEffect, useState } from 'react'

// 2A OUTDOOR
import bg from '@/components/OUTDOOR/2A/bg.png'
import Page_2A_eng1 from '@/components/OUTDOOR/2A/Page_2A_eng1.png'
import Page_2A_eng2 from '@/components/OUTDOOR/2A/Page_2A_eng2.png'

// tagalog
import Page_2A_tag1 from '@/components/OUTDOOR/2A/Page_2A_tag1.png'
import Page_2A_tag2 from '@/components/OUTDOOR/2A/Page_2A_tag2.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_2A = React.forwardRef<
  HTMLDivElement,
  { page: number; onFlipNext: () => void }
>(({ page, onFlipNext }, ref) => {
  const [currentDialogue, setCurrentDialogue] = useState(0)
  const { language } = useLanguage()

  const dialogue = [
    {
      id: 'd1',
      bg: bg,
      eng: Page_2A_eng1,
      tag: Page_2A_tag1,
      bottom: 60,
      width: '60%',
    },
    {
      id: 'd2',
      bg: bg,
      eng: Page_2A_eng2,
      tag: Page_2A_tag2,
      bottom: 60,
      width: '40%',
    },
  ]

  const handleNextDialogue = () => {
    if (currentDialogue + 1 < dialogue.length) {
      setCurrentDialogue((prev) => prev + 1)
    } else {
      onFlipNext()
    }
  }

  useEffect(() => {
    if (page === 2 || page === 4) {
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

Page_2A.displayName = 'Page_2A'

export default Page_2A
