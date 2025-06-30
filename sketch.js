let trucks = [];
let signals = [];

function setup() {
  const canvas = createCanvas(800, 400);
  canvas.parent("canvas-container");
}

function draw() {
  background(220);

  drawField();
  drawCity();

  for (let t of trucks) {
    t.move();
    t.display();
  }

  for (let s of signals) {
    s.move();
    s.display();
  }
}

function drawField() {
  fill(100, 200, 100);
  rect(0, 0, width / 2, height);
  fill(0);
  textSize(16);
  text("🌾 Campo", 20, 30);
}

function drawCity() {
  fill(180);
  rect(width / 2, 0, width / 2, height);
  fill(0);
  textSize(16);
  text("🏙️ Cidade", width - 100, 30);
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
    rect(this.x, this.y, 40, 20);
    fill(0);
    textSize(14);
    text("🚛", this.x + 5, this.y + 15);
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
    ellipse(this.x, this.y, 20);
    fill(255);
    textSize(14);
    text("📶", this.x - 7, this.y + 5);
  }
}
