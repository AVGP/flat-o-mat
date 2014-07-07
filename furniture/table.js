var Table = function(x, y) {
  this.parts = [
    Shape.Prism(new Point(      x,       y,   0), 0.1, 0.1, 0.5),
    Shape.Prism(new Point(      x, y + 0.9,   0), 0.1, 0.1, 0.5),
    Shape.Prism(new Point(x + 0.9, y + 0.9,   0), 0.1, 0.1, 0.5),
    Shape.Prism(new Point(x + 0.9,       y,   0), 0.1, 0.1, 0.5),
    Shape.Prism(new Point(      x,       y, 0.5),   1,   1, 0.1)
  ];
}

Table.prototype.getParts = function() {
  return this.parts;
}