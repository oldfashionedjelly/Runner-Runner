var gameState = {preload: preload, create: create, update: update};
var menuState = {preload: menuPreload, create: menuCreate, update: menuUpdate};
var shopState = {preload: shopPreload, create: shopCreate, update: shopUpdate};

//This first line creates our game object.
var game = new Phaser.Game(960, 640, Phaser.AUTO, 'game', menuState);
var player;

//Load all of your textures and sounds
function preload() {

};
//Do all of your initial setup
function create() {
  game.mainMusic = game.add.audio("backgroundMusic");
  game.coinSound = game.add.audio("coinSound");
  game.explode = game.add.audio("explode");
  game.gameOver = game.add.audio("gameOver");
  game.powerup = game.add.audio("powerup");

  game.mainMusic.play("", 0, 0.5, true);

  game.background = game.add.tileSprite(0, 0, 960, 640, "background");

  game.enemyGroup = game.add.group();
  game.coinGroup = game.add.group();

  game.gameOverText = game.add.bitmapText(game.world.centerX, game.world.centerY - 80, "font", "GAME OVER\nTap to Restart");
  game.gameOverText.anchor.setTo(0.5, 0.5);
  game.gameOverText.align = "center";//
  game.gameOverText.visible = false;

  game.shopButton = game.add.button(890, 600, "shopButton",
  function() {
    game.state.start("shop");
    game.mainMusic.stop();
  }
);
  game.shopButton.anchor.setTo(0.5, 0.5);
  game.shopButton.scale.setTo(0.5, 0.5);
  game.shopButton.visible = false;

  game.score = 0
  game.scoreText = game.add.bitmapText(25, 25, "font", "SCORE: ");
  increaseScore();

  if(!game.highScore) {
  game.highScore = 0;
  };
  game.highScoreText = game.add.bitmapText(25, 60, "font", "High Score " + game.highScore.toString());
  game.highScoreText.scale.setTo(0.5, 0.5);

  if(!game.coinScore) {
  game.coinScore = 0;
  };
  game.coinText = game.add.bitmapText(935, 25, "font", "Coins  " + game.coinScore.toString());
  game.coinText.anchor.setTo(1, 0);

  makePlayer();

  spawnEnemy();

  spawnPowerup();

  spawnCoins();
};
//Write all of your continuous game logic here
function update() {
  game.background.tilePosition.x -= 4

  if(game.input.activePointer.justPressed() && game.isGameOver) {
    restart();
}

  game.scoreText.text = "Score " + game.score.toString();
  game.coinText.text = "Coins " + game.coinScore.toString();

  effects.update();
};
