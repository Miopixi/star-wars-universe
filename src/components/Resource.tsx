import { useState } from 'react'

import { TResource, TSubItem, TListItem, TResourceResult } from '../types'
import DynamicList from './DynamicList'
import List from './List'

function ensureUniqueness (resource: TResourceResult[]): TResourceResult[] {
  return [...new Set(resource.map(p => JSON.stringify(p)))].map(p => JSON.parse(p))
}

function sortByFilms (resource: TResourceResult[]): TResourceResult[] {
  return [...resource].sort((a, b) => a.films.length - b.films.length)
}


interface ResourceProps {
  fetchResource: (url?: string) => Promise<TResource>;
  createSubItems: (result: TResourceResult) => TSubItem[];
}

function Resource({ fetchResource, createSubItems }: ResourceProps) {

  const [ resource, setResource ] = useState<TResourceResult[]>([])

  const updateResource = (next?: TResourceResult[]) => {
    next
      ? setResource(prev => ensureUniqueness([...prev, ...sortByFilms(next)]))
      : setResource(sortByFilms(resource))
  }

  const createListItems = (): TListItem[] => {
    return resource.map(result => ({
      name: result.name,
      subItems: createSubItems(result),
    }))
  }

  return (
    <>
      <DynamicList fetchResource={ fetchResource } updateResource={ updateResource }>
        <List items={ createListItems() } />
      </DynamicList>
    </>
  )
}

export default Resource
