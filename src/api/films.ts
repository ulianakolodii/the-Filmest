export type Film = {
  movieID: Number
  original_title: String
  tagline: String
  overview: String
  homepage: String
  poster: String
  production: String
  production_countries: Array<string>
  genre: Array<string>
  release: String
  vote: Number
  runtime: Number
  revenue: Number
  backdrop: String
}

export const fetchFilms = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3//discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc?&api_key=cfe422613b250f702980a3bbf9e90716'
  )
  const films: Array<Film> | { error: string } = await res.json()
  return films
}

export const fetchFilm = async (filmId: string | string[]) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${filmId}?&api_key=cfe422613b250f702980a3bbf9e90716`
  )
  const film: Film | { error: string } = await res.json()
  return film
}
