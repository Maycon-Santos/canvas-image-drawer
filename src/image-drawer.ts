import { cover } from './resize-modes/cover'
import { contain } from './resize-modes/contain'

interface OptionsInterface {
  opacity?: number
  crop?: [number, number, number, number]
  borderRadius?: number | [number, number, number, number]
  resizeMode?: 'cover' | 'contain'// | 'stretch' | 'repeat' | 'center'
  position?: [number, number]
}

const resizeModes = { cover, contain }

export function imageDrawer (x: number, y: number, width: number, height: number) {
  const images: [HTMLImageElement, OptionsInterface][] = []

  function draw (ctx: CanvasRenderingContext2D, img: HTMLImageElement, options: OptionsInterface) {
    const {
      opacity = 1,
      crop = [0, 0, img.naturalWidth, img.naturalHeight],
      borderRadius = 0,
      resizeMode = 'cover',
      position = [0, 0],
    }: OptionsInterface = options

    ctx.globalAlpha = opacity

    resizeModes[resizeMode]({
      img,
      ctx,
      crop,
      position,
      drawArea: {
        x,
        y,
        width,
        height
      },
    })

    ctx.globalAlpha = 1
  }

  return {
    add: (img: HTMLImageElement, options?: OptionsInterface) => images.push([img, options || {}]),
    draw: (ctx: CanvasRenderingContext2D) => images.forEach(([img, options]) => draw(ctx, img, options)),
  }
}
