import { OptionsInterface } from './_types'

export function stretch (options: OptionsInterface) {
  const { ctx, img, drawArea, position, crop } = options

  const cropWidth = crop[2] - crop[0]
  const cropHeight = crop[3] - crop[1]

  const destX = drawArea.x + cropWidth * position[0] - drawArea.width * position[0]
  const destY = drawArea.y + cropHeight * position[1] - drawArea.height * position[1]

  ctx.drawImage(
    img,
    crop[0],
    crop[1],
    crop[2],
    crop[3],
    destX,
    destY,
    drawArea.width,
    drawArea.height
  )
}
