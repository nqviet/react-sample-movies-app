import React from 'react'

import { useParams } from '../../Router'
import { MovieDetails } from '../../components/MovieDetails'

import './Movie.scss'

export default function Movie() {
  const { id = '0' } = useParams<{ id: string }>()

  return (
    <>
      <MovieDetails id={parseInt(id, 10)} />
    </>
  )
}
