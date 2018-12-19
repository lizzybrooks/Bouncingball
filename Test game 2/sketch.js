
let platforms = [];

//create a variable to hold your Ball
let me;




function setup() {
  createCanvas(700, 500);
  me = new Ball(50, 50, 3, .5);

for (let i= 0; i<6; i++){
  let p = new Platform(random(100,700),random(300,450));
  platforms.push(p);
  print(platforms);

  }
}


function draw(){
	background(220);

  me.drawMe();
  me.moveMe();
  me.bounceBall();


  for (let i = 0; i<platforms.length; i++){
    platforms[i].drawPlatform();
    stroke(0);
    strokeWeight(1);
    fill(0);
    textSize(30);
    text(i,platforms[i].x+20, platforms[i].y-10);

  }

}

//Ball class
class Ball {

	constructor(x,y, speed, drop){ //every Ball needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
        this.drop = drop;
	}

	drawMe(){  // draw the moving ball
    		stroke("blue");
        strokeWeight(3);
    		fill("blue");
		    ellipse(this.x,this.y,10,10);

	}

	moveMe(){

    if (keyIsDown(RIGHT_ARROW)) {
       this.x += this.speed;
    }

    if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
    }
  }


//  if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  bounceBall(){

    for (let i = 0; i<platforms.length; i++){
          if (this.x >= platforms[i].x-20 && this.x <= platforms[i].x+20 && this.y >= platforms[i].y-5 && this.y <= platforms[i].y+5){
            this.drop =-this.drop;
            this.y = this.y+this.drop;
            print("hit platform "+i+" and switched direction to "+this.drop);
          }

         else if (this.y <= 40 ){
               this.drop =-this.drop;
               this.y = this.y+this.drop;
          }
        else {
          	this.y = this.y+this.drop;

    }
  }
  }

}

  class Platform {
    constructor(x,y){
  		    this.x = x;
      		this.y = y;
        }

   drawPlatform (){
    stroke("black");
    strokeWeight(10);
    line(this.x, this.y,this.x+40, this.y);
  }


}
