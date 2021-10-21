script type="text/processing"

void setup() {
  size(400,200);
  textAlign(CENTER, CENTER);
  background(255);
  fill(255,230,75);
  text("", width/2, height/2);
  noLoop();
}

void draw() {
}

void mouseMoved() {
  stroke(255);
  point(mouseX, mouseY);
  redraw();
}

void mousePressed() {
  line(0,mouseY,width,mouseY);
  line(mouseX,0,mouseX,height);
  println(mouseX, mouseY);
}
