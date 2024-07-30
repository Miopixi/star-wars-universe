import { useEffect, useRef, useState } from 'react'

import { createStar, drawStars } from '../../canvas/stars'
import { TStar } from '../../types'

const NUMBER_OF_STARS = 777

const createStars = (canvasSize: number): TStar[] =>
  Array.from({ length: NUMBER_OF_STARS }, () => createStar(canvasSize))

const getCanvasSize = (): number =>
  Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))


const StarrySky = () => {

  const [stars, setStars] = useState<TStar[]>([])
  const [canvasSize, setCanvasSize] = useState(0)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (canvasRef.current) drawStars(canvasRef.current.getContext('2d'), stars)
  }, [ stars ])

  const handleResize = () => {
    const newCanvasSize = getCanvasSize()

    setCanvasSize(newCanvasSize)
    setStars(createStars(newCanvasSize))
  }

  const getCenterPosition = (windowSize: number) => (windowSize - canvasSize) / 2

  return (
    <canvas
      ref={ canvasRef }
      width={ canvasSize }
      height={ canvasSize }
      style={ { top: getCenterPosition(window.innerHeight), left: getCenterPosition(window.innerWidth) } }
      className='starry_sky'
    />
  )
}

export { StarrySky }
