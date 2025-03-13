import React from 'react'

const TD_O2 = 'assets/TD/TD_O2.png'
const Page_4A_eng = 'assets/FISH/4A/Page_4A_eng.png'
const Page_4A_tag = 'assets/FISH/4A/Page_4A_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

const Page_4A = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={TD_O2}
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
          src={language === 'eng' ? Page_4A_eng : Page_4A_tag}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_4A.displayName = 'Page_4A'

export default Page_4A
