var bg;
var yay;
var yayImage
var cloud
var cloudimg
var claudsgroup
var bonk
var bonkimg
var edges;
var score = 0;
var gameState = "play"
var bgSound;
function preload(){

  yayImage = loadAnimation("yay.png","nay.png");
  cloudimg = loadImage("cloud1.png");
  bonkimg = loadImage("bonkiboi.png")
  bgSound = loadSound("439517_bew_dew_dew_dew_finished.mp3")
}
function setup() 
{
  createCanvas(1000,800);
  yay = createSprite(100,300,40,50)
  yay.addAnimation("yay",yayImage)
  yay.scale=0.5
  claudsgroup=new Group()
  bonksGroup = new Group()
  edges = createEdgeSprites();
  
}

function draw() 
{
  background("skyblue");
  bgSound.play()
  bgSound.setVolume(0.4)

  if(gameState == "play"){
    if(keyDown("d")){
      yay.x=yay.x+8
     }
     if(keyDown("a")){
      yay.x=yay.x-8
     }
     if(keyDown("SPACE")){
      yay.velocityY=yay.velocityY-4;
    
     }
      yay.velocityY=yay.velocityY+0.8;
      yay.displace(claudsgroup);
      yay.collide(edges);
      spawnPlanes()
      spawnClouds()
      textSize(50)
      fill("#EA1274")
      text("Score : " + score ,400,50)

      if(claudsgroup.collide(yay)){
        //console.log("touching ")
        score = score+1
        
      }
    
      if(bonksGroup.collide(yay)){
        //console.log("")
        gameState ="over"
        
      }
      console.log(gameState)

  }
  
  drawSprites()

  if(gameState =="over"){
    textSize(150)
    fill("#EA1274")
    text("GAME OVER ALRIGHT YAAAYY : ",0,500)
  }

  

}

function spawnPlanes(){
  if(frameCount%60==0){

  bonk = createSprite(1200,300,40,50)
  bonk.y=Math.round(random(30, 750))
  bonk.addAnimation("bonk",bonkimg)
  bonk.scale=0.4
  bonk.debug=true
  bonk.velocityX=-7
  bonk.depth=yay.depth
  //yay.depth=yay.depth+1
   bonk.lifetime=1000/7   
   bonk.depth=bonk.depth+1  
                                                      //:)
 // claudsgroup.add(cloud)
 bonksGroup.add(bonk)
  }
  

}

function spawnClouds(){
  if(frameCount%35==0){

    cloud = createSprite(1200,300,40,50)
    cloud.y=Math.round(random(30, 750))
  cloud.addAnimation("cloud",cloudimg)
  cloud.scale=0.3
  cloud.debug=true
  cloud.velocityX=-7
  cloud.depth=yay.depth
  yay.depth=yay.depth+1
  cloud.lifetime=1000/7                                                          //:)
  claudsgroup.add(cloud)
  }
  

}