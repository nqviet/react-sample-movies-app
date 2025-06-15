import useAPI, { SearchMovieParams, SearchMovieData } from './useApi'
import { useFetch } from './useFetch'

export type UseSearchMovieReturn = {
  data: SearchMovieData | null
  loading: boolean
  error: string | null
}

export default function useSearchMovie(enabled: boolean, query: string): UseSearchMovieReturn {
  const api = useAPI()
  const params: SearchMovieParams = { query }
  const url = enabled ? api.search.searchMovie(params) : ''
  return useFetch<SearchMovieData>(url)
}
