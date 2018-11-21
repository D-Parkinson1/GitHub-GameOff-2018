class Preload extends Phaser.Scene {
    constructor () {
        super({
            key: 'Prelaod',
            plugins: [ 'Loader' ]
        });
    }

    preload () {

        let progress = this.add.graphics();

        this.load.on('progress', (value) => {
            progress.clear();
            progress.fillStyle(0xff0000, 1);
            progress.fillRect(0, 270, 800 * value, 60);
        });

        this.load.on('complete', () => progress.destroy());

        // Path for images and sprite sheets
        this.load.setPath('/assets/images/');

        this.load.image('Terrain', 'Terrain.png');

        this.load.spritesheet([
            {
                key: 'coin',
                url: 'Coin.png',
                frameConfig: {
                    frameWidth: 32,
                    frameHeight: 32
                }
            }
        ]);

        this.load.setPath('/assets/levels/json/');
        this.load.tilemapTiledJSON('tutorial', 'Tutorial.json')
        //Font Path
        this.load.setPath('/assets/fonts/');
        this.load.bitmapFont('mainFont', ['main_0.png', 'main_1.png'], 'main.fnt');

        // Path for audio
        this.load.setPath('assets/sounds/');
        //this.load.audio();
    }

    create () {
        let coinConfig = {
            key: 'coinSpin',
            frames: this.anims.generateFrameNumbers('coin',
                 { frames: [0,1,2,3,4,5,6,7,8]}
            ),
            frameRate: 10,
            yoyo: true,
            repeat: -1
        }

        this.anims.create(coinConfig);
        this.scene.start('menu');
    }


}

export default Preload;
