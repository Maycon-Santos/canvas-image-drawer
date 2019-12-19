import { OptionsInterface } from './_types'

export function contain (options: OptionsInterface) {
  const { ctx, img, drawArea, position, crop } = options

  const cropWidth = crop[2] - crop[0]
  const cropHeight = crop[3] - crop[1]

  const scale = Math.min(drawArea.width / cropWidth, drawArea.height / cropHeight)

  const destWidth = cropWidth * scale
  const destHeight = cropHeight * scale

  const destXOffset = drawArea.width / 2 - (cropWidth / 2) * scale
  const destYOffset = drawArea.height / 2 - (cropHeight / 2) * scale

  return {
    destXOffset,
    destYOffset,
    destWidth,
    destHeight,
  }
}
