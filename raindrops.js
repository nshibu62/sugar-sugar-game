/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle,loadImage,image
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, append
*/

let drops, person, hit, cloud;
let personX, personV;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  
  //load images
  person = loadImage('https://cdn.glitch.com/2adfe987-b026-4c83-934e-40f7d5f35d66%2F1-removebg-preview%20(1).png?v=1626878913521');
  
  
  drops = [
  ];
  
  for (let i = 0; i < 10; i++){
    append(drops, {
      x: random(width),
      y: random(height),
      d: random(5, 15),
      fallSpeed: random(8, 20)});
  }
  
  //person controls
  personX = 0;
  personV = 1;
}

function draw() {
  background(0, 0, 80);
  
  //person walking
  image(person, personX, 305, 140, 200);
  personX += personV;
  if (personX > 500){
    personX = 0;
  }
  
  
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
  
  for (let j = 0; j < drops.length; j++){
    hit = collideRectCircle(personX, 305, 140, 200, drops[j].x, drops[j].y, drops[j].d);
    if (hit){
      drops[j].y = 0;
    }
  }
}


function mousePressed() {
  for (let j = 0; j < drops.length; j++){
    let drop = drops[j];
    console.log('Drop ' + (j+1) + ' x Value:');
    console.log(drop.x);
  }
}