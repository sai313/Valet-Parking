//Create a reference for canvas
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

//Give specific height and width to the car image
var greencar_width = 75;
var greencar_height = 125;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
var green_x = 75;
var green_y = 270;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag=new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;
	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag,green_x,green_y,greencar_width,greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function left() {
    if(green_x>=0){
        green_x=green_x-10;
        console.log("when left arrow is pressed x= "+green_x+" y= "+green_y);
        uploadBackground();
        uploadgreencar();
    }
}
function right() {
    if(green_x<=700){
        green_x=green_x+10;
        console.log("When right arrow is pressed x= "+green_x+" y= "+green_y);
        uploadBackground();
        uploadgreencar();
    }
}
function up() {
    if(green_y>=0){
        green_y=green_y-10;
        console.log("when up arrow is pressed x= "+green_x+" y= "+green_y);
        uploadBackground();
        uploadgreencar();
    }
}
function down() {
    if(green_y<=350){
        green_y=green_y+10;
        console.log("when down arrow is pressed x= "+green_x+" y= "+green_y);
        uploadBackground();
        uploadgreencar();
    }
}