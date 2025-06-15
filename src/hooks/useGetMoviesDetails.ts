import useAPI, { GetMoviesDetailsParams, GetMoviesDetailsData } from './useApi'
import { useFetch } from './useFetch'

export type UseGetMoviesDetailsReturn = {
  data: GetMoviesDetailsData | null
  loading: boolean
  error: string | null
}

export default function useGetMoviesDetails(
  enabled: boolean,
  movieId: number
): UseGetMoviesDetailsReturn {
  const api = useAPI()
  const params: GetMoviesDetailsParams = { movie_id: movieId }
  const url = enabled ? api.movies.getMoviesDetails(params) : ''
  return useFetch<GetMoviesDetailsData>(url)
}
