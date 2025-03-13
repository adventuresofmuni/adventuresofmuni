import React from 'react'

const Page_4C_bg = 'assets/FISH/4C/Page_4C_bg.png'
const Page_4C_eng1 = 'assets/FISH/4C/Page_4C_eng1.png'
const Page_4C_eng2 = 'assets/FISH/4C/Page_4C_eng2.png'
import { useLanguage } from '@/hooks/LanguageContext'

// tagalog
const Page_4C_tag1 = 'assets/FISH/4C/Page_4C_tag1.png'
const Page_4C_tag2 = 'assets/FISH/4C/Page_4C_tag2.png'

const Page_4C = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          sizes="100vw"
          src={Page_4C_bg}
          alt="background"
        />
        {/* English Text */}
        <img
          className="absolute object-contain"
          style={{
            left: 140,
            bottom: 340,
            width: language === 'eng' ? '21%' : '25%',
          }}
          src={language === 'eng' ? Page_4C_eng1 : Page_4C_tag1}
          alt="dialogue"
        />
        <img
          className="absolute object-contain opacity-0 animate-fadein "
          style={{
            left: 190,
            bottom: 190,
            width: '29%',
          }}
          src={language === 'eng' ? Page_4C_eng2 : Page_4C_tag2}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_4C.displayName = 'Page_4C'

export default Page_4C
