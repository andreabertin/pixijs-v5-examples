export class Scene extends PIXI.Container {

    private screen : PIXI.Sprite;
    private screenOpacity : number = 0;

    constructor() {
        super();
    }

    load() {
        this.screen = PIXI.Sprite.from('cool-title-screen');
        this.addChild(this.screen);
        this.screen.scale.x = 1;
        this.screen.scale.y= 1;
        this.screen.anchor.x = 0.5;
        this.screen.anchor.y = 0.5;
        this.screen.alpha = this.screenOpacity;
        this.screen.position.x = window.innerWidth / 2;
        this.screen.position.y = window.innerHeight / 2;
    }

    update(delta : number) {
        if (this.screenOpacity < 1) {
            
            this.screenOpacity += 0.01;
        }

        this.screen.alpha = this.screenOpacity;
    }

}