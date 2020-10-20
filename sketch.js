//Create variables here
var canvas
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var target;
var bg;
var bow,arrow;
function preload()
{
  //load images here
  bg=loadImage("images/background2.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create();
  world = engine.world;
target=new Target (300,600,200,350);
bow = new Bow (displayWidth - 150, displayHeight-300,100,350)
arrow=new Arrow(displayWidth - 150, displayHeight-300,300,50)


console.log(displayWidth-400)
console.log(displayHeight-500 )
}


function draw() {  
  background(bg);
  Engine.update(engine);
 
target.display();
bow.display();
arrow.display();






  drawSprites();
  //add styles here

}
function mouseDragged(){
if(bow.body.position.x>=displayWidth - 400 && bow.body.position.y>=displayHeight - 500  ){
 Matter.Body.setPosition(bow.body, {x: mouseX , y: mouseY});
}
console.log(bow.body.position.x)
console.log(bow.body.position.y)
}

function mouseReleased(){
 
}

function keyPressed(){
  if(keyCode === 32){
  

}


  }


