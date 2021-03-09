
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,rubber1,stone,plane,rubber2,rubber3,rubber4;




function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(10,100);
	rubber1 = new Rubber(300,450,50);
	rubber2 = new Rubber(400,450,50);
	rubber3 = new Rubber(500,450,50);
	rubber4 = new Rubber(600,450,50);
	plane = new Plane(600,height,1200,20);
	stone = new Stone(800,320,100,100);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


 hammer.display();
 rubber1.display();
 plane.display();
 stone.display();
 rubber2.display();
 rubber3.display();
 rubber4.display();
}



