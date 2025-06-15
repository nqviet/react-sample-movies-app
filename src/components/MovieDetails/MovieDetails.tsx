import React, { CSSProperties } from 'react'

import useGetMoviesDetails from '../../hooks/useGetMoviesDetails'
import {
  formatMovieGenres,
  formatMovieReleaseDate,
  formatMovieReleaseYear,
  formatMovieRuntime,
  formatMovieVote,
  getPosterImageSrc,
  getPosterImageSrcSet,
} from '../../utils/data'
import { MEDIA_BASE_URL } from '../../config'
import { LoadingIcon } from '../LoadingIcon'
import { ErrorMessage } from '../ErrorMessage'
import { FadeInEffect } from '../FadeInEffect'
import { MovieDetailsSkeletion } from '../MovieDetailsSkeletion'

import './MovieDetails.scss'

export interface MovieDetailsProps {
  id: number
}

export default function MovieDetails(props: MovieDetailsProps) {
  const movieDetails = useGetMoviesDetails(!!props.id, props.id)

  if (movieDetails.loading) {
    return (
      <>
        <LoadingIcon />
        <MovieDetailsSkeletion />
      </>
    )
  }

  if (movieDetails.error) {
    return <ErrorMessage error={movieDetails.error} />
  }

  const details = movieDetails.data
  if (!details) {
    return null
  }

  const posterSrc: string = getPosterImageSrc(
    MEDIA_BASE_URL,
    details.poster_path,
    'w300_and_h450_bestv2'
  )
  const posterSrcSet: string = getPosterImageSrcSet(MEDIA_BASE_URL, details.poster_path, [
    { size: 'w300_and_h450_bestv2', width: '1x' },
    { size: 'w600_and_h900_bestv2', width: '2x' },
  ])

  const backdropSrc = getPosterImageSrc(MEDIA_BASE_URL, details.backdrop_path, 'original')
  const style: CSSProperties = {
    backgroundImage: `url(${backdropSrc})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <div className="cmovie-details" style={style}>
      <div className="movie-details-overlay" />
      <div className="movie-details-content">
        <FadeInEffect>
          {(fadeInStyle, onShow) => (
            <img
              className="poster"
              src={posterSrc}
              srcSet={posterSrcSet}
              style={fadeInStyle}
              onLoad={onShow}
            />
          )}
        </FadeInEffect>
        <div>
          <div className="title">
            {details.title}{' '}
            <span className="release-year">({formatMovieReleaseYear(details.release_date)})</span>
          </div>
          <div className="sub-title">
            <span>{formatMovieReleaseDate(details.release_date)}</span>
            <span>{formatMovieGenres(details.genres)}</span>
            <span>{formatMovieRuntime(details.runtime)}</span>
          </div>
          <div className="vote">{formatMovieVote(details.vote_average)}</div>
          <div className="overview">
            <div className="tagline">{details.tagline}</div>
            <h4>
              <strong>Overview</strong>
            </h4>
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
