class TextButton extends Phaser.GameObjects.Text {
    constructor(scene, x, y, text, style, callback) {
        super(scene, x, y, text, style);

        this.setInteractive({
            useHandCursor: true
        });

        this.hoverFill = '#fffacd';
        this.activeFill = '#ffff00';
        this.normalFill = style.fill || '#000000';

        this.setFill(this.normalFill);

        this.on('pointerover', () => this.setFill(this.hoverFill));
        this.on('pointerout', () => this.setFill(this.normalFill));
        this.on('pointerdown', () => this.setFill(this.activeFill));
        this.on('pointerup', () => {
            this.setFill(this.hoverFill);
            if (callback) {
                callback();
            }

        })
        scene.add.existing(this);

    }

    /**
     * The fill for when the text is hovered
     */
    setHoverFill(fill) {
        this.hoverFill = fill;
    }

    /**
     * The fill for when the text is normally displayed, no cursor near
     */
    setNormalFill(fill) {
        this.normalFill = fill;
    }

    /**
     * The fill for the text when the mouse is clicked down on the button
     */
    setActiveFill(fill) {
        this.activeFill = fill;
    }

};

export default TextButton;