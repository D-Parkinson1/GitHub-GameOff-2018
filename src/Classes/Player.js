class Player extends Phaser.Physics.Matter.Sprite {
    constructor(scene, x, y) {
        super(scene.matter.world, x, y, 'player');

        scene.sys.displayList.add(this);
        scene.sys.updateList.add(this);
        this.velocity = 5;
    }

    preUpdate() {

    }

    moveRight() {
        this.setVelocityX(this.velocity);
    }

    moveLeft() {
        this.setVelocityX(-this.velocity);
    }

    stop() {
        this.setVelocityX(0);
    }
};

export default Player;