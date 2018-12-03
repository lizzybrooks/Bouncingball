//create an empty array called balls
let balls = [];
let platforms = [];

//create a variable to hold your Ball
let me;
let oneplatform;
let twoplatform;
let threeplatform;



function setup() {
  createCanvas(1280, 500);
  me = new Ball(50, 50, 3);

for (let i= 0; i<4; i++){
  let p = new Platform(random(100,800),random(300,450));
  platforms.push(p);
  print(platforms);

}
  // oneplatform = new Platform (100, 300);
  // twoplatform = new Platform (400, 390);
  // threeplatform = new Platform (800, 450);

}


function draw(){
	background(220);

//make one Ball called me


  me.drawMe();
  me.moveMe();
  me.bounceBall();


  // oneplatform.drawPlatform();
  // twoplatform.drawPlatform();
  // threeplatform.drawPlatform();

  for (let i = 0; i<platforms.length; i++){
    platforms[i].drawPlatform();
  }

}
for (let i = 0; i < balls.length; i++) {
        balls[i].bounceBall();


  }

// make the paddle and attach it to the mouse
// function paddle(){
//   stroke("black");
//   strokeWeight(10);
//   line(mouseX-20,mouseY,mouseX+20,mouseY);
// }

//Ball class
class Ball {

	constructor(x,y, speed){ //every Ball needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the moving ball
    		stroke("blue");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,10,10);

	}



	moveMe(){
    	this.y = this.y+this.speed;

    if (keyIsDown(RIGHT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x -= this.speed;
    }
  }


  //if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  bounceBall(){

    for (let i = 0; i<platforms.length; i++){


    if (this.x >= platforms[i].x-20 && this.x <= platforms[i].x+20 && this.y > platforms[i].y-5 && this.y < platforms[i].x+5){
      this.speed =-this.speed;
      }

    else if (this.y < 40 ){
      this.speed =-this.speed;
    }
    else {

    }
  }
  }

}

  class Platform {
    constructor(x,y){ //every Ball needs an x value, a y value, and a speed
  		    this.x = x;
      		this.y = y;
        }

   drawPlatform (){
    stroke("black");
    strokeWeight(10);
    line(this.x, this.y,this.x+40, this.y);
  }

    // bounceOff(){
    //   if (this.x >= platforms && this.x <= platforms && this.y - platforms && this.y + platforms);
    //     this.speed=-this.speed;
    // }




}
