
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Boy;
function preload()
{
 
}

function setup() {
	createCanvas(1200, 500);
  background(179,191,189);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree = new Tree(100,250,300,350)
    tree.scale=0.0125
    stoen = new Stone(100,250)
    stoen.scale=0.5
    fruit = new Mango(300,0.0125,50,2)
    fruit.scale=0.005
    console.log(stoen)
	Engine.run(engine);
 
 
}


function draw() {
  rectMode(CENTER);
  
  tree.display();
  stoen.display();
  fruit.display();
  drawSprites();
 
}



