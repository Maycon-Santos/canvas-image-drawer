import { OptionsInterface } from './_types'

export function repeat (options: OptionsInterface) {
  const { ctx, img, drawArea, position, crop } = options

  const cropWidth = crop[2] - crop[0]
  const cropHeight = crop[3] - crop[1]

  const sourceX = drawArea.x + drawArea.width * position[0] - cropWidth * position[0]
  const sourceY = drawArea.y + drawArea.height * position[1] - cropHeight * position[1]

  for (let side = 0; side < 4; side++) {
    let row = 0
    let column = 0

    const poleX = side % 3 ? 1 : -1
    const poleY = side % 2 ? 1 : -1

    while (true) {
      const copySourceXOffset = poleX > 0 ? img.naturalWidth : 0
      const copySourceYOffset = poleY > 0 ? img.naturalHeight : 0
      const copySourceX = sourceX + copySourceXOffset + (poleX * img.naturalWidth * column)
      const copySourceY = sourceY + copySourceYOffset + (poleY * img.naturalHeight * row)

      if (
        (poleX > 0 && copySourceX > drawArea.x + drawArea.width) ||
        (poleX < 0 && copySourceX + img.naturalWidth < drawArea.x)
      ) {
        break
      }

      if (
        (poleY > 0 && copySourceY > drawArea.y + drawArea.height) ||
        (poleY < 0 && copySourceY + img.naturalHeight < drawArea.y)
      ) {
        row = 0
        column++
        continue
      }

      row++

      ctx.drawImage(
        img,
        copySourceX,
        copySourceY,
        img.naturalWidth,
        img.naturalHeight
      )
    }
  }
}
