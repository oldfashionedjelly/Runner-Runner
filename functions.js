function spawnEnemy() {
  var x = 1000;
  var y = game.rnd.between(50, 590);
  var speed = game.rnd.between(5, 10);
  var image = "enemy" + game.rnd.between(1, 3);
  var enemyType = game.rnd.between(1, 100);

  if(enemyType < 65) {
    var enemy = new Enemy(x, y, speed, image);
  }
  else if(enemyType < 85) {
    var zig = new zigZagger(x, y, speed);
  }
  else if(enemyType < 95) {
    var chase = new Chaser(x, y, speed);
  }
  else {
    var speed = new Speeder(y);
  };

  var timer;
  if(game.score < 30) {
    timer = 2500;
  }
  else if(game.score < 70) {
    timer = 2200;
  }
  else if(game.score < 100) {
    timer = 2000;
  }
  else if(game.score < 150) {
    timer = 1800;
  }
  else if(game.score < 225) {
    timer = 1500;
  }
  else if(game.score < 280) {
    timer = 1300;
  }
  else {
    timer = 1000
  };
  game.time.events.add(timer, spawnEnemy, this);
};

function checkCollision(object1, object2) {
  var distance = Phaser.Math.distance(object1.x, object1.y, object2.x, object2.y);
  if(distance <= object1.size + object2.size) {
    return true;
  }
  else {
    return false;
  };
};

function gameOver() {
  player.destroy();
  game.gameOverText.visible = true;
  game.isGameOver = true;
  game.background.tint = 0xFF000;
  game.gameOver.play();
  if(game.score > game.highScore) {
    game.highScore = game.score;
    game.highScoreText.text = "High Score " + game.highScore;
  };
  game.shopButton.visible = true;

};

function restart() {
  game.gameOverText.visible = false;
  makePlayer();
  game.isGameOver = false;
  game.background.tint = 0xFFFFFF;
  game.score = 0;
  game.shopButton.visible = false;

  while(game.enemyGroup.length > 0) {
    game.enemyGroup.getTop().destroy();
  };
  while(game.coinGroup.length > 0) {
    game.coinGroup.getTop().destroy();
  };
};

function increaseScore() {
  if(!game.isGameOver) {
  game.score += 10;
}
  game.time.events.add(4000, increaseScore, this);
};
 function spawnCoins() {
   var randomNumber = game.rnd.between(1, 6);
   if(randomNumber === 1) {
     game.coinSpawner.zigzag(1000, game.rnd.between(100, 550));
   };
   if(randomNumber === 2) {
     game.coinSpawner.square(1000, game.rnd.between(100, 550));
   };
   if(randomNumber === 3) {
     game.coinSpawner.faces(1000, game.rnd.between(100, 550));
   };
   if(randomNumber === 4) {
     game.coinSpawner.heart(1000, game.rnd.between(100, 550));
   };
   if(randomNumber === 5) {
     game.coinSpawner.diamond(1000, game.rnd.between(100, 550));
   };
   if(randomNumber === 6) {
     var coin1 = new Coin(game.rnd.between(980, 1500), game.rnd.between(100, 550));
     var coin2 = new Coin(game.rnd.between(980, 1500), game.rnd.between(100, 550));
     var coin3 = new Coin(game.rnd.between(980, 1500), game.rnd.between(100, 550));
     var coin4 = new Coin(game.rnd.between(980, 1500), game.rnd.between(100, 550));
   };
   game.time.events.add(game.rnd.between(10000, 17000), spawnCoins, this);
 };

function spawnPowerup() {
  var y = game.rnd.between(50, 590)
  var type = game.rnd.between(1, 5)
  if(type === 1) {
  var pwup = new Shield(1000, y);
  };
  if(type === 2 || type === 3) {
  var pwup = new CoinMagnet(1000, y);
  };
  if(type === 4 || type === 5) {
  var pwup = new Boom(1000, y);
  };
  var time = game.rnd.between(22000, 28000)
  game.time.events.add(time, spawnPowerup, this);
};
