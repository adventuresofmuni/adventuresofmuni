import Image from 'next/image'
import React from 'react'
import TD_3 from '@/components/TD/FISH/TD_3.png'
import Page_4E_eng from '@/components/FISH/4E/Page_4E_eng.png'
// tagalog
import Page_4E_tag from '@/components/FISH/4E/Page_4E_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_4E = React.forwardRef<HTMLDivElement>((props, ref) => {
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
          className="absolute object-contain w-[40%]"
          style={{ left: 180, bottom: language === 'eng' ? 330 : 300 }}
          src={language === 'eng' ? Page_4E_eng : Page_4E_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_4E.displayName = 'Page_4E'

export default Page_4E
