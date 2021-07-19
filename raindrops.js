/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle
drop
*/

let drop1x, drop1y, drop1d, drop1FallSpeed, drops, drop1, drop2, drop3, drop4;
function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
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
  };
  drop3 = {
    x: random(width),
    y: random(height),
    d: 9,
    fallSpeed: 9
  };
  drop4 = {
    x: random(width),
    y: random(height),
    d: 6,
    fallSpeed: 12
  };
  drops = [drop1, drop2, drop3, drop4];
}
function draw() {
  background(95);
  noStroke();
  fill(200,80,50);
  for (let i = 0; i < 4; i++) {
    drop = drops[i];
    drop.y += drop.fallSpeed;
    if (drop.y > height) {
      // ...reset it...
      drop.y = 0;
      // ...and move it somewhere random.
      drop.x = random(width);
    }
    ellipse(drop.x, drop.y, drop.d);
  }
}

function mousePressed() {
 const drop = drops[0];
 console.log(drop.x);
}