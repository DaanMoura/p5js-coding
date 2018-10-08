function setup() {
  createCanvas(800, 600);
  angle_slider = createSlider(0, TWO_PI, PI / 6, 0.05);
  len_slider = createSlider(0, 600, 100, 1);
}

function draw() {
  background(20);
  angle = angle_slider.value();
  len = len_slider.value();
  stroke(255);
  translate(width / 2, height);
  branch(len);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
