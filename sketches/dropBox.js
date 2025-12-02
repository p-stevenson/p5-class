let box1;
let maxHeight;
function setup() {
  // noLoop();
  createCanvas(400, 400);
  box1 = new Box(200,200,30,40);
  rectMode(CENTER);
   maxHeight= 0;
}

class Box {
  constructor(x,y,d) {
    this.x = x;
    this.y = y;
    this.ySpeed = 2;
    this.d = d;
  }
  
  drawBox() {
    fill(255, 0, 0);
    circle(this.x,this.y,this.d);
  }
  
  dropBox() {
    this.y += this.ySpeed;
  }

  bounceBox() {
    let radius = this.d / 2;
    if(this.y < maxHeight ) {
      console.log(maxHeight);
      this.ySpeed *= -1; 
    }
    if (this.y + radius > height) {
      this.ySpeed *= -1;
      maxHeight += 50;
    }  else if (maxHeight >= this.y + radius) {
      this.ySpeed = 0;
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