const flower_3B_sky = 'assets/FLOWER/3B/flower_3B_sky.png'
const flower_3B_grass = 'assets/FLOWER/3B/flower_3B_grass.png'
const flower_3B_flowers = 'assets/FLOWER/3B/flower_3B_flowers.gif'
const flower_3B_characters = 'assets/FLOWER/3B/flower_3B_characters.gif'
const flower_3B_english = 'assets/FLOWER/3B/flower_3B_english.png'
import React from 'react'

// tag
const Page_3B_tag = 'assets/FLOWER/3B/Page_3B_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const Page_3B = React.forwardRef<HTMLDivElement>((props, ref) => {
  const { language } = useLanguage()

  return (
    <div className="relative w-full h-full " ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="flex flex-col items-center justify-end w-full h-full">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          sizes="100vw"
          src={flower_3B_sky}
          alt="background"
        />
        <img
          className="absolute object-cover"
          src={flower_3B_grass}
          alt="background"
        />
        <img
          className="absolute mb-[70px]"
          src={flower_3B_flowers}
          alt="background"
        />
        <img
          className="absolute object-cover w-[610px]"
          style={{ bottom: '70px', right: '930px' }}
          src={flower_3B_characters}
          alt="background"
        />
        <img
          className="absolute object-cover w-[700px]"
          style={{ bottom: '600px', left: '780px' }}
          src={language === 'eng' ? flower_3B_english : Page_3B_tag}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_3B.displayName = 'Page_3B'

export default Page_3B
