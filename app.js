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

var table = new Table(5, 5);
var room   = new Room(0, 0, 0, 8, 8, 3);

function render() {
  canvas.clear();

  for(var i=0; i<room.getParts().length; i++) {
    room.getParts()[i] = room.getParts()[i].rotateZ(CENTER, ROT_DEGS_PER_FRAME / RAD);
    iso.add(room.getParts()[i], new Color(100, 100, 100, 0.2));
  }

  for(var i=0;i<table.getParts().length; i++) {
    table.getParts()[i] = table.getParts()[i].rotateZ(CENTER, ROT_DEGS_PER_FRAME / RAD);
    iso.add(table.getParts()[i]);
  }

  requestAnimationFrame(render);
}

render();
