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
  
  if(keyDown("up"));{
  player.y = player.y - 5
}

if(keyIsDown("down"));{
  player.y = player.y +5
}

if(keyIsDown("left"));{
  player.x = player.x  -5
}

if(keyIsDown("right"));{
  player.x = player.x +5
}
}

