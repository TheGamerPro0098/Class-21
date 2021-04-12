
var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600, 200, 50, 50);

  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";

  myRect=createSprite(100, 200, 50, 50);

  myRect.shapeColor="green";

}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


if(isTouching(myRect,movingRect)){
    myRect.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  myRect.shapeColor="green";
  movingRect.shapeColor="green";
}

  
  drawSprites();
}


// var fixedRect, movingRect;

// function setup() {
//   createCanvas(1200,800);
//   fixedRect = createSprite(400, 100, 50, 80);
//   fixedRect.shapeColor = "green";
//   fixedRect.debug = true;
//   movingRect = createSprite(400, 800,80,30);
//   movingRect.shapeColor = "green";
//   movingRect.debug = true;

//   movingRect.velocityY = -5;
//   fixedRect.velocityY = +5;
// }

// function draw() {
//   background(0,0,0);  

//   bounceOff(movingRect,fixedRect);
//   drawSprites();
// }



