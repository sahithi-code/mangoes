class Mango{

    constructor(x,y,r){
    var options={
isStatic:true,
restitution:0,
friction:1}

    this.x=x;
    this.y=y;
   this.r=r
  
   this.body=Bodies.circle(this.x,this.y,this.r,options)
  this.body.scale=0.05
    this.image=loadImage("Plucking mangoes/mango.png")
 World.add(world,this.body)
    }
    display(){
    var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			//rectMode(CENTER)
			//strokeWeight(4);
			//fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r)
			//ellipse(0,0,this.r, this.r);
			pop()
}}