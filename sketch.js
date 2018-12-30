

var angle = 0;

//let bubble;

function setup() {
  createCanvas(400, 400);
	background(220);
	bubble1 =  new Bubble(100,100);
	bubble2 =  new Bubble(200,200,100);
  print("bb1",bubble1.x, bubble1.y, bubble1.r);
	print("bb2",bubble2.x, bubble2.y, bubble2.r);
}

function draw() {
  background(0);
	
	//rect(100,100,100,100)
	//rectMode(CENTER)
	//var x = map(cos(angle),-1,1,0,width);
	//var y = map(sin(angle),-1,1,0,height);
	//line(200,200,x,y);
	//ellipse(x,y,20,20);
	//angle+=0.02;
	
	
	bubble1.show();
	bubble1.move();
	
	bubble2.show();
	bubble2.move();
}

class Bubble{
	constructor(x,y, r = 50){
		this.x = x;
    this.y = y;
    this.r = r;
		//this.brightness = 0;
		
		//setGradient(50, 90, 540, 80, c1, c2, Y_AXIS);
  	//setGradient(50, 190, 540, 80, c2, c1, X_AXIS);
	}	
	
	move(){
			this.x = this.x + random(5,-5);
			this.y = this.y + random(5,-5);
	}
	
	show(){
		stroke(255);
		strokeWeight(4);
		//noFill(6);
		fill(150);

		print(dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y)); // dist(x1,y1,x2,y2)

		if(dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y) <= 100){
			fill(255);
		}
		ellipse(this.x,this.y,this.r,this.r);
	}
}
