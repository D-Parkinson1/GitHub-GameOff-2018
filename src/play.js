import Config from './config';
import Player from './Classes/Player';

class Play extends Phaser.Scene {
    constructor() {
        super({
            key: 'play'
        });
    }

    create() {
        const map = this.make.tilemap({
            key: 'tutorial'
        });
        const tileset = map.addTilesetImage('Terrain');
        const groundLayer = map.createStaticLayer("Terrain", tileset, 0, 0);

        groundLayer.setCollisionByProperty({
            collides: true
        });

        //Colliding tiles given a matter body
        //this.matter.world.convertTilemapLayer(groundLayer);

        //Show hitboxes of tilemap
        if (Config.DEBUG) {
            this.matter.world.createDebugGraphic();

            // const debugGraphics = this.add.graphics().setAlpha(0.5);
            // groundLayer.renderDebug(debugGraphics, {
            //   // Color of non-colliding tiles
            //   tileColor: null,
            //   // Color of colliding tiles
            //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255),
            //   // Color of colliding face edges
            //   faceColor: new Phaser.Display.Color(40, 39, 37, 255)
            // });
        }

        const spawnPoint = map.findObject("Objects", obj => obj.name === "Spawn");
        this.player = new Player(this, spawnPoint.x, spawnPoint.y);

        const camera = this.cameras.main;

        camera.startFollow(this.player);
        camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.matter.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    }

    update(time, delta) {
        this.player.stop();

        if (this.cursors.left.isDown) {
            this.player.moveLeft();
        }
        if (this.cursors.right.isDown) {
            this.player.moveRight();
        }
    }
};

export default Play;