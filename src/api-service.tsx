const SWAPI_PY_URL = 'https://swapi.py4e.com/api/'

export async function fetchFilms () {
  try {
    const res = await fetch(SWAPI_PY_URL + 'films')
    if (!res.ok) throw new Error('HTTP error')

    return await res.json()
  } catch (e) {
    throw new Error('Failed to fetch films')
  }
}
