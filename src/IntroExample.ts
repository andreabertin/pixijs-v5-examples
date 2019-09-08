import { Scene } from './IntroExample/Scene';

export class IntroExample {

    private app: PIXI.Application;

    run() {

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
            .add('cool-title-screen', './assets/titles/cool-title-screen.png')
            .load((l, r) => {

                var scene = new Scene();
                scene.load();
                this.app.stage.addChild(scene);
                
                this.app.ticker.add(d => {
                    scene.update(d);
                });

            });

    }

}