function setup () {
  createCanvas(400, 400);
  // background(220);
  frameRate(1)
}

function drawTrain(baseX, baseY,) {
  fill(50, 200, 255);
  rect(baseX, baseY, 120, 100);
  rect(baseX - 50, baseY + 50, 50, 50);
  fill(255, 0, 0);
  rect(baseX -45, baseY - 30, 35, 80);
  circle(baseX, baseY + 100, 75);
  circle(baseX + 105, baseY + 100, 75);
}

function drawFlower(baseX, baseY, flowerSize) {
    fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(baseX - flowerSize * 0.5, baseY - flowerSize * 0.5, flowerSize, flowerSize);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(baseX + flowerSize * 0.5, baseY + flowerSize  * 0.5, flowerSize, flowerSize);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(baseX - flowerSize * 0.5, baseY + flowerSize * 0.5, flowerSize, flowerSize);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(baseX + flowerSize * 0.5, baseY - flowerSize * 0.5, flowerSize, flowerSize);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(baseX, baseY, flowerSize, flowerSize);
}

function drawHouse(houseX, houseY){
  rect(houseX, houseY, 80, 100);
  triangle(houseX - 50, houseY - 50, houseX + 50, houseY - 50, houseX, houseY - 100);
  fill(10, 75, 200);
  rect(win1X, win2Y - 40, 20, 30);
  rect(win1X + 40, win2Y - 40, 20, 30);
}

function draw () {
  drawFlower(random(50, 350), random(50, 350), random(20,50));
  drawTrain(random(50,350), random(50, 350))
  // drawHouse(200,200);
}