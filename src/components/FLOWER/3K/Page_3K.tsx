// d1
const TD_3 = 'assets/TD/TD_3.png'
const Page_3K_eng = 'assets/FLOWER/3K/Page_3K_eng.png'
const Page_3K_tag = 'assets/FLOWER/3K/Page_3K_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
import React from 'react'

const Page_3K = React.forwardRef<HTMLDivElement, { onFlipNext: () => void }>(
  ({ onFlipNext }, ref) => {
    const { language } = useLanguage()
    const handleNextDialogue = () => {
      onFlipNext()
    }
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
            src={TD_3}
            alt="background"
          />
          {/* English Text */}
          <img
            className="absolute object-contain"
            style={{
              left: language === 'eng' ? 200 : 220,
              bottom: language === 'eng' ? 390 : 370,
              width: '35%',
            }}
            src={language === 'eng' ? Page_3K_eng : Page_3K_tag}
            alt="dialogue"
          />
        </div>
      </div>
    )
  }
)

Page_3K.displayName = 'Page_3K'

export default Page_3K
