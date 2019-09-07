import 'pixi-tilemap';

const TILE_SIZE_W: number = 32;
const TILE_SIZE_H: number = 32;

export class TileMapExample {

    private app: PIXI.Application;

    run(): void {

        this.app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            antialias: true,
            transparent: false,
            resolution: window.devicePixelRatio || 1,
            sharedTicker: true,
            backgroundColor: 0x1099bb
        });

        document.body.appendChild(this.app.view);

        this.app.loader
            .add('bunny', './assets/bunny.png')
            .add('atlas', './assets/atlas.json')
            .add(["assets/grass.png", "assets/brick.png"])
            .load((l, r) => {

                var groundTiles = new PIXI.tilemap.CompositeRectTileLayer(0, [PIXI.utils.TextureCache['assets/grass.png'], PIXI.utils.TextureCache['assets/brick.png']]);
                this.app.stage.addChild(groundTiles);

                var texturearray = ["assets/grass.png", "assets/brick.png"]

                for (var i = 0; i <= 500; i++) {
                    for (var j = 0; j <= (Number)(window.innerWidth / TILE_SIZE_W); j++) {
                        groundTiles.addFrame(texturearray[j % 2], i * TILE_SIZE_W, j * TILE_SIZE_H);
                    }
                }

                const sprite = PIXI.Sprite.from('bunny');
                sprite.anchor.set(0.5);
                this.app.stage.addChild(sprite);

                sprite.x = this.app.screen.width * 0.5;
                sprite.y = this.app.screen.height * 0.5;

                this.app.ticker.add(d => {

                    sprite.rotation += 0.02 * d;
                    groundTiles.pivot.set(sprite.x, sprite.y);

                });

            });

    }

}