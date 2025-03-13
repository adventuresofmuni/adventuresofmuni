import Image from 'next/image'
import React from 'react'

import TD_3 from '@/components/TD/CLOUD/TD_3.png'
import Page_5E_eng from '@/components/CLOUD/5E/Page_5E_eng.png'
// tagalog
import Page_5E_tag from '@/components/CLOUD/5E/Page_5E_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_5E = React.forwardRef<HTMLDivElement>((props, ref) => {
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
          className="absolute object-contain w-[30%]"
          style={{ left: 250, bottom: language === 'eng' ? 320 : 370 }}
          src={language === 'eng' ? Page_5E_eng : Page_5E_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_5E.displayName = 'Page_5E'

export default Page_5E
