/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random, createSlider, square
mouseIsPressed, priorX, priorY, collideCircleCircle,loadImage,image, round
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, append
textAlign, CENTER, collideLineRect, deltaTime
*/
//Eban, Divita, Nisha

//Divita's global variables
let backgroundColor, spawnTime, numSugarLimit, level, sugarXcenter, sugars, time, sugarHeight, numOfSugar;

//Nisha's global variables
let line_points, simplifiedArr;

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
  spawnTime = 0;
  
  //level select
  if (level == 1) {
    numSugarLimit = 200;
    numOfSugar = 0;
  } //else if
  
  // Initialize objects
  sugars = [];
  cups = []
  cups.push(new Cup("https://cdn.glitch.com/95c25cb1-e960-4da6-85bb-d5109d129e36%2Fmug-removebg-preview%20(1).png?v=1627998051536", 10, height-70, 80, 70))


}


function draw() {
  background(backgroundColor);
  fill(197, 48, 92);
  textSize(60);
  strokeWeight(2);
  text("level 1", 425, 490);
  
  spawnTime -= deltaTime/1000;
  if (spawnTime < 0 && numOfSugar < numSugarLimit){
    sugarXcenter = random(290, 310);
    sugars.push(new Sugar(sugarHeight, sugarXcenter));
    spawnTime = random(0.3, 0.35);
    numOfSugar++;
  }
  
  //if game is not over, then...
  for (let i = 0; i < sugars.length; i++) {    
    sugars[i].draw();
    //handle collision between sugar and lines
    sugars[i].checkSugarLineCollision();
    sugars[i].fall(); 
  }
  
  for (let i = 0; i < cups.length; i++) {
    cups[i].draw()
  }
  
  //draw lines created on canvas
  for (let i = 0; i < line_points.length; i+= 4){
    stroke(197, 48, 92);
    strokeWeight(4);
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
      this.yv = this.yv * 0.99 + this.g;
      this.xv = this.xv * 0.9 + random(-0.05, 0.05) ;
  }
  
  checkSugarLineCollision() {
    for (let i = 0; i < line_points.length; i+= 4){
      let hitLineSquarecollision = collideLineRect(line_points[i],line_points[i+1],line_points[i+2],line_points[i+3], this.x, this.y, this.size, this.size);
      
      if (hitLineSquarecollision) {
        let changeX = (line_points[i+2] - line_points[i]);
        let changeY = (line_points[i+3] - line_points[i+1]);
        
        if (changeY < 0){
          changeY *= -1;
          changeX *= -1;
        }
        let length = Math.sqrt(changeX*changeX + changeY*changeY);
        changeX = changeX/length;
        changeY = (changeY/length);
        console.log("hit");
        this.xv = changeX;
        this.yv = changeY;
      }
    }
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

