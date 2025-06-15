import React, { PropsWithChildren } from 'react'

import './Banner.scss'

export interface BannerProps extends PropsWithChildren {
  title: string
  subTitle: string
}

export default function Banner(props: BannerProps) {
  return (
    <div className="cbanner">
      <div className="banner-content">
        <h1>{props.title}</h1>
        <h3>{props.subTitle}</h3>
        <div className="banner-search-bar">{props.children}</div>
      </div>
    </div>
  )
}
