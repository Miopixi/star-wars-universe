import { ReactNode, useEffect, useState } from 'react'

import { TResource, TResourceResult } from '../types'

interface DynamicListProps {
  children: ReactNode;
  fetchResource: (url?: string) => Promise<TResource>;
  updateResource: (next?: TResourceResult[]) => void;
}

function DynamicList({ children, fetchResource, updateResource }: DynamicListProps) {

  const [ next, setNext ] = useState<string | null>(null)
  const [ sorted, setSorted ] = useState<boolean>(true)

  useEffect(() => {
    fetchResource().then((resource: TResource) => {
      setNext(resource.next)
      updateResource(resource.results)
    })
    // eslint-disable-next-line
  }, [])

  const handleNextClick = () => {
    next && fetchResource(next).then((resource: TResource) => {
      setNext(resource.next)
      updateResource(resource.results)
      setSorted(false)
    })
  }

  const handleSortClick = () => {
    updateResource()
    setSorted(true)
  }

  return (
    <>
      { children }
      { next && <button onClick={ handleNextClick } className='button'> Next </button> }
      { !sorted && <button onClick={ handleSortClick } className='button'> Sort </button> }
    </>
  )
}

export default DynamicList
