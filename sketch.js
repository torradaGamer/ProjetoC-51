var player


function preload(){



}


function setup() {
  createCanvas(800,400);
  player = createSprite(400, 200, 50, 50);
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

if(keyIsDown("UP_ARROW"));{
  player.y += 5
}

if(keyIsDown("DOWN_ARROW"));{
  player.y -= 5
}

if(keyIsDown("LEFT_ARROW"));{
  player.x -=  5
}

if(keyIsDown("RIGHT_ARROW"));{
  player.x +=  5
}