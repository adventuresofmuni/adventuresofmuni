import Image from 'next/image'
//TD TD_3
const TD_3 = 'assets/TD/TD_3.png'
const Page_3E_english = 'assets/FLOWER/3E/Page_3E_english.png'
import React from 'react'

// tag
const Page_3E_tag = 'assets/FLOWER/3E/Page_3E_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_3E = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()

  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={TD_3}
          alt="background"
        />
        <Image
          className="absolute object-contain w-[20%]"
          style={{ left: 320, bottom: 410 }}
          src={language === 'eng' ? Page_3E_english : Page_3E_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_3E.displayName = 'Page_3E'

export default Page_3E
