const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#87CEEB',
  parent: 'game',   // 👈 ADD THIS
  scene: {
    create: create
  }
};

 
