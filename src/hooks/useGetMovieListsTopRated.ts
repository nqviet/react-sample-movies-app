import useAPI, { GetMovieListsTopRatedParams, GetMovieListsTopRatedData } from './useApi'
import { useFetch } from './useFetch'

export type UseGetMovieListsTopRatedReturn = {
  data: GetMovieListsTopRatedData | null
  loading: boolean
  error: string | null
}

export default function useGetMovieListsTopRated(
  enabled: boolean,
  page: number = 1
): UseGetMovieListsTopRatedReturn {
  const api = useAPI()
  const params: GetMovieListsTopRatedParams = { page }
  const url = enabled ? api.movieLists.getMovieListsTopRated(params) : ''
  return useFetch<GetMovieListsTopRatedData>(url)
}
