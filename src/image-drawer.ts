import { cover } from './resize-modes/cover'
import { contain } from './resize-modes/contain'
import { stretch } from './resize-modes/stretch'
import { repeat } from './resize-modes/repeat'
import { makeBorderRadius } from './border-radius'

type BorderRadiusType = [number, number, number, number]

interface OptionsInterface {
  crop?: [number, number, number, number]
  borderRadius?: number | BorderRadiusType
  resizeMode?: 'cover' | 'contain'| 'stretch' | 'repeat'
  position?: [number, number]
}

const resizeModes = { cover, contain, stretch, repeat }

export function imageDrawer (x: number, y: number, width: number, height: number) {
  const images: [HTMLImageElement, OptionsInterface][] = []

  function draw (ctx: CanvasRenderingContext2D, img: HTMLImageElement, options: OptionsInterface) {
    const {
      crop = [0, 0, img.naturalWidth, img.naturalHeight],
      borderRadius = 0,
      resizeMode = 'cover',
      position = [0.5, 0.5],
    }: OptionsInterface = options

    const drawArea = { x, y, width, height }

    const _borderRadius = (
      Array.isArray(borderRadius)
        ? borderRadius
        : Array(4).fill(borderRadius)
    ) as BorderRadiusType

    makeBorderRadius(ctx, _borderRadius, drawArea)

    resizeModes[resizeMode]({
      img,
      ctx,
      crop,
      position,
      drawArea,
    })
  }

  return {
    add: (img: HTMLImageElement, options?: OptionsInterface) => images.push([img, options || {}]),
    draw: (ctx: CanvasRenderingContext2D) => images.forEach(([img, options]) => draw(ctx, img, options)),
  }
}
