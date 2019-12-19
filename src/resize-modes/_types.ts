export interface OptionsInterface {
  ctx: CanvasRenderingContext2D
  img: HTMLImageElement
  drawArea: {
    x: number
    y: number
    width: number
    height: number
  }
  position: [number, number],
  crop: [number, number, number, number]
}
