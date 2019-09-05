import 'pixi-tilemap';

var tileSizeX = 32;
var tileSizeY = 32;

// App with width and height of the page
const app = new PIXI.Application({
	width: window.innerWidth,
	height: window.innerHeight,
	antialias: true,
	transparent: false,
	resolution: window.devicePixelRatio || 1,
	sharedTicker: true,
	backgroundColor: 0x1099bb
});

document.body.appendChild(app.view); // Create Canvas tag in the body

// Load the bunny
app.loader.add('bunny', './assets/bunny.png');
app.loader.add('atlas', './assets/atlas.json');
app.loader.add(["assets/grass.png", "assets/brick.png"]);
app.loader.load((loader, resources) => {

	console.log(PIXI.tilemap)
	var groundTiles = new PIXI.tilemap.CompositeRectTileLayer(0, [PIXI.utils.TextureCache['assets/grass.png'], PIXI.utils.TextureCache['assets/brick.png']]);
	app.stage.addChild(groundTiles);

	var texturearray = ["assets/grass.png", "assets/brick.png"]

	for (var i = 0; i <= 500; i++) {
		for (var j = 0; j <= parseInt(window.innerWidth / tileSizeX); j++) {
			groundTiles.addFrame(texturearray[j%2], i * tileSizeX, j * tileSizeY);
		}
	}

	const sprite = PIXI.Sprite.from('bunny')
	sprite.anchor.set(0.5) // We want to rotate our sprite relative to the center, so 0.5
	app.stage.addChild(sprite)

	// Position the sprite at the center of the stage
	sprite.x = app.screen.width * 0.5
	sprite.y = app.screen.height * 0.5

	// Put the rotating function into the update loop
	app.ticker.add(delta => {
		//sprite.rotation += 0.02 * delta
		sprite.x += 1 * delta;
		groundTiles.pivot.set(sprite.x, sprite.y);
	})
})