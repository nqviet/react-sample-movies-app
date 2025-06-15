import React from 'react'

import './ErrorMessage.scss'

export interface ErrorMessageProps {
  error: unknown
}

export default function ErrorMessage(props: ErrorMessageProps) {
  const errMsg =
    typeof props.error === 'string'
      ? String(props.error)
      : props.error instanceof Error
        ? props.error.message || props.error.name
        : JSON.stringify(props.error)

  return <div className="cerror-message">{errMsg}</div>
}
