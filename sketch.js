//defined some globally scoped variables that will be used in other parts of the program.
// noloop();
let blob;
let x, y, xSpeed, ySpeed;
//this is the array that will store the newly created blobs.
let numBlobs = [];

//this is a built in p5 function that runs once and only once at startup.
function setup () {
  //here I define the size of my canvas
  createCanvas(600,600);
  // call my mousedPressed() function
  mousePressed();
  // and set the background color to a dark grey
  background(50);
}

//this is a built in function that I have customized. It's job is to perform a 
// certain action if the mouse is clicked inside the canvas.
function mousePressed() {
  //this if statement tells the program what to do if the mousePressed check returns true.
  if(mouseIsPressed === true) {
    //here we assign the mouse position at time of click to our x and y values.
    let x = mouseX;
    let y = mouseY;
    //here we assign a random value between 40 and 100 to the size variable.
    let size = random(40, 100);
    //here I call my Blobr class to create a new object named blob.
    blob = new Blobr(x,y, size);
    numBlobs[numBlobs.length] = blob;
  } 
}

//here I define my Blobr class
class Blobr {
  //this is the class constructor which is a function that stores some default values
  // for each of our objects created from this class. The constructor can also be passed
  // values when it is created.
  constructor (x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-4,4);
    this.ySpeed = random(-4,4);
    //this variable is assigned a random color
    this.col = color(random(255), random(255), random(255));
  }

  //this is our first class method it is used to draw our ball and to give it a color
  body() {
    //the values being assigned to these built in methods are coming from the constructor.
    fill(this.col);
    circle(this.x, this.y, this.size);
  }
  
  //this method sets the speed of our object by incrementing our x and y values per frame with
  //our random xSpeed and ySpeed defined in the constructor.
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  
  //this method is responsible for checking if the ball has reached the edge of the canvas
  // and if it has setting to a new color and changing it's direction.
  bounce() {
    let radius = this.size / 2;
    // the following two if statements do essentially the same thing.
    // checking if the y or x position are great equal to or less than the lowest or highest values of our canvas
    if (this.y + radius >= height || this.y - radius <= 0) {
      //here we change the color
      this.col = color(random(255), random(255), random(255));
      // and here we reverse the speed if true.
      this.ySpeed *= -1;
    }
    if (this.x + radius >= width || this.x - radius <= 0) {
      this.col = color(random(255), random(255), random(255));
      this.xSpeed *= -1;
    }
  }

}

//this is another built in p5 function that tells the program what to draw.
//unlike setup() it is called on every frame.
function draw () {
  // here we loop through our numBlobs array and for each ball present in that array
  // we call the class methods defined in our class.
  for (let i = 0;  i < numBlobs.length; i++) {
    //draw the blob
    numBlobs[i].body();
    // check for bounce and reverse direction if true
    numBlobs[i].bounce();
    // move the blob
    numBlobs[i].move();
  }
  //here I've applied some of p5's built in filters.
  // posterize gives the colours a gradient effect
  filter(POSTERIZE, 50);
  // dilate makes colour spread based on it's brightness
  filter(DILATE);
  // blur is the final pass that will blur those colours accross the screen.
  filter(BLUR, 20);
  // adds a text counter to the bottom right corner
  // updates each time a new Blob is added.
  for (let i = 0; i < numBlobs.length; i++) {
    textSize(50);
    text(numBlobs.length, 500, 550, 80, 80);
  }
}

