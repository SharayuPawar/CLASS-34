class Ball {
    constructor(x, y, width, height) {
      var options = {
          density:1,
          frictionAir:0.005

      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage('Images/ball.png')
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width,this.height)
     
    }
  };