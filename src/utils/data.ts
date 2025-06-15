export function formatMovieReleaseDate(date: string) {
  if (!date) {
    return ''
  }
  const d = new Date(date)
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`
}

export function formatMovieReleaseYear(date: string) {
  if (!date) {
    return ''
  }
  const d = new Date(date)
  return `${d.getFullYear()}`
}

export function formatMovieGenres(genres: { id: number; name: string }[]) {
  return genres.map((genre) => genre.name).join(', ')
}

export function formatMovieRuntime(runtime: number) {
  const h = Math.floor(runtime / 60)
  const m = runtime - h * 60
  return h ? `${h}h ${m}m` : `${m}m`
}

export function formatMovieVote(vote: number) {
  return vote.toFixed(1).replace(/\.0+$/, '')
}

export function getPosterImageSrc(baseUrl: string, imgPath: string, size: string): string {
  return `${baseUrl}/${size}${imgPath}`
}

export function getPosterImageSrcSet(
  baseUrl: string,
  imgPath: string,
  sizes: { size: string; width: string }[] = []
): string {
  const result: string[] = []
  sizes.forEach((size) => result.push(`${baseUrl}/${size.size}${imgPath} ${size.width}`))
  return result.join(', ')
}
