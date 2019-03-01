var can;
var obj;
var diameter = 300;

function setup(){
	can = createCanvas(windowWidth, windowHeight);
	obj = new Mover(10, width/2, height/2);
}

function draw(){
	background(255);
	obj.display();
	if(status == 1){
		var gravity = createVector(0, 1 * obj.mass);
	    // Apply gravity
	    obj.applyForce(gravity);

	    // Update and display
	    obj.update();
	    
    	obj.checkEdges();
	}
}


function Mover(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

Mover.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force, 2*this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function() {
  // Velocity changes according to acceleration
  this.velocity.add(this.acceleration);
  // position changes by velocity
  this.position.add(this.velocity);
  // We must clear acceleration each frame
  this.acceleration.mult(0);
};

Mover.prototype.display = function() {
  noStroke();
  fill(0,0,255);
  ellipse(this.position.x, this.position.y, diameter, diameter, 50);
};

// Bounce off bottom of window
Mover.prototype.checkEdges = function() {
  if (this.position.y > (height - diameter/2)) {
    // A little dampening when hitting the bottom
    this.velocity.y *= -0.6;
    this.position.y = (height - diameter/2);
  }
};