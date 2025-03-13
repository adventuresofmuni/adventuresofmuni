import React from 'react'

const TD_O2 = 'assets/TD/TD_O2.png'
// 5R_2 CLOUD
const Page_5R_2_eng = 'assets/CLOUD/5R_2/Page_5R_2_eng.png'
const Page_5R_2_eng_done = 'assets/CLOUD/5R_2/Page_5R_2_eng_done.png'
// tagalog
const Page_5R_2_tag = 'assets/CLOUD/5R_2/Page_5R_2_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_5R_2_tag_done = 'assets/CLOUD/5R_2/Page_5R_2_tag_done.png'

const Page_5R_2 = React.forwardRef<
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
      <div className="relative w-full h-full" ref={ref}>
        {/* Background Wrapper */}
        <div
          className="flex cursor-pointer flex-col items-center justify-end w-full h-screen"
          onClick={handleNextDialogue}
        >
          <img
            className="absolute inset-0 object-cover"
          sizes="100vw"
            src={TD_O2}
            alt="background"
          />
          {/* English Text */}
          <img
            className="absolute object-contain"
            style={{
              left: 175,
              bottom:
                language === 'eng'
                  ? gameDone
                    ? 340
                    : 300
                  : gameDone
                  ? 340
                  : 280,
              width: '40%',
            }}
            src={
              language === 'eng'
                ? gameDone
                  ? Page_5R_2_eng_done
                  : Page_5R_2_eng
                : gameDone
                ? Page_5R_2_tag_done
                : Page_5R_2_tag
            }
            alt="dialogue"
          />
        </div>
      </div>
    )
  }
)

Page_5R_2.displayName = 'Page_4R'

export default Page_5R_2
