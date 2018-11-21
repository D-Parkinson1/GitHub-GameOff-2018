class Menu extends Phaser.Scene {
    constructor () {
        super({
            key: 'menu',
            plugins: [ 'InputPlugin' ]
        });
    }

    init () {
        console.log('menu');
    }

    create () {
        this.add.sprite(100, 100, 'coin').setScale(4).play('coinSpin');
        this.add.bitmapText(100, 50, 'mainFont', 'TESTING FONT');
        this.startScene('play');
    }

    startScene (key) {
        this.scene.start(key);
    }

    update () {

    }
}

export default Menu;
