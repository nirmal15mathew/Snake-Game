function Controller(x, y){
  this.x = x;
  this.y = y;
  this.margin = 75;
  this.upButton = createButton(' ');
  this.downButton = createButton(' ');
  this.rightButton = createButton(' ');
  this.leftButton = createButton(' ');
  this.update = function(){
    this.upButton.position(this.x, this.y - this.margin);
    this.downButton.position(this.x, this.y);
    this.rightButton.position(this.x + this.margin, this.y);
    this.leftButton.position(this.x - this.margin, this.y)
  }
  this.upButton.style('background-image', 'url(Assets/arrows.png)');
  this.downButton.style('background-image', 'url(Assets/downwards.png)');
  this.rightButton.style('background-image', 'url(Assets/right.png)');
  this.leftButton.style('background-image', 'url(Assets/left.png)');
  this.detect = function(object){
    this.upButton.mousePressed(goup);
    this.downButton.mousePressed(godown);
    this.rightButton.mousePressed(goright);
    this.leftButton.mousePressed(goleft)
  }
}
let i = 0;
let xpos = 0;
let ypos = 0;
function touchStarted(){
  if(i === 0){
    i++;
    xpos = mouseX;
    ypos = mouseY
  } 
}
function touchEnded(){
  if(i === 1){
    i--;
    let delx = xpos - mouseX;
    let dely = ypos - mouseY;
    if(abs(delx)>abs(dely)){
      if(delx<0){
        goright();
      }
      if(delx>0){
        goleft();
      }
    }
    else if(abs(delx)<abs(dely)){
      if(dely < 0){
        godown();
      }
      if(dely > 0){
        goup();
      }
    }
  }
}
function goup() {
  if(snake.yspeed != 10){
  snake.dir(0, -10);
  }
}

function godown() {
  if(snake.yspeed != -10){
  snake.dir(0, 10)
  }
}

function goright() {
  if(snake.xspeed != -10){
  snake.dir(10, 0)
  }
}

function goleft() {
  if(snake.xspeed != 10){
  snake.dir(-10, 0)
  }
}