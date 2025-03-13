import React from 'react'

const TD_3 = 'assets/TD/CLOUD/TD_3.png'
const Page_5E_eng = 'assets/CLOUD/5E/Page_5E_eng.png'
// tagalog
const Page_5E_tag = 'assets/CLOUD/5E/Page_5E_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_5E = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={TD_3}
          alt="background"
        />
        <img
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
