import { OptionsInterface } from './_types'

export function cover (options: OptionsInterface): void {
  const { ctx, img, drawArea, position, crop } = options

  const cropWidth = crop[2] - crop[0]
  const cropHeight = crop[3] - crop[1]

  const croppedImageAspect = cropHeight / cropWidth
  const drawAreaAspect = drawArea.height / drawArea.width

  let sourceWidth = cropWidth
  let sourceHeight = cropHeight
  let destX = drawArea.x
  let destY = drawArea.y

  if (croppedImageAspect > drawAreaAspect) {
    sourceHeight = sourceWidth * (drawArea.height / drawArea.width)
  } else {
    sourceWidth = sourceHeight * (drawArea.width / drawArea.height)
  }

  const sourceX = cropWidth * position[0] - sourceWidth * position[0]
  const sourceY = cropHeight * position[1] - sourceHeight * position[1]

  if (Math.abs(position[0]) > 1) {
    destX = drawArea.x + cropWidth * position[0] - drawArea.width * position[0]
  }

  if (Math.abs(position[1]) > 1) {
    destY = drawArea.y + cropHeight * position[1] - drawArea.height * position[1]
  }

  ctx.drawImage(
    img,
    sourceX + crop[0],
    sourceY + crop[1],
    sourceWidth,
    sourceHeight,
    destX,
    destY,
    drawArea.width,
    drawArea.height
  )
}
