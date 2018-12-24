import TextButton from './Classes/TextButton'

class Menu extends Phaser.Scene {
    constructor() {
        super({
            key: 'menu',
            plugins: ['InputPlugin']
        });
    }

    init() {
        console.log('menu');
        Phaser.GameObjects.GameObjectFactory.register('textButton', function(scene, x, y, text, style, callback) {
            let textButton = new TextButton(scene, x, y, text, style, callback);

            this.displayList.add(textButton);
            return textButton;
        });
    }

    create() {

        this.add.sprite(100, 100, 'coin').setScale(4).play('coinSpin');
        this.add.bitmapText(100, 50, 'mainFont', 'TESTING FONT');

        this.add.textButton(this, 400, 300, 'Play', { fontSize: '32px' }, () => {
            console.log('Clicked Play');
            this.startScene('play');
        });
        this.helpButton = this.add.textButton(this, 400, 400, 'Help', { fontSize: '32px' }, () => {
            console.log('Clicked Help')
        });

    }

    startScene(key) {
        this.scene.start(key);
    }

    update() {

    }
}

export default Menu;