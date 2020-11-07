class Sprite{
    constructor(a,b,c,d){
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;
        this.shapeColor = "grey";
        this.velocityX = 0;
        this.velocityY = 0;
    }

    display(){
        this.x = this.x+this.velocityX;
        this.y = this.y+this.velocityY;
        fill(this.shapeColor);
        ellipse(this.x,this.y,this.width,this.height);
    }

    isTouching(target){
        if (this.x - target.x <= (target.width + this.width)/2 && target.x - this.x <= (target.width + this.width)/2 &&
        this.y - target.y <= (target.height + this.height)/2 && target.y - this.y <= (target.height + this.height)/2) {
            return true;
        }
            else{
            return false;
        }
    }

    bounceOff(target){
        if (this.x - target.x <= (target.width + this.width)/2 && target.x - this.x <= (target.width + this.width)/2 &&
        this.y - target.y <= (target.height + this.height)/2 && target.y - this.y <= (target.height + this.height)/2){
            this.velocityX = this.velocityX *-1;
            this.velocityY = this.velocityY *-1;
            target.velocityX = target.velocityX *-1;
            target.velocityY = target.velocityY *-1;
        }
    }

}