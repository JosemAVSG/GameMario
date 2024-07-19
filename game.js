/* global Phaser */

const config = {
    type: Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: 'white',
    parent: 'game',
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 300 },
    //         debug: false
    //     }
    // },
    scene: {
        preload
        create,
        update,
    }
};

function preload() {
    this.load.image('mario', 'mario.png');
}

function create() {
    this.add.image(0, 0, 'mario').setOrigin(0, 0);
}

function update() {
    
}