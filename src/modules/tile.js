class Tile {
	constructor(id, x, y, height, width) {
		this.id = id
		this.x = x
		this.y = y
		this.height = height
		this.width = width
		this.upgrade = 0
		this.thickness = 1

		this.border = 'black'
		this.fill = 'Wheat'
	}

	improve() {
		this.upgrade++
	}

	draw(context) {
		context.fillStyle = this.border
		context.fillRect(this.x, this.y, this.width, this.height)
		
		context.fillStyle = this.fill
		context.fillRect(
			this.x + this.thickness, 
			this.y + this.thickness, 
			this.width - (this.thickness * 2), 
			this.height - (this.thickness * 2))
		
		context.fillStyle = this.border
		context.textAlign = 'center'
		context.fillText(
			this.upgrade,
			this.x + this.height / 2,
			this.y + this.width / 2)
	}

	redraw(context) {
		context.clearRect(this.x, this.y, this.width, this.height)
		this.draw(context)
	}
}