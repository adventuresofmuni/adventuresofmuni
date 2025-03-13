import Image from 'next/image'
import React from 'react'

import PAGE_5B_eng from '@/components/CLOUD/5B/PAGE_5B_eng.png'
import bg from '@/components/CLOUD/5B/bg.png'
import characters from '@/components/CLOUD/5B/characters.gif'
import PAGE_5B_tag from '@/components/CLOUD/5B/Page_5B_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

const Page_5B = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full " ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={bg}
          alt="background"
        />
        {/* Characters */}
        <Image
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
        <Image
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
