import { useEffect, useState } from 'react'

import { fetchFilms } from '../api-service'
import { TFilm, TListItem } from '../types'
import { List } from './List'

function sortByEpisode (films: TFilm[]): TFilm[] {
  return [...films].sort((a: TFilm, b: TFilm) => a.episode_id - b.episode_id)
}

function createFilmListItems (films: TFilm[]): TListItem[] {
  return films.map(film => ({
    name: film.title,
    subItems: [
      { label: 'Release year', value: film.release_date.substring(0, 4) },
      { label: 'Opening crawl', value: film.opening_crawl },
    ]
  }))
}

function Films() {

  const [ films, setFilms ] = useState<TFilm[]>([])

  useEffect(() => {
    fetchFilms().then(films => setFilms(sortByEpisode(films.results)))
  }, [])

  return (
    <>
      <List items={ createFilmListItems(films) } />
    </>
  )
}

export { Films }
