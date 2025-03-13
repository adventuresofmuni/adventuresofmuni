import React from 'react'

const PAGE_5B_eng = 'assets/CLOUD/5B/PAGE_5B_eng.png'
const bg = 'assets/CLOUD/5B/bg.png'
const characters = 'assets/CLOUD/5B/characters.gif'
const PAGE_5B_tag = 'assets/CLOUD/5B/Page_5B_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

const Page_5B = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full " ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={bg}
          alt="background"
        />
        {/* Characters */}
        <img
          className="absolute object-contain"
          style={{
            left: 0,
            bottom: 0,
            width: '100%',
          }}
          src={characters}
          alt="characters"
        />
        {/* English Text */}
        <img
          className="absolute object-contain"
          style={{
            right: 150,
            top: 150,
            width: '40%',
          }}
          src={language === 'eng' ? PAGE_5B_eng : PAGE_5B_tag}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_5B.displayName = 'Page_5B'

export default Page_5B
