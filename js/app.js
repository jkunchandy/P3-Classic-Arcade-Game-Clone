// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
  this.x = 0;
  this.y = 230 * Math.random();
  this.speed = 10 + Math.random()*200; //defines bug's random start position and random speed

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.  (distance=rate x time)
    if (this.x >400) { this.x=0; this.y = 230 * Math.random();}
    else {
        this.x+= this.speed * dt;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // Starting position for Player. (0,0) is top left of screen
    this.x = 230 * Math.random();
    this.y = 350;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
}

// This class requires an update(), render() and
// a handleInput() method.
// move Player back to bottom when water at top reached
Player.prototype.update = function() {
    if (allPlayers.length)
        if (this.y<=0) this.y=400;
}

// draw Player on screen
Player.prototype.render = function() {
    if (allPlayers.length)
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// check user directed movement of Player and reposition Player to next location in direction of keypress
// use === to check both type and value
Player.prototype.handleInput = function(keyPressed) {
    if (keyPressed === 'up') {
        if (this.y <=0) this.y=400;
        else this.y -=15;
    }
    else
    if (keyPressed === 'down') {
        if (this.y <=400) this.y +=15;
    }
    else
    if (keyPressed === 'left') {
        if (this.x <=0) this.x=400;
        else this.x -=15;
    }
    else
    if (keyPressed === 'right') {
        if (this.x >=400) this.x=0;
        else this.x +=15;
    }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy();
var enemy2 = new Enemy();
var enemy3 = new Enemy();
var enemy4 = new Enemy();
var allEnemies = [enemy1,enemy2,enemy3,enemy4];
// Place the player object in a variable called player
// Give user 3 players for the game
var player1 = new Player();
var player2 = new Player();
var player3 = new Player();
var allPlayers = [player1,player2,player3];
var player = allPlayers[2];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
