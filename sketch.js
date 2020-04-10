var movingrect;
var fixedrect;

function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(400, 100, 80, 30);
  fixedrect = createSprite(400, 800, 50, 80);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  movingrect.velocityY = 3;
  fixedrect.velocityY = -3;
}

function draw() {
  background(255,255,255);  
if(movingrect.x-fixedrect.x < movingrect.width/2 + fixedrect.width/2
&& fixedrect.x-movingrect.x < fixedrect.width/2 + movingrect.width/2)
{
movingrect.velocityX = movingrect.velocityX * (-1);
fixedrect.velocityX = fixedrect.velocityX * (-1);
}
if(movingrect.y-fixedrect.y < movingrect.height/2 + fixedrect.height/2
  && fixedrect.y-movingrect.y < fixedrect.height/2 + movingrect.height/2)
  {
  movingrect.velocityY = movingrect.velocityY * (-1);
  fixedrect.velocityY = fixedrect.velocityY * (-1);
  }

  drawSprites();
}