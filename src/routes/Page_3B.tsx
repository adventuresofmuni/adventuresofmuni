const Path = 'assets/OUTDOOR/outdoor_2C.png'
import React from 'react'

const Page_3B = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="relative w-full h-full" ref={ref}>
      {/* Background Wrapper (Ensures relative positioning) */}
      <div className="relative w-full h-full">
        <img
          className="absolute inset-0 object-cover"
          fill
          sizes="100vw"
          src={Path}
          alt="background"
        />
      </div>
    </div>
  )
})

Page_3B.displayName = 'Page_3B'

export default Page_3B
