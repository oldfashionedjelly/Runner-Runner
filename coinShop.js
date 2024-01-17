function shopPreload() {};

function shopCreate() {
  var background = game.add.sprite(0, 0, "shopBG");

  var titleText = game.add.bitmapText(game.world.centerX, 100, "font", "SHOP");
  titleText.anchor.setTo(0.5, 0.5);
  titleText.scale.setTo(2, 2);

  var backButton = game.add.button(25, 25, "backButton",
  function() {
    game.state.start("game");
  }
  );
  game.coinText = game.add.bitmapText(935, 25, "font", "Coins " + game.coinScore.toString());
  game.coinText.anchor.setTo(1, 0);

  var defaultMonkey = new Skin(960 / 2 - 160 - 160, 270, "player", "MASTER\nMONKEY", "free", 0);
  var green_astro = new Skin(game.world.centerX - 160, 270, "green_astro", "JEREMY\nTHE ASTRONAUT", 15, 1);
  var pirate = new Skin(game.world.centerX, 270, "blue_pirate", "CAPTIAN\nADITI", 25, 2);
  var blue_bot = new Skin(game.world.centerX + 160, 270, "blue_bot", "BOBO\nTHE BOT", 50, 3);
  var red_bot = new Skin(game.world.centerX + 160 + 160, 270, "red_bot", "PATRICIA", 70, 4);
  var teal_astro = new Skin(960 / 2 - 160 - 160, 270 + 200, "teal_astro", "SAMI", 95, 5);
  var super_girl = new Skin(game.world.centerX - 160, 270 + 200, "super_girl", "LUCY GOOSE", 115, 6);
  var red_pirate = new Skin(game.world.centerX, 270 + 200, "red_pirate", "SWASHBUCKLE\nSTEVE", 145, 7);
  var super_dude = new Skin(game.world.centerX + 160, 270 + 200, "super_dude", "BUILD-IT\nBOB", 175, 8);
  var gray_pirate = new Skin(game.world.centerX + 160 + 160, 270 + 200, "gray_pirate", "LES\nESCARGOTS", 200, 9);

};

function shopUpdate() {
  game.coinText.text = "Coins  " + game.coinScore.toString();
};

function Skin(x, y, image, name, price, id) {
  Phaser.Sprite.call(this, game, x, y, image);
  this.image = image
  this.id = id
  game.add.existing(this);
  this.anchor.setTo(0.5, 0.5);
  this.nameText = game.add.bitmapText(this.x, this.y + 60, "font", name);
  this.nameText.anchor.setTo(0.5, 0.5);
  this.nameText.scale.setTo(0.4, 0.4);

  this.price = price;
  this.purchased = game.skinList[id];

  if(!this.purchased) {
    this.lock = game.add.sprite(this.x, this.y, "lock");
    this.lock.anchor.setTo(0.5, 0.5);

    this.priceText = game.add.bitmapText(this.x, this.y + 85, "font", "price " + this.price.toString())
    this.priceText.anchor.setTo(0.5, 0.5);
    this.priceText.scale.setTo(0.4, 0.4);
  };

  this.inputEnabled = true;
  this.events.onInputDown.add(this.click, this);
};
Skin.prototype = Object.create(Phaser.Sprite.prototype);

Skin.prototype.click = function() {
  if(this.purchased) {
    game.currentSkin = this.image;
  }
  else {
    if(game.coinScore >= this.price) {
      game.coinScore -= this.price;
      this.lock.destroy();
      this.priceText.destroy();
      this.purchased = true;
      game.skinList[this.id] = true;
    };
  };
};
