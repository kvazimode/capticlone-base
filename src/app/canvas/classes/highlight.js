class Highlight {
  constructor(params, resolution) {
    this.lineWidth = params.lineWidth
    this.lineColor = params.lineColor
    this.shadowColor = params.shadowColor
    this.x = params.position.x
    this.y = params.position.y
    this.w = params.w
    this.h = params.h
    this.resX = resolution.x
    this.resY = resolution.y
    this.order = params.order
  }

  draw(ctx) {
    let rect = new Path2D()
    ctx.fillStyle = this.shadowColor
    ctx.beginPath()
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.lineColor
    // inner rect
    rect.moveTo(this.x, this.y)
    rect.lineTo(this.x + this.w, this.y)
    rect.lineTo(this.x + this.w, this.y + this.h)
    rect.lineTo(this.x, this.y + this.h)
    rect.closePath()
    ctx.stroke(rect)
  }
}

export default Highlight
