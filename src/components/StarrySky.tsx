import { useEffect, useRef, useState } from 'react'

const getCanvasSize = (): number =>
  Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))


const StarrySky = () => {

  const [canvasSize, setCanvasSize] = useState(0)

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')

      if (ctx) {
        ctx.fillStyle = 'white'
        ctx.beginPath()
        ctx.arc(canvasSize / 2, canvasSize / 2, 2, 0, Math.PI * 2)
        ctx.fill()
      }
    }
  }, [ canvasSize ])

  const handleResize = () => setCanvasSize(getCanvasSize())

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

export default StarrySky
