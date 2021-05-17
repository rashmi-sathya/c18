function Ball(tempX, tempY, tempW) {
  this.x = tempX;  
  this.y = tempY;   
  this.w = tempW;  
  this.speed = 0;  

  this.display = function() {
    fill(255,100); 
    stroke(0); 
    ellipse(this.x,this.y,this.w,this.w); 
  }

  this.update = function() {   
    this.y = this.y + this.speed;    
    this.speed = this.speed + gravity; 

    if (this.y > height) { 
      this.y = height;
      this.speed = this.speed * -0.95;  
    } 
  }
}
