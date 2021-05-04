//Create variables here
var dog,happydog;
var foodS,foodStock;
var database;
var position;
var Num = 20
var dog1;


function preload()
{
  //load images here
  dogIMG = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800,800);

  database = firebase.database();
  
  dog = createSprite(600,400,10,10);
  dog.addImage(dogIMG);
  //dog.addImage(dogImg1)
  dog.scale = 0.4;

  dogo= database.ref('Food');
  dogo.on("value", readStock );
  
}


function draw() {  
  background(46,139,87)

  drawSprites();
  //add styles here

  if(keyWentDown(UP_ARROW))
  {
    writeposition(position);
    dog.addImage(dogImg1);
    Num = Num-1;
  }
  textSize(20);
  textFont("Courier New");
  fill(255);
  stroke(255);
  text("Food Remaining :" + Num, 200,200 );
  text("Press Up_Arrow To Feed your Pet", 130,100 )
  
 
if(Num == 0){
  
  
   fill(255);
   stroke(255);
   text("oh no! the stock is finished.",165,150);
   dog.changeImage(dogImg1);
}



}

function readStock(data){
  position = data.val();
}


function writeposition(data){
   if(data<=0){
     data=0}
     else{
       data = data-1
     }
   database.ref('/').update;({
      'Food': data
  })  
}

