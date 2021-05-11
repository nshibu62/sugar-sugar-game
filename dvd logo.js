/* global createCanvas, loadImage, background, image, width, height */

let dvdImage;
var x, xVelocity;
var y, yVelocity;
var masterVelocity;
var logoWidth, logoHeight;

function setup(){
  createCanvas(300, 600);
  x = 50;
  y = 50;
  masterVelocity = 1;
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  logoWidth = 200;
  logoHeight = 150;
}

function draw(){
  background(220);
  // Draw the logo at the new position.
  image(dvdImage, x, y, logoWidth, logoHeight);
  if (x > width - logoWidth || x < 0){
    xVelocity = -1*xVelocity;
  }
  if (y > height - logoHeight || y < 0){
    yVelocity = -1*yVelocity;
  }
  x += xVelocity;
  y += yVelocity;
}
