class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=db.ref("gameState");
        gameStateRef.on("value",function (data){
            gameState=data.val();
        })
    }
    update(state){
        db.ref("/").update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){

            player = new Player();
            var playerCountRef=await db.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getPlayerCount();

            }
            
            form=new Form();
            form.display();
        }
        car1 = createSprite(100,200,50,70);
        car1.addImage(car1img);
        
        car2 = createSprite(300,200,50,70);
        car2.addImage(car2img);

        car3 = createSprite(500,200,50,70);
        car3.addImage(car3img);

        car4 = createSprite(700,200,50,70);
        car4.addImage(car4img);

        cars=[car1,car2,car3,car4];

    }
    play(){
        form.hide();
        
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if(allPlayers!==undefined){
            background(groundImg);
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var y = 0;
            var index=0;
            var x=200;
            for(var i in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[i].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                textSize(15);
                fill("blue");
               
                if(index===player.index){
                    
                   camera.position.x=displayWidth/2;
                   camera.position.y=cars[index-1].y;
                   textSize(20);
                    fill("red");
                }
                text(allPlayers[i].name,x-30,y-50);

            }

        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance=player.distance+50
            player.update();
        }
        if(player.distance>displayHeight*5){
            gameState=2;
            player.rank=player.rank+1;
            Player.updateCarsAtEnd(player.rank);
        }
        drawSprites();

    }
    end(){
        console.log("game ended");
        console.log(player.rank);
    }
}