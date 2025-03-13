import React from 'react'

const TD_O3 = 'assets/TD/TD_O3.png'
const Page_5A_eng = 'assets/CLOUD/5A/Page_5A_eng.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_5A_tag = 'assets/CLOUD/5A/Page_5A_tag.png'

const Page_5A = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col  items-center justify-end w-full h-full">
        <img
          className="w-full h-full absolute inset-0 object-cover"
          sizes="100vw"
          src={TD_O3}
          alt="background"
        />
        {/* English Text */}
        <img
          className="absolute object-contain"
          style={{
            left: 175,
            bottom: 320,
            width: '40%',
          }}
          src={language === 'eng' ? Page_5A_eng : Page_5A_tag}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_5A.displayName = 'Page_5A'

export default Page_5A
