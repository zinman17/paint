function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  if (mouseIsPressed) {
    strokeWeight(4);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
}
