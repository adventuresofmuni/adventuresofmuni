import Image from 'next/image'
const Page_5D_bg = 'assets/CLOUD/5D/Page_5D_bg.png'
const Page_5D_muni = 'assets/CLOUD/5D/Page_5D_muni.gif'
const Page_5D_eng = 'assets/CLOUD/5D/Page_5D_eng.png'
import React from 'react'
// tagalog
const Page_5D_tag = 'assets/CLOUD/5D/Page_5D_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_5D = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-screen" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Page_5D_bg}
          alt="background"
        />
        <Image
          className="absolute object-contain w-[100%]"
          style={{ left: 0, bottom: 70 }}
          src={Page_5D_muni}
          alt="background"
        />
        <Image
          className="absolute object-cover w-[740px]"
          style={{
            bottom: '100px',
            right: 280,
            width: language === 'eng' ? '740px' : '800px',
          }}
          src={language === 'eng' ? Page_5D_eng : Page_5D_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_5D.displayName = 'Page_5D'

export default Page_5D
