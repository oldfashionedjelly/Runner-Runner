function Enemy(x, y, speed, image) {

  Phaser.Sprite.call(this, game, x, y, image);
  game.enemyGroup.add(this);

  this.size = 40;
  this.anchor.setTo(0.5, 0.5)

  this.animations.add("walk");
  this.animations.play("walk", 8, true)

  this.speed = speed;
}
Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.update = function() {
  this.x -= this.speed;
  if(this.x < -150)
  {
    this.destroy();
  };

  if(checkCollision(this, player) && !game.isGameOver) {
    if(player.safe) {

      for(var i = 0; i < 75; i++) {
        var particle = new ExplosionParticle(this.x, this.y, "explosion", true);
      };
      var shake = new AutoScreenShake(30, 40, true);

      player.stopShield();
      this.destroy();
      game.explode.play();
    }
    else {
      gameOver();
    };
  }
};

function zigZagger(x, y, speed) {
  Enemy.call(this, x, y, speed, "zigzagEnemy");
};

zigZagger.prototype = Object.create(Enemy.prototype);
zigZagger.prototype.update = function() {
  Enemy.prototype.update.call(this);
  this.y = Math.sin(this.x * 0.008) * 245 + 300;
};

function Chaser(x, y, speed) {
  Enemy.call(this, x, y, speed, "chaserEnemy");
  this.ySpeed = 0;
  this.maxSpeed = 3;
  this.acceleration = 0.2;
};

Chaser.prototype = Object.create(Enemy.prototype);
Chaser.prototype.update = function() {
  Enemy.prototype.update.call(this);

  if(this.y < player.y) {
    if(this.ySpeed < this.maxSpeed) {
      this.ySpeed += this.acceleration;
    }
  }
  else {
    if(this.ySpeed > -this.maxSpeed) {
      this.ySpeed -= this.acceleration;
      };
  };
  this.y += this.ySpeed
};

function Speeder(y) {
    Enemy.call(this, 3500, y, 30, "speederEnemy");

    this.warning = game.add.sprite(900, y, "warning");
    this.warning.anchor.setTo(0.5, 0.5);
    this.warning.flash = function() {
      if(this.visible) {
        this.visible = false;
      }
      else {
        this.visible = true;
      };
      game.time.events.add(300, this.flash, this)

    };
    this.warning.flash();
    game.time.events.add(2000,
    function() {
      this.warning.destroy();
    }, this);
};
Speeder.prototype = Object.create(Enemy.prototype);

Speeder.prototype.update = function() {
  Enemy.prototype.update.call(this);
  if(this.x < 900) {
    this.warning.destroy();
  };
};
