function setup() {
  // frameRate(5)
  createCanvas(400, 400);
  background(220);
  walker = new Walker();
  // walker2 = new Walker();
  // walker3 = new Walker();
  // walker4 = new Walker();
}

function draw() {
  walker.step();
  walker.show();
  walker.sing();
  // walker2.step();
  // walker2.show();
  // walker3.step();
  // walker3.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  show() {
  // noStroke();
  stroke(1);
  fill(random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(1);
  circle(this.x, this.y, 75);
  }

  //favour downRight
  step() {
    let stuff = [-3, 0, 3];
    let xStep = random(stuff);
    let yStep = random(stuff);
    textSize(30);

    const r = random(1);
    if (r < 0.25) {
      this.x += 3
      text("RIGHT", this.x + 50, this.y);
    } else if ( r < 0.5) {
      this.x -= 3
      text("LEFT", this.x - 100, this.y);
    } else if ( r < 0.75) {
      this.y += 3
      text("UP", this.x, this.y + 50);
    } else {
      this.y -= 3
      text("DOWN", this.x, this.y - 50);
    }
    // this.x += xStep;
    // this.y += yStep;
  }

  sing() {
    const probability = 0.1;
    const r = random(1);
    if (r < probability) {
      print("Sing!")
    }
  }
}

