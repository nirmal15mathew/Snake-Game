class Frog{
  constructor(){
    this.x = 100;
    this.y = 100;
    this.scl = 10;
    this.offs = 0;
  }
  show(){
    fill(10, 240, 10);
    rect(this.x, this.y, this.scl, this.scl);
  }
  update(){
    this.moveAbout();
  }
  eat(){
    this.pickLocation()
  }
  pickLocation(){
    this.x = round(random(1, (windowWidth - (windowWidth % 10) - 10) / 10)) * 10;
    this.y = round(random(1, (windowHeight - (windowHeight % 10) - 10) / 10)) * 10;
  }
  moveAbout(){
    this.x = noise(this.offs)*50;
    this.y = noise(this.offs+random(0, 20))*50;
    this.offs += 0.01;
  }
}