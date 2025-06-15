import React from 'react'

import { ViewMode } from '../../types'
import { GridViewIcon, ListViewIcon } from '../icons'

import './ViewModeSwitch.scss'

export interface ViewModeSwitchProps {
  className?: string
  view: ViewMode
  onChange: (view: ViewMode) => void
}

function ViewModeSwitch(props: ViewModeSwitchProps) {
  return (
    <div className={`cview-switch ${props.className || ''}`}>
      <button
        className={props.view === ViewMode.Grid ? 'active' : ''}
        title="Grid View"
        onClick={() => props.onChange(ViewMode.Grid)}
      >
        <GridViewIcon />
      </button>
      <button
        className={props.view === ViewMode.List ? 'active' : ''}
        title="List View"
        onClick={() => props.onChange(ViewMode.List)}
      >
        <ListViewIcon />
      </button>
    </div>
  )
}

function _(props: ViewModeSwitchProps) {
  return null
}

export default process.env.FEATURE_LIST_VIEW_GRID_VIEW === 'true' ? ViewModeSwitch : _
