/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random, createSlider
mouseIsPressed, priorX, priorY, collideCircleCircle,loadImage,image
keyCode, UP_ARROW, textSize, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, consol, collideRectCircle, append
*/

let drops, numDrops, person, hit, cloud, slider, max;
let personX, personV, cloudX, cloudV;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  
  //load images
  person = loadImage('https://cdn.glitch.com/2adfe987-b026-4c83-934e-40f7d5f35d66%2F1-removebg-preview%20(1).png?v=1626878913521');
  cloud = loadImage('https://cdn.glitch.com/2adfe987-b026-4c83-934e-40f7d5f35d66%2Fd6b7e0d2a30743bd44e553006785e5f4.png?v=1626879961420');
  

  //slider
  max = 50;
  slider = createSlider(5, max, 10, 5);
  slider.position(10, 510);
  slider.style('width', '80px');
  
  //create array of drops
  drops = [
  ];
  for (let i = 0; i < max; i++){
    append(drops, {
      x: random(width),
      y: random(75, 500),
      d: random(5, 15),
      fallSpeed: random(8, 20)});
  }
  
  //person controls
  personX = 0;
  personV = 1;
  
  //cloud controls
  cloudX = 0;
  cloudV = 0.25;
  

}

function draw() {
  background(0, 0, 80);

  numDrops = slider.value();
  
  fill(0,0,0);
  text("Rain", 30, 490);
  
  //person walking
  image(person, personX, 305, 140, 200);
  personX += personV;
  if (personX > 500){
    personX = 0;
  }
  
  //clouds
  image(cloud, cloudX, -50, 500, 300);
  image(cloud, (cloudX-300), -50, 500, 300);
  image(cloud, (cloudX-400), -50, 500, 300);
  image(cloud, (cloudX-500), -50, 500, 300);
  cloudX += cloudV;
  if (cloudX > 500){
    cloudX = 0;
  }
  
  
  for (let i = 0; i < numDrops; i++){
    let drop = drops[i];
    drop.y += drop.fallSpeed;
    if (drop.y > height) {
      drop.y = 75;
      drop.x = random(width);
    }
    noStroke();
    fill(random(50,60), 80, 80);
    ellipse(drops[i].x, drops[i].y, drops[i].d);
    
  }
  
  for (let j = 0; j < drops.length; j++){
    hit = collideRectCircle(personX, 305, 140, 200, drops[j].x, drops[j].y, drops[j].d);
    if (hit){
      drops[j].y = 75;
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