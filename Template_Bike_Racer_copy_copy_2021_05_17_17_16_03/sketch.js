var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var oppo2running,oppo3running;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

var oppo;
var oppo2;
var oppo3;
var cycleBell;
var player2;
var player3;


function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  
oppo1 = loadImage("images/download.png");

oppo2=loadImage("images/images.jpg");
  oppo3=loadImage("images/images-1.jpg");
cycleBell=loadSound("sound/bell.mp3");
  
  
}


function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
//sprite for oppo2
  player2= createSprite(250,100,20,20);
  player2.addAnimation("oppo2running",oppo2);
  player2.scale=0.6;
  
  //sprite for oppo3
  player3=createSprite(400,200,30,30);
 player3.addAnimation("oppo3running",oppo3);
 player3.scale=0.5;
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  
  if(gameState===PLAY){
  distance = distance + Math.round(getFrameRate()/50);
   mainCyclist.y = World.mouseY;

  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    
    
    
 }
  
}

