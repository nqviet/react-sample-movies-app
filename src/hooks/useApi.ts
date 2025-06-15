import { useCallback } from 'react'

import { API_BASE_URL } from '../config'
import { getQueryString } from '../utils/api'
import type { Pretty } from '../utils/type'

type PaginatedResults<T> = {
  /** Defaults to 0. */
  page: number
  results: T[]
  /** Defaults to 0. */
  total_pages: number
  /** Defaults to 0. */
  total_results: number
}

type GetMovieListsParams = {
  /** Defaults to en-US. */
  language?: string
  /** Defaults to 1. */
  page?: number
  /** ISO-3166-1 code, omit if empty. */
  region?: string
}

type GetMovieListsResult = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type SearchMovieResult = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type GetMovieListsResults = Pretty<PaginatedResults<GetMovieListsResult>>

export type GetMovieListsNowPlayingParams = GetMovieListsParams
export type GetMovieListsNowPlayingData = Pretty<
  GetMovieListsResults & {
    dates: {
      maximum: string
      minimum: string
    }
  }
>

export type GetMovieListsTopRatedParams = GetMovieListsParams
export type GetMovieListsTopRatedData = GetMovieListsResults

export type SearchMovieParams = {
  query: string
  /** Defaults to false. */
  include_adult?: boolean
  /** Defaults to en-US. */
  language?: string
  primary_release_year?: string
  /** Defaults to 1. */
  page?: number
  region?: string
  year?: string
}
export type SearchMovieData = Pretty<PaginatedResults<SearchMovieResult>>

export type GetMoviesDetailsParams = {
  movie_id: number
  /** comma separated list of endpoints within this namespace, 20 items max. */
  append_to_response?: string
  /** Defaults to en-US. */
  language?: string
}
export type GetMoviesDetailsData = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  genres: { id: number; name: string }[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: { id: number; logo_path: string; name: string; origin_country: string }[]
  production_countries: { iso_3166_1: string; name: string }[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

type GetEndpointUrl<TParams> = (params: TParams) => string

export type UseAPIReturn = {
  movieLists: {
    getMovieListsNowPlaying: GetEndpointUrl<GetMovieListsNowPlayingParams>
    getMovieListsTopRated: GetEndpointUrl<GetMovieListsTopRatedParams>
  }
  search: {
    searchMovie: GetEndpointUrl<SearchMovieParams>
  }
  movies: {
    getMoviesDetails: GetEndpointUrl<GetMoviesDetailsParams>
  }
}

export default function useAPI(): UseAPIReturn {
  /** Get a list of movies that are currently in theatres. */
  const getMovieListsNowPlaying = useCallback(
    (params: GetMovieListsNowPlayingParams = {}): string => {
      params = Object.assign({ language: 'en-US', page: 1 }, params)
      return `${API_BASE_URL}/movie/now_playing${getQueryString(params)}`
    },
    []
  )

  /** Get a list of movies ordered by rating. */
  const getMovieListsTopRated = useCallback((params: GetMovieListsTopRatedParams = {}): string => {
    params = Object.assign({ language: 'en-US', page: 1 }, params)
    return `${API_BASE_URL}/movie/top_rated${getQueryString(params)}`
  }, [])

  /** Search for movies by their original, translated and alternative titles. */
  const searchMovie = useCallback((params: SearchMovieParams): string => {
    params = Object.assign({ include_adult: false, language: 'en-US', page: 1 }, params)
    return `${API_BASE_URL}/search/movie${getQueryString(params)}`
  }, [])

  /** Get the top level details of a movie by ID. */
  const getMoviesDetails = useCallback((params: GetMoviesDetailsParams): string => {
    params = Object.assign({ language: 'en-US' }, params)
    return `${API_BASE_URL}/movie/${params.movie_id}`
  }, [])

  return {
    movieLists: {
      getMovieListsNowPlaying,
      getMovieListsTopRated,
    },
    search: {
      searchMovie,
    },
    movies: {
      getMoviesDetails,
    },
  }
}
