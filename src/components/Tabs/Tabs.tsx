import React from 'react'

import './Tabs.scss'

export interface TabsProps {
  activeIndex: number
  tabNames: string[]
  label: string
  onChange: (activeIndex: number) => void
}

export default function Tabs(props: TabsProps) {
  const createOnTabChange = (index: number) => {
    return function onChange() {
      props.onChange(index)
    }
  }

  return (
    <div className="ctabs">
      <strong className="label">{props.label}</strong>
      <div className="tabs-container">
        {props.tabNames.map((tabName: string, index: number) => (
          <button
            key={tabName}
            className={`tab${index === props.activeIndex ? ' active' : ''}`}
            onClick={createOnTabChange(index)}
          >
            {tabName}
          </button>
        ))}
      </div>
    </div>
  )
}
