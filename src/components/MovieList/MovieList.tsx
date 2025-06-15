import React, { useCallback } from 'react'

import useGetMovieListsNowPlaying from '../../hooks/useGetMovieListsNowPlaying'
import useGetMovieListsTopRated from '../../hooks/useGetMovieListsTopRated'
import { Movie, MovieListType, ViewMode } from '../../types'

import './MovieList.scss'
import { MovieListCard } from '../MovieListCard'
import { MEDIA_BASE_URL } from '../../config'
import {
  formatMovieReleaseDate,
  formatMovieVote,
  getPosterImageSrc,
  getPosterImageSrcSet,
} from '../../utils/data'
import { LoadingIcon } from '../LoadingIcon'
import { ErrorMessage } from '../ErrorMessage'
import { HighlightEffect } from '../HighlightEffect'
import { MovieListSkeleton } from '../MovieListSkeleton'

export interface MovieListProps {
  type: MovieListType
  view: ViewMode
}

export default function MovieList(props: MovieListProps) {
  const nowPlaying = useGetMovieListsNowPlaying(props.type === MovieListType.NowPlaying)
  const topRated = useGetMovieListsTopRated(props.type === MovieListType.TopRated)

  let movieList
  switch (props.type) {
    case MovieListType.NowPlaying:
      movieList = nowPlaying
      break
    case MovieListType.TopRated:
      movieList = topRated
      break
    default:
      movieList = { data: null, loading: false, error: null }
  }

  if (movieList.loading) {
    return (
      <>
        <LoadingIcon />
        <MovieListSkeleton view={props.view} />
      </>
    )
  }

  if (movieList.error) {
    return <ErrorMessage error={movieList.error} />
  }

  return (
    <div className={props.view === ViewMode.List ? 'cmovie-list' : 'cmovie-grid'}>
      {movieList.data?.results.map((result) => {
        const posterSrc: string = getPosterImageSrc(
          MEDIA_BASE_URL,
          result.poster_path,
          'w220_and_h330_face'
        )
        const posterSrcSet: string = getPosterImageSrcSet(MEDIA_BASE_URL, result.poster_path, [
          { size: 'w220_and_h330_face', width: '1x' },
          { size: 'w440_and_h660_face', width: '2x' },
        ])
        const movie: Movie = {
          id: result.id,
          posterPath: posterSrc,
          posterPaths: posterSrcSet,
          title: result.title,
          releaseDate: formatMovieReleaseDate(result.release_date),
          voteAverage: formatMovieVote(result.vote_average),
          overview: result.overview,
        }
        return (
          <HighlightEffect>
            <MovieListCard
              key={result.id}
              movie={movie}
              width={150}
              height={320}
              view={props.view}
            />
          </HighlightEffect>
        )
      })}
    </div>
  )
}
