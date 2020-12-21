var play;
var challenge;
var link;
var chall;
var sn;
var ap;
var settings;
function setup(){
  createCanvas(windowWidth, windowHeight);
  sn = new Snake();
  ap = new Apple();
  play = createButton('START');
  settings = createButton(' ');
  settings.position(30, 30);
  settings.attribute('class', 'settings');
  challenge = createButton('CHALLENGE MODE');
  chall = createA('challenge.html', ' ');
  link = createA('snake_game.html', ' ')
  link.child(play);
  chall.child(challenge);
  challenge.position(100, height/2);
  play.position(100, height/2-100);
  play.attribute('class', 'play');
  challenge.attribute('class', 'chall');
  frameRate(15);
}
var len = 1;
function draw(){
  background(51);
  sn.show();
  sn.update();
  sn.die();
  ap.show();
  if (dist(ap.x, ap.y, sn.x, sn.y) < sn.scl) {
    sn.grow();
    ap.eat();
  }
}
