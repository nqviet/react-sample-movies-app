import React from 'react'

import './LoadingIcon.scss'

export interface LoadingIconProps {
  className?: string
}

export default function LoadingIcon(props: LoadingIconProps) {
  return (
    <div className={`cloading-icon ${props.className || ''}`}>
      <svg className="icon" width="40" height="40" viewBox="0 0 40 40">
        <circle
          className="cloading-circle"
          cx="20"
          cy="20"
          r="16"
          fill="none"
          strokeWidth="4"
          strokeDasharray="70"
          strokeDashoffset="30"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
