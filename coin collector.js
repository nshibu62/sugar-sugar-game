/* global createCanvas, colorMode, HSB, color, noStroke, fill, noFill, strokeWeight,
background, ellipse, text, stroke, line, globalS, globalB
width, height, mouseX, mouseY, rect, ellipse, random
mouseIsPressed, priorX, priorY, collideCircleCircle
*/


let brushHue, backgroundColor, coinX, coinY, score, time, gameIsOver, hit;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  backgroundColor = 95;
  coinX = random(width);
  coinY = random(height);
  time = 1000;
  score = 0;
  gameIsOver = false;
}

function draw() {
  background(backgroundColor);
  ellipse(coinX, coinY, 20);
  ellipse(mouseX, mouseY, 20);
  text(`Time remaining: ${time}`, 20, 40);
  text(`Score: ${score}`, 20, 60);
  handleTime();
  
  hit = collideCircleCircle(coinX, coinY, 20, mouseX, mouseY, 20);
  text(hit, 20, 20)
  if (hit){
    handleCollision();
  }
}

function handleCollision() {
  // We'll write code for what happens if your character hits a coin.
  if (!gameIsOver){
    coinY = random(height);
    coinX = random(width);
    score += 1;
  }
}

function handleTime() {
  // We'll write code to handle the time.
  if (time > 0){
    time -= 1;
  } else {
    gameIsOver = true;
  } 
}