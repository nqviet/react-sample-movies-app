export enum MovieListType {
  NowPlaying = 0,
  TopRated = 1,
}

export enum ViewMode {
  Grid = 0,
  List = 1,
}

export type Movie = {
  id: number
  posterPath: string
  posterPaths: string
  title: string
  releaseDate: string
  voteAverage: string
  overview: string
}
