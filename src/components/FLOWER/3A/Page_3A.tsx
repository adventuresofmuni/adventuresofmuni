import Image from 'next/image'
const TD_02 = 'assets/FLOWER/3A/TD_02.png'
const TD_02_english = 'assets/FLOWER/3A/TD_02_english.png'
import React from 'react'
import { useLanguage } from '@/hooks/LanguageContext'
// tag
const Page_3A_tag = 'assets/FLOWER/3A/Page_3A_tag.png'

const Page_3A = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()

  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-full">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={TD_02}
          alt="background"
        />
        <Image
          className="absolute object-cover w-[600px]"
          style={{
            bottom: language === 'eng' ? '320px' : '340px',
            right: '800px',
          }}
          src={language === 'eng' ? TD_02_english : Page_3A_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_3A.displayName = 'Page_3A'

export default Page_3A
