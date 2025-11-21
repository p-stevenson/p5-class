let dot;
let x, y, xSpeed, ySpeed;
let numDots = [];

function setup () {
  createCanvas(400,400);
  background(50);

  for (let i = 0; i <= 4; i++) {
    let x = random(400);
    let y = random(400);
    let size = random(40, 100);
    dot = new Dot(x,y, size);
    numDots.push(dot);
  }
}

function draw () {
  for (let dot of numDots) {
    dot.body();
  }
}

class Dot {
  constructor (x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  body() {
    fill(255, 0, 0);
    circle(this.x, this.y, this.size);
  }
}