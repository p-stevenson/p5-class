function setup() {
  createCanvas(400, 400)
  frameRate(60);
  background(20)
  // noLoop();
}

function  draw() {
  let x = 0;
  let y = 0;
  // background(20)
  fill(random(255), random(255), random(255));
  for(let i = frameCount; i % 10 === 0; i++) {
    x=i;
    y=i;
    let curveY = 200 + 100 * sin(x * 0.05);
    circle(x, curveY, 10);
  }
}