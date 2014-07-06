var Path   = Isomer.Path,
    Point  = Isomer.Point,
    Color  = Isomer.Color,
    Shape  = Isomer.Shape,
    Canvas = Isomer.Canvas;

var RAD                 = 57.2957795,
    ROT_DEGS_PER_FRAME  = 0.5,
    CENTER              = new Point(4, 4, 0); 

var x, y, 
    world  = document.getElementById("world"),
    iso    = new Isomer(world),
    canvas = new Canvas(world);

// A table
var table = [
  Shape.Prism(new Point(  5,   5,   0), 0.1, 0.1, 0.5),
  Shape.Prism(new Point(  5, 5.9,   0), 0.1, 0.1, 0.5),
  Shape.Prism(new Point(5.9, 5.9,   0), 0.1, 0.1, 0.5),
  Shape.Prism(new Point(5.9,   5,   0), 0.1, 0.1, 0.5),
  Shape.Prism(new Point(  5,   5, 0.5),   1,   1, 0.1)
];

// The walls
walls = [
  Shape.Prism(Point.ORIGIN,       0.1,   8, 3), 
  Shape.Prism(new Point(8, 0, 0), 0.1,   8, 3),
  Shape.Prism(Point.ORIGIN,         8, 0.1, 3),
  Shape.Prism(new Point(0, 8, 0),   8, 0.1, 3) 
];

function render() {
  canvas.clear();
  for(var i=0; i<walls.length; i++) {
    walls[i] = walls[i].rotateZ(CENTER, ROT_DEGS_PER_FRAME / RAD);
    iso.add(walls[i], new Color(100, 100, 100, 0.2));
  }

  for(var i=0;i<table.length; i++) {
    table[i] = table[i].rotateZ(CENTER, ROT_DEGS_PER_FRAME / RAD);
    iso.add(table[i]);
  }

  requestAnimationFrame(render);
}

render();
