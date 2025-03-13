import React from 'react'

const TD_O3 = 'assets/TD/TD_O3.png'
const Page_5Q_eng = 'assets/CLOUD/5Q/Page_5Q_eng.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_5Q_tag = 'assets/CLOUD/5Q/Page_5Q_tag.png'

const Page_5Q = React.forwardRef<HTMLDivElement, { onFlipNext: () => void }>(
  ({ onFlipNext }, ref) => {
    const { language } = useLanguage()
    const handleNextDialogue = () => {
      onFlipNext()
    }

    return (
      <div className="relative w-full h-full" ref={ref}>
        {/* Background Wrapper */}
        <div
          className="flex cursor-pointer flex-col items-center justify-end w-full h-screen"
          onClick={handleNextDialogue}
        >
          <img
            className="absolute inset-0 object-cover"
            fill
            sizes="100vw"
            src={TD_O3}
            alt="background"
          />
          {/* English Text */}
          <img
            className="absolute object-contain"
            style={{
              left: 175,
              bottom: 320,
              width: '40%',
            }}
            src={language === 'eng' ? Page_5Q_eng : Page_5Q_tag}
            alt="dialogue"
          />
        </div>
      </div>
    )
  }
)

Page_5Q.displayName = 'Page_5Q'

export default Page_5Q
