import Image from 'next/image'
import React from 'react'

import Page_4B_bg from '@/components/FISH/4B/Page_4B_bg.png'
import Page_4B_characters from '@/components/FISH/4B/Page_4B_characters.gif'
import Page_4B_eng from '@/components/FISH/4B/Page_4B_eng.png'
import { useLanguage } from '@/hooks/LanguageContext'
// tagalog
import Page_4B_tag from '@/components/FISH/4B/Page_4B_tag.png'

const Page_4B = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full " ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Page_4B_bg}
          alt="background"
        />
        {/* Characters */}
        <Image
          className="absolute object-contain"
          style={{
            left: 0,
            bottom: 20,
            width: '100%',
          }}
          src={Page_4B_characters}
          alt="characters"
        />
        {/* English Text */}
        <Image
          className="absolute object-contain"
          style={{
            top: 100,
            width: '80%',
          }}
          src={language === 'eng' ? Page_4B_eng : Page_4B_tag}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_4B.displayName = 'Page_4B'

export default Page_4B
