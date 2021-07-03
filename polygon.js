class Polygon { 
    constructor(x, y, radius) {

        var options = {
             isStatic: false,
            'restitution':0.5,
            'friction':1.5,
            'density':2.0,
        }

        this.body = Bodies.circle(x, y, radius/2, options);
        //this.radius = 10;
        this.width = 40;
        this.height = 40;
        this.image = loadImage('Sprites/polygon.jpg');
        World.add(world, this.body);
}
 
    display() {
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}