function setup() {
  createCanvas(400, 400);
  frameRate(3);
  rectMode(CENTER);
}


function draw() {
  let circleX = random(height)
  let circleY = random(width)
  let houseX = circleX  + cos(frameCount * random(0.1, 2)) * 100;
  let houseY = circleY + sin(frameCount * random(0.1, 2)) * 100;
  let win1X = houseX - 20;
  let win2Y = houseY + 20;
  let flowerDiameter = random(30, 100);
  let petalSize = flowerDiameter / 2  ; 
  
  stroke(random(0, 100), random(0,100), random(0,100));
  strokeWeight(random(1, 3));

  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX - petalSize, circleY - petalSize , flowerDiameter, flowerDiameter);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX + petalSize, circleY + petalSize , flowerDiameter, flowerDiameter);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX - petalSize, circleY + petalSize , flowerDiameter, flowerDiameter);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX + petalSize, circleY - petalSize , flowerDiameter, flowerDiameter);
  fill(random(0, 255), random(0, 255), random(0, 255));
  ellipse(circleX, circleY, flowerDiameter, flowerDiameter);
  

  rect(houseX, houseY, 80, 100);

  triangle(houseX - 50, houseY - 50, houseX + 50, houseY - 50, houseX, houseY - 100);

  fill(10, 75, 200);
  rect(win1X, win2Y - 40, 20, 30);
  rect(win1X + 40, win2Y - 40, 20, 30);
}
