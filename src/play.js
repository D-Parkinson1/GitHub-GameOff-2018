class Play extends Phaser.Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        const map = this.make.tilemap({ key: 'tutorial'});
        const tileset = map.addTilesetImage('Terrain');
        const groundLayer = map.createStaticLayer("Terrain", tileset, 0, 0);
    }

    update() {

    }
};

export default Play;
