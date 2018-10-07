function setup() {
  createCanvas(800, 600);
  noStroke();
  size_slider = createSlider(0, 1500, 300, 1);
  r_slider = createSlider(1, 10, 2, 0.1);
  l_slider = createSlider(1, 10, 2, 0.1);
}

function draw() {
  background(20);
  size = size_slider.value();
  r = r_slider.value();
  l = l_slider.value();
  drawCircleH(width / 2, size, 6);
  //drawCircleV(width / 2, height / 2, size);
}

function drawCircleH(x, size, level) {
  var tt = 126 * (level / 4.0);
  fill(tt);
  ellipse(x, height / 2, size);
  if (level > 1) {
    level--;
    drawCircleH(x + size / r, size / 2, level);
    drawCircleH(x - size / l, size / 2, level);
    //drawCircleH(x, y + d / r, d / 2);
    //drawCircle(x, y + d / 2, d / 2);
  }
}

function drawCircleV(x, y, d) {
  stroke(255);
  var tt = 126 * (d / 4.0);
  fill(tt);
  ellipse(x, y, d);
  if (d > 0.5) {
    drawCircleV(x, y + d / r, d / 2);
    drawCircleV(x, y - d / l, d / 2);
    //drawCircle(x, y + d / 2, d / 2);
  }
}
