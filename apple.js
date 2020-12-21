function Apple(){
  this.x = 100;
  this.y = 100;
  this.scl = 10;
  this.show = function(){
    fill(250, 10, 10);
    rect(this.x, this.y, this.scl,this.scl)
  }
  this.eat = function(){
    this.x = round(random(1, (windowWidth-(windowWidth%10)-10)/10))*10;
    this.y = round(random(1, (windowHeight-(windowHeight%10)-10)/10))*10;
  }
}