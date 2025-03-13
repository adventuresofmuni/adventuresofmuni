import Image from 'next/image'
import React from 'react'
import TD_M from '@/components/TD/TD_M.png'
import Page_4G_eng from '@/components/FISH/4G/Page_4G_eng.png'
// tagalog
import Page_4G_tag from '@/components/FISH/4G/Page_4G_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_4G = React.forwardRef<HTMLDivElement>((props, ref) => {
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
          className="absolute object-contain w-[40%]"
          style={{ right: 140, bottom: 330 }}
          src={language === 'eng' ? Page_4G_eng : Page_4G_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_4G.displayName = 'Page_4G'

export default Page_4G
