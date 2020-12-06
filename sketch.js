const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, tree, stone, boy, mango1, mango2, mango3, mango4, mango5, rope, floor;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 700, 800, 10);
	tree = new Tree(600, 500, 250, 400);
	stone = new Stone(100, 570, 35, 35);
	boy = new Boy(250, 600, 170, 200);

	mango1 = new Mango(650, 400, 50, 50);
	mango2 = new Mango(580, 420, 50, 50);
	mango3 = new Mango(680, 450, 50, 50);
	mango4 = new Mango(540, 450, 50, 50);
	mango5 = new Mango(630, 350, 50, 50);

	rope = new Rope(stone.body, {x : 190, y : 560});

	floor = new FLOOR(200, 700, 200, 100);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  
  ground.display();
  tree.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  rope.display();

  floor.display();

  
  textSize(20);
  fill("red");
  
  text("Press SPACE to SHOOT AGAIN", 200, 200);

  if(stone.body.position.x - mango1.body.position.x >= 0){
  	detectCollision(stone, mango1);
  }

  if(stone.body.position.x - mango2.body.position.x >= 0){
	detectCollision(stone, mango2);
}

if(stone.body.position.x - mango3.body.position.x >= 0){
	detectCollision(stone, mango3);
}

if(stone.body.position.x - mango4.body.position.x >= 0){
	detectCollision(stone, mango4);
}

if(stone.body.position.x - mango5.body.position.x >= 0){
    detectCollision(stone, mango5);
}
  
  
  //detectCollision(stone, mango1);
  //detectCollision(stone, mango2);
  //detectCollision(stone, mango3);
  //detectCollision(stone, mango4);
  //detectCollision(stone, mango5);

}



function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    rope.fly();
}

function detectCollision(stone, mango){
	mangoBodyPosition = mango.body.position;
	stoneBodyPosition = stone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance=mango.body+stone.body){
		Matter.Body.setStatic(mango.body, false);
	}
}


function keyPressed(){
	if(keyCode == 32){
		Matter.Body.setPosition(stone.body, {x : 100, y : 570});
		rope.attach(stone.body);
	}
}

