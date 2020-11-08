var car,wall,thickness;
var speed,weight;

function setup() {
  //creating canvas
  createCanvas(1600,400);

  //random values for the speed and weight
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  //car sprite creation 
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);

  //velocity of the sprite
  car.velocityX=speed;
}

function draw() {
  //background
  background(255,255,255);

  //detecting the collision
  if(collided(bullet,wall)){
    bullet.velocityX=0;
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  }
  //drawing the sprites
  drawSprites();
}

function collided(bullet1,wall1){
  bulletRightEdge=bullet1.x+bullet1.width;
  wallLeftEdge=wall1.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}