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

  

}

function mousePressed(){
   stroke(0);
   line_points.push(mouseX);
    line_points.push(mouseY);
   console.log(line_points);
   console.log(line_points.length);

    if(line_points.length === 4){
        line(line_points[0],line_points[1],line_points[2],line_points[3]);
        line_points = [];
    }
  
}