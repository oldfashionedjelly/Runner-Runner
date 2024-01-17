function Shield(x, y) {
  Phaser.Sprite.call(this, game, x, y, "shield");
  game.add.existing(this);
  this.anchor.setTo(0.5, 0.5);
  this.size = 30;
};
Shield.prototype = Object.create(Phaser.Sprite.prototype);
Shield.prototype.update = function() {
  this.x -= 4;
  if(checkCollision(this, player) && !game.isGameOver) {
    player.shield();
    this.destroy();
    game.powerup.play();
  };
};
function CoinMagnet(x, y) {
  Phaser.Sprite.call(this, game, x, y, "coinMagnet");
  game.add.existing(this);
  this.anchor.setTo(0.5, 0.5);
  this.size = 30;
};
CoinMagnet.prototype = Object.create(Phaser.Sprite.prototype);
CoinMagnet.prototype.update = function() {
  this.x -= 4;
  if(checkCollision(this, player) && !game.isGameOver) {
    this.destroy();
    player.magnet();
    game.powerup.play();
  };
};

function Boom(x, y) {
  Phaser.Sprite.call(this, game, x, y, "boom");
  game.add.existing(this);
  this.anchor.setTo(0.5, 0.5);
  this.size = 30;
};
Boom.prototype = Object.create(Phaser.Sprite.prototype);
Boom.prototype.update = function() {
  this.x -= 4;
  if(checkCollision(this, player) && !game.isGameOver) {
    this.destroy();
    this.destroyEnemies();
    game.powerup.play();
  };
};
Boom.prototype.destroyEnemies = function() {

  while(game.enemyGroup.length > 0) {

    for(var i = 0; i < 75; i++) {
      var particle = new ExplosionParticle(960 / 2, 640 / 2, "explosion", true);
    };
    var shake = new AutoScreenShake(30, 80, true);
    game.enemyGroup.getTop().destroy();
    game.explode.play();
  };
};
