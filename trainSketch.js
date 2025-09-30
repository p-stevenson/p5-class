function setup() {
  createCanvas(400, 400);
  frameRate(12);
}
let baseX = 200;
let baseY = 200;

function draw() {
  baseX -=6
  if (baseX < -120) {
    baseX = 400;
  }
  background(random(0, 255), random(0, 255), random(0, 255));
  fill(50, 200, 255);
  rect(baseX, baseY, 120, 100);
  rect(baseX - 50, baseY + 50, 50, 50);
  fill(255, 0, 0);
  rect(baseX -45, baseY - 30, 35, 80);

  circle(baseX, baseY + 100, 75);
  circle(baseX + 105, baseY + 100, 75);
}