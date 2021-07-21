/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, append
*/

let drops;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  
  //load images
  loadImage('')
  
  
  drops = [
  ];
  
  for (let i = 0; i < 10; i++){
    append(drops, {
      x: random(width),
      y: random(height),
      d: random(5, 15),
      fallSpeed: random(8, 20)});
  }
}

function draw() {
  background(0, 0, 95);
   
  
  for (let i = 0; i < drops.length; i++){
    let drop = drops[i];
    drop.y += drop.fallSpeed;
    if (drop.y > height) {
      drop.y = 0;
      drop.x = random(width);
    }
    noStroke();
    fill(60, 80, 80);
    ellipse(drops[i].x, drops[i].y, drops[i].d);
    
  }
}


function mousePressed() {
  for (let j = 0; j < drops.length; j++){
    let drop = drops[j];
    console.log('Drop ' + (j+1) + ' x Value:');
    console.log(drop.x);
  }
}