function makePlayer() {
  player = game.add.sprite(100, 200, game.currentSkin);
  player.size = 40;
  player.anchor.setTo(0.5, 0.5);

  player.speed = 0;
  player.maxSpeed = 5;
  player.acceleration = 0.5

  player.update = function() {

    if(game.input.activePointer.isDown) {
      this.frame = 0
      if (this.speed > -this.maxSpeed) {
      this.speed -= this.acceleration;
      };
    }
    else {
      this.frame = 1
      if(this.speed < this.maxSpeed) {
      this.speed += this.acceleration;
      };
    };
    this.futureY = this.y + this.speed;
    if(this.futureY > 50 && this.futureY < 590) {
      this.y += this.speed
    }
    else {
      this.speed = 0
    };
  };
  player.shield = function() {
    this.tint = 0x00FF00;
    this.safe = true;
  };
  player.stopShield = function() {
    this.tint = 0xFFFFFF;
    this.safe = false;
  };
  player.magnet = function() {
    this.alpha = 0.5;
    this.magnetic = true;
    game.time.events.add(15000, this.stopMagnet, this);
  };
  player.stopMagnet = function() {
    this.alpha = 1
    this.magnetic = false;
  };
};
