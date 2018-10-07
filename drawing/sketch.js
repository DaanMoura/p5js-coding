function setup() {
  createCanvas(640, 480);
  noStroke();
  size_slider = createSlider(1, 100, 25, 0.5);
}

function draw() {
  size = size_slider.value();
  if (mouseIsPressed) {
    fill(-mouseX, -mouseY, mouseX);
  } else {
    fill(mouseX - mouseY, mouseY, mouseX);
  }
  ellipse(mouseX, mouseY, size);
}
