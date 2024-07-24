import { TStar } from '../types'

const TWO_PI = Math.PI * 2
const TWINKLE_SPEED = 222

export function drawStars (ctx: CanvasRenderingContext2D | null, stars: TStar[]) {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = 'white'
    const time = Date.now() / TWINKLE_SPEED
    stars.forEach(star => drawStar(time, ctx, star))

    requestAnimationFrame(() => drawStars(ctx, stars))
  }
}

export function drawStar (time: number, ctx: CanvasRenderingContext2D, star: TStar) {
  const twinkle = (Math.sin(time + star.phase) + 1) / 2
  ctx.globalAlpha = twinkle * (1 - star.brightness) + star.brightness
  ctx.beginPath()
  ctx.arc(star.x, star.y, star.radius, 0, TWO_PI)
  ctx.fill()
}

export const createStar = (canvasSize: number): TStar => ({
  x: Math.random() * canvasSize,
  y: Math.random() * canvasSize,
  radius: Math.random(),
  phase: Math.random() * TWO_PI,
  brightness: Math.random(),
})
