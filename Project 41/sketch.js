const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var maxDrops = 100;
var drops = [];

var umbrellaObj;

function preload(){

}

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    for(var i = 0; i < maxDrops; i++){
        drops.push(new Raindrops(random(0,600),random(0,400)));
    }

    umbrellaObj = new Umbrella();
}

function draw(){
    background(0);

    for(var k = 0; k < drops.length; k++){
        drops[k].display();
    }

    umbrellaObj.display();
}