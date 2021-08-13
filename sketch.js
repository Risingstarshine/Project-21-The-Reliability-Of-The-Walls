var bullet;
var thickness;
var speed;
var weight;
var wall;
var lbullet, bulletRightEdge;
var wallLeftEdge, lwall;
var Lbullet, Lwall;





function setup() {
  createCanvas(1600,400);
 
 
  bullet = createSprite(500, 300, 13, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  //bullet.colide(wall);

 thickness = random(22, 83);
 weight = random(30, 52);
 speed = random(223, 321);

 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0, 0, 0);  
  
  //bullet.colide(wall);

  
  //if (hasCollided(bullet, wall))
//{
  // bullet.velocityX = 0;
  //var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  //if(damage > 10)
    //{
      //wall.shapeColor = color(255, 0, 0); 
    
   // }

  
    //if(damage < 10)
  //{
    //wall.shapeColor = color(0, 255, 0);
  //}

//}


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
  
  if (hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if(damage > 10)
      {
        wall.shapeColor = color(255, 0, 0); 
      
      }

      if(damage < 10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  
    }
  
  }





