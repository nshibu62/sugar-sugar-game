/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random, createSlider, square
mouseIsPressed, priorX, priorY, collideCircleCircle,loadImage,image
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, append
textAlign, CENTER
*/
//Eban, Divita, Nisha

//Divita's global variables
let backgroundColor, level, sugarXcenter, sugars, time, sugarHeight, numOfSugar;

//Nisha's global variables
let line_points;

//Eban's global variables
let sugarLeft, cups;

function setup() {
  createCanvas(600, 500);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = color(203, 96, 42);

  //if level 1 button clicked:
  level = 1;
  
  //if level 2 button clicked:
  //level = 2;
    
  //Set up initial values and initialize objects
  setupGame();
  line_points = [];
}

function setupGame() {
  // Initialize values
  sugarHeight = 0;
  
  //level select
  if (level == 1) {
    numOfSugar = 200;
  } //else if
  
  // Initialize objects
  sugars = [];
  for (let i = 0; i < numOfSugar; i++) {
    sugarXcenter = random(290, 310);
    sugars.push(new Sugar(sugarHeight, sugarXcenter));
    sugarHeight -= 10;
  }
  
  cups = []
  cups.push(new Cup("https://cdn.glitch.com/95c25cb1-e960-4da6-85bb-d5109d129e36%2Fmug-removebg-preview%20(1).png?v=1627998051536", 10, height-70, 80, 70))


}


function draw() {
  background(backgroundColor);
  fill(197, 48, 92);
  textSize(60);
  text("level 1", 425, 490);
  
  //if game is not over, then...
  for (let i = 0; i < sugars.length; i++) {    
    sugars[i].draw();
    sugars[i].fall();
  }
  for (let i = 0; i < cups.length; i++) {
    cups[i].draw()
  }
  
  //draw lines created on canvas

  for (let i = 0; i < line_points.length; i+= 4){
    stroke(15);
    fill(197, 48, 92);
    line(line_points[i],line_points[i+1],line_points[i+2],line_points[i+3]);
  }
  
}

class Sugar {
  constructor(sugarHeight, sugarXcenter) {
    this.x = sugarXcenter;
    this.y = sugarHeight;
    this.size = 3;
    this.yv = random(0.1, 0.2);
    this.xv = random(-0.1, 0.1);
    this.g = 0.005;
  }
  
  draw() {
    noStroke();
    fill(360, 0, 100);
    square(this.x, this.y, this.size);
  }
  fall() {
    //if (!(lineCollide && cupCollide))
    this.x += this.xv;
    this.y += this.yv;
    if (this.yv < 0.3) {
      this.yv += this.g;
    }
    if (this.x > sugarXcenter + 5 || this.x < sugarXcenter - 5){
      this.xv = this.xv * -1;
    }
  }
  
  checkSugarLineCollision() {

  }
}


class Cup {
  constructor(imgLink, x, y, w, h) {
    this.img = loadImage(imgLink)
    sugarLeft = numOfSugar
    // top left corner of the cup image
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
  draw() {
    image(this.img, this.x, this.y, this.w, this.h)
    fill(backgroundColor)
    textSize(20)
    textAlign(CENTER)
    text(sugarLeft, this.x+this.w/2.5, this.y+this.h/2)
  }
  
}

//create line when two points clicked 
function mousePressed(){  
  line_points.push(mouseX);
  line_points.push(mouseY);
  console.log(line_points);
  console.log(line_points.length);

}
