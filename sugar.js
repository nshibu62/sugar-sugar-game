/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random, createSlider
mouseIsPressed, mousePressed, priorX, priorY, collideCircleCircle,loadImage,image
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, append, point
*/
//Eban, Divita, Nisha

let backgroundColor, line_points;


function setup() {
  createCanvas(600, 500);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = (32, 95, 61);
  
  line_points = [];

}

function draw() {
  background(backgroundColor);

  for (let i = 0; i < line_points.length; i+= 4){
    line(line_points[i],line_points[i+1],line_points[i+2],line_points[i+3]);
  }
}

function mousePressed(){
  stroke(10);
  fill(255);
  
  line_points.push(mouseX);
  line_points.push(mouseY);
  console.log(line_points);
  console.log(line_points.length);

}