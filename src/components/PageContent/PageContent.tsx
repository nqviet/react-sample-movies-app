import React, { PropsWithChildren } from 'react'

import './PageContent.scss'

export interface PageContentProps extends PropsWithChildren {}

export default function PageContent(props: PageContentProps) {
  return <main className="cpage-content">{props.children}</main>
}
