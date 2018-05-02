const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

const numberOfRows = 18
const numberOfTilesPerRow = 32
const width = 854
const height = width * 9 / 16
const tileSize = height / numberOfRows

const tileGrid = []
let homeIndex, enemyIndex, mx, my

const init = () => {
	document.body.insertBefore(canvas, document.body.childNodes[0])

	canvas.width = width
	canvas.height = height

	for(let y = 0; y < numberOfRows; y ++) {
		for(let x = 0; x < numberOfTilesPerRow; x++) {
			tileGrid.push(new Tile(tileGrid.length, x*tileSize, y*tileSize, tileSize, tileSize))
		}
	}


	enemyIndex = Math.floor(Math.random() * Math.floor(numberOfTilesPerRow))
	homeIndex = Math.floor(Math.random() * Math.floor(numberOfTilesPerRow)) + numberOfTilesPerRow * (numberOfRows - 1)

	tileGrid[enemyIndex] = new Enemy(enemyIndex, enemyIndex*tileSize, 0, tileSize, tileSize)
	tileGrid[homeIndex] = new Home(homeIndex, (homeIndex%numberOfTilesPerRow)*tileSize, height-tileSize, tileSize, tileSize)

	tileGrid.forEach((tile) => {
		tile.draw(context)
	})
}

document.addEventListener("DOMContentLoaded", init)
canvas.addEventListener('click', (event) => {
	let rect = canvas.getBoundingClientRect()
	let id = Math.floor((event.pageX - rect.x) / tileSize) + (Math.floor((event.pageY  - rect.y) / tileSize) * numberOfTilesPerRow)
	let tile = tileGrid[id]
	tile.improve()
	tile.redraw(context)
})