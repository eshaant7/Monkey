var backImage,backgr, ground;
var bananaImg, obstacleImg;
var foodGroup, obstacleGroup;
var score, playerRunning, player, invisGround;


function preload(){
  backImage=loadImage("jungle2.jpg");
  playerRunning=loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_10.png");
  
  bananaImg=loadImage("Bananas.png");
  obstacleImg=loadImage("stone.png");

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  

  
  backgr.x = backgr.width/2;
  backgr.scale = 1.5;
  ground = createSprite(400, 400, 800, 20);
  ground.visible = false;
  
  player = createSprite(200, 300, 20, 20);
  player.addAnimation("Running",playerRunning);
  
  player.scale = 0.2;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  
  score = 0;
  
  invisGround = createSprite(400,390,800,20);
  
  invisGround.visible = false;
}

function draw() {

  background(255);
  
  food();
  obstacles();
    backgr.velocityX = -5;
  if(backgr.x<0){
    
     backgr.x = backgr.width/2;
     
     }
  
  if(foodGroup.isTouching(player)){
     score = score+2;
     }
  
  if(obstacleGroup.isTouching(player)){
     score = score-1;
    obstacleGroup.destroyEach();
     }
  if(foodGroup.isTouching(player)){
     score++;
    foodGroup.destroyEach();
     }
  if(keyDown("space")){
     player.y =  player.y-20;
     }
  player.velocityY = player.velocityY+0.3;
  player.collide(invisGround);
  
  
  switch(score){ 
    case 10: player.scale = 0.2;
    break;
    case 20: player.scale = 0.25;
    break;
    case 30: player.scale = 0.3;
    break;
    case 40: player.scale = 0.35;
    break;
       case 50: player.scale = 0.4;
    break;
       case 60: player.scale = 0.45;
    break;
    default:break;
         }
  
  drawSprites();
  
  fill("black");
  textSize(40);
  text("score:"+score, 400, 100);
}
function food(){
  if(frameCount%80===0){
    var banana = createSprite(400, random(120, 200), 10, 10);
    banana.addImage("Banana",bananaImg);

    banana.velocityX = -8;
    banana.lifetime = 50;
    banana.scale = 0.03;
    foodGroup.add(banana);
  }
}
function obstacles(){
if(frameCount%90===0){
  var obstacle = createSprite(400, 360,10,10);
  obstacle.addImage("obstacle",obstacleImg);
  obstacle.velocityX = -8;
  obstacle.lifetime = 50;
  obstacle.scale = 0.2;
  obstacleGroup.add(obstacle);
   }
}