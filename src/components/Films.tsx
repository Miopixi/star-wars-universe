import { useEffect, useState } from 'react'

import { fetchFilms } from '../api-service'
import { Film } from '../type-definitions'
import List from './List'

function sortByEpisode (films: Film[]) {
  return [...films].sort((a: Film, b: Film) => a.episode_id - b.episode_id)
}

function createListItems (films: Film[]) {
  return films.map(film => ({
    name: film.title,
    subItems: [
      { label: 'Release year', value: film.release_date.substring(0, 4) },
      { label: 'Opening crawl', value: film.opening_crawl }
    ]
  }))
}

function Films() {

  const [ films, setFilms ] = useState<Film[]>([])

  useEffect(() => {
    fetchFilms().then(films => setFilms(sortByEpisode(films.results)))
  }, [])

  return (
    <>
      <List items={ createListItems(films) } />
    </>
  )
}

export default Films
