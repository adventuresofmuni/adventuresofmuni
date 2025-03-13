import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

import survey_bg from '@/components/SCHOOL/6E/survey_bg.png'
import survey_button from '@/components/SCHOOL/6E/survey_button.png'

const Page_6E = React.forwardRef<HTMLDivElement, { page: number }>(
  ({ page }, ref) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)
    const [isButtonVisible, setIsButtonVisible] = useState(true)

    const handleVideoPlay = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => {
        setIsButtonVisible(true)
      }, 110000) // 1 minute and 50 seconds
    }

    useEffect(() => {
      if (page === 53) {
        // Make sure this matches the actual page number in react-pageflip
        videoRef.current?.play().catch((error) => {
          console.log('Autoplay blocked:', error)
        })
      } else {
        videoRef.current?.pause()
        setIsButtonVisible(false)
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }, [page]) // Runs when `page` changes

    const handleTakeSurvey = () => {
      // Redirect or handle survey action
      window.open('https://www.adventuresofmuni.com/survey', '_blank')
    }

    return (
      <div className="relative w-full h-full" ref={ref}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <video
            onPlay={handleVideoPlay}
            ref={videoRef}
            preload="metadata"
            width="100%"
            height="100%"
          >
            <source src="video/end_credits.mp4" type="video/mp4" />
          </video>
          {isButtonVisible && (
            <>
              {' '}
              <Image
                className="absolute object-contain"
                src={survey_bg}
                alt="survey_bg"
                width={720}
              />
              <Image
                className="absolute object-contain mt-[120px] cursor-pointer transition-transform duration-200 ease-in-out 
                 hover:scale-110 active:scale-90  active:opacity-60"
                src={survey_button}
                alt="survey_button"
                width={300}
                onClick={handleTakeSurvey}
              />
            </>
          )}
        </div>
      </div>
    )
  }
)

Page_6E.displayName = 'Page_6E'

export default Page_6E
