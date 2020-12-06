class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.007,
            length: 1
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
         
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }

    display(){

        if(this.rope.bodyA){
            push();
            stroke("blue");
            strokeWeight(4);
            line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y);
            pop();
        }
    }
    
}