export function pixelPerfectCollision(
  planeDiv: HTMLDivElement,
  cloudDiv: HTMLDivElement
): boolean {
  const planeImg = planeDiv.querySelector('img')
  const cloudImg = cloudDiv.querySelector('img')
  if (!planeImg || !cloudImg) return false

  // Ensure images are loaded
  if (!planeImg.complete || !cloudImg.complete) {
    console.warn('Images not loaded yet')
    return false
  }

  // Use the actual <img> element's bounding boxes
  const planeRect = planeImg.getBoundingClientRect()
  const cloudRect = cloudImg.getBoundingClientRect()

  // Quick bounding box check
  if (
    planeRect.right < cloudRect.left ||
    planeRect.left > cloudRect.right ||
    planeRect.bottom < cloudRect.top ||
    planeRect.top > cloudRect.bottom
  ) {
    return false
  }

  // Compute overlap region and round dimensions
  const overlapLeft = Math.max(planeRect.left, cloudRect.left)
  const overlapTop = Math.max(planeRect.top, cloudRect.top)
  const overlapRight = Math.min(planeRect.right, cloudRect.right)
  const overlapBottom = Math.min(planeRect.bottom, cloudRect.bottom)

  const overlapWidth = Math.floor(overlapRight - overlapLeft)
  const overlapHeight = Math.floor(overlapBottom - overlapTop)

  if (overlapWidth <= 0 || overlapHeight <= 0) {
    return false
  }

  // Create an offscreen canvas for the overlap region
  const canvas = document.createElement('canvas')
  canvas.width = overlapWidth
  canvas.height = overlapHeight
  // const ctx with willReadFrequently optimization
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  if (!ctx) return false

  // Draw the plane image in the overlap region
  const planeOffsetX = planeRect.left - overlapLeft
  const planeOffsetY = planeRect.top - overlapTop

  ctx.clearRect(0, 0, overlapWidth, overlapHeight)
  ctx.drawImage(
    planeImg,
    planeOffsetX,
    planeOffsetY,
    planeRect.width,
    planeRect.height
  )
  const planeData = ctx.getImageData(0, 0, overlapWidth, overlapHeight).data

  // Draw the cloud image in the same region
  const cloudOffsetX = cloudRect.left - overlapLeft
  const cloudOffsetY = cloudRect.top - overlapTop

  ctx.clearRect(0, 0, overlapWidth, overlapHeight)
  ctx.drawImage(
    cloudImg,
    cloudOffsetX,
    cloudOffsetY,
    cloudRect.width,
    cloudRect.height
  )
  const cloudData = ctx.getImageData(0, 0, overlapWidth, overlapHeight).data

  // Check overlapping pixels for non-zero alpha
  for (let i = 0; i < planeData.length; i += 4) {
    const planeAlpha = planeData[i + 3]
    const cloudAlpha = cloudData[i + 3]
    if (planeAlpha > 0 && cloudAlpha > 0) {
      return true
    }
  }

  return false
}
