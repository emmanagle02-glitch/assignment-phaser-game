const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#87CEEB',
  scene: {
    create: create
  }
};

const game = new Phaser.Game(config);

function create() {
  this.add.text(220, 280, 'Phaser is working!', {
    fontSize: '32px',
    fill: '#000'
  });
}
 
