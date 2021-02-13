let iterations = 100
let offset = 0;
let opacity = 100
let wobble = 28;
let cWidth;
let rotationSlowness = 400;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cWidth = width / 6;
  cHeight = height / 6;
  frameRate(20);
}

function draw() {
  background(0);

  noFill()
  
  
  // big shape
  for (let i = 0; i < iterations; i++) {
    let thing = noise(offset + i / 60) * width * 1 / wobble;
    // let thing = 0;
    let red = noise(offset + i / 100) * 255;
    
    push();
    translate(width / 2 - width * 1 / (wobble * 2) + thing, height / 2.4 + i * 1.4 - iterations)
    rotate(-PI / 2.0);
    rotate(frameCount / (rotationSlowness + i));
    stroke(red + 10, red / 8, red / 8, opacity)
    polygon(0,0, height / 3.4, 6)
    pop();
    
    push();
    translate(width / 2 - width * 1 / (wobble * 2) + thing, height / 2.4 + i * 1.4 - iterations)
    rotate(-PI / 2.0);
    rotate(-frameCount / (rotationSlowness + i));
    stroke(red + 50, red, red / 5, opacity)
    polygon(0, 0, height / 4.4, 3)

    stroke(100, red + 50, red + 50, opacity)
    circle(0,0, height/8)
    pop();
  

  // little shape
  // for (let i = 0; i < iterations / 4; i++) {
  if (i % 4 ===0) {
    let colour = noise(offset + i / 10) * 255;
    stroke(colour + 10, colour, 0, opacity)
    ellipse(width / 5, height - height / 56 + i/4 * 1.4 - iterations, cHeight / 2, cHeight / 2)
    stroke(colour + 50, colour, 0, opacity)
    ellipse(width / 5, height - height / 56 + i/4 * 1.4 - iterations, cHeight / 3, cHeight / 3)

    stroke(0, colour, colour + 10, opacity)
    ellipse(width * 2 / 5, height - height / 56 + i/4 * 1.4 - iterations, cHeight / 2, cHeight / 2)
    stroke(134, colour - 50, colour + 50, opacity)
    ellipse(width * 2 / 5, height - height / 56 + i/4 * 2.3 - iterations - (cHeight / 2 - cHeight / 3) / 2, cHeight / 3, cHeight / 3)

    stroke(colour + 10, 0, 0, 60)
    ellipse(width * 3 / 5, height - height / 56 + i/4 * 1.4 - iterations, cHeight / 2, cHeight / 2)
    stroke(colour + 50, colour, 0, opacity)
    ellipse(width * 3 / 5, height - height / 56 + i/4 * 1.4 - iterations, cHeight / 4, cHeight / 4)

    stroke(0, colour, colour + 50, opacity)
    ellipse(width * 4 / 5, height - height / 56 + i/4 * 1.4 - iterations, cHeight / 2, cHeight / 2)
    stroke(0, colour, colour + 10, opacity)
    ellipse(width * 4 / 5, height - height / 56 + i/4 * 1.4 - iterations, cHeight / 3, cHeight / 3)
  }
  }
  offset += 0.01

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  // fill(colour);
  // noStroke();
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

if (window.DeviceOrientationEvent) {
  window.addEventListener('orientationchange', function() {
    location.reload();
  }, false);
}