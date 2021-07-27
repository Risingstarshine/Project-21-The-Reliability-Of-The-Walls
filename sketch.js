var bullet;
var thickness;
var speed;
var weight;
var wall;
var lbullet, bulletRightEdge;
var wallLeftEdge, lwall;
var Lbullet, Lwall;
//var hasCollided;




function setup() {
  createCanvas(1600,400);
 
 
  bullet = createSprite(400, 200, 16, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  //bullet.colide(wall);

 thickness = random(22, 38);
 weight = random(30, 52);
 speed = random(223, 321);

 wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "blue"
}

function draw() {
  background(0, 0, 0);  
  
  
  
  if (hasCollided(bullet, wall))
{
   bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage > 10)
    {
      wall.shapeColor = "red"; 
    
    }

  
  
  
    if(damage < 10)
  {
    wall.shapeColor = "green";
  }

}

  Collided();

  drawSprites();

}


function hasCollided(Lbullet, Lwall)
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge)
{
   return true
}
  return false;

}




