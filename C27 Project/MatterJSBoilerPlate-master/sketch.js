const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1,roof2,roof3,roof4,roof5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(100,600,10,10);
	bob2 = new bob(150,600,10,10);
	bob3 = new bob(200,600,10,10);
	bob4 = new bob(250,600,10,10);
	bob5 = new bob(300,600,10,10);

	roof1 = new roof(200,400,60,5);

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0),
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0),
	rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0),
	rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0),
	rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0),

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display(); 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:0})
	  if(bob1.body.velocity.x === 0 & keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:50,y:0})
	  }
	}
  }