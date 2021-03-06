class Block2{
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
        fill(rgb(255, 231, 22))
        rect(pos.x,pos.y,this.width,this.height);
        pop();
      }
}