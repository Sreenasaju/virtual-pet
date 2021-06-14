//Create variables here

function preload()
{
	//load images here
}

function setup() {
	createCanvas(800, 700);
 
}


function draw() {  
 backgroud("yellow")

foodObg.display();
writestock(foodS);

if(foodS == 0){
  Dog.addImage(happyDog);
  milkBottle2.visible=false;
}else{
  dog.addImage(sadDog);
  milkbottle2.visible=true; 



  if(gamestate===1){


    dog.addImage(happyDog);
    dog.scale=0.175;
    dog.y250;
  }


}





  drawSprites();
  //add styles here

}



