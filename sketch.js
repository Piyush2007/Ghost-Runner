//global variables
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}


function setup(){
  createCanvas(600,600);
  
  spookySound.loop();
  
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY = 5;
  
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.2;
 
  doorsGroup = createGroup();
  climbersGroup = createGroup();
  invisibleBlockGroup = createGroup();
}


function draw(){
background(0);
  
  if(gameState === "play" ){
    
  
  if(tower.y > 400){
    tower.y = 300;
  }
  if(keyDown("space")){
    ghost.velocityY = -10; 
  }
  ghost.velocityY = ghost.velocityY + 1;
  
  if(keyDown("left")){
    ghost.x = ghost.x - 5;
  }
  if(keyDown("right")){
  ghost.x = ghost.x + 5;
  }
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y > 600){
    ghost.destroy();
    gameState = "end";
  }
  
  spawnDoors();
 drawSprites(); 
    
}
if(gameState === "end"){
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("Game Over",230,250);
}
}
function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {
  
    var door = createSprite(200,-50);
    door.addImage(doorImg);
    
    door.x = Math.round(random(90,500));
    door.velocityY = 3;
    door.lifetime = 200;
    
    doorsGroup.add(door);
    //door.scale = 

    var climber = createSprite(200,-10);
    climber.addImage(climberImg);
    
    
    
    climber.x = door.x;
    climber.velocityY = 3;
    climber.lifetime = 200;
    
    climbersGroup.add(climber);
    
    door.depth = ghost.depth;
    ghost.depth = ghost.depth + 1;
    
     invisibleBlock = createSprite(200,-15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    invisibleBlock.x = door.x;
    invisibleBlock.velocityY = 3;
    invisibleBlock.debug = true;
    
    invisibleBlockGroup.add(invisibleBlock);
  }
}
    //climber.scale
    
    
    
    //adjusting depth
    
   

    
    //invisible block
    
    
    
    //add the group
    
    
   
  //}
//}

