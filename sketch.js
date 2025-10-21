function setup() {
  createCanvas(400, 400);
  frameRate(2)
}

function draw() {
  fizzBuzz()
}

function fizzBuzz() {
  stroke(0, 0, 0);
  strokeWeight(5);
  textAlign(CENTER);
  textSize(80);
  background(random(255), random(255), random(255));

  if (frameCount % 3 === 0 && frameCount % 5 === 0) {
    textFont('Calibri');
    textStyle(ITALIC);
    text('FizzBuzz', random(50, 350), random(50, 350));

  }
  else if (frameCount % 3 === 0) {
    textSize(80);
    textStyle(NORMAL);
    text('Fizz', random(50, 350), random(50, 350));

  } else if (frameCount % 5 === 0) {
    textFont('Verdana');
    textSize(80);
    text('Buzz', random(50, 350), random(50, 350));

  }
  else {
    fill(random(255), random(255), random(255));
    textFont('Courier New')
    textSize(random(50, 110));
    textStyle(BOLDITALIC)
    text(frameCount, random(50, 350), random(50, 350));
  }
}