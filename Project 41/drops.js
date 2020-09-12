class Raindrops{
    constructor(x,y){
        var options = {
            friction:0.1
        }
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x,this.y,2.5,options);
        World.add(world,this.body);
    }

    display(){
        push();
            translate(this.body.position.x,this.body.position.y);
            ellipseMode(RADIUS);
            fill(0,255,255);
            ellipse(0,0,5,5);
        pop();

        this.body.position.y += 7;

        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)});
        }
    }
}