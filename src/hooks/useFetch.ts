import { useState, useEffect } from 'react'

import { useAuth } from '../contexts/AuthProvider'

export type UseFetchOptions = RequestInit

export type UseFetchReturn<T> = {
  data: T | null
  loading: boolean
  error: string | null
}

export function useFetch<R>(url: string, options: UseFetchOptions = {}): UseFetchReturn<R> {
  const [data, setData] = useState<R | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const auth = useAuth()

  useEffect(() => {
    let isMounted = true

    setData(null)
    setLoading(false)
    setError(null)

    if (!url) {
      return
    }

    options = Object.assign(
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
      options
    )

    if (auth.isLoggedIn) {
      options = Object.assign(
        {
          headers: {
            ...options.headers,
            Authorization: `Bearer ${auth.token}`,
          },
        },
        options
      )
    } else {
      url = url + (url.includes('?') ? '&' : '?&') + `api_key=${process.env.TMDB_API_KEY}`
    }

    setLoading(true)
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw new Error(error.status_message)
          })
        }
        return res.json()
      })
      .then((data) => {
        if (isMounted) {
          setData(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (isMounted) setError(err)
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}
