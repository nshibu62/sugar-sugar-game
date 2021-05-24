/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle
drop1, drop2, drop
*/

let drop1x, drop1y, drop1d, drop1FallSpeed, drops;
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
  };
  drops = [drop1, drop2];
}
function draw() {
  background(0, 0, 95);
  noStroke();
  for (let i = 0; i < 1; i++) {
    drop = drop[i];
    drop.y += drop.fallSpeed;
    if (drop.y > height) {
      // ...reset it...
      drop.y = 0;
      // ...and move it somewhere random.
      drop.x = random(width);
    }

    fill(60, 80, 80);
    ellipse(drop.x, drop.y, drop.d);
  }
}