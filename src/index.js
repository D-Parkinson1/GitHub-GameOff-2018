import 'phaser';

import Preload from './preload';
import Menu from './menu';
import Config from './config';

window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        width: Config.DEFAULT_WIDTH,
        height: Config.DEFAULT_HEIGHT,
        backgroundColor: '#87CEEB',
        pixelArt: true,
        parent: 'gameDiv',
        scene: [ Preload, Menu ],
        title: 'Project name here',
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
