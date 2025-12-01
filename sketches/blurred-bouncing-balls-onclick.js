'use strict'
let dot
let x, y, xSpeed, ySpeed;
let numDots = [];
// noLoop();

function setup () {
  createCanvas(600,600);
  mousePressed();
  background(50);
}

function mousePressed() {
  if(mouseIsPressed === true) {
    let x = mouseX;
    let y = mouseY;
    let size = random(40, 100);
    dot = new Dot(x,y, size);
    numDots.push(dot);
  } 
}

class Dot {
  constructor (x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-4,4);
    this.ySpeed = random(-4,4);
    this.col = color(random(255), random(255), random(255));
  }

  body() {
    fill(this.col);
    circle(this.x, this.y, this.size);
  }
  
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  
  bounce() {
    let radius = this.size / 2;
    if (this.y + radius >= height || this.y - radius <= 0) {
      this.col = color(random(255), random(255), random(255));
      this.ySpeed *= -1;
    }
    if (this.x + radius >= width || this.x - radius <= 0) {
      this.col = color(random(255), random(255), random(255));
      this.xSpeed *= -1;
    }
  }

}

function draw () {
  for (let dot of numDots) {
    dot.body();
    dot.bounce();
    dot.move();
  }
  filter(POSTERIZE, 50);
  filter(DILATE);
  filter(BLUR, 20);
}

