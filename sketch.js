//QUESTION  why does this code run in Live Server even though the variables are not declared?

/* ANSWER It runs because the browser is executing your script in non‑strict (“sloppy”) mode. In sloppy mode, assigning to an undeclared identifier (e.g., circleX = 50) creates an implicit global variable on window, so p5 can use it later in draw. Live Server serves your script as a normal <script> (not type="module"), so strict rules don’t apply.

To make this fail fast and avoid leaking globals, either enable strict mode or declare the variables. */

//QUESTION Why can't i declare my variables directly inside setup?

/*ANSWER Because of scope. Variables you declare with let/const inside setup are local to that function, so draw (a different function called every frame) can’t see them. When you skipped declarations earlier, the assignments created implicit globals in sloppy mode, so it “worked,” but only by leaking to window. You also have a typo: ySpped vs ySpeed, which helps create that accidental global.

Declare them in a scope both setup and draw share (top-level), or use p5’s instance mode. */

'use strict'
let circleX, circleY, xSpeed, ySpeed;
function setup() {
  createCanvas(400, 400);
  circleY = 50;
  circleX = 50;
  ySpeed = 2;
  xSpeed = 1;
}

function draw() {

  background(50);
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
}
