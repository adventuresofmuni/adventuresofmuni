import React, { useEffect, useState } from 'react'

// 5R
const TD_1 = 'assets/TD/CLOUD/TD_1.png'
const Page_5R_eng = 'assets/CLOUD/5R/Page_5R_eng.png'
const Page_5R_tag = 'assets/CLOUD/5R/Page_5R_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_5R = React.forwardRef<HTMLDivElement, { page: number }>(
  ({ page }, ref) => {
    const { language } = useLanguage()
    const [currentDialogue, setCurrentDialogue] = useState(0)

    const dialogue = [
      {
        id: 'd1',
        bg: TD_1,
        eng: Page_5R_eng,
        tag: Page_5R_tag,
        left: 250,
        bottom: 360,
        bottom_tag: 330,
        width: '30%',
      },
    ]

    useEffect(() => {
      if (page === 45 || page === 47) {
        setCurrentDialogue(0)
      }
    }, [page])

    return (
      <div className="relative w-full h-full" ref={ref}>
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
  }
)

Page_5R.displayName = 'Page_5R'

export default Page_5R
