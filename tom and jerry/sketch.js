

var engine, world, dustbin, paper;
var gameState = 0


function preload(){
	tomImage = loadImage("tom running.jpg")
	jerryImage = loadImage("Jerry Running.png")
	tableImage = loadImage("table image.jpg")
}

function setup(){
createCanvas(displayWidth,displayHeight);
rectMode(CENTER);




table = createSprite(0,displayHeight-100,displayWidth*10,100)
table.velocityX = -10
tom = createSprite(500,displayHeight-200)
jerry = createSprite(300,displayHeight-200)
table.visible = false
tom.visible = false
jerry.visible = false

//tom.addImage(tomImage)
//jerry.addImage(jerryImage)
//table.addImage(tableImage)

	
}

function draw() {
	if(gameState === 1){

	
	background("black")
	if(keyDown("RIGHT")){
		jerry.x=jerry.x+11
	}
	if(keyDown("SPACE")){
		jerry.velocityY=-10

	}
	jerry.velocityY = jerry.velocityY+0.5
	jerry.collide(table)

	if(table.x<0){
		table.x = displayWidth/2
	}
	camera.position.x = jerry.x
	tom.visible = true
	jerry.visible = true
	table.visible = true
	
	tom.x = jerry.x-150
	



	}
if(gameState === 0){
	background("cyan")
	textSize(15)
	text("Press SPACE to start the game",displayWidth/2,200)
	text("press space to make jerry jump",displayWidth/2,300)
	text("press right arrow to move jerry",displayWidth/2,500)
	
if(keyDown("SPACE")){
	gameState = 1
	fill("cyan")

	
}

	

}
drawSprites()
}


	


	
	





	
	






