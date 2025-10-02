function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
  stroke(0);
  point(this.x, this.y);
  }

  step() {
    let choice = floor(random(4));
    
  }
}

