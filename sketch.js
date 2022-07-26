var backgroundImg
var bp1,bp2,bp3
var mp1, mp2, mp3
var tp1,tp2, tp3
var v1, v2, v3, v4, v5, v6, v7, v8, v9;

function preload(){
  backgroundImg = loadImage("Background.jpeg");
  bp1= loadImage("botton piece 1.jpeg");
  bp2= loadImage("bottom piece 2.jpeg");
  bp3= loadImage("bottom piece 3.jpeg");

  mp1= loadImage("Middle piece 1.jpeg");
  mp2= loadImage("Middle Piece 2.jpeg");
  mp3= loadImage("middle piece 3.jpeg");

  tp1= loadImage("top peice 1.jpeg");
  tp2= loadImage("top piece 2.jpeg");
  tp3= loadImage("top piece 3.jpeg");
}




function setup() {
  createCanvas(windowWidth,windowHeight);
  
  v1= createSprite(130,200,200,200);
  v1.shapeColor = "pink";  
  v1.addImage(tp1);
  v1.scale=0.43
  
  v2= createSprite(350,200,200,200);
  v2.shapeColor = "lightblue";
  v2.addImage(tp2);
  v2.scale=0.43
 
  v3= createSprite(570,200,200,200);
  v3.shapeColor = "pink";
  v3.addImage(tp3);
  v3.scale=0.43
  
  v4= createSprite(130,410,200,200);
  v4.shapeColor = "lightblue";
  v4.addImage(mp1);
  v4.scale=0.43
  
  v5= createSprite(350,410,200,200);
  v5.shapeColor = "lightgreen";
  v5.addImage(mp2);
  v5.scale=0.43
  
  v6= createSprite(570,410,200,200);
  v6.shapeColor = "lightblue";
  v6.addImage(mp3);
  v6.scale=0.43
  
  v7= createSprite(130,620,200,200);
  v7.shapeColor = "lightgreen";
  v7.addImage(bp1);
  v7.scale=0.43
  
  v8= createSprite(350,620,200,200);
  v8.shapeColor = "pink";
  v8.addImage(bp2);
  v8.scale=0.43
  
  v9= createSprite(570,620,200,200);
  v9.shapeColor = "lightgreen";
  v9.addImage(bp3);
  v9.scale=0.43
  //hmmmmm...
  
}

function draw() {
  background(backgroundImg);  
//if(keyDown("space")){
//  v1.addImage(tp1);
//}

  drawSprites();
  
  fill("white")
  textSize(50);
  text("1",130,200);
  textSize(50);
  text("2",350,200);
  textSize(50);
  text("3",570,200);
  textSize(50);
  text("4",130,410);
  textSize(50);
  text("5",350,410);
  textSize(50);
  text("6",570,410);
  textSize(50);
  text("7",130,620);
  textSize(50);
  text("8",350,620);
  textSize(50);
  text("9",570,620);

}