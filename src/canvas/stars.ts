import { TStar } from '../types'

const TWO_PI = Math.PI * 2

export function drawStars (ctx: CanvasRenderingContext2D | null, stars: TStar[]) {
  if (ctx) {
    ctx.fillStyle = 'white'
    stars.forEach(star => drawStar(ctx, star))
  }
}

export function drawStar (ctx: CanvasRenderingContext2D, star: TStar) {
  ctx.beginPath()
  ctx.arc(star.x, star.y, star.radius, 0, TWO_PI)
  ctx.fill()
}

export const createStar = (canvasSize: number): TStar => ({
  x: Math.random() * canvasSize,
  y: Math.random() * canvasSize,
  radius: Math.random(),
})
