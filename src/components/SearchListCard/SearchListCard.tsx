import React from 'react'

import { Movie, ViewMode } from '../../types'
import { LazyImg } from '../LazyImg'
import { Link } from '../../Router'

import './SearchListCard.scss'

export interface SearchListCardProps {
  movie: Movie
  width: number
  height: number
  view: ViewMode
}

export default function SearchListCard(props: SearchListCardProps) {
  const style =
    props.view === ViewMode.Grid
      ? {
          width: props.width,
          minHeight: props.height,
        }
      : {
          minWidth: props.width,
          minHeight: Math.min(props.height - 80, 225),
        }

  return (
    <div
      className={`csearch-list-card ${props.view === ViewMode.Grid ? 'grid-view' : 'list-view'}`}
      style={style}
    >
      <Link to={`/movie/${props.movie.id}`}>
        <LazyImg
          className="poster"
          width={props.width}
          src={props.movie.posterPath}
          srcSet={props.movie.posterPaths}
        />
      </Link>
      {props.view === ViewMode.Grid ? (
        <>
          <div>
            <strong>{props.movie.title}</strong>
          </div>
          <div className="release-date">
            <small>{props.movie.releaseDate}</small>
          </div>
        </>
      ) : (
        <div className="right-content">
          <div>
            <strong>{props.movie.title}</strong>
          </div>
          <div className="release-date">
            <small>{props.movie.releaseDate}</small>
          </div>
          <div className="overview">{props.movie.overview}</div>
        </div>
      )}
    </div>
  )
}
