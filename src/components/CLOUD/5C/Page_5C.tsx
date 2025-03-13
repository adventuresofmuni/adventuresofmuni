const Page_5C_bg = 'assets/CLOUD/5C/Page_5C_bg.png'
const Page_5C_eng1 = 'assets/CLOUD/5C/Page_5C_eng1.png'
const Page_5C_eng2 = 'assets/CLOUD/5C/Page_5C_eng2.png'
import React from 'react'
// tagalog
const Page_5C_tag1 = 'assets/Page_5C_tag1.png'
const Page_5C_tag2 = 'assets/Page_5C_tag2.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_5C = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-full">
        <img
          className="absolute inset-0 object-cover animate-dolly"
          fill
          sizes="100vw"
          src={Page_5C_bg}
          alt="background"
        />
        <img
          className="absolute object-cover w-[920px]"
          style={{ bottom: '100px' }}
          src={language === 'eng' ? Page_5C_eng1 : Page_5C_tag1}
          alt="background"
        />
        <img
          className="absolute object-cover w-[820px]"
          style={{
            bottom: '60px',
            width: language === 'eng' ? '820px' : '70%',
          }}
          src={language === 'eng' ? Page_5C_eng2 : Page_5C_tag2}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_5C.displayName = 'Page_5C'

export default Page_5C
