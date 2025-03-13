import React from 'react'
const TD_M = 'assets/TD/TD_M.png'
const Page_4G_eng = 'assets/FISH/4G/Page_4G_eng.png'
// tagalog
const Page_4G_tag = 'assets/FISH/4G/Page_4G_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_4G = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          sizes="100vw"
          src={TD_M}
          alt="background"
        />
        <img
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
