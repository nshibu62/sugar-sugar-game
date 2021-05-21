/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect
*/

let brushHue

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(95);
}

function draw() {
  chooseColors();
  rect(mouseX, mouseY, 15, 15);
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
  background(95);
}