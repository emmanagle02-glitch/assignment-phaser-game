const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#87CEEB',
    parent: 'game',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload () {
    this.load.image('sky', 'assets/sky.png');
}

function create () {
    this.add.image(400, 300, 'sky');
}
