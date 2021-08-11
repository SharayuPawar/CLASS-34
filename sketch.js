var backimg
var ground;
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
  tractor=loadImage('Images/wreckingmachine.png')
  getBackgroundimg();

}

function setup()
{
   createCanvas (1500,650);
   engine = Engine.create();
   world = engine.world;
  
 ground=new Ground(500,650,2000,50);
 box1=new Box(1000,400,50,50)
 box2=new Box(1000,400,50,50)
 box3=new Box(1000,400,50,50)
 box4=new Box(1000,400,50,50)
 box5=new Box(1000,400,50,50)
 box6=new Box(1000,400,50,50)

 box7=new Box(1100,400,50,50);
 box8=new Box(1100,400,50,50);
 box9=new Box(1100,400,50,50);
 box10=new Box(1100,400,50,50);
 box11= new Box(1100,400,50,50);
 box12= new Box(1100,400,50,50);

 box13=new Box(1200,400,50,50);
 box14=new Box(1200,400,50,50);
 box15=new Box(1200,400,50,50);
 box16=new Box(1200,400,50,50);
 box17=new Box(1200,400,50,50);
 box18=new Box(1200,400,50,50);

 ball=new Ball(200,200,100,100);

 rope=new Rope(ball.body,{x:650,y:180});





}
function draw()
{
  
  if(backimg)

    
  background(backimg)
  else
  background('white')
  Engine.update(engine);

image(tractor,40,30,700,600);
ground.display();
fill(' #ff6699')
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();

fill(' #33ccff');
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();

fill('yellow');
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

ball.display();
rope.display();



}

async function getBackgroundimg (){
  var response=await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
  var responseJSON=await response.json();
  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13);
  console.log(hour);
  
  if(hour>06&&hour<=19){
  bg='Images/daycity.png'
  }
  else{
      bg='Images/nightcity.jpg'
  
  }
  backimg=loadImage(bg)
  }
