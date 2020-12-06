class Mango {
    constructor(x, y, width, height){
        var options = {
            'friction' : 1,
            'restitution':0,
            'isStatic' : true
        }

        this.body = Bodies.rectangle(x, y, width/2, height/2, options);
        this.image = loadImage("sprites/mango.png");
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
