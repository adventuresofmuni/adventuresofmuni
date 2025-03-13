import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface PageProps {
  number: number
  component: StaticImageData
  caption?: StaticImageData
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className=" bg-white" ref={ref}>
      <Image
        className="object-cover"
        fill
        priority
        src={props.component}
        alt="school1"
      />
    </div>
  )
})

Page.displayName = 'Page'

export default Page
