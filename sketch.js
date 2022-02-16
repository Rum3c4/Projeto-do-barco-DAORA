
var ship, sea , shipIMG, seaIMG


//carregar as animações
function preload(){
 seaIMG = loadImage("sea.png");
  shipIMG = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(600,600);

  //criando os sprites
  sea = createSprite(0, 100, 100, 100);
  sea.addImage(seaIMG)
  sea.velocityX = -5
  ship = createSprite(140, 250, 150, 150);
  ship.scale = 0.4
  ship.addAnimation("sailing", shipIMG)  
}

function draw() {
  background("white") 
  drawSprites();

  if (sea.x < 0){
  sea.x = sea.width/2;
}
}