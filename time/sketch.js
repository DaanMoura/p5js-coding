function setup() {
  createCanvas(800, 600);
  noStroke();
}

function draw() {
  hrCircle();
  mnCircle();
  scCircle();
}

function hrCircle() {
  let hr = hour();
  fill(255, 0, 0);
  ellipse(width / 5, height / 2, 5 * hr);
}

function mnCircle() {
  let mn = minute();
  fill(0, 255, 0);
  ellipse((2 * width) / 5, height / 2, 5 * mn);
}

function scCircle() {
  let sc = second();
  fill(0, 0, 255);
  ellipse((3 * width) / 5, height / 2, 5 * sc);
}
