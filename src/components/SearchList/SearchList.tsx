import React from 'react'

import { SearchMovieParams } from '../../hooks/useApi'
import useSearchMovie from '../../hooks/useSearchMovie'
import {
  formatMovieReleaseDate,
  formatMovieVote,
  getPosterImageSrc,
  getPosterImageSrcSet,
} from '../../utils/data'
import { Movie, ViewMode } from '../../types'
import { SearchListCard } from '../SearchListCard'
import { MEDIA_BASE_URL } from '../../config'
import { LoadingIcon } from '../LoadingIcon'
import { ErrorMessage } from '../ErrorMessage'
import { HighlightEffect } from '../HighlightEffect'
import { MovieListSkeleton } from '../MovieListSkeleton'

import './SearchList.scss'

export interface SearchListProps {
  params: SearchMovieParams
  view: ViewMode
}

export default function SearchList(props: SearchListProps) {
  const searchMovies = useSearchMovie(!!props.params.query, props.params.query)

  if (searchMovies.loading) {
    return (
      <>
        <LoadingIcon />
        {process.env.FEATURE_SKELETON_LOADING === 'true' && <MovieListSkeleton view={props.view} />}
      </>
    )
  }

  if (searchMovies.error) {
    return <ErrorMessage error={searchMovies.error} />
  }

  return (
    <div className={props.view === ViewMode.List ? 'csearch-list' : 'csearch-grid'}>
      {searchMovies.data?.results.map((result) => {
        const posterSrc: string = getPosterImageSrc(MEDIA_BASE_URL, result.poster_path, 'w342')
        const posterSrcSet: string = getPosterImageSrcSet(MEDIA_BASE_URL, result.poster_path, [
          { size: 'w342', width: '1x' },
          { size: 'w500', width: '2x' },
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
            <SearchListCard
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
