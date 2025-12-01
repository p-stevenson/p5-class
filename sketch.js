noLoop();
let box1;
let maxHeight
function setup() {
  createCanvas(400, 400);
  box1 = new Box(200,200,30,40);
  rectMode(CENTER);
   maxHeight= 0;
}

class Box {
  constructor(x,y,w,h) {
    this.x = x;
    this.y = y;
    this.ySpeed = 2;
    this.w = w;
    this.h = h;
  }
  
  drawBox() {
    fill(255, 0, 0);
    rect(this.x,this.y,this.w,this.h);
  }
  
  dropBox() {
    this.y += this.ySpeed;
  }

  bounceBox() {

    if(this.y < maxHeight ) {
      console.log(maxHeight);
      this.ySpeed *= -1; 
    }
    if (this.y > height) {
      this.ySpeed *= -1;
      maxHeight += 50;
    }
    console.log(maxHeight);
  }
}

function draw() {
  background(50);
  box1.drawBox();
  box1.dropBox();
  box1.bounceBox();
}