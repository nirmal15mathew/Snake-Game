var sound;
var mins = 0;
var secs = 0;
var hours = 0;
var runtime; 
var pause_menu;
var home;
var gohome;
function preload(){
  sound = loadSound('Assets/Clave.ogg')
}
var snake;
var apple;
var control;
var pause;
var score = 0;
var highScore = 0;
var gameboard;
var player_score;
function setup (){
  createCanvas(windowWidth, windowHeight);
  snake = new Snake();
  apple = new Apple();
  pause = createButton('II');
  home = createButton('Home');
  gohome = createA('index.html', '')
  home.attribute('class', 'home');
  home.position(100, 200);
  pause.position(10, 10);
  pause.style('width', '40px');
  pause.style('height', '40px');
  pause.style('border', 'initial');
  control = new Controller(windowWidth-150, windowHeight-80);
  frameRate(15);
  pause_menu = createDiv('<h1>PAUSED</h1>');
  pause_menu.position(width/2-150, 100);
  pause_menu.attribute('class', 'menu');
  highScore = getItem('highscore');
  if(highScore === null){
    highScore = 0;
  }
  gameboard = createDiv('<h1>Game Over</h1>');
  gameboard.attribute('class', 'game-over');
  gameboard.position(100, 100)
  gameboard.style('display', 'none');
  player_score = createDiv();
  player_score.attribute('class', 'player-score')
  high_score = createDiv();
  gameboard.child(player_score);
  gameboard.child(high_score);
  gohome.child(home);
}
function draw(){
  background(51);
  player_score.html('Your Score: ' + score);
  high_score.html('High Score: ' + highScore);
    pause.mousePressed(pauseGame);
    home.mousePressed(warning);
    snake.die();
    snake.update();
    snake.show();
    apple.show();
    control.update();
    control.detect();
  if (dist(apple.x, apple.y, snake.x, snake.y) < snake.scl) {
      snake.grow();
      apple.eat();
      score++;
      sound.play();
  }
  fill(255);
  textSize(20);
  text('🍎 '+score, windowWidth-75, 25);
  runtime = floor(millis()/1000);
  times = floor(runtime/60);
  if(runtime < 59){
    secs = runtime;
  }
  else{
    secs = runtime-60*times;
  }
  mins = floor(runtime/60);
  time_span = '⌛ '+mins + ' : ' + secs;
  text(time_span, 
  windowWidth-75, 50);
}
var clicks = 0;
function pauseGame(){
  if(clicks === 0){
    home.style('display', 'block');
    pause_menu.style('display', 'block');
    select('canvas').style('filter', 'blur(3px)');
    noLoop();
    clicks += 1;
  }
  else if(clicks === 1){
    home.style('display', 'none');
    pause_menu.style('display', 'none');
    select('canvas').style('filter', 'blur(0)');
    loop();
    clicks = 0;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
var sure = false;
function warning(){
  sure = confirm('Are you sure you want to leave?');
  if(!sure){
    gohome.remove();
  }
}