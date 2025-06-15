import useAPI, { GetMovieListsNowPlayingParams, GetMovieListsNowPlayingData } from './useApi'
import { useFetch } from './useFetch'

export type UseGetMovieListsNowPlayingReturn = {
  data: GetMovieListsNowPlayingData | null
  loading: boolean
  error: string | null
}

export default function useGetMovieListsNowPlaying(
  enable: boolean,
  page: number = 1
): UseGetMovieListsNowPlayingReturn {
  const api = useAPI()
  const params: GetMovieListsNowPlayingParams = { page }
  const url = enable ? api.movieLists.getMovieListsNowPlaying(params) : ''
  return useFetch<GetMovieListsNowPlayingData>(url)
}
