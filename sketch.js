let campoImg, cidadeImg;
let trucks = [];
let signals = [];

function preload() {
  campoImg = loadImage("campo.jpg");
  cidadeImg = loadImage("cidade.jpg");
}

function setup() {
  const canvas = createCanvas(800, 400);
  canvas.parent("canvas-container");
}

function draw() {
  background(220);

  image(campoImg, 0, 0, width / 2, height);
  image(cidadeImg, width / 2, 0, width / 2, height);

  drawLabels();

  for (let t of trucks) {
    t.move();
    t.display();
  }

  for (let s of signals) {
    s.move();
    s.display();
  }
}

function drawLabels() {
  fill(0);
  textSize(32);
  text("🌾 Campo", 5, 30);
  text("🏙️ Cidade", width - 160, 30);
}

function mousePressed() {
  if (mouseX < width / 2) {
    trucks.push(new Truck(mouseX, mouseY));
  } else {
    signals.push(new Signal(mouseX, mouseY));
  }
}


class Truck {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move() {
    this.x += 2;
  }
  display() {
    fill(255, 0, 0);
    rect(this.x, this.y, 70, 30);
    fill(0);
    text("🚛", this.x + 10, this.y + 23);
  }
}

class Signal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  move() {
    this.x -= 2;
  }
  display() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, 50);
    fill(255);
    text("📶", this.x - 22, this.y + 8);
  }
}
