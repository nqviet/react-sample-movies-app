import React from 'react'

import { ViewMode } from '../../types'

import './CardSkeletion.scss'

export interface CardSkeletionProps {
  view: ViewMode
}

function CardSkeletion(props: CardSkeletionProps) {
  return (
    <div className={`ccard-skeletion ${props.view === ViewMode.Grid ? 'grid-view' : 'list-view'}`}>
      <div className="poster" />
      {props.view === ViewMode.Grid ? (
        <>
          <div className="title" />
          <div className="release-date" />
          <div className="vote" />
        </>
      ) : (
        <div className="right-content">
          <div className="title" />
          <div className="release-date" />
          <div className="vote" />
          <div className="overview" />
        </div>
      )}
    </div>
  )
}

function _(props: CardSkeletionProps) {
  return null
}

export default process.env.FEATURE_SKELETON_LOADING === 'true' ? CardSkeletion : _
