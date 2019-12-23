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
  ctx.arcTo(drawArea.x + drawArea.width, drawArea.y, drawArea.x + drawArea.width, drawArea.y + drawArea.height, radius[0])
  ctx.arcTo(drawArea.x + drawArea.width, drawArea.y + drawArea.height, drawArea.x, drawArea.y + drawArea.height, radius[1])
  ctx.arcTo(drawArea.x, drawArea.y + drawArea.height, drawArea.x, drawArea.y, radius[2])
  ctx.arcTo(drawArea.x, drawArea.y, drawArea.x + drawArea.width, drawArea.y, radius[3])
  ctx.closePath()

  ctx.clip()
}
