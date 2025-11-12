function setup () {
  createCanvas(600, 600)
  frameRate(8);
  // noLoop();
}


function draw () {
  background(0);
  for(let lineX = 20; lineX <= 600; lineX += 20) {
    strokeWeight(random(1,10))
    stroke(random(255), random(255), random(255))
    // line(lineX, 0, lineX, 600)
    stroke(random(10), random(150, 200), random(255))
    line(400, 400, 0, lineX)

  }
    for(let lineY = 20; lineY <= 600; lineY += 20) {
    stroke(random(255), random(255), random(255))
    strokeWeight(random(1,10))
    // line(0, lineY, 600, lineY);
    stroke(random(255), random(200, 255), 0);
    line(lineY, 0, 0, 400);
  }
  fill(255, 0, 0);
  filter(DILATE)
  filter(POSTERIZE, 2)
  filter(ERODE)
  filter(BLUR, 10)
}

