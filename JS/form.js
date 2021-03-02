class Form{
    constructor(){
         this.input=createInput("name");
         this.button=createButton("start");
         this.greeting=createElement("h3");
         this.restartButton=createButton("restart");
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement("h2");
        title.html("Car Racing Game");
        title.position((displayWidth/2)-100,0);
        
        this.input.position(displayWidth/2-100,displayHeight/2-100);
        this.button.position(displayWidth/2-100,displayHeight/2);
        this.restartButton.position(50,50);

         this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Welcome!"+" "+player.name);
            this.greeting.position(displayWidth/2-100,displayHeight/2-100);
        })
        this.restartButton.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            location.reload();
        })
    }
}
