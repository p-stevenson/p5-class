function setup() {
  createCanvas (400, 400)
  background(50, 50, 50)
}

function drawFlower() {
  noStroke();
  fill(random(255), random(255), random(255));
  circle(mouseX -10, mouseY - 10, 20);
  circle(mouseX +10, mouseY - 10, 20);
  circle(mouseX +10, mouseY + 10, 20);
  circle(mouseX -10, mouseY + 10, 20);
  fill(100, 100, 100);
  circle(mouseX, mouseY, 20);
}

function drawGrass() {
   stroke('magenta');
  strokeWeight(5);
  line(mouseX, mouseY, mouseX, mouseY + 30);

}

function mousePressed() {
  drawGrass();
  
}

function keyPressed() {
  if (key === 's') {
    drawFlower();
  } else if (key === 'f') {
    drawGrass();
    drawFlower();
  } else if (key === 'b') {
    background(random(255),random(255),random(255))
  } else if ( keyCode === UP_ARROW) {
    drawFlower();
  }
} 
