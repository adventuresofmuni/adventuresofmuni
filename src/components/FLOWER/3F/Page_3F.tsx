import Image from 'next/image'
import React from 'react'
import Page_3F_bg from '@/components/FLOWER/3F/Page_3F_bg.png'
import Page_3F_english from '@/components/FLOWER/3F/Page_3F_english.png'
// tag
import Page_3F_tag from '@/components/FLOWER/3F/Page_3F_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'
const Page_3F = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Page_3F_bg}
          alt="background"
        />
        <Image
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
