'use strict'
let circleX, circleY, xSpeed, ySpeed;
function setup() {
  createCanvas(400, 400);
  circleY = 50;
  circleX = 50;
  ySpeed = 2;
  xSpeed = 1;
  background(50);
}

function draw() {

  circle(circleX, circleY, 50);
  
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  if(circleY + 25 > height) {
    fill(random(255), random(255), random(255));
    ySpeed = random(-1, -4);
  } else if ( circleY - 25 < 0) {
    fill(random(255), random(255), random(255));
    ySpeed = random(1, 4);
  }
  if(circleX + 25 > width) {
    fill(random(255), random(255), random(255));
    xSpeed = random(-1, -4);
  } else if (circleX - 25 < 0) {
    fill(random(255), random(255), random(255));
    xSpeed = random(1, 4);
  }
  filter(BLUR, 6)
  filter(DILATE)
}
