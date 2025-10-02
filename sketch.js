let walker;

function setup() {
  createCanvas(400, 400);
  background(220);
  walker = new Walker();
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(35);;
  fill(0)
  point(this.x, this.y);
  }

  step() {
    const choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice === 1){
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else if (choice === 3) {
      this.y--;
    }
  }
}

