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
    }
    play(){
        form.hide();
        textSize(15);
        text("GAME START",120,100);
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            var y = 130;
            for(var i in allPlayers){
                if(i==="player"+player.index){
                    fill("red");
                    
                }
                else
                fill("black");
                y=y+50;
                textSize(15);
                text(allPlayers[i].name+": "+allPlayers[i].distance,120,y);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index!==null){
            player.distance=player.distance+50
            player.update();
        }
    }
}