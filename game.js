const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#87CEEB',
  parent: 'game',
  scene: {
    create: create
  }
};

const game = new Phaser.Game(config);

function create() {
  this.add.text(250, 280, 'My Phaser Game Works!', {
    fontSize: '32px',
    fill: '#000'
  });
}
