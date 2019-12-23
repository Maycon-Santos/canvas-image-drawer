interface DrawAreaInterface {
  x: number
  y: number
  width: number
  height: number
}

type radiusType = [number, number, number, number]

export function makeBorderRadius (ctx: CanvasRenderingContext2D, radius: radiusType, drawArea: DrawAreaInterface) {
  ctx.beginPath()
  ctx.moveTo(drawArea.x + radius[0], drawArea.y)
  ctx.lineTo(drawArea.x + drawArea.width - radius[1], drawArea.y)
  ctx.quadraticCurveTo(drawArea.x + drawArea.width, drawArea.y, drawArea.x + drawArea.width, drawArea.y + radius[1])
  ctx.lineTo(drawArea.x + drawArea.width, drawArea.y + drawArea.height - radius[2])
  ctx.quadraticCurveTo(drawArea.x + drawArea.width, drawArea.y + drawArea.height, drawArea.x + drawArea.width - radius[2], drawArea.y + drawArea.height)
  ctx.lineTo(drawArea.x + radius[3], drawArea.y + drawArea.height)
  ctx.quadraticCurveTo(drawArea.x, drawArea.y + drawArea.height, drawArea.x, drawArea.y + drawArea.height - radius[3])
  ctx.lineTo(drawArea.x, drawArea.y + radius[0])
  ctx.quadraticCurveTo(drawArea.x, drawArea.y, drawArea.x + radius[0], drawArea.y)
  ctx.closePath()

  ctx.clip()
}
