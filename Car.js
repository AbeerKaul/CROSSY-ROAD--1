class Car{
   constructor(speed){
        this.x = random([100,210,320,440,550,660,770,880,990,1100,1210]);
        this.y = height-random([150,250,350,950,1050,1150,1750,1850,1950]);
        this.spt = createSprite(this.x,this.y);
        this.spt.shapeColor = "blue";
        this.spt.scale=0.5;

        speed=-4;
        this.spt.velocityX = speed;
    }
   
}


