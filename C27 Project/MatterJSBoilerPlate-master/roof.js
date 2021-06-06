class roof {
    constructor(x,y,width,height) {
        
        var modifications = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,modifications);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var posX = this.body.position.x;
        var posY = this.body.position.y;
        var angle = this.body.angle;
        push();
        strokeWeight(3);
        stroke("red");
        translate(posX , posY);
        rotate(angle);
        rectMode(CENTER);
        pop();
    }
}