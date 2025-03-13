import Image from 'next/image'
import Path from '@/components/OUTDOOR/outdoor_2C.png'
import React from 'react'

import fish from '@/components/OUTDOOR/icons/fish.png'
import fish_hover from '@/components/OUTDOOR/icons/fish_hover.png'
import cloud from '@/components/OUTDOOR/icons/cloud.png'
import cloud_hover from '@/components/OUTDOOR/icons/cloud_hover.png'
import flower from '@/components/OUTDOOR/icons/flower.png'
import flower_hover from '@/components/OUTDOOR/icons/flower_hover.png'

import PickPath_eng from '@/components/PickPath_eng.png'
import PickPath_tag from '@/components/PickPath_tag.png'
import { useLanguage } from '@/hooks/LanguageContext'

const PickPath = React.forwardRef<
  HTMLDivElement,
  { onFlipNext?: (page: number) => void; pathsDone: boolean[] }
>(
  (
    {
      onFlipNext,
      pathsDone,
    }: { onFlipNext?: (page: number) => void; pathsDone: boolean[] },
    ref: React.Ref<HTMLDivElement>
  ) => {
    let isHoverCooldown = false
    const { language } = useLanguage()

    const hoverSound = new Audio('audio/SFX/hover_path.mp3')
    const clickSound = new Audio('audio/SFX/click_path.mp3')

    const playHoverSound = () => {
      if (isHoverCooldown) return // Prevents spamming

      isHoverCooldown = true // Set cooldown
      hoverSound.currentTime = 0 // Reset if already playing
      hoverSound.play()

      setTimeout(() => {
        isHoverCooldown = false // Allow sound to play again after cooldown
      }, 100) // Adjust cooldown time as needed (500ms = 0.5 sec)
    }

    const playClickSound = () => {
      if (isHoverCooldown) return // Prevents spamming

      isHoverCooldown = true // Set cooldown
      clickSound.currentTime = 0 // Reset if already playing
      clickSound.play()

      setTimeout(() => {
        isHoverCooldown = false // Allow sound to play again after cooldown
      }, 100) // Adjust cooldown time as needed (500ms = 0.5 sec)
    }

    return (
      <div className="relative w-full h-full" ref={ref}>
        {/* Background Wrapper (Ensures relative positioning) */}
        <div className="relative w-full h-full">
          <Image
            className="absolute inset-0 object-cover"
            fill
            sizes="100vw"
            src={Path}
            alt="background"
          />
        </div>

        {/* English Text */}
        <div className="flex justify-center top-0">
          <Image
            className="absolute object-contain"
            style={{
              top: 40,
              width: language === 'eng' ? '17%' : '35%',
            }}
            src={language === 'eng' ? PickPath_eng : PickPath_tag}
            alt="dialogue"
          />
        </div>

        {/* Fish*/}
        <div
          onMouseDown={playClickSound}
          onMouseEnter={playHoverSound}
          className={`absolute group transition-all duration-100 ease-out ${
            pathsDone[1] ? 'hidden' : ''
          }`}
          onClick={() => {
            console.log('Fish clicked!')
            // flip to page 19
            if (onFlipNext) {
              onFlipNext(19)
            }
          }}
          style={{ top: '248px', left: '440px', width: '240px' }}
        >
          <Image
            className=" absolute object-cover opacity-0 group-hover:opacity-0 transition-opacity duration-100 ease-in-out"
            src={fish}
            alt="fish"
          />
          <Image
            className="absolute cursor-pointer object-cover opacity-0 group-hover:opacity-100 group-hover transition-opacity duration-100 ease-in-out"
            src={fish_hover}
            alt="fish_hover"
          />
        </div>

        {/* Cloud*/}
        <div
          onMouseDown={playClickSound}
          onMouseEnter={playHoverSound}
          className={`absolute group transition-all duration-100 ease-out ${
            pathsDone[2] ? 'hidden' : ''
          }`}
          style={{ top: '605px', left: '852px', width: '210px' }}
          onClick={() => {
            console.log('Fish clicked!')
            // flip to page 33
            if (onFlipNext) {
              onFlipNext(33)
            }
          }}
        >
          <Image
            className=" absolute object-cover opacity-0 group-hover:opacity-0 transition-opacity duration-100 ease-in-out"
            src={cloud}
            alt="cloud"
          />
          <Image
            className="absolute cursor-pointer object-cover opacity-0 group-hover:opacity-100 group-hover transition-opacity duration-100 ease-in-out"
            src={cloud_hover}
            alt="cloud_hover"
          />
        </div>

        {/* Flower */}
        <div
          onMouseDown={playClickSound}
          onMouseEnter={playHoverSound}
          className={`absolute group transition-all duration-100 ease-out ${
            pathsDone[0] ? 'hidden' : ''
          }`}
          style={{ top: '335px', left: '980px', width: '210px' }}
          onClick={() => {
            console.log('Flower clicked!')
            // flip to page 6
            if (onFlipNext) {
              onFlipNext(6)
            }
          }}
        >
          <Image
            className=" absolute object-cover opacity-0 group-hover:opacity-0 transition-opacity duration-100 ease-in-out"
            src={flower}
            alt="flower"
          />
          <Image
            className="absolute cursor-pointer object-cover opacity-0 group-hover:opacity-100 group-hover transition-opacity duration-100 ease-in-out"
            src={flower_hover}
            alt="flower_hover"
          />
        </div>
      </div>
    )
  }
)

PickPath.displayName = 'PickPath'

export default PickPath
