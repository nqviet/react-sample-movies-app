import React from 'react'

import { ViewMode } from '../../types'

import CardSkeletion from './CardSkeletion'
import './MovieListSkeleton.scss'

export interface MovieListSkeletonProps {
  view: ViewMode
}

function MovieListSkeleton(props: MovieListSkeletonProps) {
  return (
    <div className={props.view === ViewMode.List ? 'cmovie-list-skeleton' : 'cmovie-grid-skeleton'}>
      {Array.from({ length: 7 }).map((_, index) => (
        <CardSkeletion key={index} view={props.view} />
      ))}
    </div>
  )
}

function _(props: MovieListSkeletonProps) {
  return null
}

export default process.env.FEATURE_SKELETON_LOADING === 'true' ? MovieListSkeleton : _
