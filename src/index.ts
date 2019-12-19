import { imageDrawer } from './image-drawer'

const canvas = document.querySelector('canvas')

if (canvas) {
  window.addEventListener('resize', (function setCanvasSize () {
    const canvasComputedStyle = getComputedStyle(canvas)
    const computedWidth = canvasComputedStyle.width
    const computedHeight = canvasComputedStyle.height

    if (computedWidth) {
      canvas.width = parseInt(computedWidth.replace(/\D+/, ''))
    }

    if (computedHeight) {
      canvas.height = parseInt(computedHeight.replace(/\D+/, ''))
    }

    return setCanvasSize
  })())

  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  const img = new Image()
  img.src = 'https://static.escolakids.uol.com.br/2019/07/paisagem-natural.jpg'
  img.onload = () => {
    const drawArea = imageDrawer(30, 30, 800, 400)
    drawArea.add(img)
    drawArea.draw(ctx)
  }
}

// const drawArea = new ImageDrawer(0, 0, 800, 600)
// drawArea.add(img, {
//   opacity: 1,
//   crop: [0, 0, 200, 300],
//   borderRadius: 5,
//   resizeMode: 'cover',
// })
