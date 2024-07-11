import { useEffect, useState } from 'react'

import { fetchFilms } from '../api-service'
import { Film } from '../type-definitions'

function sortByEpisode (films: Film[]) {
  return [...films].sort((a: Film, b: Film) => a.episode_id - b.episode_id)
}

function Films() {

  const [ films, setFilms ] = useState<Film[]>([])

  useEffect(() => {
    fetchFilms().then(films => setFilms(sortByEpisode(films.results)))
  }, [])

  return (
    <>
        {
          films.map((film: Film, i) => (
            <div key={ i }>
              <div>{ film.title }</div>
              <div>{ film.release_date.substring(0, 4) }</div>
              <div>{ film.opening_crawl }</div>
            </div>
          ))
        }
    </>
  )
}

export default Films
