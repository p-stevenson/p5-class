let x = 0;
let y = 0;

let moveUp = y-5;
let moveDown = y+5;
let moveLeft = x-5;
let moveRight = x+5;

function setup() {
  createCanvas(400, 400);
  background(50);
}

function draw() {
  fill(255, 0, 0)
  circle(x, y, 50)

  if(keyIsPressed && keyCode == UP_ARROW) {
    y += moveUp 
  } else if (keyIsPressed && keyCode == DOWN_ARROW) {
    y += moveDown
  } else if (keyIsPressed && keyCode == LEFT_ARROW) {
    x += moveLeft
  } else if (keyIsPressed && keyCode == RIGHT_ARROW ) {
    x += moveDown
  }
}