import Image from 'next/image'
import React from 'react'
import TD_M from '@/components/TD/TD_M.png'
import Page_5F_eng from '@/components/CLOUD/5F/Page_5F_eng.png'
import Page_5F_tag from '@/components/CLOUD/5F/Page_5F_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_5F = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={TD_M}
          alt="background"
        />
        <Image
          className="absolute object-contain w-[35%]"
          style={{ right: 180, bottom: language === 'eng' ? 320 : 330 }}
          src={language === 'eng' ? Page_5F_eng : Page_5F_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_5F.displayName = 'Page_5F'

export default Page_5F
