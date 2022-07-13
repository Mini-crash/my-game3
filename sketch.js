var bgimg,bg
var bowlimg,bowl
var score,lives
var ingredients,noodles,egg,seaweed
var obs,pepper,hs
var rewg,obsg





function preload(){

  bg = loadImage("bg.jpeg")
  bowl = loadImage("bowl.png")
  noodles = loadImage("noodles.png")
  egg = loadImage("egg.png")
  seaweed = loadImage("seaweed.png")
  pepper = loadImage("peper.png")
  hs = loadImage("hot sauce.png")
}
function setup(){

  createCanvas(1300,900)

  bgimg = createSprite(500,300,1000,1000);
  bgimg.addImage("ground",bg);
  bgimg.scale = 1.2
  bowlimg = createSprite(500,800,20,20);
  bowlimg.addImage("bowl",bowl);
  bowlimg.debug = true
  bowlimg.setCollider("rectangle",0,0,150,150)
  
  obsg = new Group()
  rewg = new Group()
  score = 0
  lives = 3
}



 



  

function draw(){
  background(0)
  spawnreward()
  spawnobs()

  for(var i = 0;i<rewg.length;i++){
    if(bowlimg.isTouching(rewg[i])){
      score = score + 10
       rewg[i].destroy()
    }  
  }
  for(var i = 0;i<obsg.length;i++){
    if(bowlimg.isTouching(obsg[i])){
      lives = lives - 1
      score = score - 10
       obsg[i].destroy()
    }  
  }

  bowlimg.x = mouseX
  drawSprites()
  textSize(40)
  fill("yellow")
  text("Score: " + score, 500,100)
  text("lives: " + lives, 700,100)
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY)

}
function spawnreward(){
     if (frameCount % 100 === 0) {
     ingredients = createSprite(random(100, 1000), 0, 100, 100);
     ingredients.velocityY = 35;
     ingredients.setCollider("rectangle",0,0,60,60)
     var rand = Math.round(random(1,3));
     switch(rand){
         case 1: ingredients.addImage("noodles",noodles);
         break;
         case 2: ingredients.addImage("egg", egg);
         break;
         case 3: ingredients.addImage("seaweed", seaweed);
         break;
     }
      rewg.add(ingredients)
    }

}
function spawnobs(){
  if (frameCount % 150 === 0) {
  obs = createSprite(random(100, 1000), 0, 100, 100);
  obs.velocityY = 35;
  obs.setCollider("rectangle",0,0,60,60)
  var rand = Math.round(random(1,2));
  switch(rand){
      case 1: obs.addImage("hs",hs);
      obs.setCollider("rectangle",0,0,60,200)
      obs.debug = true 
      break;
      case 2: obs.addImage("pepper", pepper);
      break;

  }
  obsg.add(obs)
 }
}