import Image from 'next/image'
import Page_3D_character from '@/components/FLOWER/3D/Page_3D_character.gif'
import Page_3D_background from '@/components/FLOWER/3D/Page_3D_background.png'
import Page_3D_english from '@/components/FLOWER/3D/Page_3D_english.png'
import React from 'react'

// tag
import Page_3D_tag from '@/components/FLOWER/3D/Page_3D_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_3D = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()
  return (
    <div className="relative w-full h-screen" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-screen">
        <Image
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Page_3D_background}
          alt="background"
        />
        <Image
          className="absolute object-contain w-[100%]"
          style={{ left: 0, bottom: 70 }}
          src={Page_3D_character}
          alt="background"
        />
        <Image
          className="absolute object-cover w-[740px]"
          style={{ bottom: '100px', right: 280 }}
          src={language === 'eng' ? Page_3D_english : Page_3D_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_3D.displayName = 'Page_3D'

export default Page_3D
