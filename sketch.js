var rect1, rect2;



function setup() {
  createCanvas(800,400);
  rect=createSprite(400, 200, 50, 50);
  rect2=createSprite(400,400,80,40);
rect1.shapeColor="blue";
rect2.shapeColor="red";
rect1.debug=true;
rect2.debug=true;

}

function draw() {
  background(255,255,255);
  rect2.x=mouseX;
  rect2.y=mouseY;  

  if(rect2.x-rect1.x<rect2.width/2+rect1.width/2 && rect1.x-rect2.x<rect2.widht/2+rect1.width/2 && rect1.y-rect2.y<rect1.height/2+rect2.height/2 && rect2.y-rect1.y<rect2.height/2+rect1.height/2){
   rect2.shapeColor="yellow";
  } else {
    rect2.shapeColor="red";
  }
  drawSprites();
}