import React from 'react'

// SCHOOL 6B
const bg = 'assets/SCHOOL/6C/bg.png'
const Page_6C_eng = 'assets/SCHOOL/6C/Page_6C_eng.png'
// tagalog
const Page_6C_tag = 'assets/SCHOOL/6C/Page_6C_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_6C = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          sizes="100vw"
          src={bg}
          alt="background"
        />
        {/* English Text */}
        <img
          className="absolute object-contain"
          style={{
            right: 70,
            top: 150,
            width: '38%',
          }}
          src={language === 'eng' ? Page_6C_eng : Page_6C_tag}
          alt="dialogue"
        />
      </div>
    </div>
  )
})

Page_6C.displayName = 'Page_6C'

export default Page_6C
