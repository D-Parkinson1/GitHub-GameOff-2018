class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        scene.physics.add.existing(this);
        //scene.matter.add.existing(this);
    }
};

export default Player;
