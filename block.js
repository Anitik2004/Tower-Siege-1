class Block{
    constructor(x, y, width, height) {
        var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        push();
        //translate(pos.x, pos.y);
        var pos = this.body.position;
        rectMode(CENTER);
        fill(rgb(2, 209, 232))
        rect(pos.x,pos.y,this.width,this.height);
        pop();
      }
}