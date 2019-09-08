import { RotatingBunnyExample } from './RotatingBunnyExample';
import { TileMapExample } from './TileMapExample';
import { IntroExample } from './IntroExample';

class PixiEsamples {

    start() {

        let p = this.getParameterByName('example');
        if (!p || p === 'rotating-bunny') {
            new RotatingBunnyExample().run();
        } if (p === 'tilemap') {
            new TileMapExample().run();
        } if (p === 'intro') {
            new IntroExample().run();
        } else {
            new RotatingBunnyExample().run();
        }

    }

    private getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
}

new PixiEsamples().start();