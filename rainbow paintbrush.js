/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY,
*/

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(25);
  priorX = 0;
  priorY = 0;
}

function draw() {
  chooseColors();
  if (mouseIsPressed) {
//  rect(mouseX, mouseY, 15, 15);
    line(priorX, priorY, mouseX, mouseY)
  }
  priorX = mouseX
  priorY = mouseY
}

function chooseColors() {
  if (brushHue < 360){
    brushHue += 1;
  } else {
    brushHue = 0;
  }
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed() {
  background(25);
}

//function mousePressed() {
// ellipse(random(width), random(height), 30, 30);
//}