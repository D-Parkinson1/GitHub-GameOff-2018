import 'phaser';

import Preload from './preload';
import Menu from './menu';
import Play from './play';
import Config from './config';

window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        width: Config.DEFAULT_WIDTH,
        height: Config.DEFAULT_HEIGHT,
        backgroundColor: '#87CEEB',
        pixelArt: true,
        parent: 'gameDiv',
        scene: [ Preload, Menu, Play ],
        physics: {
            default: 'matter',
            matter: {
                gravity: { y: 10 }
            }
        },
        title: "Gameoff 2018",
    };

    const game = new Phaser.Game(config);
    resize();
    window.addEventListener('resize', resize, false);

    function resize () {
        let canvas = document.querySelector(`#${game.config.parent} canvas`);
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        let windowRatio = windowWidth / windowHeight;
        let gameRatio = game.config.width / game.config.height;
        if(windowRatio < gameRatio) {
            canvas.style.width = `${windowWidth}px`;
            canvas.style.height = `${windowHeight / gameRatio}px`;
        } else{
            canvas.style.width = `${windowHeight * gameRatio}px`;
            canvas.style.height = `${windowHeight}px`;
        }
    }
};
