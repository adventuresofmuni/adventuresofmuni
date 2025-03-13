import Image from 'next/image'

const Page_4D_bg = 'assets/FISH/4D/Page_4D_bg.png'
const Page_4D_muni = 'assets/FISH/4D/Page_4D_muni.gif'
const Page_4D_eng = 'assets/FISH/4D/Page_4D_eng.png'
// tagalog
const Page_4D_tag = 'assets/FISH/4D/Page_4D_tag.png'

import { useLanguage } from '@/hooks/LanguageContext'

import React from 'react'

const Page_4D = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()

  return (
    <div className="relative w-full h-screen" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Page_4D_bg}
          alt="background"
        />
        <Image
          className="absolute object-contain w-[100%]"
          style={{ left: 0, bottom: 70 }}
          src={Page_4D_muni}
          alt="background"
        />
        <Image
          className="absolute object-cover "
          style={{
            bottom: '100px',
            right: 280,
            width: language === 'eng' ? '740px' : '780px',
          }}
          src={language === 'eng' ? Page_4D_eng : Page_4D_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_4D.displayName = 'Page_4D'

export default Page_4D
