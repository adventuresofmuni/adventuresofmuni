import Image from 'next/image'
import React from 'react'
const loading = 'assets/loading.gif'

const LoadingPage = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="relative w-screen h-screen select-none" ref={ref}>
      <div className="flex flex-col items-center text-white h-full w-full justify-center">
        <Image
          className="object-cover"
          width={150}
          height={150}
          src={loading}
          alt="loading"
        />
        <p className="text-white  mt-3">Loading...</p>
      </div>
    </div>
  )
})

LoadingPage.displayName = 'LoadingPage'

export default LoadingPage
