
    class Stone {
        constructor(x,y){
            var options={
               isStatic:true
               //  restitution:0,
               // friction:1,
                //density:1.2,
               
            }  
            this.x=x
        this.y=y
        this.width=30
        this.height=30

       
         this.body=Bodies.rectangle(x,y,width,height,options)
        this.body.scale=0.5
         this.image= loadImage("Plucking mangoes/stone.png")
         
        World.add(world,this.body)
       
        }
        display(){
            
            translate(this.body.position.x, this.body.position.y);
          
            fill("black")
        imageMode(CENTER)
        image(this.image, 0, 0,this.width,this.height);
        }
        }