/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random, createSlider, square
mouseIsPressed, priorX, priorY, collideCircleCircle,loadImage,image, round
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, append
textAlign, CENTER, collideLineRect, collideRectRect, deltaTime
*/
//Eban, Divita, Nisha

//Divita's global variables
let backgroundColor, table1, table2Collision, table2, tableCollision, tableX, tableY, tableWidth, tableHeight, spawnTime, numSugarLimit, level, sugarXcenter, sugars, time, sugarHeight, numOfSugar;

//Nisha's global variables
let line_points;

//Eban's global variables
let sugarLeft, cups, sugarsAlreadyCaught;

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
  sugarsAlreadyCaught = []
}

function setupGame() {
  // Initialize values
  sugarHeight = 0;
  spawnTime = 0;
  tableCollision = false;
  
  //level select
  if (level == 1) {
    numSugarLimit = 200;
    numOfSugar = 0;
    sugarLeft = 100;
    tableX = 0;
    tableY = height -20;
    tableWidth = width;
    tableHeight = 20;
    table1 = new Table(tableX, tableY, tableWidth, tableHeight);
  } //else if
  
  // Initialize objects
  sugars = [];
  cups = []
  cups.push(new Cup(10, height-90, 80, 70))


}


function draw() {
  background(backgroundColor);
  fill(197, 48, 92);
  textSize(60);
  strokeWeight(2);
  text("level 1", 450, 480);
  
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
    
    //handle collision between table and lines
    sugars[i].checkTableCollision();
    
    //handle collision between sugar and lines
    sugars[i].checkSugarLineCollision();
    sugars[i].fall(); 
  }
  
  for (let i = 0; i < cups.length; i++) {
    cups[i].draw()
  }
  table1.draw();
  drawTable2();

  
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
  
  checkTableCollision() {
    tableCollision = collideRectRect(this.x, this.y, this.size, this.size, tableX, tableY, tableWidth, tableHeight);
    if (tableCollision){
      this.yv = 0;
      this.xv = 0;
      this.y = height - tableHeight - this.size;
      this.g = 0;
    }
  }
  
  fall() {
    //if (!(lineCollide && cupCollide))
    if(!(tableCollision)){
      this.x += this.xv;
      this.y += this.yv;
      this.yv = this.yv * 0.99 + this.g;
      this.xv = this.xv * 0.9 + random(-0.05, 0.05) ;
    }
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
        changeY = changeY/length;
        console.log("hit");
        this.xv = changeX;
        this.yv = changeY;
      }
    }
  }
  
  
}


class Cup {
  constructor(x, y, w, h) {
    this.img = loadImage("https://cdn.glitch.com/95c25cb1-e960-4da6-85bb-d5109d129e36%2Fmug-removebg-preview%20(1).png?v=1627998051536")
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


class Table {
  constructor(tableX, tableY, tableWidth, tableHeight) {
    this.x = tableX;
    this.y = tableY;
    this.width = tableWidth;
    this.height = tableHeight;
  }
  
  draw (){
    fill(197, 48, 92);
    rect(this.x, this.y, this.width, this.height);
  }
}


function collideSugarCup() {
  let hit;
  for (let cup of cups) {
    for (let sugar of sugars) {
      hit = collideRectRect(cup.x, cup.y, cup.w*0.75, 30,
        sugar.x, sugar.y, sugar.size, sugar.size)
      if (hit && sugarLeft > 0 && sugarsAlreadyCaught.indexOf(sugar) == -1) {
        sugarLeft--;
        sugarsAlreadyCaught.push(sugar);
      }
    }
  }
}

function drawTable2() {
  fill(197, 48, 92);
  rect(150, 125, 200, 20);
  for (let sugar of sugars) {
    table2Collision = collideRectRect(sugar.x, sugar.y, sugar.size, sugar.size, 150, 125, 200, 20);
    if (table2Collision){
        sugar.yv = 0;
        sugar.xv = 0;
        sugar.y = 122;
        sugar.g = 0;
    }
  }
}