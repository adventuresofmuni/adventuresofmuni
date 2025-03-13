import React from 'react'
const TD_O = 'assets/TD/TD_O.png'
const Page_4F_eng = 'assets/FISH/4F/Page_4F_eng.png'
const Page_4F_tag = 'assets/FISH/4F/Page_4F_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_4F = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          sizes="100vw"
          src={TD_O}
          alt="background"
        />
        <img
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
