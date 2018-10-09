function setup() {
  createCanvas(800, 600);
  stroke(255);
  noFill();
  slider_a = createSlider(0.1, 10, 1, 0.1);
  slider_b = createSlider(0.1, 10, 1, 0.1);
  slider_m = createSlider(0.1, 20, 1, 0.01);
  slider_n1 = createSlider(0.1, 10, 1, 0.1);
  slider_n2 = createSlider(0.1, 10, 1, 0.1);
  slider_n3 = createSlider(0.1, 10, 1, 0.1);
  slider_a.position(20, 80);
  slider_b.position(20, 110);
  slider_m.position(20, 140);
  slider_n1.position(20, 170);
  slider_n2.position(20, 200);
  slider_n3.position(20, 230);
}

function superformula(theta) {
  let a = slider_a.value();
  let b = slider_b.value();
  let m = mouseX / 50;
  let n1 = slider_n1.value();
  let n2 = slider_n2.value();
  let n3 = slider_n3.value();

  let part1 = pow(abs((1 / a) * cos((m / 4) * theta)), n2);
  let part2 = pow(abs((1 / b) * sin((m / 4) * theta)), n3);
  let part3 = pow(part1 + part2, 1 / n1);
  if (part3 === 0) {
    return 0;
  }
  return 1 / part3;
}

function draw() {
  background(50);
  translate(width / 2, height / 2);

  let radius = 150;
  beginShape();
  for (let a = 0; a < TWO_PI; a += 0.01) {
    r = superformula(a);
    let x = radius * r * cos(a);
    let y = radius * r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}
