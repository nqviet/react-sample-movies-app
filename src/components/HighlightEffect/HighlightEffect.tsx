import React, { PropsWithChildren, useEffect, useState } from 'react'

import './HighlightEffect.scss'

function HighlightEffect(props: PropsWithChildren) {
  const [state, setState] = useState<'init' | 'enter'>()

  const onMouseEnter = () => {
    setState('init')
  }

  const onMouseLeave = () => {
    setState(undefined)
  }

  useEffect(() => {
    if (state === 'init') {
      setState('enter')
    }
  }, [state])

  return (
    <div
      className={`chighlight-effect ${state || ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </div>
  )
}

function _(props: PropsWithChildren) {
  return <>{props.children}</>
}

export default process.env.FEATURE_HIGHLIGHT_EFFECT === 'true' ? HighlightEffect : _
