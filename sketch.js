//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;
var dogImage;
function preload()
{
  dogImage=loadImage('images/Dog.png')
  happyDog=loadImage('images/happydog.png')

  
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300);
  dog.addImage(dogImage);
  dog.scale = 0.15;

  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
    
  }
  drawSprites();
  fill ("white");
  textSize(18);
  text("Food Remaining : "+foodS,170,100);
  text("Press on UP arrow to Feed the dog ",110,150);
  
}

function readStock(data){
  foodS=data.val();
}
 
function writeStock(x) {
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food : x
  });

}



// if(foodS == 0){
//   Dog.addImage(happyDog);
//   milkBottle2.visible=false;
// }else{
//   dog.addImage(sadDog);
//   milkbottle2.visible=true; 



//   if(gamestate===1){


//     dog.addImage(happyDog);
//     dog.scale=0.175;
//     dog.y250;
//   }


// }
 
  //add styles h


