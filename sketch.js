function setup () {
  createCanvas (400, 400);
  frameRate(1)
}

function draw () {
  background(30);
  star2();
  star2();
  star2();
  star2();
  star2();
  star2();
  star2();
}

function star(x,y,length) {
  noStroke()
  fill (255)
  triangle(x,y - length * 0.25, x - length * 0.5, y + length * 0.5, x + length * 0.5, y + length * 0.5)
  triangle(x - length * 0.5,y, x + length * 0.5, y, x , y + length * 0.75)
}



function star2 () {
  noStroke();
  let starSize = random(4, 20)
  let centerX = random(20, 380);
  let centerY = random(0, 150);
  let centerYOffset = centerY - starSize * 1.45;
  fill(random(200, 220), random(230, 240), random(240, 255));
  triangle(centerX - starSize, centerY - starSize, 
            centerX + starSize, centerY - starSize, 
            centerX, centerY);
  triangle(centerX  + starSize, centerYOffset + starSize, 
            centerX - starSize, centerYOffset + starSize, 
            centerX, centerYOffset);
}