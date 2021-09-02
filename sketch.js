var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor= "green";
  fixedRect.debug= true;

  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor= "green";
  movingRect.debug= true;
}

function draw() {
  background("pink");

  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2) 
  {
    movingRect.shapeColor= "red";
    fixedRect.shapeColor= "red";
  }
  else
  {
    movingRect.shapeColor= "green";
    fixedRect.shapeColor= "green";
  }

  //console.log(movingRect.x - fixedRect.x);
  
  drawSprites();
}