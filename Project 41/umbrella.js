class Umbrella{
    constructor(){
        var options = {
            isStatic:true
        }

        this.body = Bodies.circle(width/2,480,60,options);
        World.add(world,this.body);

        this.image = loadImage("BoyUmbrella.jpg");
        this.diameter = 40;
    }

    display(){
        push();
            translate(this.body.position.x,this.body.position.y);
            imageMode(CENTER);
            image(this.image,0,0,200,240);
        pop();
    }
}