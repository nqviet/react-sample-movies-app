import React, { CSSProperties, useCallback, useState } from 'react'

import './FadeInEffect.scss'

export interface FadeInEffectProps {
  children: (fadeInStyle: CSSProperties, onShow: () => void) => JSX.Element
}

function FadeInEffect(props: FadeInEffectProps) {
  const [style, setStyle] = useState<CSSProperties>({
    opacity: 0,
    transition: 'opacity 1s ease-in',
  })

  const onShow = useCallback(() => {
    setStyle((prev) => ({ ...prev, opacity: 1 }))
  }, [])

  return <>{props.children(style, onShow)}</>
}

function _(props: FadeInEffectProps) {
  const [style] = useState<CSSProperties>({})
  const onShow = useCallback(() => {}, [])
  return <>{props.children(style, onShow)}</>
}

export default process.env.FEATURE_FADE_IN_IMAGE === 'true' ? FadeInEffect : _
