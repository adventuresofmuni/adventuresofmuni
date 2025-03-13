import Image from 'next/image'
import React from 'react'

// SCHOOL 6B
import bg from '@/components/SCHOOL/6B/bg.png'
import Page_6B_eng from '@/components/SCHOOL/6B/Page_6B_eng.png'
// tagalog
import Page_6B_tag from '@/components/SCHOOL/6B/Page_6B_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_6B = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={bg}
          alt="background"
        />
        {/* English Text */}
        <Image
          className="absolute object-contain"
          style={{
            left: 225,
            bottom: 190,
            width: '38%',
          }}
          src={language === 'eng' ? Page_6B_eng : Page_6B_tag}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_6B.displayName = 'Page_6B'

export default Page_6B
