var Room = function(x, y, z, width, height, depth) {
  this.parts = [
    Shape.Prism(new Point(x        , y         , z), 0.1  , height, depth), 
    Shape.Prism(new Point(x + width, y         , z), 0.1  , height, depth),
    Shape.Prism(new Point(x        , y         , z), width, 0.1, depth),
    Shape.Prism(new Point(x        , y + height, z), width, 0.1, depth) 
  ];
}

Room.prototype.getParts = function() { return this.parts; }