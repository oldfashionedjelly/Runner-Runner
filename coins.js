function Coin(x, y) {
  Phaser.Sprite.call(this, game, x, y, "coin");
  game.coinGroup.add(this);

  this.size = 25;

  this.anchor.setTo(0.5, 0.5);
};

Coin.prototype = Object.create(Phaser.Sprite.prototype);

Coin.prototype.update = function() {
  this.x -= 4;
  if(checkCollision(this, player) && !game.isGameOver) {
    this.destroy();
    game.coinScore ++
    game.coinSound.play();
  };

  if(player.magnetic) {
    var distanceX = this.x - player.x;
    var distanceY = this.y - player.y;
    if(distanceX < 500 && distanceX > 0) {
      this.x -= distanceX * 0.08;
      this.y -= distanceY * 0.08;
  };
  };
};

game.coinSpawner = {};

game.coinSpawner.zigzag = function(x, y) {
  var coin1 = new Coin(x, y);
  var coin2 = new Coin(x + 50, y - 50);
  var coin3 = new Coin(x + 100, y - 100);
  var coin4 = new Coin(x + 150, y - 50);
  var coin5 = new Coin(x + 200, y);
  var coin6 = new Coin(x + 250, y + 50);
  var coin7 = new Coin(x + 300, y + 100);
  var coin8 = new Coin(x + 350, y + 50);
  var coin9 = new Coin(x + 400, y);
  var coin10 = new Coin(x + 450, y - 50);
  var coin11 = new Coin(x + 500, y - 100);
  var coin12 = new Coin(x + 550, y - 50);
  var coin13 = new Coin(x + 600, y);
  var coin14 = new Coin(x + 650, y + 50);
  var coin15 = new Coin(x + 700, y + 100);
  var coin16 = new Coin(x + 750, y + 50);

};

game.coinSpawner.diamond = function(x, y) {
  var coin1 = new Coin(x, y);
  var coin2 = new Coin(x + 50, y + 50);
  var coin3 = new Coin(x + 50, y - 50);
  var coin4 = new Coin(x + 100, y + 100);
  var coin5 = new Coin(x + 100, y);
  var coin6 = new Coin(x + 100, y - 100);
  var coin7 = new Coin(x + 150, y + 50);
  var coin8 = new Coin(x + 150, y - 50);
  var coin9 = new Coin(x + 200, y);
};
game.coinSpawner.square = function(x, y) {
  var coin1 = new Coin(x, y);
  var coin2 = new Coin(x + 50, y);
  var coin3 = new Coin(x + 100, y);
  var coin4 = new Coin(x + 150, y);
  var coin6 = new Coin(x, y - 50);
  var coin7 = new Coin(x + 150, y - 50);
  var coin8 = new Coin(x, y - 100);
  var coin9 = new Coin(x + 150, y - 100);
  var coin10 = new Coin(x, y - 150);
  var coin11 = new Coin(x + 150, y - 150);
  var coin12 = new Coin(x + 50, y - 150);
  var coin13 = new Coin(x + 100, y - 150);
};

game.coinSpawner.faces = function(x, y) {
  var coin1 = new Coin(x, y);
  var coin2 = new Coin(x + 225, y);
  var coin3 = new Coin(x - 10, y + 125);
  var coin4 = new Coin(x + 25, y + 175);
  var coin6 = new Coin(x + 75, y + 225);
  var coin7 = new Coin(x + 135, y + 225);
  var coin8 = new Coin(x + 185, y + 175);
  var coin9 = new Coin(x + 235, y + 125);
}

game.coinSpawner.heart = function(x, y) {
  var coin1 = new Coin(x, y);
  var coin2 = new Coin(x + 50, y);
  var coin3 = new Coin(x + 150, y);
  var coin4 = new Coin(x + 200, y);
  var coin5 = new Coin(x - 50, y + 50);
  var coin6 = new Coin(x + 100, y + 50);
  var coin7 = new Coin(x + 250, y + 50);
  var coin8 = new Coin(x - 50, y + 100);
  var coin9 = new Coin(x + 250, y + 100);
  var coin10 = new Coin(x, y + 150);
  var coin11 = new Coin(x + 200, y + 150);
  var coin12 = new Coin(x + 50, y + 200);
  var coin13 = new Coin(x + 150, y + 200);
  var coin14 = new Coin(x + 100, y + 250);
};
