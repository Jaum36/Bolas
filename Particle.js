class Particle{
    constructor(x, y){
        var options = {
            restitution: 1,
            friction: 0.3,
            density: 0.8
        }

        this.r = 8.5;
        this.color = color(random(0,255), random(0,255), random(0, 255));
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}