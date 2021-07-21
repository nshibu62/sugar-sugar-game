/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle
*/

let drop1x, drop1y, drop1d, drop1fallSpeed, drop1, drop2, drop3;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  
  // Variables for droplet 1
  drop1 = {
    x: 200,
    y: 0,
    d: 10,
    fallSpeed: 8
  }

  // Variables for droplet 2
  drop2 = {
    x: random(width),
    y: random(height),
    d: random(5, 15),
    fallSpeed: random(8, 20)
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
  // Move droplet 2
  drop2.y += drop2.fallSpeed;
  // If it goes off the screen...
  if (drop2.y > height) {
    // ...reset it...
    drop2.y = 0;
    // ...and move it somewhere random.
    drop2.x = random(width);
  }
  // Display droplet 2
  ellipse(drop2.x, drop2.y, drop2.d);
  
  // Code your droplet 3
  // Move droplet 3
  drop3.y += drop3.fallSpeed;
  // If it goes off the screen...
  if (drop3.y > height) {
    // ...reset it...
    drop3.y = 0;
    // ...and move it somewhere random.
    drop3.x = random(width);
  }
  // Display droplet 3
  ellipse(drop3.x, drop3.y, drop3.d);
}

function mousePressed() {
  console.log('Drop 1 x Value:');
  console.log(drop1.x);
  
  console.log('Drop 2 x Value:');
  console.log(drop2.x);
  
  console.log('Drop 3 x Value:');
  console.log(drop3.x);
}