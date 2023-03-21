// export type Film = {
//   movieID: Number
//   original_title: String
//   tagline: String
//   overview: String
//   homepage: String
//   poster: String
//   production: String
//   production_countries: Array<string>
//   genre: Array<string>
//   release: String
//   vote: Number
//   runtime: Number
//   revenue: Number
//   backdrop: String
// }

export interface Film {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: any
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
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
  const film: Film = await res.json()
  return film
}
