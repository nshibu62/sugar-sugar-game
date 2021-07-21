/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle
*/

let drop1x, drop1y, drop1d, drop1fallSpeed, drop1, drop2, drop3, drop4, drops;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);

  drops = [
    {
      x: 200,
      y: 0,
      d: 10,
      fallSpeed: 8
    },
    {
      x: random(width),
      y: random(height),
      d: random(5, 15),
      fallSpeed: random(8, 20)
    },
    {
      x: random(width),
      y: random(height),
      d: random(5, 15),
      fallSpeed: random(8, 20)
    },
    {
      x: random(width),
      y: random(height),
      d: random(5, 15),
      fallSpeed: random(8, 20)
    }
  ];
}

function draw() {
  background(0, 0, 95);
   
  for (let i=0; i < drops.length; i++){
    drops[i].y += drops[i].fallSpeed;
    if (drops[i].y > height) {
      drops[i].y
    }
    ellipse(drops[i].x, drops[i].y, drops[i].d);
    
  }
  
  
  //// Code for droplet 1
  // Move droplet 1
  let drop = drops[0];
  drop.y += drop.fallSpeed;
  // If it goes off the screen...
  if (drop.y > height) {
    // ...reset it...
    drop.y = 0;
    // ...and move it somewhere random.
    drop.x = random(width);
  }
  // Display droplet 1
  noStroke();
  fill(60, 80, 80);
  ellipse(drop.x, drop.y, drop.d);
  
  //// Code for droplet 2
  drop = drops[1];
  // Move droplet 2
  drop.y += drop.fallSpeed;
  // If it goes off the screen...
  if (drop.y > height) {
    // ...reset it...
    drop.y = 0;
    // ...and move it somewhere random.
    drop.x = random(width);
  }
  // Display droplet 2
  ellipse(drop.x, drop.y, drop.d);
  
  // Code your droplet 3
  drop = drops[2];
  // Move droplet 3
  drop.y += drop.fallSpeed;
  // If it goes off the screen...
  if (drop.y > height) {
    // ...reset it...
    drop.y = 0;
    // ...and move it somewhere random.
    drop.x = random(width);
  }
  // Display droplet 3
  ellipse(drop.x, drop.y, drop.d);
}

/*
function mousePressed() {
  console.log('Drop 1 x Value:');
  console.log(drop1.x);
  
  console.log('Drop 2 x Value:');
  console.log(drop2.x);
  
  console.log('Drop 3 x Value:');
  console.log(drop3.x);
}*/