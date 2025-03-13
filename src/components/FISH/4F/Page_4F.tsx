import Image from 'next/image'
import React from 'react'
import TD_O from '@/components/TD/TD_O.png'
import Page_4F_eng from '@/components/FISH/4F/Page_4F_eng.png'
import Page_4F_tag from '@/components/FISH/4F/Page_4F_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_4F = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={TD_O}
          alt="background"
        />
        <Image
          className="absolute object-contain w-[40%]"
          style={{ left: 180, bottom: language === 'eng' ? 330 : 270 }}
          src={language === 'eng' ? Page_4F_eng : Page_4F_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_4F.displayName = 'Page_4F'

export default Page_4F
