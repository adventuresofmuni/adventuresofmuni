import Image from 'next/image'

// d1
const TD_O3 = 'assets/TD/TD_O3.png'
const Page_3P_eng = 'assets/FLOWER/3P/Page_3P_eng.png'
const Page_3P_eng_done = 'assets/FLOWER/3P/Page_3P_eng_done.png'
// tagalog
const Page_3P_tag = 'assets/FLOWER/3P/Page_3P_tag.png'
const Page_3P_tag_done = 'assets/FLOWER/3P/Page_3P_tag_done.png'
import { useLanguage } from '@/hooks/LanguageContext'
import React from 'react'
const Page_3P = React.forwardRef<
  HTMLDivElement,
  { onFlipNext?: (page: number) => void; pathsDone: boolean[] }
>(
  (
    {
      onFlipNext,
      pathsDone,
    }: { onFlipNext?: (page: number) => void; pathsDone: boolean[] },
    ref: React.Ref<HTMLDivElement>
  ) => {
    const { language } = useLanguage()
    const gameDone = pathsDone[0] && pathsDone[1] && pathsDone[2]

    const handleNextDialogue = () => {
      if (onFlipNext && gameDone) {
        onFlipNext(48)
      } else {
        onFlipNext?.(5)
      }
    }
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
            src={TD_O3}
            alt="background"
          />
          {/* English Text */}
          <Image
            className="absolute object-contain"
            style={{
              left: 220,
              bottom: 320,
              width: '35%',
            }}
            src={
              language === 'eng'
                ? gameDone
                  ? Page_3P_eng_done
                  : Page_3P_eng
                : gameDone
                ? Page_3P_tag_done
                : Page_3P_tag
            }
            alt="dialogue"
          />
        </div>
      </div>
    )
  }
)

Page_3P.displayName = 'Page_3P'

export default Page_3P
