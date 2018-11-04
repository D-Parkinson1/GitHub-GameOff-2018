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


        //this.load.image([ ]);

        //this.load.spritesheet([ ]);

        // Path for audio
        this.load.setPath('assets/sounds');

        //this.load.audio();
    }

    create () {
        this.scene.start('menu');
    }


}

export default Preload;
