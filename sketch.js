let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;
  // rectMode(CENTER);
}

function draw() {
  background(220);
  drawFace(randomWalk());
  // drawFace(randomWalk(x, y));
  // drawFace(randomWalk(x, y));
}


function drawFace({x, y}) {
  strokeWeight(2);
  fill(255, 255, 0); //
  ellipse(x, y, random(70,75), random(60,75)); // Face
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(x - 10, y - 10, 20, 20); // Left eye
  ellipse(x + 10, y - 10, 20, random(8, 15)); // Right eye
  arc(x, y + 10, 20, 20, 0, PI); // Smile
  fill(0); // Pupil color
  circle(x - 10, y - 10, 3); // Left pupil
  circle(x + 10, y - 10, 3); // Right pupil
}

function randomWalk() {
  const r = floor(random(4));
  switch (r) {
    case 0:
      x = x + 3;
      break;
    case 1:
      x = x - 3;
      break;
    case 2:
      y = y + 3;
      break;
    case 3:
      y = y - 3;
      break;
  }
  return {x, y};
}

