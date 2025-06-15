import React from 'react'

import './MovieDetailsSkeletion.scss'

export interface MovieDetailsSkeletionProps {}

function MovieDetailsSkeletion() {
  return (
    <div className="cmovie-details-skeletion">
      <div className="movie-details-content">
        <div className="poster" />
        <div className="right-content">
          <div className="title" />
          <div className="sub-title" />
          <div className="vote" />
          <div className="overview" />
        </div>
      </div>
    </div>
  )
}

function _() {
  return null
}

export default process.env.FEATURE_SKELETON_LOADING === 'true' ? MovieDetailsSkeletion : _
