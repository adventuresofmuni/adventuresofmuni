import Image from 'next/image'
import React from 'react'

import TD_O2 from '@/components/TD/TD_O2.png'
import Page_4A_eng from '@/components/FISH/4A/Page_4A_eng.png'
import Page_4A_tag from '@/components/FISH/4A/Page_4A_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

const Page_4A = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
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
          src={language === 'eng' ? Page_4A_eng : Page_4A_tag}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_4A.displayName = 'Page_4A'

export default Page_4A
