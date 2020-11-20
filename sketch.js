var mr 
var fr
function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 50, 50);
  fr=createSprite(300,200,60,30);
  mr.shapeColor="orange";
  fr.shapeColor="yellow";
}

function draw() {
  background(255,255,255); 
  mr.x=mouseX;
  mr.y=mouseY;
  if(mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<mr.width/2+fr.width/2&&mr.y-fr.y<mr.width/2+fr.width/2&&fr.y-mr.y<mr.width/2+fr.width/2){
    mr.shapeColor="lightblue";
    fr.shapeColor="lightblue";
  }
  else {
    mr.shapeColor="orange";
    fr.shapeColor="yellow";
  }

  drawSprites();
}