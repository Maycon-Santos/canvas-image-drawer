import { OptionsInterface } from './_types'

export function contain (options: OptionsInterface): void {
  const { ctx, img, drawArea, position, crop } = options

  const cropWidth = crop[2] - crop[0]
  const cropHeight = crop[3] - crop[1]

  const scale = Math.min(drawArea.width / cropWidth, drawArea.height / cropHeight)

  const destWidth = cropWidth * scale
  const destHeight = cropHeight * scale

  const destX = drawArea.x + drawArea.width * position[0] - (cropWidth * position[0]) * scale
  const destY = drawArea.y + drawArea.height * position[1] - (cropHeight * position[1]) * scale

  ctx.drawImage(
    img,
    crop[0],
    crop[1],
    crop[2],
    crop[3],
    destX,
    destY,
    destWidth,
    destHeight
  )
}
