'use strict'
let circleX, circleY, xSpeed, ySpeed;
let numDots = []

function setup() {
  // frameRate(24)
  // noLoop();
  createCanvas(600, 600);
  ySpeed = 2;
  xSpeed = 1;
  background(50);
  for (let i = 0; i < 5; i++) {
    let x = random(400);
    let y = random(400);
    let size = random(40, 100);

    let dot = new Dot(x, y, size);

    numDots.push(dot);
  }
}

function draw() {
  for(let dot of numDots) {
    dot.body();
    dot.move();
    dot.bounce();
  }
  filter(POSTERIZE, 50)
  filter(BLUR, 30);
  filter(DILATE);
}

class Dot {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(1, 4);
    this.ySpeed = random(1, 4);
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
