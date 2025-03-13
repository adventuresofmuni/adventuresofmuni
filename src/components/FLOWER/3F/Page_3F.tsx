import React from 'react'
const Page_3F_bg = 'assets/FLOWER/3F/Page_3F_bg.png'
const Page_3F_english = 'assets/FLOWER/3F/Page_3F_english.png'
// tag
const Page_3F_tag = 'assets/FLOWER/3F/Page_3F_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_3F = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <img
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Page_3F_bg}
          alt="background"
        />
        <img
          className="absolute object-contain w-[30%]"
          style={{ right: 220, bottom: language === 'eng' ? 340 : 320 }}
          src={language === 'eng' ? Page_3F_english : Page_3F_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_3F.displayName = 'Page_3F'

export default Page_3F
