/* global createCanvas, background, ellipse, rect, stroke, color, fill, noFill, strokeWeight */

function setup(){
  // Code here runs only once
  createCanvas(800, 600);
}

function sampleDraw(){
  // Code here runs continuously
  background(220);

  // green circle
  stroke(color(0, 255, 0));
  fill(0, 255, 0);
  ellipse(50, 50, 50, 50);
  
  // blue rectangle
  stroke(color(0, 0, 255));
  fill(200, 0, 0);
  rect(100, 100, 200, 300);
  
  //red ellipse
  stroke(color(255, 0, 0));
  noFill();
  ellipse(150, 50, 100, 50);

  //purple ellipse
  stroke(color(80, 0, 100));
  ellipse(50, 150, 50, 100);
  
  //empty yellow circle inside the rectangle
  stroke(color(255, 204, 0));
  strokeWeight(4);
  noFill();
  ellipse(200, 200, 100, 100);
}

function draw(){
  // Code here runs continuously
  background(220);

  strokeWeight(4);

  
  // green circle
  stroke(color(0, 255, 0));
  ellipse(50, 100, 50, 50);
  
    // blue circle
  stroke(color(0, 0, 255));
  ellipse(100, 50, 50, 50);
  
  //red circle
  stroke(color(255, 0, 0));
  ellipse(200, 50, 50, 50);

  //black circle
  stroke(color(80, 80, 100));
  ellipse(50, 150, 50, 50);
  
  //yellow circle
  stroke(color(255, 204, 0));
  ellipse(200, 200, 50, 50);
}