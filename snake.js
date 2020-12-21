function Snake(){
  this.x = 100;
  this.y = 100;
  this.xspeed = 10;
  this.yspeed = 0;
  this.scl = 10;
  this.len = 1;
  this.body = [];
  this.show = function(){
    noStroke()
    fill(240);
    rect(this.x, this.y, this.scl, this.scl);
    for(var i = 1;i<this.len;i++){
      fill(240-(i*5));
      rect(this.body[this.body.length - i].x,this.body[this.body.length - i].y, this.scl, this.scl)
    }
  }
  this.update = function(){
    this.body.push(createVector(this.x, this.y))
    this.x += this.xspeed;
    this.y += this.yspeed;
    if(this.x > windowWidth){
      this.x = 0;
    }
    if(this.x < 0){
      this.x = windowWidth;
    }
    if(this.y > windowHeight){
      this.y = 0;
    }
    if(this.y < 0){
      this.y = windowHeight;
    }
  }
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }
  this.grow = function(){
    this.len++;
  }
  this.die = function(){
    var dead = false;
  for(var y = 1; y < this.len; y++){
    var bodx = this.body[this.body.length - y].x;
    var boy = this.body[this.body.length - y].y;
    var d = dist(this.x, this.y, bodx, boy);
    if(d < 10){
      if(score >= highScore){
        highScore = score;
        storeItem('highscore', highScore);
      }
      gameOver()
      noLoop();
      score = 0;
      this.len = 1;
    }
  }
  }
}
function gameOver(){
  textSize(25);
  gameboard.style('display', 'block');
  return(true)
}