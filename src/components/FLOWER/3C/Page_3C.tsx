const flower_3C = 'assets/FLOWER/3C/flower_3C.png'
const flower_3C_english = 'assets/FLOWER/3C/flower_3C_english.png'
const flower_3C_english2 = 'assets/FLOWER/3C/flower_3C_english2.png'
import React from 'react'

// tag
const Page_3C_tag1 = 'assets/FLOWER/3C/Page_3C_tag1.png'
const Page_3C_tag2 = 'assets/FLOWER/3C/Page_3C_tag2.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_3C = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()

  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-full">
        <img
          className="absolute inset-0 object-cover animate-dolly"
          fill
          sizes="100vw"
          src={flower_3C}
          alt="background"
        />
        <img
          className="absolute object-cover"
          style={{ bottom: '100px', width: language === 'eng' ? '50%' : '60%' }}
          src={language === 'eng' ? flower_3C_english : Page_3C_tag1}
          alt="background"
        />
        <img
          className="absolute object-cover"
          style={{ bottom: '60px', width: language === 'eng' ? '58%' : '54%' }}
          src={language === 'eng' ? flower_3C_english2 : Page_3C_tag2}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_3C.displayName = 'Page_3C'

export default Page_3C
