class rope {
    constructor(bodyA,bodyB,offsetX,offsetY) {

        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            length: 12,
            stiffness: 0.02,
            bodyB:(this.offsetX,this.offsetY)
        }

        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        
    }
    display() {
        var PointAX = this.rope.bodyA.position.x;
        var PointAY = this.rope.bodyA.position.y;
        var PointBX = this.rope.bodyB.position.x;
        var PointBY = this.rope.bodyB.position.y;
        strokeWeight(4);
        line(PointAX,PointAY,PointBX,PointBY);
    }
}