import * as PIXI from 'pixi.js'

const TILE_SIZE_W: number = 32;
const TILE_SIZE_H: number = 32;

export class RotatingBunnyExample {

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

                const sprite = PIXI.Sprite.from('bunny');
                sprite.anchor.set(0.5);
                this.app.stage.addChild(sprite);

                sprite.x = this.app.screen.width * 0.5;
                sprite.y = this.app.screen.height * 0.5;

                this.app.ticker.add(d => {

                    sprite.rotation += 0.02 * d;

                });

            });

    }

}