import { TFilms, TPeople, TResource, TSpecies } from './types'

const SWAPI_PY_URL = 'https://swapi.py4e.com/api/'

export async function fetchFilms (): Promise<TFilms> {
  return await fetchFromSWAPI(SWAPI_PY_URL + 'films', 'films') as TFilms
}

export async function fetchPeople (url = SWAPI_PY_URL + 'people'): Promise<TPeople> {
  return await fetchFromSWAPI(url, 'people') as TPeople
}

export async function fetchSpecies (url = SWAPI_PY_URL + 'species'): Promise<TSpecies> {
  return await fetchFromSWAPI(url, 'species') as TSpecies
}

export async function fetchFromSWAPI (url: string, resource: string): Promise<TResource | TFilms> {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('HTTP error')

    return await res.json()
  } catch (e) {
    throw new Error(`Failed to fetch ${ resource }`)
  }
}
