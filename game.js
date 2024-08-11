/* global Phaser */

const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor:'#049cd8',
    parent: 'game',
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 300 },
    //         debug: false
    //     }
    // },
    scene: {
        preload,
        create,
        update,
    }
};

new Phaser.Game(config);

function preload() {
    this.load.image('cloud1','assets/scenery/overworld/cloud1.png');

    this.load.image('floorbrick','assets/scenery/overworld/floorbricks.png');

    this.load.spritesheet('mario', 'assets/entities/mario.png', {
        frameWidth: 18,
        frameHeight: 16
    })
}

function create() {
    this.add.image(150, 50, 'cloud1').setOrigin(0 , 0).setScale(0.15);

    this.add.tileSprite(0, config.height, config.width, 32, 'floorbrick').setOrigin(0 , 1);

    this.mario=this.add.sprite(100, 190, 'mario').setOrigin(0 , 0).setScale(1.5);
    this.keys = this.input.keyboard.createCursorKeys();

    this.anims.create({
        key:'mario-walk',
        frames: this.anims.generateFrameNumbers('mario', {start: 0, end: 3}),
        frameRate: 10,
        repeat: -1
    })

}

function update() {
    if(this.keys.left.isDown) {
        this.mario.x -=2;
        this.mario.anims.play('mario-walk' );
    }else if(this.keys.right.isDown) {
        this.mario.x += 2;
        this.mario.anims.play('mario-walk');
    }else{
        this.mario.anims.stop();
        this.mario.frame = 0;
    }
}
