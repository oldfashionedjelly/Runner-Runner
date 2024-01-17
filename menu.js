function menuPreload() {
  game.load.spritesheet("player", "assets/players/chimp2.png", 114, 114);
  game.load.spritesheet("blue_pirate", "assets/players/pirate_blue.png", 114, 114);
  game.load.spritesheet("blue_bot", "assets/players/robot_blue.png", 114, 114);
  game.load.spritesheet("green_astro", "assets/players/astronaut_green.png", 114, 114);
  game.load.spritesheet("red_bot", "assets/players/robot_red.png", 114, 114);
  game.load.spritesheet("teal_astro", "assets/players/astronaut_teal.png", 114, 114);
  game.load.spritesheet("super_girl", "assets/players/superhero_female.png", 114, 114);
  game.load.spritesheet("gray_pirate", "assets/players/pirate_gray.png", 114, 114);
  game.load.spritesheet("red_pirate", "assets/players/pirate_red.png", 114, 114);
  game.load.spritesheet("super_dude", "assets/players/superhero_male.png", 114, 114);

  //Load image for enemies
  game.load.spritesheet("enemy1", "assets/enemies/chomper2.png", 114, 114);
  game.load.spritesheet("enemy2", "assets/enemies/zombie.png", 114, 114);
  game.load.spritesheet("enemy3", "assets/enemies/ghost.png", 114, 114);
  game.load.spritesheet("chaserEnemy", "assets/enemies/mine.png", 114, 114);
  game.load.spritesheet("zigzagEnemy", "assets/enemies/bat.png", 114, 114);
  game.load.spritesheet("speederEnemy", "assets/enemies/octopus.png", 114, 114)

  game.load.image("warning", "assets/ui/warning.png");

  game.load.image("background", "assets/backgrounds/background1.png");
  game.load.image("shopBG", "assets/backgrounds/background4.png");

  game.load.bitmapFont("font", "assets/fonts/font5.png", "assets/fonts/font5.fnt");

  game.load.image("coin", "assets/pickups/coin1.png");

  game.load.image("shield", "assets/pickups/powerup2.png");
  game.load.image("coinMagnet", "assets/pickups/powerup1.png");
  game.load.image("boom", "assets/pickups/powerup3.png");

  game.load.image("explosion", "assets/effects/laserRed02.png");
/*
  game.load.audio("backgroundMusic", "assets/music/Mercury.mp3");
  game.load.audio("coinSound", "assets/soundFX/coin1.mp3");
  game.load.audio("gameOver", "assets/soundFX/VictoryMusic.mp3");
  game.load.audio("explode", "assets/soundFX/fire.mp3");
  game.load.audio("powerup", "assets/soundFX/confirmbeep.mp3");
*/
  game.load.image("playButton", "assets/ui/playButton.png");
  game.load.image("shopButton", "assets/ui/shopButton.png");
  game.load.image("backButton", "assets/ui/back.png");

  game.load.image("lock", "assets/ui/lock.png");
};

function menuCreate() {
  game.state.add("menu", menuState);
  game.state.add("game", gameState);
  game.state.add("shop", shopState);

  game.scale.setUserScale(window.innerWidth/960, window.innerHeight/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;

  game.menuBackground = game.add.tileSprite(0, 0, 960, 640, "background");
/*
  var menuText = game.add.bitmapText(game.world.centerX, 170, "font", "Monkey Money")
  menuText.anchor.setTo(0.5, 0.5);
  menuText.scale.setTo(1.7, 1.7);
*/
  var playButton = game.add.button(game.world.centerX, game.world.centerY, "playButton",
    function() {
      game.state.start("game");
    }
);
  playButton.anchor.setTo(0.5, 0.5);
  playButton.scale.setTo(0.7, 0.7);
/*
  var creditsText = game.add.bitmapText(730, 610, "font", "Game by Alexandra Bunch");
  creditsText.scale.setTo(0.3, 0.3);
  creditsText.anchor.setTo(0.5, 0.5);
*/
  game.skinList = [true, false, false, false, false, false, false, false, false, false];
  game.currentSkin = "player";
};

function menuUpdate() {
  game.menuBackground.tilePosition.x -= 2
};
