import Image from 'next/image'
import React from 'react'

import Page_4C_bg from '@/components/FISH/4C/Page_4C_bg.png'
import Page_4C_eng1 from '@/components/FISH/4C/Page_4C_eng1.png'
import Page_4C_eng2 from '@/components/FISH/4C/Page_4C_eng2.png'
import { useLanguage } from '@/hooks/LanguageContext'

// tagalog
import Page_4C_tag1 from '@/components/FISH/4C/Page_4C_tag1.png'
import Page_4C_tag2 from '@/components/FISH/4C/Page_4C_tag2.png'

const Page_4C = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Page_4C_bg}
          alt="background"
        />
        {/* English Text */}
        <Image
          className="absolute object-contain"
          style={{
            left: 140,
            bottom: 340,
            width: language === 'eng' ? '21%' : '25%',
          }}
          src={language === 'eng' ? Page_4C_eng1 : Page_4C_tag1}
          alt="dialogue"
        />
        <Image
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
