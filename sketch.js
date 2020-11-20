const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }

  ball=Bodies.circle(200,100,60,options);
  World.add(world,ball);
  
}

function draw() {
  background(0);  
  Engine.update(engine);

  circle(ball.position.x,ball.position.y,60);
  
}