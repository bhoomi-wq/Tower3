class GreenBox {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        this.Visiblity = 255;
        this.remove = true;
        World.add(world, this.body);
    }

    display() {
     //NameSpacing(renaming position of Ground)
        var pos = this.body.position;
        push();
        if(this.body.speed < 3){
            strokeWeight(2);
            fill("green");
            rect(pos.x, pos.y, this.width, this.height);
            pop();
     
        }
         else{
         World.remove(world, this.body);
         if(this.remove === true){
            score = score+50;
            this.remove = false;
           }
         push();
         this.Visiblity=this.Visiblity-5;
         tint(255,this.Visiblity);
         pop();
        }      
     }
     score() {
        if(this.Visibility < 0 && this.Visibility > -105){
            score = score ++;
        
      }     
  }

    }
