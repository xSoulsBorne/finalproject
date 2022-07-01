let color1 = 255
let color2 = 0
let color3 = 0
let size = 20

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("myCanvas")
}

function changeRed() {
  color1 = 255
  color2 = 0
  color3 = 0
}

function changeBlue() {
  color1 = 0
  color2 = 0
  color3 = 255
}

function changeYellow() {
  color1 = 0
  color2 = 255
  color3 = 0
}

function changeSize20() {
  size = 20
}

function changeSize40() {
  size = 40
}

function changeSize80() {
  size = 80
}

function draw() {
  if (mouseIsPressed) {
    fill(color1, color2, color3);
    ellipse(mouseX, mouseY, size, size);
  }
  noStroke();
}

