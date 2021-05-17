/* global createCanvas, background, ellipse, rect, stroke, color, fill, noFill */

function setup(){
  // Code here runs only once
  createCanvas(800, 600)
}

function draw(){
  // Code here runs continuously
  background(220)

  // green circle
  stroke(color(0, 255, 0))
  fill(0, 255, 0)
  ellipse(50, 50, 50, 50)
  
  // blue rectangle
  stroke(color(0, 0, 255))
  fill()
  rect(100, 100, 200, 300)
  
  //red ellipse
  stroke(color(255, 0, 0))
  noFill()
  ellipse(150, 50, 100, 50)

  //? ellipse
  stroke(color(80, 0, 100))
  ellipse(50, 150, 50, 100)
}