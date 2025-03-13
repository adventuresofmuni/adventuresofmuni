import React from 'react'
import img, { StaticimgData } from 'next/img'

interface PageProps {
  number: number
  component: StaticimgData
  caption?: StaticimgData
}

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className=" bg-white" ref={ref}>
      <img
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
