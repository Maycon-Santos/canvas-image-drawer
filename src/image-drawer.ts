import { cover } from './resize-modes/cover'
import { contain } from './resize-modes/contain'
import { stretch } from './resize-modes/stretch'
import { repeat } from './resize-modes/repeat'
import { makeBorderRadius } from './border-radius'

type BorderRadiusType = [number, number, number, number]

interface OptionsInterface {
  ctx: CanvasRenderingContext2D
  img: HTMLImageElement
  drawArea?: [number, number, number, number]
  crop?: [number, number, number, number]
  borderRadius?: number | BorderRadiusType
  resizeMode?: 'cover' | 'contain'| 'stretch' | 'repeat'
  position?: [number, number]
}

const resizeModes = { cover, contain, stretch, repeat }

export function imageDrawer (options: OptionsInterface): void {
  const {
    ctx,
    img,
    drawArea: rawDrawArea = [0, 0, ctx.canvas.width, ctx.canvas.height],
    borderRadius: rawBorderRadius = 0,
    crop = [0, 0, img.naturalWidth, img.naturalHeight],
    resizeMode = 'cover',
    position = [0.5, 0.5],
  }: OptionsInterface = options

  const drawArea = {
    x: rawDrawArea[0],
    y: rawDrawArea[1],
    width: rawDrawArea[2],
    height: rawDrawArea[3],
  }

  const borderRadius = (
    Array.isArray(rawBorderRadius)
      ? rawBorderRadius
      : Array(4).fill(rawBorderRadius)
  ) as BorderRadiusType

  makeBorderRadius(ctx, borderRadius, drawArea)

  const resizeFunc = resizeModes[resizeMode]

  resizeFunc({
    img,
    ctx,
    crop,
    position,
    drawArea,
  })
}
