import Image from 'next/image'
import React from 'react'

import TD_O2 from '@/components/TD/TD_O2.png'
import Page_4T_eng from '@/components/FISH/4R/Page_4T_eng.png'
import Page_4T_eng_done from '@/components/FISH/4R/Page_4T_eng_done.png'
// tagalog
import Page_4T_tag from '@/components/FISH/4R/Page_4T_tag.png'
import Page_4T_tag_done from '@/components/FISH/4R/Page_4T_tag_done.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_4R = React.forwardRef<
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
          <Image
            className="absolute inset-0 object-cover"
            fill
            sizes="100vw"
            src={TD_O2}
            alt="background"
          />
          {/* English Text */}
          <Image
            className="absolute object-contain"
            style={{
              left: 175,
              bottom: 320,
              width: '40%',
            }}
            src={
              language === 'eng'
                ? gameDone
                  ? Page_4T_eng_done
                  : Page_4T_eng
                : gameDone
                ? Page_4T_tag_done
                : Page_4T_tag
            }
            alt="dialogue"
          />
        </div>
      </div>
    )
  }
)

Page_4R.displayName = 'Page_4R'

export default Page_4R
