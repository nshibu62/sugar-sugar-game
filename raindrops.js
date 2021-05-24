/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle
drop1, drop2, 
*/


let drop1x, drop1y, drop1d, drop1FallSpeed;
function setup() {
createCanvas(500, 500);
colorMode(HSB, 100);
// Variables for droplet 1
drop1 = {
  x: 200,
  y: 0,
  d: 14,
  fallSpeed: 8
};
// Variables for droplet 2
drop2 = {
  x: random(width),
  y: random(height),
  d: 8,
  fallSpeed: 7
}
}
function draw() {
background(0, 0, 95);
//// Code for droplet 1
// Move droplet 1
drop1.y += drop1.fallSpeed;
// If it goes off the screen...
if (drop1.y > height) {
  // ...reset it...
  drop1.y = 0;
  // ...and move it somewhere random.
  drop1.x = random(width);
}
// Display droplet 1
noStroke();
fill(60, 80, 80);
ellipse(drop1.x, drop1.y, drop1.d);
//// Code for droplet 2
// Code your next droplet here
}
function mousePressed() {
console.log(drop1.x);
}