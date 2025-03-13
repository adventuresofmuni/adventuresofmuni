/* eslint-disable */
import React, { useRef, useState, useEffect, CSSProperties } from 'react'
import HTMLFlipBook from 'react-pageflip'
import PickPath from './PickPath'
const arrow = 'assets/arrow.png'
import Page_3B from './FLOWER/3B/Page_3B'
import Page_3A from './FLOWER/3A/Page_3A'
import Page_3C from './FLOWER/3C/Page_3C'
import Page_3D from './FLOWER/3D/Page_3D'
import Page_3E from './FLOWER/3E/Page_3E'
import Page_3F from './FLOWER/3F/Page_3F'
import Page_3G from './FLOWER/3G/Page_3G'
import Page_3J from './FLOWER/3J/Page_3J'
import Page_3K from './FLOWER/3K/Page_3K'
import Page_3L from './FLOWER/3L/Page_3L'
import Page_3MN from './FLOWER/3MN/Page_3MN'
import Page_3P from './FLOWER/3P/Page_3P'
import Page_4A from './FISH/4A/Page_4A'
import Page_4B from './FISH/4B/Page_4B'
import Page_4C from './FISH/4C/Page_4C'
import Page_4D from './FISH/4D/Page_4D'
import Page_4E from './FISH/4E/Page_4E'
import Page_4F from './FISH/4F/Page_4F'
import Page_4G from './FISH/4G/Page_4G'
import Page_4H from './FISH/4H/Page_4H'
import Page_4K from './FISH/4K/Page_4K'
import Page_4L from './FISH/4L/Page_4L'
import Page_4N from './FISH/4N/Page_4N'
import Page_4O from './FISH/4O/Page_4O'
import Page_4Q from './FISH/4Q/Page_4Q'
import Page_4R from './FISH/4R/Page_4R'
import Page_5B from './CLOUD/5B/Page_5B'
import Page_5A from './CLOUD/5A/Page_5A'
import Page_5C from './CLOUD/5C/Page_5C'
import Page_5D from './CLOUD/5D/Page_5D'
import Page_5E from './CLOUD/5E/Page_5E'
import Page_5F from './CLOUD/5F/Page_5F'
import Page_5G from './CLOUD/5G/Page_5G'
import Page_5J from './CLOUD/5J/Page_5J'
import Page_5K from './CLOUD/5K/Page_5K'
import Page_5M from './CLOUD/5M/Page_5M'
import Page_5N from './CLOUD/5N/Page_5N'
import Page_5P from './CLOUD/5P/Page_5P'
import Page_5Q from './CLOUD/5Q/Page_5Q'
import Page_5R from './CLOUD/5R/Page_5R'
import Page_1A from './SCHOOL/1A/Page_1A'
import Page_1B from './SCHOOL/1B/Page_1B'
import Page_1C from './SCHOOL/1C/Page_1C'
import Page_2A from './OUTDOOR/2A/Page_2A'
import Page_5S from './PATHSDONE/Page_5S'
import Page_2B from './OUTDOOR/2B/Page_2B'
import Page_6A from './SCHOOL/6A/Page_6A'
import Page_6B from './SCHOOL/6B/Page_6B'
import Page_6C from './SCHOOL/6C/Page_6C'
import Page_5R_2 from './CLOUD/5R_2/Page_5R_2'
import Page_3O from './FLOWER/3O/Page_3O'
import Page_6D from './SCHOOL/6D/Page_6D'
import Page_6E from './SCHOOL/6E/Page_6E'

// Define which pages should have which audio tracks
const audioMap: { [key: number]: { loop: string[]; once: string[] } } = {
  1: {
    loop: [
      'audio/SFX/classroom_ambiance.mp3', // classroom ambience
      'audio/SFX/chalk.mp3', // chalk
      'audio/MUSIC/beginning.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/teacher.mp3'], // teacher dialogue (play once)
  },
  2: {
    loop: [
      'audio/SFX/classroom_ambiance.mp3', // classroom ambience
      'audio/MUSIC/beginning.mp3', // music bed
    ], // Keep ambience
    once: ['audio/SFX/dream_transition.mp3'], // Dream transition
  },
  3: {
    loop: [
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
      'audio/MUSIC/beginning.mp3', // music bed
    ], // Outside ambience
    once: [],
  },
  4: {
    loop: [
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
      'audio/MUSIC/beginning.mp3', // music bed
    ], // New ambience
    once: ['audio/DIALOGUES/OTTIE.mp3'], // Outdoor dialogue
  },
  5: {
    loop: [
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
      'audio/MUSIC/beginning.mp3', // music bed
    ],
    once: [],
  },
  6: {
    // FLOWER
    loop: [
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
      'audio/MUSIC/flower_path.mp3', // music bed
    ], // New ambience
    once: [],
  },
  7: {
    // 3B
    loop: [
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
      'audio/MUSIC/flower_path.mp3', // music bed
    ], // New ambience
    once: [],
  },
  8: {
    // 3C
    loop: [
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
      'audio/MUSIC/flower_path.mp3', // music bed
    ], // New ambience
    once: ['audio/SFX/flower_cart.mp3'], // Outdoor dialogue
  },
  9: {
    // 3D
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  10: {
    // 3E
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/FLORIST/FLORIST 1.mp3'],
  },
  11: {
    // 3F
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/SFX/i_thought.mp3', 'audio/DIALOGUES/MUNI.mp3'],
  },
  12: {
    // 3G-N
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: [],
  },
  13: {
    // 3J
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  14: {
    // 3J
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/FLORIST/FLORIST 2.mp3'],
  },
  15: {
    // 3J
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  16: {
    //
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  17: {
    //
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: [],
  },
  18: {
    //
    loop: [
      'audio/MUSIC/flower_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3', 'audio/SFX/ottie_you_did_it.mp3'],
  },
  // FISH
  19: {
    //4A
    loop: [
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3'],
  },
  20: {
    //4B
    loop: [
      'audio/SFX/lake_water.mp3', // LAKE WATER
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: [],
  },
  21: {
    //4C
    loop: [
      'audio/SFX/lake_water.mp3', // LAKE WATER
      'audio/SFX/fishing_rod.mp3', // FISHING ROD
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: [],
  },
  22: {
    //4D
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  23: {
    //4E public\audio\DIALOGUES\FISHER\FISHER 3.mp3
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/FISHER/FISHER 3.mp3'],
  },
  24: {
    //4F
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3'],
  },
  25: {
    //4G
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/SFX/i_thought.mp3', 'audio/DIALOGUES/MUNI.mp3'],
  },
  26: {
    //4H
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/FISHER/FISHER 1.mp3'],
  },
  27: {
    //4K
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  28: {
    //4L DIALOGUE
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  29: {
    //4N
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  30: {
    //4O
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  31: {
    //4Q
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
      'audio/SFX/lake_water.mp3', // LAKE WATER
      'audio/SFX/bubble.mp3', // BUBBLE
      'audio/SFX/fishing_rod.mp3', // FISHING ROD
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3'],
  },
  32: {
    //4U
    loop: [
      'audio/MUSIC/fish_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3', 'audio/SFX/ottie_you_did_it.mp3'],
  },
  33: {
    //5A
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
      'audio/SFX/outdoor_ambiance.wav', // outdoor ambience
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3'],
  },
  34: {
    //5B
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
      'audio/SFX/strong_wind.mp3', // outdoor ambience
    ],
    once: [],
  },
  35: {
    //5C
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
      'audio/SFX/strong_wind.mp3', // outdoor ambience
      'audio/SFX/propeller.mp3', // Propeller
    ],
    once: [],
  },
  36: {
    //5D
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  37: {
    // 5E
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/PILOT/PILOT 1.mp3'],
  },
  38: {
    // 5F
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/SFX/i_thought.mp3', 'audio/DIALOGUES/MUNI.mp3'],
  },
  39: {
    // 5G
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/PILOT/PILOT 1.mp3'],
  },
  40: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  41: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  42: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  43: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
  44: {
    // 5P
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
      'audio/SFX/propeller.mp3', // Propeller
      'audio/SFX/strong_wind.mp3', // outdoor ambience
    ],
    once: [],
  },
  45: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3', 'audio/SFX/ottie_you_did_it.mp3'],
  },
  46: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/PILOT/PILOT 1.mp3'],
  },
  47: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3'],
  },
  48: {
    // 5J
    loop: [
      'audio/MUSIC/pilot_path.mp3', // music bed
    ],
    once: ['audio/DIALOGUES/OTTIE.mp3'],
  },
  49: {
    // 5J
    loop: [
      'audio/SFX/classroom_ambience_end.mp3', // dream transition
      // 'audio/SFX/6A (MUNI SNORING).mp3', // SNORING
    ],
    once: [],
  },
  50: {
    // 5J
    loop: [
      'audio/SFX/classroom_ambience_end.mp3', // dream transition
      // 'audio/SFX/6A (MUNI SNORING).mp3', // SNORING
    ],
    once: ['audio/DIALOGUES/teacher.mp3'], // teacher dialogue (play once)
  },
  51: {
    // 5J
    loop: [
      'audio/SFX/classroom_ambience_end.mp3', // dream transition
      // 'audio/SFX/6A (MUNI SNORING).mp3', // SNORING
    ],
    once: ['audio/DIALOGUES/MUNI.mp3'],
  },
}

const flipAudio = 'audio/SFX/page_flip.mp3'

const preloadImages = (imageUrls: string[]): Promise<void[]> => {
  return Promise.all(
    imageUrls.map(
      (url) =>
        new Promise<void>((resolve, reject) => {
          const img = new Image()
          img.src = url
          img.onload = () => resolve()
          img.onerror = reject
        })
    )
  )
}

const Book = () => {
  //@ts-expect-error
  const flipBookRef = useRef<HTMLFlipBook>(null)
  const [page, setPage] = useState(0)
  const [totalPage, setTotalPage] = useState(0)
  const [showMiniGame, setShowMiniGame] = useState(false)
  const [hideButtons, setHideButtons] = useState(false)
  const isFlippingRef = useRef(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  //  PRE LOAD ASSETS PAGE
  const playFlipAudio = () => {
    const audio = new Audio(flipAudio)
    audio.play()
  }

  const [loopingAudios, setLoopingAudios] = useState<{
    [src: string]: HTMLAudioElement
  }>({})
  const [playedDialogues, setPlayedDialogues] = useState<{
    [src: string]: boolean
  }>({})

  const startAudio = () => {
    const { loop = [] } = audioMap[1] // Use Page 1's audio

    loop.forEach((src) => {
      if (!loopingAudios[src]) {
        const audio = new Audio(src)
        audio.loop = true

        if (src.includes('/MUSIC')) {
          audio.volume = 0.3
        }

        if (src.includes('chalk')) {
          audio.volume = 0
        }
        audio.play()
        setLoopingAudios((prev) => ({ ...prev, [src]: audio }))
      }
    })
  }

  useEffect(() => {
    const { loop = [], once = [] } = audioMap[page] || {}

    // Stop previous looping audios that are not needed anymore
    Object.entries(loopingAudios).forEach(([src, audio]) => {
      if (!loop.includes(src)) {
        audio.pause()
        audio.currentTime = 0
        delete loopingAudios[src]
      }
    })

    // Start new looping audios if they aren't already playing
    loop.forEach((src) => {
      if (!loopingAudios[src]) {
        const audio = new Audio(src)
        audio.loop = true

        // Lower volume for music bed
        if (src.includes('/MUSIC')) {
          audio.volume = 0.3 // Set music bed volume to 30%
        }

        // Lower volume for music bed
        if (src.includes('chalk') || src.includes('(propeller)')) {
          audio.volume = 0.2 // Set music bed volume to 30%
        }

        audio.play()
        setLoopingAudios((prev) => ({ ...prev, [src]: audio }))
      }
    })

    if (page === 1) {
      Object.entries(loopingAudios).forEach(([src, audio]) => {
        if (src.includes('chalk')) {
          audio.volume = 0.3 // Now enable CHALK sound
        }
      })
    }

    // Play one-time dialogues only
    once.forEach((src) => {
      const dialogueAudio = new Audio(src)
      dialogueAudio.play()
    })
  }, [page])

  // multiple state of isFlowerDone, isFishDone, isCloudDone
  const [pathsDone, setPathsDone] = useState({
    flower: false,
    fish: false,
    cloud: false,
  })

  const handleFlipStateChange = (state: string) => {
    // Depending on the library, the state might be "flipping" or "read"
    if (state === 'flipping') {
      playFlipAudio()
      isFlippingRef.current = true
    } else if (state === 'read') {
      isFlippingRef.current = false
    }
  }

  const onFlip = (e: any) => {
    const newPage = e.data

    console.log('Current page: ' + newPage)
    setPage(newPage)
    if (newPage === 1) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 2) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 3) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 4) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 5) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 12) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 13) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 14) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 15) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 16) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 17) {
      console.log('hide buttons')
      setPathsDone((prev) => ({ ...prev, flower: true }))
      console.log(pathsDone)
      setHideButtons(true)
    } else if (newPage === 18) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 26) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 27) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 28) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 29) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 30) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 31) {
      console.log('hide buttons')
      setPathsDone((prev) => ({ ...prev, fish: true }))

      setHideButtons(true)
    } else if (newPage === 32) {
      console.log('hide buttons')

      setHideButtons(true)
    } else if (newPage === 39) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 40) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 41) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 42) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 43) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 44) {
      console.log('hide buttons')
      setPathsDone((prev) => ({ ...prev, cloud: true }))
      setHideButtons(true)
    } else if (newPage === 45) {
      console.log('hide buttons')
      console.log(pathsDone)
      setHideButtons(true)
    } else if (newPage === 47) {
      console.log('hide buttons')

      setHideButtons(true)
    } else if (newPage === 48) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 49) {
      console.log('hide buttons')
      setHideButtons(true)
    } else if (newPage === 53) {
      console.log('hide buttons')
      setHideButtons(true)
    } else {
      setHideButtons(false)
    }

    if (newPage === 6) {
      setShowMiniGame(true)
    } else {
      setShowMiniGame(false)
    }
  }

  const flipToNextPage = () => {
    // Only trigger a flip if not currently flipping.
    if (flipBookRef.current && !isFlippingRef.current) {
      flipBookRef.current.pageFlip().flipNext('top')
    }
  }

  const flipToCertainPage = (pageNumber: number) => {
    console.log('flipToCertainPage')
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(pageNumber, 'top')
    }
  }

  const turnToNextPage = () => {
    console.log('turnToNextPage')
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().turnToNextPage()
    }
  }

  const flipToPrevPage = () => {
    console.log('flipToPrevPage')
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipPrev()
    }
  }

  // New Next button handler that checks for dialogues.
  const handleNextButton = () => {
    flipToNextPage()
  }

  const onInit = () => {
    if (
      flipBookRef.current &&
      typeof flipBookRef.current.pageFlip === 'function'
    ) {
      console.log(
        'Total pages: ' + flipBookRef.current.pageFlip().getPageCount()
      )
      const count = flipBookRef.current.pageFlip().getPageCount()
      setTotalPage(count)
    }
  }

  // Disable pointer events on the flipbook container when the mini game is active.
  const containerStyle: CSSProperties = {
    pointerEvents: showMiniGame ? 'none' : 'auto',
    // pointerEvents: 'none',
    position: 'relative',
  }

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <button
        className={`absolute w-[120px] bottom-4 m-6 left-4 z-50 focus:outline-none 
    transition-transform duration-300 hover:scale-110 hover:opacity-80 
    active:scale-90 active:opacity-60 ${hideButtons ? 'hidden' : ''}`}
        onClick={flipToPrevPage}
      >
        <img src={arrow} className="transform -scale-x-100" alt="previous" />
      </button>

      <button
        className={`absolute w-[120px] bottom-4 m-6 right-4 z-50 focus:outline-none 
    transition-transform duration-300 hover:scale-110 hover:opacity-80 
    active:scale-90 active:opacity-60 ${hideButtons ? 'hidden' : ''}`}
        onClick={handleNextButton}
      >
        <img src={arrow} alt="next" />
      </button>

      <div style={containerStyle} className="relative">
        {/* @ts-expect-error */}
        <HTMLFlipBook
          ref={flipBookRef}
          showCover={false}
          onChangeState={(stateObj) => handleFlipStateChange(stateObj.data)}
          flippingTime={600}
          width={1600}
          height={963}
          maxShadowOpacity={0.5}
          onFlip={onFlip}
          onInit={onInit}
          startPage={0}
          className="demo-book"
          disableFlipByClick={false}
          useMouseEvents={false}
          mobileScrollSupport={false}
          showPageCorners={false}
        >
          {/* SCHOOL */}
          <Page_1A page={page} startAudio={startAudio} />
          <Page_1B page={page} onFlipNext={flipToNextPage} />
          <Page_1C page={page} onFlipNext={flipToNextPage} />
          {/* OUTDOOR */}
          <Page_2A page={page} onFlipNext={flipToNextPage} />
          <Page_2B page={page} onFlipNext={flipToNextPage} />
          <PickPath
            onFlipNext={(page) => {
              flipToCertainPage(page)
            }}
            pathsDone={Object.values(pathsDone)}
          />

          {/* FLOWER */}
          <Page_3A />
          <Page_3B />
          <Page_3C />
          <Page_3D />
          <Page_3E />
          <Page_3F />
          <Page_3G page={page} onFlipNext={turnToNextPage} />
          <Page_3J page={page} onFlipNext={turnToNextPage} />
          <Page_3K onFlipNext={turnToNextPage} />
          <Page_3L page={page} onFlipNext={turnToNextPage} />
          <Page_3MN page={page} onFlipNext={flipToNextPage} />
          <Page_3O onFlipNext={flipToNextPage} />
          <Page_3P
            pathsDone={Object.values(pathsDone)}
            onFlipNext={(page) => {
              flipToCertainPage(page)
            }}
          />

          {/* FISH */}
          <Page_4A />
          <Page_4B />
          <Page_4C />
          <Page_4D />
          <Page_4E />
          <Page_4F />
          <Page_4G />
          <Page_4H page={page} onFlipNext={turnToNextPage} />
          <Page_4K page={page} onFlipNext={turnToNextPage} />
          <Page_4L page={page} onFlipNext={turnToNextPage} />
          <Page_4N page={page} onFlipNext={turnToNextPage} />
          <Page_4O page={page} onFlipNext={flipToNextPage} />
          <Page_4Q page={page} onFlipNext={flipToNextPage} />
          <Page_4R
            pathsDone={Object.values(pathsDone)}
            onFlipNext={(page) => {
              flipToCertainPage(page)
            }}
          />

          {/* CLOUD */}
          <Page_5A />
          <Page_5B />
          <Page_5C />
          <Page_5D />
          <Page_5E />
          <Page_5F />
          <Page_5G page={page} onFlipNext={turnToNextPage} />
          <Page_5J page={page} onFlipNext={turnToNextPage} />
          <Page_5K page={page} onFlipNext={turnToNextPage} />
          <Page_5M page={page} onFlipNext={turnToNextPage} />
          <Page_5N page={page} onFlipNext={turnToNextPage} />
          <Page_5P onFlipNext={flipToNextPage} />
          <Page_5Q onFlipNext={flipToNextPage} />
          <Page_5R page={page} />
          <Page_5R_2
            pathsDone={Object.values(pathsDone)}
            onFlipNext={(page) => {
              flipToCertainPage(page)
            }}
          />
          {/* ENDING */}
          <Page_5S page={page} onFlipNext={flipToNextPage} />

          <Page_6A page={page} onFlipNext={flipToNextPage} />
          <Page_6B />
          <Page_6C />
          <Page_6D />
          <Page_6E page={page} />
        </HTMLFlipBook>
        {/* Render the mini game modal when active */}
        {/* {showMiniGame && <MiniGameModal onClose={() => setShowMiniGame(false)} />} */}
      </div>
    </div>
  )
}

export default Book
