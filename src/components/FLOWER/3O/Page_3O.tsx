import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import sky from '@/components/FLOWER/sky.png'
// Flowers
import flower1 from '@/components/FLOWER/static flowers/1.png'
import flower1m from '@/components/FLOWER/flower1-m.gif'
import flower2 from '@/components/FLOWER/static flowers/2.png'
import flower2m from '@/components/FLOWER/flower2-m.gif'
import flower3 from '@/components/FLOWER/static flowers/3.png'
import flower3m from '@/components/FLOWER/flower3-m.gif'
import flower4 from '@/components/FLOWER/static flowers/4.png'
import flower4m from '@/components/FLOWER/flower4-m.gif'
import flower5 from '@/components/FLOWER/static flowers/5.png'
import flower5m from '@/components/FLOWER/flower5-m.gif'
import flower6 from '@/components/FLOWER/static flowers/6.png'
import flower6m from '@/components/FLOWER/flower6-m.gif'
import flower7 from '@/components/FLOWER/static flowers/7.png'
import flower7m from '@/components/FLOWER/flower7-m.gif'
import flower8 from '@/components/FLOWER/static flowers/8.png'
import flower8m from '@/components/FLOWER/flower8-m.gif'
// import useDragger from '@/hooks/useDragger'
// import Flower1 from './FLOWER/flower1'
import muni from '@/components/FLOWER/muni.png'
import arms from '@/components/FLOWER/arms.png'

import instructions from '@/components/FLOWER/3O/instructions.png'
import instructions_tag from '@/components/FLOWER/3O/instructions_tag.png'

import Draggable, { DraggableEvent } from 'react-draggable'
import { useLanguage } from '@/hooks/LanguageContext'

const flowerDropAudio = '/audio/SFX/flower_drop.mp3'

const Page_3O = React.forwardRef<HTMLDivElement, { onFlipNext: () => void }>(
  ({ onFlipNext }, ref) => {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
    const [showInstructions, setShowInstructions] = useState(true)
    const { language } = useLanguage()

    const flowers = [
      { id: 'flower1', x: 380, y: 290, image: flower1, imageM: flower1m },
      { id: 'flower2', x: 480, y: 200, image: flower2, imageM: flower2m },
      { id: 'flower3', x: 580, y: 150, image: flower3, imageM: flower3m },
      { id: 'flower4', x: 680, y: 130, image: flower4, imageM: flower4m },
      { id: 'flower5', x: 780, y: 130, image: flower5, imageM: flower5m },
      { id: 'flower6', x: 880, y: 150, image: flower6, imageM: flower6m },
      { id: 'flower7', x: 980, y: 200, image: flower7, imageM: flower7m },
      { id: 'flower8', x: 1080, y: 290, image: flower8, imageM: flower8m },
    ]

    const [positions, setPositions] = useState(
      Object.fromEntries(flowers.map(({ id, x, y }) => [id, { x, y }]))
    )

    const [isFlowerDropped, setIsFlowerDropped] = useState(
      Object.fromEntries(flowers.map(({ id }) => [id, false]))
    )

    const draggableRef = useRef<HTMLDivElement>(null)
    const dropAreaRef = useRef<HTMLImageElement>(null)

    const triggeredRef = useRef(false)

    const handleDrag = (e: DraggableEvent) => {
      // Optional: you can stop propagation here as well if needed.
      e.stopPropagation()
    }

    const playFlowerDropAudio = () => {
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }

      const newAudio = new Audio(flowerDropAudio)
      newAudio.play()
      setAudio(newAudio)
    }

    const handleStop = (
      e: DraggableEvent,
      data: { x: number; y: number },
      id: string
    ) => {
      e.stopPropagation()
      if (!dropAreaRef.current) return

      // Get drop area (arms.png) bounding box
      const dropRect = dropAreaRef.current.getBoundingClientRect()
      const containerRect =
        draggableRef.current?.offsetParent?.getBoundingClientRect()

      if (!containerRect) return

      // Adjust coordinates to match dropRect reference
      const adjustedX = data.x + containerRect.left
      const adjustedY = data.y + containerRect.top

      console.log('Adjusted Position:', adjustedX, adjustedY)
      console.log(
        'Drop Area:',
        dropRect.left,
        dropRect.top,
        dropRect.right,
        dropRect.bottom
      )

      // 🔥 Increase drop area bounds (padding effect)
      const padding = 40 // Adjust this value to fine-tune the feather effect
      const expandedDropRect = {
        left: dropRect.left - padding,
        right: dropRect.right + padding,
        top: dropRect.top - padding,
        bottom: dropRect.bottom + padding,
      }

      // Check if draggable element is inside the expanded drop area
      if (
        adjustedX >= expandedDropRect.left &&
        adjustedX <= expandedDropRect.right &&
        adjustedY >= expandedDropRect.top &&
        adjustedY <= expandedDropRect.bottom
      ) {
        console.log('Dragged at drop area ✅')

        setPositions((prevPositions) => ({
          ...prevPositions,
          [id]: { x: data.x, y: data.y }, // Keep the flower in place
        }))

        setIsFlowerDropped((prevIsFlowerDropped) => {
          playFlowerDropAudio()

          const updatedState = {
            ...prevIsFlowerDropped,
            [id]: true,
          }

          // Check if all flowers have been dropped
          if (Object.values(updatedState).every(Boolean)) {
            console.log('All flowers dropped! 🎉')
          }

          return updatedState
        })
      } else {
        console.log('Dragged outside drop area ❌')
        // Reset to the default position if dropped outside
        setPositions((prevPositions) => ({
          ...prevPositions,
          [id]: positions[id], // Reset the flower position
        }))
      }
    }

    // Monitor if all flowers have been dropped, and trigger onMinigameComplete only once.
    useEffect(() => {
      if (
        !triggeredRef.current &&
        Object.values(isFlowerDropped).every(Boolean)
      ) {
        console.log('All flowers dropped! 🎉')
        triggeredRef.current = true
        onFlipNext()
      }
    }, [isFlowerDropped, onFlipNext])

    const startGame = () => {
      setShowInstructions(false)
    }

    return (
      <div className="relative w-full h-full">
        <div className="flex items-center justify-center" ref={ref}>
          {showInstructions && (
            <div
              onClick={startGame}
              className="z-[99] cursor-pointer absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white"
            >
              {/* dialogue */}
              <Image
                className="absolute object-contain"
                style={{
                  bottom: 0,
                  width: '70%',
                }}
                src={language === 'eng' ? instructions : instructions_tag}
                alt="dialogue"
              />
            </div>
          )}
          {/* Background */}
          <Image
            className="object-cover"
            fill
            sizes="100vw"
            src={sky}
            alt="background"
          />

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            {/* Muni + arms container */}
            <div className="relative w-[500px] h-auto">
              <Image
                src={muni}
                alt="muni"
                width={500}
                className="object-contain"
              />
            </div>
          </div>

          {flowers.map(({ id, x, y, image, imageM }) => (
            <Draggable
              key={id}
              disabled={isFlowerDropped[id]}
              position={positions[id]}
              defaultPosition={{ x, y }}
              onStop={(e, data) => handleStop(e, data, id)}
              onDrag={handleDrag}
              onMouseDown={(e) => e.stopPropagation()}
              nodeRef={draggableRef as React.RefObject<HTMLElement>}
            >
              <div ref={draggableRef} style={{ ...styles.container }}>
                <Image
                  draggable={false}
                  src={isFlowerDropped[id] ? image : imageM}
                  alt={id}
                  style={styles.image}
                />
              </div>
            </Draggable>
          ))}

          {/* Arms layered on top */}
          <Image
            ref={dropAreaRef}
            src={arms}
            alt="arms"
            width={195}
            className="object-contain absolute z-50"
            style={{
              pointerEvents: 'none',
              top: '765px',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      </div>
    )
  }
)

const styles = {
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '160px',
    width: '160px',
    cursor: 'pointer',
  } as React.CSSProperties,
  image: {
    pointerEvents: 'auto',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
  } as React.CSSProperties,
}

Page_3O.displayName = 'Page_3O'
export default Page_3O
